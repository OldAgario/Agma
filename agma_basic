GM.addStyle(`
/*Custom CSS by Heisenberg*/
* {outline:0;}
#upd {z-index:999;position:absolute;background:rgba(0,0,0, .8);width:400px;min-height:150px;padding:15px;bottom:20px;left:20px;}
#upd h4 {color:white;margin:0 0 15px;}
#upd span:first-of-type {color:yellow;}
#upd span {display:block;}
#upd p {margin:0;text-indent:15px;}
`);

if (GM_info.script.author != 'Heisenberg-(TheOldOne)') {return false;}
if (GM_info.script.name != 'Agma.io BASIC GH') {return false;}

if (GM_getValue("version", "") < GM_info.script.version) {
   GM_setValue("version", GM_info.script.version);
   setTimeout(update, 2000);
}
function update() {
$('<div id="upd"><h4>⚠️ Script update: current version '+GM_info.script.version+'</h4><span>Click here to dismiss this message and check your key input settings!</span>'+
'<span>Changes:</span>'+
'<p>- small fixes</p>'+
'</div>').appendTo('body');
$('#upd').click(function() {$(this).fadeOut();});
}

//CHAT SELECTOR
var c = "";
$('#chtTabs').click(function() {
	setTimeout(function() {c = $('#chtbox').val();}, 100); //; alert(c)
});

//RIGHT CLICK HELLO
$("#contextPlayer").on( 'click', function() {
	if($('#contextPlayerName').text() == '(no player selected)') {
		$('#chtbox').val('Hi everyone!');
		$('body').mousedown();
		enter();enter();
	} else {
		$('#chtbox').val('Hi, '+$('#contextPlayerName').text()+'!');
		$('body').mousedown();
		enter();enter();
	}
});

//KEY PRESS
var down = {};
var spam = false;
$(document).keydown(function(event){
     var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == resp){ // Respawn
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			$("img[title|='Respawn']").click();
		}
			down[keycode] = true;
		}
	}
	if(keycode == shake){ // Shake
		if (down[shake] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			if (!spam) {
				spam = true;
					$('#chtbox').val('shake');enter();enter();
					setTimeout(function() {spam = false;}, 3000)
			} else console.log('Spam!');
		}
			down[shake] = true;
		}
	}
	if(keycode == spin){ // Spin
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			if (!spam) {
				spam = true;
					$('#chtbox').val('spin');enter();enter();
					setTimeout(function() {spam = false;}, 3000)
			} else console.log('Spam!');
		}
			down[keycode] = true;
		}
	}
	if(keycode == flip){ // Flip
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			if (!spam) {
				spam = true;
					$('#chtbox').val('flip');enter();enter();
					setTimeout(function() {spam = false;}, 3000)
			} else console.log('Spam!');
		}
			down[keycode] = true;
		}
	}
	if(keycode == hrs){ // Show Time
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			if (!spam) {
				spam = true;
					$('#chtbox').val('/hours');enter();enter();
					setTimeout(function() {spam = false;}, t)
			} else console.log('Spam!');
		}
			down[keycode] = true;
		}
	}
	if(keycode == lvl){ // Show Level
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			if (!spam) {
				spam = true;
					$('#chtbox').val('/level');enter();enter();
					setTimeout(function() {spam = false;}, t)
			} else console.log('Spam!');
		}
			down[keycode] = true;
		}
	}
	if(keycode == rnk){ // Show Rank
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			if (!spam) {
				spam = true;
					$('#chtbox').val('/rank');enter();enter();
					setTimeout(function() {spam = false;}, t)
			} else console.log('Spam!');
		}
			down[keycode] = true;
		}
	}
	if (keycode == chat1){ // Chat Message 1
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			if (!spam) {
				spam = true;
					$('#chtbox').val('shake');enter();enter();
					setTimeout(function() {$('#chtbox').val(c+msg1);enter();enter();}, 500);
					setTimeout(function() {spam = false;}, t+1000)
			} else console.log('Spam!');
		}
			down[keycode] = true;
		}
	}
	if (keycode == chat2){ // Chat Message 2
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				if (!spam) {
					spam = true;
					$('#chtbox').val(c+msg2);enter();enter();
					setTimeout(function() {spam = false;}, t)
				} else console.log('Spam!');
			}
			down[keycode] = true;
		}
	}
	if (keycode == chat3){ // Chat Message 3
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				if (!spam) {
					spam = true;
					$('#chtbox').val(c+msg3);enter();enter();
					setTimeout(function() {spam = false;}, t)
				} else console.log('Spam!');
			}
			down[keycode] = true;
		}
	}
	if (keycode == chat4){ // Chat Message 4
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				if (!spam) {
					spam = true;
					$('#chtbox').val(c+msg4);enter();enter();
					setTimeout(function() {spam = false;}, t)
				} else console.log('Spam!');
			}
			down[keycode] = true;
		}
	}
	if (keycode == chat5){ // Chat Message 5
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				if (!spam) {
					spam = true;
					$('#chtbox').val(c+msg5);enter();enter();
					setTimeout(function() {spam = false;}, t)
				} else console.log('Spam!');
			}
			down[keycode] = true;
		}
	}
	if (keycode == chat6){ // Chat Message 6
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				if (!spam) {
					spam = true;
					$('#chtbox').val(c+msg6);enter();enter();
					setTimeout(function() {spam = false;}, t)
				} else console.log('Spam!');
			}
			down[keycode] = true;
		}
	}
	if (keycode == dubl){ // DOUBLE SPLIT
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				split();
				setTimeout(split, SplitSpeed);
			}
			down[keycode] = true;
		}
	}
	if (keycode == tripl){ // TRIPLE SPLIT
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				split();
				setTimeout(split, SplitSpeed);
				setTimeout(split, SplitSpeed*2);
			}
			down[keycode] = true;
		}
	}
	if (keycode == mxsplt){ // MEGA SPLIT
		if (down[keycode] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				var m = 8;
				for (var b = 0; b < m; b++) {
					setTimeout(function () {
						split();
					}, b * SplitSpeed)
				}
			}
			down[keycode] = true;
		}
	}
	if (keycode == singleFood){ // SINGLE FEED
		if (down[keycode] == null) {
			single();
			down[keycode] = true;
		}
	}
});
$(document).keyup(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	down[keycode] = null;
});

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

var EjectDown = false;
var SplitSpeed = 75; //ms
var FeedSpeed = 25; //ms
var t = 2000; //ms

function keydown(event) {
	if (event.keyCode == food && EjectDown === false) {
		EjectDown = true;
		setTimeout(eject, FeedSpeed);
	}
}

function keyup(event) {
	if (event.keyCode == food) {
		EjectDown = false;
	}
}

function eject() {
	if (EjectDown) {
		$("body").trigger($.Event("keydown", { keyCode: 87})); // W DON'T CHANGE
		$("body").trigger($.Event("keyup", { keyCode: 87})); // W DON'T CHANGE
		setTimeout(eject, FeedSpeed);
	}
}
function split() {
	$("body").trigger($.Event("keydown", { keyCode: 32})); //key SPACE
	$("body").trigger($.Event("keyup", { keyCode: 32}));
}
function enter() {
	$("body").trigger($.Event("keydown", { keyCode: 13})); //key ENTER
	$("body").trigger($.Event("keyup", { keyCode: 13}));
}
function single() {
	$("body").trigger($.Event("keydown", { keyCode: 87})); //key W
	$("body").trigger($.Event("keyup", { keyCode: 87}));
}
