
//https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

//EDIT KEYBINDS
var food = 87; // Q - 81, 87 - W
var resp = 84; // T
var shake = 49; // 1
var spin = 50; // 2
var flip = 51; // 3
var dubl = 68; // D
var tripl = 65; // A
var mxsplt = 16; // SHIFT
var chat1 = 52; // 4
var chat2 = 53; // 5
var hrs = 72; // H
var lvl = 76; // L
//END EDIT KEYBINDS

//EDIT MESSAGES
var msg1 = 'FEED!';
var msg2 = 'Where are you?';
//END EDIT MESSAGES
var down = {};

$(document).keydown(function(event){
     var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == resp){ // 18 - ALT, 192 - TILDE - Num0
		if (down[resp] == null) { // first press
			if ($("input").is(":focus")) {
				return true;
		} else {
			//closeStats();
			$("img[title|='Respawn']").click();
			//rspwn(document.getElementById('nick').value);
			//play.click();
		}
			down[resp] = true; // record that the key's down
		}
	}
	 if(keycode == shake){ // Key 1
          if (down[shake] == null) {
        if ($("input").is(":focus")) {
            return true;
        } else {
            $('#chtbox').val('shake');
            enter();enter();
        }
              down[shake] = true;
          }
     }
	 if(keycode == spin){ // Key 2
          if (down[spin] == null) {
        if ($("input").is(":focus")) {
            return true;
        } else {
            $('#chtbox').val('spin');
            enter();enter();
        }
              down[spin] = true;
          }
     }
	 if(keycode == flip){ // Key 3
          if (down[flip] == null) {
        if ($("input").is(":focus")) {
            return true;
        } else {
            $('#chtbox').val('flip');
            enter();enter();
        }
              down[flip] = true;
          }
     }
	 if (keycode == hrs){ // Key H - Show Time
		if (down[hrs] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			$('#chtbox').val('/hours');
			enter();enter();
		}
			down[hrs] = true;
		}
	}
	 if (keycode == lvl){ // Key L - Show Level
		if (down[lvl] == null) {
			if ($("input").is(":focus")) {
				return true;
		} else {
			$('#chtbox').val('/level');
			enter();enter();
		}
			down[lvl] = true;
		}
	}
	if (keycode == chat1){ // Key 4 - Chat Message 1
		if (down[chat1] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				$('#chtbox').val('shake');
				enter();enter();
				setTimeout($('#chtbox').val(msg1), 400);
				setTimeout(enter, 500);
				setTimeout(enter, 600);
			}
			down[chat1] = true;
		}
	}
	if (keycode == chat2){ // Key 5 - Chat Message 2
		if (down[chat2] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				$('#chtbox').val(msg2);
				enter();enter();
			}
			down[chat2] = true;
		}
	}
	if (keycode == dubl){ // Key D - DOUBLE SPLIT
		if (down[dubl] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				split();
				setTimeout(split, 100);
			}
			down[dubl] = true;
		}
	}
	if (keycode == tripl){ // Key A - TRIPLE SPLIT
		if (down[tripl] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				split();
				setTimeout(split, 100);
				setTimeout(split, 100*2);
			}
			down[tripl] = true;
		}
	}
	if (keycode == mxsplt){ // Key SHIFT - MEGA SPLIT
		if (down[mxsplt] == null) {
			if ($("input").is(":focus")) {
				return true;
			} else {
				split();
				setTimeout(split, 100);
				setTimeout(split, 100*2);
				setTimeout(split, 100*3);
				setTimeout(split, 100*4);
				setTimeout(split, 100*5);
			}
			down[mxsplt] = true;
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

var speed = 25; //in ms

function keydown(event) {
    if (event.keyCode == food && EjectDown === false) { // W
        EjectDown = true;
        setTimeout(eject, speed);
    }
}

function keyup(event) {
    if (event.keyCode == food) { // W
        EjectDown = false;
    }
}

function eject() {
    if (EjectDown) {
        window.onkeydown({keyCode: 87}); // W DON'T CHANGE
        window.onkeyup({keyCode: 87}); // W DON'T CHANGE
        setTimeout(eject, speed);
    }
}

function split() {
    $("body").trigger($.Event("keydown", { keyCode: 32})); //key SPACE
    $("body").trigger($.Event("keyup", { keyCode: 32})); //jquery is required for split to work
}
function enter() {
    $("body").trigger($.Event("keydown", { keyCode: 13})); //key Enter
    $("body").trigger($.Event("keyup", { keyCode: 13}));
}
