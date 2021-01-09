var engine = new XMLHttpRequest;

engine.open('GET', document.getElementById('enginejs').getAttribute('path'), false);

engine.onload = function () {
    var script = engine.responseText;
		script = script.replace(/\bLeaderboard/, 'if (0)'); //ZOOM
    eval(script);
};
engine.send();