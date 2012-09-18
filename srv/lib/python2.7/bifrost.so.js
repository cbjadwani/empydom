"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var __str;
  var _BifrostMethods;
  var __str2;
  var __str3;
  var __str4;
  // JSObj
  //
  function get_pystr_from_string(string) {
    var c_str = Python.allocateString(string);
    var py_str;
    try {
      py_str = _PyString_FromString(c_str);
    } finally {
      _free(c_str);
    }
    return py_str;
  }
  //
  function _run($self, $args) {
    var $debug = true;
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    var retval;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:

      var $script = __stackBase__ + 4;

      HEAP[__stackBase__] = $self;
      var res = _PyArg_ParseTuple($args, __str, allocate([ $script, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));

      if (res == 0) {
        retval = 0;
        __label__ = 3;
      } else {
        __label__ = 2;
      }
      break;
     case 2:
      var _script = Pointer_stringify(HEAP[$script]);
      var result, error;
      try {
        if ($debug)
          console.log("js: eval " + _script);
        result = eval(_script);
      } catch (error) {
        var to_py = "raise JSError(" + JSON.stringify(error.stack) + ")";
        if ($debug)
          console.log("js: error: " + to_py);
        retval = get_pystr_from_string(to_py);
        __label__ = 3;
        break;
      }
      empydom._jsobj_refs["error"] = "";
      if ($debug)
        console.log("js: result: " + result);
      var rx = /^empydom\._jsobj_refs\[["']([\-a-z0-9]*)['"]\]\[["']([\-A-Za-z0-9]*)['"]];$/;
      var match = _script.match(rx);
      var parent_ref;
      if (match && match[2].charAt() !== match[2].charAt().toUpperCase()) {
        parent_ref = match[1];
      }
      var to_py = "retval = " + empydom._to_python(result, parent_ref);
      if ($debug)
        console.log("py: " + to_py);
      retval = get_pystr_from_string(to_py);
      __label__ = 3;
      break;

     case 3:
      STACKTOP = __stackBase__;
      return retval;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initbifrost() {
    _Py_InitModule4(__str4, _BifrostMethods, 0, 0, 1013);
  }
  Module["_initbifrost"] = _initbifrost;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _run, 0 ]);
  function run(args) {
    __str = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    _BifrostMethods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_NORMAL);
    __str2 = allocate([ 114, 117, 110, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 82, 117, 110, 32, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 98, 105, 102, 114, 111, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_BifrostMethods] = __str2;
    HEAP[_BifrostMethods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_BifrostMethods + 12] = __str3;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
