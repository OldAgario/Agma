// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      1.5
// @description  Fast mass ejector, respawn macro, fast respawn, fast feed, fast splits, cell and chat commands, anti-spam
// @author       Heisenberg
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
// @updateURL    https://github.com/OldAgario/Agma/raw/master/agma_basic.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

/*
To change your controls visit the link below.
Press a desired key and take its code
T is 84, if u want to change it, just press for ex. P - 80:
var resp = 80; // P (Respawn)

https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

//EDIT KEYBINDS
var food = 87; // W - 87 (Macro Feed)
var singleFood = 81; // Q - 81 (Single Feed)
var resp = 84; // T (Respawn)
var shake = 49; // 1 (Shake)
var spin = 50; // 2 (Spin)
var flip = 51; // 3 (Flip)
var dubl = 68; // D (Double Split)
var tripl = 65; // A (Triple Split)
var mxsplt = 16; // SHIFT (Max Split)
var chat1 = 52; // 4 (Chat 1)
var chat2 = 53; // 5 (Chat 2)
var chat3 = 54; // 6 (Chat 3)
var hrs = 74; // J (Show Hours)
var lvl = 75; // K (Show Level)
var rnk = 76; // L (Show Rank)
//END EDIT KEYBINDS

//EDIT MESSAGES
var msg1 = "FEED!";
var msg2 = "Where are you?";
var msg3 = "No problem!";
//END EDIT MESSAGES

var _0xeb3f=['\x69\x6e\x70\x75\x74','\x76\x61\x6c','\x73\x68\x61\x6b\x65','\x6c\x6f\x67','\x53\x70\x61\x6d\x21','\x23\x63\x68\x74\x62\x6f\x78','\x66\x6c\x69\x70','\x2f\x68\x6f\x75\x72\x73','\x2f\x6c\x65\x76\x65\x6c','\x2f\x72\x61\x6e\x6b','\x6b\x65\x79\x75\x70','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x62\x6f\x64\x79','\x74\x72\x69\x67\x67\x65\x72','\x45\x76\x65\x6e\x74','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65','\x77\x68\x69\x63\x68','\x3a\x66\x6f\x63\x75\x73','\x63\x6c\x69\x63\x6b'];(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b));var _0xfeb3=function(_0x41572d,_0x35bb62){_0x41572d=_0x41572d-0x0;var _0x1fa529=_0xeb3f[_0x41572d];return _0x1fa529;};var down={};var spam=![];$(document)[_0xfeb3('0x0')](function(_0x443e01){var _0x497f7d=_0x443e01[_0xfeb3('0x1')]?_0x443e01['\x6b\x65\x79\x43\x6f\x64\x65']:_0x443e01[_0xfeb3('0x2')];if(_0x497f7d==resp){if(down[_0x497f7d]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{$('\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d')[_0xfeb3('0x4')]();}down[_0x497f7d]=!![];}}if(_0x497f7d==shake){if(down[shake]==null){if($(_0xfeb3('0x5'))['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')[_0xfeb3('0x6')](_0xfeb3('0x7'));enter();enter();setTimeout(function(){spam=![];},0x708);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[shake]=!![];}}if(_0x497f7d==spin){if(down[_0x497f7d]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0xfeb3('0xa'))['\x76\x61\x6c']('\x73\x70\x69\x6e');enter();enter();setTimeout(function(){spam=![];},0x708);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[_0x497f7d]=!![];}}if(_0x497f7d==flip){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0xfeb3('0xa'))[_0xfeb3('0x6')](_0xfeb3('0xb'));enter();enter();setTimeout(function(){spam=![];},0xaf0);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[_0x497f7d]=!![];}}if(_0x497f7d==hrs){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0xfeb3('0xa'))[_0xfeb3('0x6')](_0xfeb3('0xc'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[_0x497f7d]=!![];}}if(_0x497f7d==lvl){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0xfeb3('0xa'))[_0xfeb3('0x6')](_0xfeb3('0xd'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[_0x497f7d]=!![];}}if(_0x497f7d==rnk){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0xfeb3('0xa'))['\x76\x61\x6c'](_0xfeb3('0xe'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[_0x497f7d]=!![];}}if(_0x497f7d==chat1){if(down[_0x497f7d]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0xfeb3('0xa'))[_0xfeb3('0x6')](_0xfeb3('0x7'));enter();enter();setTimeout(function(){$(_0xfeb3('0xa'))['\x76\x61\x6c'](msg1);enter();enter();},0x1f4);setTimeout(function(){spam=![];},t+0x3e8);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[_0x497f7d]=!![];}}if(_0x497f7d==chat2){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')[_0xfeb3('0x6')](msg2);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[_0x497f7d]=!![];}}if(_0x497f7d==chat3){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')[_0xfeb3('0x6')](msg3);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xfeb3('0x8')](_0xfeb3('0x9'));}down[_0x497f7d]=!![];}}if(_0x497f7d==dubl){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{split();setTimeout(split,SplitSpeed);}down[_0x497f7d]=!![];}}if(_0x497f7d==tripl){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);}down[_0x497f7d]=!![];}}if(_0x497f7d==mxsplt){if(down[_0x497f7d]==null){if($(_0xfeb3('0x5'))['\x69\x73'](_0xfeb3('0x3'))){return!![];}else{var _0x30831b=0x8;for(var _0x5e6164=0x0;_0x5e6164<_0x30831b;_0x5e6164++){setTimeout(function(){split();},_0x5e6164*SplitSpeed);}}down[_0x497f7d]=!![];}}if(_0x497f7d==singleFood){if(down[_0x497f7d]==null){single();down[_0x497f7d]=!![];}}});$(document)[_0xfeb3('0xf')](function(_0x4841c9){var _0x424561=_0x4841c9['\x6b\x65\x79\x43\x6f\x64\x65']?_0x4841c9[_0xfeb3('0x1')]:_0x4841c9[_0xfeb3('0x2')];down[_0x424561]=null;});window[_0xfeb3('0x10')]('\x6b\x65\x79\x64\x6f\x77\x6e',keydown);window[_0xfeb3('0x10')](_0xfeb3('0xf'),keyup);var EjectDown=![];var SplitSpeed=0x4b;var FeedSpeed=0x19;var t=0x5dc;function keydown(_0x29abaa){if(_0x29abaa[_0xfeb3('0x1')]==food&&EjectDown===![]){EjectDown=!![];setTimeout(eject,FeedSpeed);}}function keyup(_0x2fdcc5){if(_0x2fdcc5[_0xfeb3('0x1')]==food){EjectDown=![];}}function eject(){if(EjectDown){$(_0xfeb3('0x11'))[_0xfeb3('0x12')]($[_0xfeb3('0x13')](_0xfeb3('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0xfeb3('0x11'))[_0xfeb3('0x12')]($['\x45\x76\x65\x6e\x74']('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));setTimeout(eject,FeedSpeed);}}function split(){$(_0xfeb3('0x11'))[_0xfeb3('0x12')]($[_0xfeb3('0x13')](_0xfeb3('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));$(_0xfeb3('0x11'))[_0xfeb3('0x12')]($[_0xfeb3('0x13')](_0xfeb3('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));}function enter(){$(_0xfeb3('0x11'))[_0xfeb3('0x12')]($[_0xfeb3('0x13')]('\x6b\x65\x79\x64\x6f\x77\x6e',{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));$(_0xfeb3('0x11'))[_0xfeb3('0x12')]($['\x45\x76\x65\x6e\x74'](_0xfeb3('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));}function single(){$(_0xfeb3('0x11'))[_0xfeb3('0x12')]($[_0xfeb3('0x13')](_0xfeb3('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0xfeb3('0x11'))[_0xfeb3('0x12')]($['\x45\x76\x65\x6e\x74'](_0xfeb3('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));}
