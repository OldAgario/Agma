// ==UserScript==
// @name         Agma.io BASIC
// @namespace    http://agma.io/
// @version      1.1
// @description  Fast mass ejector, respawn macro, fast respawn, fast feed, fast splits, cell and chat commands, show level and hours, antispam
// @author       Heisenberg
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
// @updateURL    https://github.com/OldAgario/Agma/raw/master/agma_basic.user.js
// @grant        GM.getValue
// @grant        GM.setValue
// @run-at       document-end
// ==/UserScript==

//https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

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

var _0xfe61=['\x6b\x65\x79\x75\x70','\x6b\x65\x79\x43\x6f\x64\x65','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x62\x6f\x64\x79','\x45\x76\x65\x6e\x74','\x74\x72\x69\x67\x67\x65\x72','\x6b\x65\x79\x64\x6f\x77\x6e','\x77\x68\x69\x63\x68','\x69\x6e\x70\x75\x74','\x3a\x66\x6f\x63\x75\x73','\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d','\x23\x63\x68\x74\x62\x6f\x78','\x76\x61\x6c','\x53\x70\x61\x6d\x21','\x73\x70\x69\x6e','\x6c\x6f\x67','\x66\x6c\x69\x70','\x2f\x68\x6f\x75\x72\x73','\x2f\x6c\x65\x76\x65\x6c','\x73\x68\x61\x6b\x65'];(function(_0x41d6d2,_0x16ff7b){var _0xb4a6c5=function(_0x4d41cc){while(--_0x4d41cc){_0x41d6d2['\x70\x75\x73\x68'](_0x41d6d2['\x73\x68\x69\x66\x74']());}};_0xb4a6c5(++_0x16ff7b);}(_0xfe61,0x1e6));var _0x1fe6=function(_0x5db87c,_0x1b922b){_0x5db87c=_0x5db87c-0x0;var _0x249e7f=_0xfe61[_0x5db87c];return _0x249e7f;};var down={};var spam=![];$(document)[_0x1fe6('0x0')](function(_0x22217f){var _0x38dcdb=_0x22217f['\x6b\x65\x79\x43\x6f\x64\x65']?_0x22217f['\x6b\x65\x79\x43\x6f\x64\x65']:_0x22217f[_0x1fe6('0x1')];if(_0x38dcdb==resp){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{$(_0x1fe6('0x4'))['\x63\x6c\x69\x63\x6b']();}down[_0x38dcdb]=!![];}}if(_0x38dcdb==shake){if(down[shake]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0x1fe6('0x5'))[_0x1fe6('0x6')]('\x73\x68\x61\x6b\x65');enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console['\x6c\x6f\x67'](_0x1fe6('0x7'));}down[shake]=!![];}}if(_0x38dcdb==spin){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0x1fe6('0x5'))[_0x1fe6('0x6')](_0x1fe6('0x8'));enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console[_0x1fe6('0x9')](_0x1fe6('0x7'));}down[_0x38dcdb]=!![];}}if(_0x38dcdb==flip){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0x1fe6('0x5'))['\x76\x61\x6c'](_0x1fe6('0xa'));enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console[_0x1fe6('0x9')]('\x53\x70\x61\x6d\x21');}down[_0x38dcdb]=!![];}}if(_0x38dcdb==hrs){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0x1fe6('0x5'))[_0x1fe6('0x6')](_0x1fe6('0xb'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x1fe6('0x9')]('\x53\x70\x61\x6d\x21');}down[_0x38dcdb]=!![];}}if(_0x38dcdb==lvl){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0x1fe6('0x5'))[_0x1fe6('0x6')](_0x1fe6('0xc'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x1fe6('0x9')](_0x1fe6('0x7'));}down[_0x38dcdb]=!![];}}if(_0x38dcdb==chat1){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0x1fe6('0x5'))[_0x1fe6('0x6')](_0x1fe6('0xd'));enter();enter();setTimeout(function(){$(_0x1fe6('0x5'))[_0x1fe6('0x6')](msg1);enter();enter();},0x1f4);setTimeout(function(){spam=![];},t+0x3e8);}else console['\x6c\x6f\x67'](_0x1fe6('0x7'));}down[_0x38dcdb]=!![];}}if(_0x38dcdb==chat2){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0x1fe6('0x5'))['\x76\x61\x6c'](msg2);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x1fe6('0x9')](_0x1fe6('0x7'));}down[_0x38dcdb]=!![];}}if(_0x38dcdb==chat3){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{if(!spam){spam=!![];$(_0x1fe6('0x5'))[_0x1fe6('0x6')](msg3);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x1fe6('0x9')](_0x1fe6('0x7'));}down[_0x38dcdb]=!![];}}if(_0x38dcdb==dubl){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{split();setTimeout(split,SplitSpeed);}down[_0x38dcdb]=!![];}}if(_0x38dcdb==tripl){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73'](_0x1fe6('0x3'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);}down[_0x38dcdb]=!![];}}if(_0x38dcdb==mxsplt){if(down[_0x38dcdb]==null){if($(_0x1fe6('0x2'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);setTimeout(split,SplitSpeed*0x3);setTimeout(split,SplitSpeed*0x4);setTimeout(split,SplitSpeed*0x5);}down[_0x38dcdb]=!![];}}if(_0x38dcdb==singleFood){if(down[_0x38dcdb]==null){single();down[_0x38dcdb]=!![];}}});$(document)[_0x1fe6('0xe')](function(_0x5c6ab4){var _0x4a0a4a=_0x5c6ab4['\x6b\x65\x79\x43\x6f\x64\x65']?_0x5c6ab4[_0x1fe6('0xf')]:_0x5c6ab4[_0x1fe6('0x1')];down[_0x4a0a4a]=null;});window[_0x1fe6('0x10')]('\x6b\x65\x79\x64\x6f\x77\x6e',keydown);window[_0x1fe6('0x10')]('\x6b\x65\x79\x75\x70',keyup);var EjectDown=![];var SplitSpeed=0x32;var FeedSpeed=0x19;var t=0x5dc;function keydown(_0x11f7fa){if(_0x11f7fa[_0x1fe6('0xf')]==food&&EjectDown===![]){EjectDown=!![];setTimeout(eject,FeedSpeed);}}function keyup(_0x4bfa13){if(_0x4bfa13[_0x1fe6('0xf')]==food){EjectDown=![];}}function eject(){if(EjectDown){$(_0x1fe6('0x11'))['\x74\x72\x69\x67\x67\x65\x72']($[_0x1fe6('0x12')](_0x1fe6('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0x1fe6('0x11'))[_0x1fe6('0x13')]($[_0x1fe6('0x12')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));setTimeout(eject,FeedSpeed);}}function split(){$('\x62\x6f\x64\x79')['\x74\x72\x69\x67\x67\x65\x72']($['\x45\x76\x65\x6e\x74'](_0x1fe6('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));$(_0x1fe6('0x11'))[_0x1fe6('0x13')]($[_0x1fe6('0x12')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));}function enter(){$(_0x1fe6('0x11'))['\x74\x72\x69\x67\x67\x65\x72']($[_0x1fe6('0x12')](_0x1fe6('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));$(_0x1fe6('0x11'))['\x74\x72\x69\x67\x67\x65\x72']($[_0x1fe6('0x12')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));}function single(){$(_0x1fe6('0x11'))['\x74\x72\x69\x67\x67\x65\x72']($[_0x1fe6('0x12')](_0x1fe6('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0x1fe6('0x11'))[_0x1fe6('0x13')]($[_0x1fe6('0x12')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));}
