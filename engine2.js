// window.core_js = new Hack();

var engine = new XMLHttpRequest;

engine.open('GET', document.getElementById('enginejs').getAttribute('path'), false);

engine.onload = function () {
    var script = engine.responseText;
		script = script.replace(/\bLeaderboard/, 'if (0)'); //ZOOM
    eval(script);
};
engine.send();


// https://cdn.githubusercontent.com/OldAgario/Agma/master/engine.js
// https://cdn.jsdelivr.net/gh/OldAgario/Agma@master/engine.js



// https://cdn.rawgit.com/OldAgario/Agma/master/ag148.js
// https://cdn.jsdelivr.net/gh/OldAgario/Agma@master/ag148.js