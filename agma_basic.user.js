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

var _0xfbf9=['\x6c\x6f\x67','\x53\x70\x61\x6d\x21','\x73\x70\x69\x6e','\x66\x6c\x69\x70','\x2f\x68\x6f\x75\x72\x73','\x2f\x6c\x65\x76\x65\x6c','\x2f\x72\x61\x6e\x6b','\x6b\x65\x79\x75\x70','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x74\x72\x69\x67\x67\x65\x72','\x45\x76\x65\x6e\x74','\x62\x6f\x64\x79','\x76\x65\x72\x73\x69\x6f\x6e','\x73\x63\x72\x69\x70\x74','\x53\x63\x72\x69\x70\x74\x20\x75\x70\x64\x61\x74\x65\x21\x0a\x43\x75\x72\x72\x65\x6e\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x69\x73\x20','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65','\x77\x68\x69\x63\x68','\x69\x6e\x70\x75\x74','\x3a\x66\x6f\x63\x75\x73','\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d','\x63\x6c\x69\x63\x6b','\x23\x63\x68\x74\x62\x6f\x78','\x76\x61\x6c','\x73\x68\x61\x6b\x65'];(function(_0x507ace,_0x412466){var _0x14e80f=function(_0x1deb8b){while(--_0x1deb8b){_0x507ace['\x70\x75\x73\x68'](_0x507ace['\x73\x68\x69\x66\x74']());}};_0x14e80f(++_0x412466);}(_0xfbf9,0x11f));var _0x9fbf=function(_0x1b97d7,_0x5e158a){_0x1b97d7=_0x1b97d7-0x0;var _0x217bf0=_0xfbf9[_0x1b97d7];return _0x217bf0;};if(GM_getValue(_0x9fbf('0x0'),'')<GM_info[_0x9fbf('0x1')]['\x76\x65\x72\x73\x69\x6f\x6e']){GM_setValue(_0x9fbf('0x0'),GM_info[_0x9fbf('0x1')][_0x9fbf('0x0')]);setTimeout(function(){alert(_0x9fbf('0x2')+GM_info[_0x9fbf('0x1')][_0x9fbf('0x0')]+'\x0a\x43\x68\x65\x63\x6b\x20\x79\x6f\x75\x72\x20\x6b\x65\x79\x20\x69\x6e\x70\x75\x74\x20\x73\x65\x74\x74\x69\x6e\x67\x73');},0x7d0);}var down={};var spam=![];$(document)[_0x9fbf('0x3')](function(_0x16de61){var _0x26341c=_0x16de61[_0x9fbf('0x4')]?_0x16de61[_0x9fbf('0x4')]:_0x16de61[_0x9fbf('0x5')];if(_0x26341c==resp){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{$(_0x9fbf('0x8'))[_0x9fbf('0x9')]();}down[_0x26341c]=!![];}}if(_0x26341c==shake){if(down[shake]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x9fbf('0xa'))[_0x9fbf('0xb')](_0x9fbf('0xc'));enter();enter();setTimeout(function(){spam=![];},0x708);}else console[_0x9fbf('0xd')](_0x9fbf('0xe'));}down[shake]=!![];}}if(_0x26341c==spin){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x9fbf('0xa'))[_0x9fbf('0xb')](_0x9fbf('0xf'));enter();enter();setTimeout(function(){spam=![];},0x708);}else console[_0x9fbf('0xd')](_0x9fbf('0xe'));}down[_0x26341c]=!![];}}if(_0x26341c==flip){if(down[_0x26341c]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0x9fbf('0xa'))[_0x9fbf('0xb')](_0x9fbf('0x10'));enter();enter();setTimeout(function(){spam=![];},0xaf0);}else console[_0x9fbf('0xd')](_0x9fbf('0xe'));}down[_0x26341c]=!![];}}if(_0x26341c==hrs){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x9fbf('0xa'))[_0x9fbf('0xb')](_0x9fbf('0x11'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x9fbf('0xd')](_0x9fbf('0xe'));}down[_0x26341c]=!![];}}if(_0x26341c==lvl){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x9fbf('0xa'))[_0x9fbf('0xb')](_0x9fbf('0x12'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x9fbf('0xd')](_0x9fbf('0xe'));}down[_0x26341c]=!![];}}if(_0x26341c==rnk){if(down[_0x26341c]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x9fbf('0xa'))['\x76\x61\x6c'](_0x9fbf('0x13'));enter();enter();setTimeout(function(){spam=![];},t);}else console['\x6c\x6f\x67'](_0x9fbf('0xe'));}down[_0x26341c]=!![];}}if(_0x26341c==chat1){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')[_0x9fbf('0xb')](_0x9fbf('0xc'));enter();enter();setTimeout(function(){$(_0x9fbf('0xa'))[_0x9fbf('0xb')](msg1);enter();enter();},0x1f4);setTimeout(function(){spam=![];},t+0x3e8);}else console[_0x9fbf('0xd')](_0x9fbf('0xe'));}down[_0x26341c]=!![];}}if(_0x26341c==chat2){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x9fbf('0xa'))[_0x9fbf('0xb')](msg2);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x9fbf('0xd')](_0x9fbf('0xe'));}down[_0x26341c]=!![];}}if(_0x26341c==chat3){if(down[_0x26341c]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{if(!spam){spam=!![];$(_0x9fbf('0xa'))[_0x9fbf('0xb')](msg3);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x9fbf('0xd')](_0x9fbf('0xe'));}down[_0x26341c]=!![];}}if(_0x26341c==dubl){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{split();setTimeout(split,SplitSpeed);}down[_0x26341c]=!![];}}if(_0x26341c==tripl){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);}down[_0x26341c]=!![];}}if(_0x26341c==mxsplt){if(down[_0x26341c]==null){if($(_0x9fbf('0x6'))['\x69\x73'](_0x9fbf('0x7'))){return!![];}else{var _0x2ec42d=0x8;for(var _0xe960d7=0x0;_0xe960d7<_0x2ec42d;_0xe960d7++){setTimeout(function(){split();},_0xe960d7*SplitSpeed);}}down[_0x26341c]=!![];}}if(_0x26341c==singleFood){if(down[_0x26341c]==null){single();down[_0x26341c]=!![];}}});$(document)[_0x9fbf('0x14')](function(_0x25f123){var _0x352841=_0x25f123[_0x9fbf('0x4')]?_0x25f123['\x6b\x65\x79\x43\x6f\x64\x65']:_0x25f123[_0x9fbf('0x5')];down[_0x352841]=null;});window[_0x9fbf('0x15')](_0x9fbf('0x3'),keydown);window[_0x9fbf('0x15')]('\x6b\x65\x79\x75\x70',keyup);var EjectDown=![];var SplitSpeed=0x4b;var FeedSpeed=0x19;var t=0x5dc;function keydown(_0x1eac5e){if(_0x1eac5e[_0x9fbf('0x4')]==food&&EjectDown===![]){EjectDown=!![];setTimeout(eject,FeedSpeed);}}function keyup(_0x27b126){if(_0x27b126[_0x9fbf('0x4')]==food){EjectDown=![];}}function eject(){if(EjectDown){$('\x62\x6f\x64\x79')[_0x9fbf('0x16')]($[_0x9fbf('0x17')](_0x9fbf('0x3'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$('\x62\x6f\x64\x79')[_0x9fbf('0x16')]($[_0x9fbf('0x17')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));setTimeout(eject,FeedSpeed);}}function split(){$(_0x9fbf('0x18'))[_0x9fbf('0x16')]($[_0x9fbf('0x17')](_0x9fbf('0x3'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));$('\x62\x6f\x64\x79')[_0x9fbf('0x16')]($[_0x9fbf('0x17')](_0x9fbf('0x14'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));}function enter(){$(_0x9fbf('0x18'))[_0x9fbf('0x16')]($[_0x9fbf('0x17')]('\x6b\x65\x79\x64\x6f\x77\x6e',{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));$('\x62\x6f\x64\x79')[_0x9fbf('0x16')]($[_0x9fbf('0x17')](_0x9fbf('0x14'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));}function single(){$(_0x9fbf('0x18'))[_0x9fbf('0x16')]($[_0x9fbf('0x17')](_0x9fbf('0x3'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0x9fbf('0x18'))[_0x9fbf('0x16')]($[_0x9fbf('0x17')](_0x9fbf('0x14'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));}
