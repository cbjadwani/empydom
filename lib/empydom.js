// empydom.js
// This is the JavaScript side of the empydom DOM bridge

(function() {

  // the charBuffer is a buffer until a newline character from Python
  var charBuffer = ""

  var fixSpacing = function(code) {
    var spaces = 0;
    for (var i = 0; i < code.length; i++) {
      if (code.charAt(i) == '\n') {
        spaces = 0;
      }
      else if (code.charAt(i) == ' ') {
        spaces += 1;
      }
      else {
          break;
      }
    }

    var lines = code.split("\n");
    for (var i = 0; i < lines.length; i++) {
      lines[i] = lines[i].substr(spaces);
    }
    return lines.join("\n");
  };

  var _jsobj_refs = {
    "window": window,
    "undefined": undefined,
    "error": ""
  };
  function get_guid () {
    // From http://stackoverflow.com/a/2117523
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == "x" ? r : (r&0x3|0x8);
        return v.toString(16);
    });
  }
  function _to_python(value, fn_parent_ref) {
    if (value === undefined)
      return "undefined";
    if (value === null)
      return "None";
    if (value === true || value === false)
      return value ? "True" : "False";
    if (typeof value === "string" || value instanceof String || typeof value === "number" || value instanceof Number)
      return JSON.stringify(value);
    /*
    if  (value instanceof Array) {
        var _to_py_array = value.map(_to_python);
        return "[" + _to_py_array.join(",") + "]";
    }
    if (value instanceof Object && Object.getPrototypeOf(value) === Object.prototype) {
      var retval = "{";
      var first_loop = true;
      for (var key in value) {
        if (!first_loop)
            retval = retval + ",";
        else
            first_loop = false;
        retval = retval + JSON.stringify(key) + ":" + _to_python(value[key]);
      }
      retval = retval + "}";
      return retval;
    }
    */
    // return a reference of items for which we can not convert to native Python object
    var guid = get_guid();
    console.log("parent ref:" + fn_parent_ref);
    if (typeof _jsobj_refs[fn_parent_ref] !== "undefined" && typeof value === "function") {
      console.log("Binding: " + value.name + " to " + fn_parent_ref);
      value = value.bind(_jsobj_refs[fn_parent_ref]);
    }
    _jsobj_refs[guid] = value;
    return "JSObj(" + JSON.stringify(guid) +")";
  }

  var module = {
    //if Python is not initialized than use default chrToFunc
    //if chrToFunc !== undefined then we assume you want to initialize it in here
    'executePythonScripts': function(chrToFunc) {
      if (chrToFunc === undefined && !Python.isInitialized) {
        chrToFunc = function(chr) {
          if (chr !== null) {
            realChar = String.fromCharCode(chr);
            charBuffer += realChar;
            if (realChar == '\n') {
              console.log(charBuffer);
              charBuffer = "";
            }
          }
        };
      }

      if (chrToFunc !== undefined) {
        Python.initialize(null, chrToFunc);
      }

      //from https://developer.mozilla.org/En/Using_web_workers
      Array.prototype.forEach.call(
        document.querySelectorAll("script[type=\"text\/python\"]"),
          function(scriptTag) {
            var pycode = scriptTag.innerHTML;
            Python.eval(fixSpacing(pycode));
          }
      );

    },
    '_jsobj_refs': _jsobj_refs,
    '_to_python': _to_python,
    'create_python_func_caller': function (name) {
        return (function () {
          var to_py_args = Array.prototype.map.call(arguments, _to_python);
          var py_retval = Python.eval(name + "(" + to_py_args.join(",") + ")")
          var retval;
          try { retval = eval(py_retval); } catch (e) {};
          return retval;
        });
    },
    'create_python_proxy': function(py_name, attr_array) {
      var o = {};
      var get_full_name = function (basename, attrname) {
          return basename + (basename ? '.' : '') + attrname;
      }
      attr_array.forEach(function (attr_name) {
        Object.defineProperty(o, attr_name, {
          'get': function () {
            var py_script = 'get_js_val("' + get_full_name(py_name, attr_name) + '")';
            return eval(eval(Python.eval(py_script)));
          },
          'set': function (value) {
            var to_py = window.empydom._to_python(value);
            var py_script = get_full_name(py_name, attr_name) + ' = ' + to_py;
            Python.eval(py_script);
          }
        });
      });
      return o;
    }
  };
  return module;

})();

