// Empydom: a Python-DOM bridge
// version 0.2 ALPHA
//
// ==UserScript==
// @name Empydom
// @description A Python-DOM bridge
// @include *
// ==/UserScript==

(function() {
    
    var wantsEmpythoned = function() {
        return document.getElementById('give_me_empydom_please') !== null
    };

    if (!wantsEmpythoned()) {
        console.log("You don't want Empythoned");
        return;   
    }

    console.log("Greasemonkey runs");

    var exec = function(fn) {
        var script = document.createElement('script');
        script.setAttribute("type", "application/javascript");
        script.textContent = '(' + fn + ')();';
        document.body.appendChild(script); // run the script
        document.body.removeChild(script); // clean up
    };

    exec(function() {
        window.empydom =
&&&^^^&&&JS_EMPYDOM
        var loadEmpythoned = function() {
&&&^^^&&&PYTHON_OPT_JS
        };
        loadEmpythoned();
        window.onEmpydomReady();
    });
})();

