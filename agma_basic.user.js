// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      1.3
// @description  Fast mass ejector, respawn macro, fast respawn, fast feed, fast splits, cell and chat commands, show level and hours, anti-spam
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
var hrs = 72; // H (Show Hours)
var lvl = 76; // L (Show Level)
//END EDIT KEYBINDS

//EDIT MESSAGES
var msg1 = 'FEED!';
var msg2 = 'Where are you?';
var msg3 = 'No problem!';
//END EDIT MESSAGES

var _0xa4fe=['\x77\x68\x69\x63\x68','\x69\x6e\x70\x75\x74','\x3a\x66\x6f\x63\x75\x73','\x23\x63\x68\x74\x62\x6f\x78','\x73\x68\x61\x6b\x65','\x6c\x6f\x67','\x73\x70\x69\x6e','\x66\x6c\x69\x70','\x53\x70\x61\x6d\x21','\x76\x61\x6c','\x2f\x68\x6f\x75\x72\x73','\x6b\x65\x79\x75\x70','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x62\x6f\x64\x79','\x74\x72\x69\x67\x67\x65\x72','\x45\x76\x65\x6e\x74','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65'];(function(_0x5dcda7,_0x358594){var _0x558cff=function(_0x5f1a31){while(--_0x5f1a31){_0x5dcda7['\x70\x75\x73\x68'](_0x5dcda7['\x73\x68\x69\x66\x74']());}};_0x558cff(++_0x358594);}(_0xa4fe,0x154));var _0xea4f=function(_0x3d7e50,_0x4714f7){_0x3d7e50=_0x3d7e50-0x0;var _0x40b990=_0xa4fe[_0x3d7e50];return _0x40b990;};var down={};var spam=![];$(document)[_0xea4f('0x0')](function(_0x135e8d){var _0x3220f0=_0x135e8d['\x6b\x65\x79\x43\x6f\x64\x65']?_0x135e8d[_0xea4f('0x1')]:_0x135e8d[_0xea4f('0x2')];if(_0x3220f0==resp){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{$('\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d')['\x63\x6c\x69\x63\x6b']();}down[_0x3220f0]=!![];}}if(_0x3220f0==shake){if(down[shake]==null){if($(_0xea4f('0x3'))['\x69\x73'](_0xea4f('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0xea4f('0x5'))['\x76\x61\x6c'](_0xea4f('0x6'));enter();enter();setTimeout(function(){spam=![];},0x708);}else console[_0xea4f('0x7')]('\x53\x70\x61\x6d\x21');}down[shake]=!![];}}if(_0x3220f0==spin){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73'](_0xea4f('0x4'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')['\x76\x61\x6c'](_0xea4f('0x8'));enter();enter();setTimeout(function(){spam=![];},0x708);}else console[_0xea4f('0x7')]('\x53\x70\x61\x6d\x21');}down[_0x3220f0]=!![];}}if(_0x3220f0==flip){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0xea4f('0x5'))['\x76\x61\x6c'](_0xea4f('0x9'));enter();enter();setTimeout(function(){spam=![];},0xaf0);}else console[_0xea4f('0x7')](_0xea4f('0xa'));}down[_0x3220f0]=!![];}}if(_0x3220f0==hrs){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73'](_0xea4f('0x4'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')[_0xea4f('0xb')](_0xea4f('0xc'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xea4f('0x7')](_0xea4f('0xa'));}down[_0x3220f0]=!![];}}if(_0x3220f0==lvl){if(down[_0x3220f0]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0xea4f('0x5'))[_0xea4f('0xb')]('\x2f\x6c\x65\x76\x65\x6c');enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xea4f('0x7')](_0xea4f('0xa'));}down[_0x3220f0]=!![];}}if(_0x3220f0==chat1){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0xea4f('0x5'))[_0xea4f('0xb')]('\x73\x68\x61\x6b\x65');enter();enter();setTimeout(function(){$(_0xea4f('0x5'))['\x76\x61\x6c'](msg1);enter();enter();},0x1f4);setTimeout(function(){spam=![];},t+0x3e8);}else console[_0xea4f('0x7')](_0xea4f('0xa'));}down[_0x3220f0]=!![];}}if(_0x3220f0==chat2){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73'](_0xea4f('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0xea4f('0x5'))[_0xea4f('0xb')](msg2);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xea4f('0x7')](_0xea4f('0xa'));}down[_0x3220f0]=!![];}}if(_0x3220f0==chat3){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73'](_0xea4f('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0xea4f('0x5'))[_0xea4f('0xb')](msg3);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xea4f('0x7')](_0xea4f('0xa'));}down[_0x3220f0]=!![];}}if(_0x3220f0==dubl){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73'](_0xea4f('0x4'))){return!![];}else{split();setTimeout(split,SplitSpeed);}down[_0x3220f0]=!![];}}if(_0x3220f0==tripl){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73'](_0xea4f('0x4'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);}down[_0x3220f0]=!![];}}if(_0x3220f0==mxsplt){if(down[_0x3220f0]==null){if($(_0xea4f('0x3'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{var _0x14c985=0x8;for(var _0x59de56=0x0;_0x59de56<_0x14c985;_0x59de56++){setTimeout(function(){split();},_0x59de56*SplitSpeed);}}down[_0x3220f0]=!![];}}if(_0x3220f0==singleFood){if(down[_0x3220f0]==null){single();down[_0x3220f0]=!![];}}});$(document)[_0xea4f('0xd')](function(_0x221c2b){var _0x29c3fd=_0x221c2b[_0xea4f('0x1')]?_0x221c2b['\x6b\x65\x79\x43\x6f\x64\x65']:_0x221c2b[_0xea4f('0x2')];down[_0x29c3fd]=null;});window[_0xea4f('0xe')](_0xea4f('0x0'),keydown);window[_0xea4f('0xe')](_0xea4f('0xd'),keyup);var EjectDown=![];var SplitSpeed=0x4b;var FeedSpeed=0x19;var t=0x5dc;function keydown(_0x4a2680){if(_0x4a2680[_0xea4f('0x1')]==food&&EjectDown===![]){EjectDown=!![];setTimeout(eject,FeedSpeed);}}function keyup(_0x15ec0e){if(_0x15ec0e[_0xea4f('0x1')]==food){EjectDown=![];}}function eject(){if(EjectDown){$(_0xea4f('0xf'))[_0xea4f('0x10')]($[_0xea4f('0x11')](_0xea4f('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0xea4f('0xf'))[_0xea4f('0x10')]($[_0xea4f('0x11')](_0xea4f('0xd'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));setTimeout(eject,FeedSpeed);}}function split(){$(_0xea4f('0xf'))[_0xea4f('0x10')]($[_0xea4f('0x11')](_0xea4f('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));$(_0xea4f('0xf'))['\x74\x72\x69\x67\x67\x65\x72']($[_0xea4f('0x11')](_0xea4f('0xd'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));}function enter(){$(_0xea4f('0xf'))[_0xea4f('0x10')]($[_0xea4f('0x11')](_0xea4f('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));$(_0xea4f('0xf'))['\x74\x72\x69\x67\x67\x65\x72']($[_0xea4f('0x11')](_0xea4f('0xd'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));}function single(){$('\x62\x6f\x64\x79')[_0xea4f('0x10')]($[_0xea4f('0x11')](_0xea4f('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0xea4f('0xf'))[_0xea4f('0x10')]($[_0xea4f('0x11')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));}
