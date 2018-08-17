// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      1.8
// @description  Fast mass ejector, respawn macro, fast respawn, fast feed, fast splits, cell and chat commands, anti-spam
// @author       Heisenberg
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
// @updateURL    https://github.com/OldAgario/Agma/raw/master/agma_basic.user.js
// @grant        GM_setValue
// @grant        GM_getValue
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
var chat4 = 55; // 7 (Chat 4)
var hrs = 74; // J (Show Hours)
var lvl = 75; // K (Show Level)
var rnk = 76; // L (Show Rank)
//END EDIT KEYBINDS

//EDIT MESSAGES
var msg1 = "FEED!";
var msg2 = "Where are you?";
var msg3 = "No problem!";
var msg4 = "Remove the virus!";
//END EDIT MESSAGES

var _0x8e17=['\x77\x68\x69\x63\x68','\x69\x6e\x70\x75\x74','\x3a\x66\x6f\x63\x75\x73','\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d','\x23\x63\x68\x74\x62\x6f\x78','\x76\x61\x6c','\x53\x70\x61\x6d\x21','\x2f\x6c\x65\x76\x65\x6c','\x6c\x6f\x67','\x2f\x72\x61\x6e\x6b','\x6b\x65\x79\x75\x70','\x62\x6f\x64\x79','\x74\x72\x69\x67\x67\x65\x72','\x45\x76\x65\x6e\x74','\x76\x65\x72\x73\x69\x6f\x6e','\x73\x63\x72\x69\x70\x74','\x53\x63\x72\x69\x70\x74\x20\x75\x70\x64\x61\x74\x65\x21\x0a\x43\x75\x72\x72\x65\x6e\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x69\x73\x20','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65'];(function(_0x436176,_0xef40f){var _0xe379ce=function(_0x38484f){while(--_0x38484f){_0x436176['\x70\x75\x73\x68'](_0x436176['\x73\x68\x69\x66\x74']());}};_0xe379ce(++_0xef40f);}(_0x8e17,0xa6));var _0x78e1=function(_0x2fec4a,_0x165cd4){_0x2fec4a=_0x2fec4a-0x0;var _0x19e952=_0x8e17[_0x2fec4a];return _0x19e952;};if(GM_getValue(_0x78e1('0x0'),'')<GM_info[_0x78e1('0x1')][_0x78e1('0x0')]){GM_setValue(_0x78e1('0x0'),GM_info[_0x78e1('0x1')]['\x76\x65\x72\x73\x69\x6f\x6e']);setTimeout(function(){alert(_0x78e1('0x2')+GM_info[_0x78e1('0x1')]['\x76\x65\x72\x73\x69\x6f\x6e']+'\x0a\x43\x68\x65\x63\x6b\x20\x79\x6f\x75\x72\x20\x6b\x65\x79\x20\x69\x6e\x70\x75\x74\x20\x73\x65\x74\x74\x69\x6e\x67\x73');},0x7d0);}var down={};var spam=![];$(document)[_0x78e1('0x3')](function(_0x55d16d){var _0x2f843d=_0x55d16d[_0x78e1('0x4')]?_0x55d16d[_0x78e1('0x4')]:_0x55d16d[_0x78e1('0x5')];if(_0x2f843d==resp){if(down[_0x2f843d]==null){if($(_0x78e1('0x6'))['\x69\x73'](_0x78e1('0x7'))){return!![];}else{$(_0x78e1('0x8'))['\x63\x6c\x69\x63\x6b']();}down[_0x2f843d]=!![];}}if(_0x2f843d==hrs){if(down[_0x2f843d]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73'](_0x78e1('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x78e1('0x9'))[_0x78e1('0xa')]('\x2f\x68\x6f\x75\x72\x73');enter();enter();setTimeout(function(){spam=![];},t);}else console['\x6c\x6f\x67'](_0x78e1('0xb'));}down[_0x2f843d]=!![];}}if(_0x2f843d==lvl){if(down[_0x2f843d]==null){if($(_0x78e1('0x6'))['\x69\x73'](_0x78e1('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x78e1('0x9'))[_0x78e1('0xa')](_0x78e1('0xc'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x78e1('0xd')]('\x53\x70\x61\x6d\x21');}down[_0x2f843d]=!![];}}if(_0x2f843d==rnk){if(down[_0x2f843d]==null){if($(_0x78e1('0x6'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0x78e1('0x9'))[_0x78e1('0xa')](_0x78e1('0xe'));enter();enter();setTimeout(function(){spam=![];},t);}else console['\x6c\x6f\x67'](_0x78e1('0xb'));}down[_0x2f843d]=!![];}}if(_0x2f843d==dubl){if(down[_0x2f843d]==null){if($(_0x78e1('0x6'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{split();setTimeout(split,SplitSpeed);}down[_0x2f843d]=!![];}}if(_0x2f843d==tripl){if(down[_0x2f843d]==null){if($(_0x78e1('0x6'))['\x69\x73'](_0x78e1('0x7'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);}down[_0x2f843d]=!![];}}if(_0x2f843d==mxsplt){if(down[_0x2f843d]==null){if($(_0x78e1('0x6'))['\x69\x73'](_0x78e1('0x7'))){return!![];}else{var _0x458450=0x8;for(var _0x4af3b8=0x0;_0x4af3b8<_0x458450;_0x4af3b8++){setTimeout(function(){split();},_0x4af3b8*SplitSpeed);}}down[_0x2f843d]=!![];}}if(_0x2f843d==singleFood){if(down[_0x2f843d]==null){single();down[_0x2f843d]=!![];}}});$(document)[_0x78e1('0xf')](function(_0x593148){var _0xd1a192=_0x593148['\x6b\x65\x79\x43\x6f\x64\x65']?_0x593148[_0x78e1('0x4')]:_0x593148[_0x78e1('0x5')];down[_0xd1a192]=null;});window['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']('\x6b\x65\x79\x64\x6f\x77\x6e',keydown);window['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']('\x6b\x65\x79\x75\x70',keyup);var EjectDown=![];var SplitSpeed=0x4b;var FeedSpeed=0x19;var t=0x5dc;function keydown(_0x17c460){if(_0x17c460[_0x78e1('0x4')]==food&&EjectDown===![]){EjectDown=!![];setTimeout(eject,FeedSpeed);}}function keyup(_0x515e5f){if(_0x515e5f[_0x78e1('0x4')]==food){EjectDown=![];}}function eject(){if(EjectDown){$(_0x78e1('0x10'))[_0x78e1('0x11')]($[_0x78e1('0x12')](_0x78e1('0x3'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$('\x62\x6f\x64\x79')['\x74\x72\x69\x67\x67\x65\x72']($[_0x78e1('0x12')](_0x78e1('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));setTimeout(eject,FeedSpeed);}}function split(){$(_0x78e1('0x10'))[_0x78e1('0x11')]($[_0x78e1('0x12')](_0x78e1('0x3'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));$(_0x78e1('0x10'))[_0x78e1('0x11')]($[_0x78e1('0x12')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));}function enter(){$('\x62\x6f\x64\x79')['\x74\x72\x69\x67\x67\x65\x72']($[_0x78e1('0x12')]('\x6b\x65\x79\x64\x6f\x77\x6e',{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));$(_0x78e1('0x10'))[_0x78e1('0x11')]($[_0x78e1('0x12')](_0x78e1('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));}function single(){$(_0x78e1('0x10'))[_0x78e1('0x11')]($[_0x78e1('0x12')](_0x78e1('0x3'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0x78e1('0x10'))[_0x78e1('0x11')]($['\x45\x76\x65\x6e\x74'](_0x78e1('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));}
