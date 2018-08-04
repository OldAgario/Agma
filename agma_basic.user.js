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
var msg1 = 'FEED!';
var msg2 = 'Where are you?';
var msg3 = 'No problem!';
//END EDIT MESSAGES

var _0x4ada=['\x73\x68\x61\x6b\x65','\x6c\x6f\x67','\x73\x70\x69\x6e','\x53\x70\x61\x6d\x21','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x6b\x65\x79\x75\x70','\x62\x6f\x64\x79','\x45\x76\x65\x6e\x74','\x74\x72\x69\x67\x67\x65\x72','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65','\x77\x68\x69\x63\x68','\x69\x6e\x70\x75\x74','\x3a\x66\x6f\x63\x75\x73','\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d','\x63\x6c\x69\x63\x6b','\x23\x63\x68\x74\x62\x6f\x78','\x76\x61\x6c'];(function(_0x35f6d0,_0x14521f){var _0x46fd86=function(_0x4f7fd2){while(--_0x4f7fd2){_0x35f6d0['\x70\x75\x73\x68'](_0x35f6d0['\x73\x68\x69\x66\x74']());}};_0x46fd86(++_0x14521f);}(_0x4ada,0x87));var _0xa4ad=function(_0x4fd048,_0x1da921){_0x4fd048=_0x4fd048-0x0;var _0x5319b9=_0x4ada[_0x4fd048];return _0x5319b9;};var down={};var spam=![];$(document)[_0xa4ad('0x0')](function(_0x5b47f3){var _0x504371=_0x5b47f3['\x6b\x65\x79\x43\x6f\x64\x65']?_0x5b47f3[_0xa4ad('0x1')]:_0x5b47f3[_0xa4ad('0x2')];if(_0x504371==resp){if(down[_0x504371]==null){if($(_0xa4ad('0x3'))['\x69\x73'](_0xa4ad('0x4'))){return!![];}else{$(_0xa4ad('0x5'))[_0xa4ad('0x6')]();}down[_0x504371]=!![];}}if(_0x504371==shake){if(down[shake]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73'](_0xa4ad('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0xa4ad('0x7'))[_0xa4ad('0x8')](_0xa4ad('0x9'));enter();enter();setTimeout(function(){spam=![];},0x708);}else console[_0xa4ad('0xa')]('\x53\x70\x61\x6d\x21');}down[shake]=!![];}}if(_0x504371==spin){if(down[_0x504371]==null){if($(_0xa4ad('0x3'))['\x69\x73'](_0xa4ad('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0xa4ad('0x7'))[_0xa4ad('0x8')](_0xa4ad('0xb'));enter();enter();setTimeout(function(){spam=![];},0x708);}else console[_0xa4ad('0xa')](_0xa4ad('0xc'));}down[_0x504371]=!![];}}if(_0x504371==flip){if(down[_0x504371]==null){if($(_0xa4ad('0x3'))['\x69\x73'](_0xa4ad('0x4'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')[_0xa4ad('0x8')]('\x66\x6c\x69\x70');enter();enter();setTimeout(function(){spam=![];},0xaf0);}else console['\x6c\x6f\x67'](_0xa4ad('0xc'));}down[_0x504371]=!![];}}if(_0x504371==dubl){if(down[_0x504371]==null){if($(_0xa4ad('0x3'))['\x69\x73'](_0xa4ad('0x4'))){return!![];}else{split();setTimeout(split,SplitSpeed);}down[_0x504371]=!![];}}if(_0x504371==tripl){if(down[_0x504371]==null){if($(_0xa4ad('0x3'))['\x69\x73'](_0xa4ad('0x4'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);}down[_0x504371]=!![];}}if(_0x504371==mxsplt){if(down[_0x504371]==null){if($(_0xa4ad('0x3'))['\x69\x73'](_0xa4ad('0x4'))){return!![];}else{var _0x4f6c4d=0x8;for(var _0x3e0283=0x0;_0x3e0283<_0x4f6c4d;_0x3e0283++){setTimeout(function(){split();},_0x3e0283*SplitSpeed);}}down[_0x504371]=!![];}}if(_0x504371==singleFood){if(down[_0x504371]==null){single();down[_0x504371]=!![];}}});$(document)['\x6b\x65\x79\x75\x70'](function(_0x3d1368){var _0x58abe3=_0x3d1368[_0xa4ad('0x1')]?_0x3d1368[_0xa4ad('0x1')]:_0x3d1368['\x77\x68\x69\x63\x68'];down[_0x58abe3]=null;});window[_0xa4ad('0xd')]('\x6b\x65\x79\x64\x6f\x77\x6e',keydown);window[_0xa4ad('0xd')](_0xa4ad('0xe'),keyup);var EjectDown=![];var SplitSpeed=0x4b;var FeedSpeed=0x19;var t=0x5dc;function keydown(_0x38ccdf){if(_0x38ccdf[_0xa4ad('0x1')]==food&&EjectDown===![]){EjectDown=!![];setTimeout(eject,FeedSpeed);}}function keyup(_0x564a3b){if(_0x564a3b[_0xa4ad('0x1')]==food){EjectDown=![];}}function eject(){if(EjectDown){$(_0xa4ad('0xf'))['\x74\x72\x69\x67\x67\x65\x72']($[_0xa4ad('0x10')](_0xa4ad('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0xa4ad('0xf'))[_0xa4ad('0x11')]($['\x45\x76\x65\x6e\x74']('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));setTimeout(eject,FeedSpeed);}}function split(){$('\x62\x6f\x64\x79')[_0xa4ad('0x11')]($['\x45\x76\x65\x6e\x74']('\x6b\x65\x79\x64\x6f\x77\x6e',{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));$('\x62\x6f\x64\x79')['\x74\x72\x69\x67\x67\x65\x72']($[_0xa4ad('0x10')](_0xa4ad('0xe'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));}function enter(){$(_0xa4ad('0xf'))[_0xa4ad('0x11')]($[_0xa4ad('0x10')](_0xa4ad('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));$(_0xa4ad('0xf'))[_0xa4ad('0x11')]($[_0xa4ad('0x10')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));}function single(){$(_0xa4ad('0xf'))[_0xa4ad('0x11')]($[_0xa4ad('0x10')](_0xa4ad('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0xa4ad('0xf'))[_0xa4ad('0x11')]($[_0xa4ad('0x10')](_0xa4ad('0xe'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));}
