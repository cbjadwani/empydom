
(function() {
  // var window = unsafeWindow;

  window.empydom =
&&&^^^&&&JS_EMPYDOM

  var loadEmpythoned = function() {
  &&&^^^&&&PYTHON_OPT_JS
  };

  var wantsEmpythoned = function() {
    return document.getElementById('give_me_empydom_please') !== null
  };

  window.onload = function () {
    loadEmpythoned();
    window.Python = Python;
    window.onEmpydomReady && window.onEmpydomReady();
  };
})();

