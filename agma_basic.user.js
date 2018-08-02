// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      1.2
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

var _0xae0b=['\x73\x70\x69\x6e','\x66\x6c\x69\x70','\x2f\x68\x6f\x75\x72\x73','\x2f\x6c\x65\x76\x65\x6c','\x6b\x65\x79\x75\x70','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x62\x6f\x64\x79','\x74\x72\x69\x67\x67\x65\x72','\x45\x76\x65\x6e\x74','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65','\x77\x68\x69\x63\x68','\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d','\x69\x6e\x70\x75\x74','\x3a\x66\x6f\x63\x75\x73','\x23\x63\x68\x74\x62\x6f\x78','\x76\x61\x6c','\x73\x68\x61\x6b\x65','\x6c\x6f\x67','\x53\x70\x61\x6d\x21'];(function(_0x28703c,_0x4b00ca){var _0x52990a=function(_0x4e8752){while(--_0x4e8752){_0x28703c['\x70\x75\x73\x68'](_0x28703c['\x73\x68\x69\x66\x74']());}};_0x52990a(++_0x4b00ca);}(_0xae0b,0x185));var _0xbae0=function(_0x545404,_0x56b8d9){_0x545404=_0x545404-0x0;var _0x5510fd=_0xae0b[_0x545404];return _0x5510fd;};var down={};var spam=![];$(document)[_0xbae0('0x0')](function(_0x1ebb24){var _0x4f6afa=_0x1ebb24[_0xbae0('0x1')]?_0x1ebb24['\x6b\x65\x79\x43\x6f\x64\x65']:_0x1ebb24[_0xbae0('0x2')];if(_0x4f6afa==resp){if(down[_0x4f6afa]==null){if($('\x69\x6e\x70\x75\x74')['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{$(_0xbae0('0x3'))['\x63\x6c\x69\x63\x6b']();}down[_0x4f6afa]=!![];}}if(_0x4f6afa==shake){if(down[shake]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{if(!spam){spam=!![];$(_0xbae0('0x6'))[_0xbae0('0x7')](_0xbae0('0x8'));enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console[_0xbae0('0x9')](_0xbae0('0xa'));}down[shake]=!![];}}if(_0x4f6afa==spin){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')['\x76\x61\x6c'](_0xbae0('0xb'));enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console[_0xbae0('0x9')](_0xbae0('0xa'));}down[_0x4f6afa]=!![];}}if(_0x4f6afa==flip){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{if(!spam){spam=!![];$(_0xbae0('0x6'))[_0xbae0('0x7')](_0xbae0('0xc'));enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console['\x6c\x6f\x67'](_0xbae0('0xa'));}down[_0x4f6afa]=!![];}}if(_0x4f6afa==hrs){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{if(!spam){spam=!![];$(_0xbae0('0x6'))[_0xbae0('0x7')](_0xbae0('0xd'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xbae0('0x9')](_0xbae0('0xa'));}down[_0x4f6afa]=!![];}}if(_0x4f6afa==lvl){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{if(!spam){spam=!![];$('\x23\x63\x68\x74\x62\x6f\x78')[_0xbae0('0x7')](_0xbae0('0xe'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xbae0('0x9')](_0xbae0('0xa'));}down[_0x4f6afa]=!![];}}if(_0x4f6afa==chat1){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{if(!spam){spam=!![];$(_0xbae0('0x6'))[_0xbae0('0x7')](_0xbae0('0x8'));enter();enter();setTimeout(function(){$('\x23\x63\x68\x74\x62\x6f\x78')['\x76\x61\x6c'](msg1);enter();enter();},0x1f4);setTimeout(function(){spam=![];},t+0x3e8);}else console['\x6c\x6f\x67']('\x53\x70\x61\x6d\x21');}down[_0x4f6afa]=!![];}}if(_0x4f6afa==chat2){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0xbae0('0x6'))[_0xbae0('0x7')](msg2);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xbae0('0x9')](_0xbae0('0xa'));}down[_0x4f6afa]=!![];}}if(_0x4f6afa==chat3){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{if(!spam){spam=!![];$(_0xbae0('0x6'))[_0xbae0('0x7')](msg3);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0xbae0('0x9')](_0xbae0('0xa'));}down[_0x4f6afa]=!![];}}if(_0x4f6afa==dubl){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{split();setTimeout(split,SplitSpeed);}down[_0x4f6afa]=!![];}}if(_0x4f6afa==tripl){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);}down[_0x4f6afa]=!![];}}if(_0x4f6afa==mxsplt){if(down[_0x4f6afa]==null){if($(_0xbae0('0x4'))['\x69\x73'](_0xbae0('0x5'))){return!![];}else{var _0x83bafd=0x8;for(var _0x10c8e0=0x0;_0x10c8e0<_0x83bafd;_0x10c8e0++){setTimeout(function(){split();},_0x10c8e0*SplitSpeed);}}down[_0x4f6afa]=!![];}}if(_0x4f6afa==singleFood){if(down[_0x4f6afa]==null){single();down[_0x4f6afa]=!![];}}});$(document)[_0xbae0('0xf')](function(_0x396c0f){var _0x101011=_0x396c0f[_0xbae0('0x1')]?_0x396c0f[_0xbae0('0x1')]:_0x396c0f[_0xbae0('0x2')];down[_0x101011]=null;});window[_0xbae0('0x10')](_0xbae0('0x0'),keydown);window[_0xbae0('0x10')](_0xbae0('0xf'),keyup);var EjectDown=![];var SplitSpeed=0x4b;var FeedSpeed=0x19;var t=0x5dc;function keydown(_0x163f66){if(_0x163f66[_0xbae0('0x1')]==food&&EjectDown===![]){EjectDown=!![];setTimeout(eject,FeedSpeed);}}function keyup(_0x10219a){if(_0x10219a[_0xbae0('0x1')]==food){EjectDown=![];}}function eject(){if(EjectDown){$(_0xbae0('0x11'))[_0xbae0('0x12')]($[_0xbae0('0x13')](_0xbae0('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0xbae0('0x11'))[_0xbae0('0x12')]($[_0xbae0('0x13')](_0xbae0('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));setTimeout(eject,FeedSpeed);}}function split(){$('\x62\x6f\x64\x79')['\x74\x72\x69\x67\x67\x65\x72']($[_0xbae0('0x13')]('\x6b\x65\x79\x64\x6f\x77\x6e',{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));$(_0xbae0('0x11'))[_0xbae0('0x12')]($[_0xbae0('0x13')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));}function enter(){$('\x62\x6f\x64\x79')[_0xbae0('0x12')]($[_0xbae0('0x13')](_0xbae0('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));$(_0xbae0('0x11'))[_0xbae0('0x12')]($[_0xbae0('0x13')](_0xbae0('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));}function single(){$(_0xbae0('0x11'))[_0xbae0('0x12')]($[_0xbae0('0x13')](_0xbae0('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0xbae0('0x11'))[_0xbae0('0x12')]($['\x45\x76\x65\x6e\x74'](_0xbae0('0xf'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));}
