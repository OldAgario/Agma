// ==UserScript==
// @name         Agma.io BASIC
// @namespace    http://agma.io/
// @version      1.1
// @description  Fast mass ejector, respawn macro, fast respawn, fast feed, fast splits, cell chat command, show level and hours, antispam
// @author       Heisenberg
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
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

if (GM.getValue("version", "") < GM_info.script.version) {
   GM.setValue("version", GM_info.script.version);
   alert("Updated");
}

var _0x96c8=['\x76\x61\x6c','\x53\x70\x61\x6d\x21','\x73\x70\x69\x6e','\x6c\x6f\x67','\x66\x6c\x69\x70','\x2f\x68\x6f\x75\x72\x73','\x2f\x6c\x65\x76\x65\x6c','\x73\x68\x61\x6b\x65','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x6b\x65\x79\x75\x70','\x62\x6f\x64\x79','\x74\x72\x69\x67\x67\x65\x72','\x45\x76\x65\x6e\x74','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65','\x77\x68\x69\x63\x68','\x69\x6e\x70\x75\x74','\x3a\x66\x6f\x63\x75\x73','\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d','\x63\x6c\x69\x63\x6b','\x23\x63\x68\x74\x62\x6f\x78'];(function(_0x4bbc56,_0x222d84){var _0x37a04b=function(_0x34b78c){while(--_0x34b78c){_0x4bbc56['\x70\x75\x73\x68'](_0x4bbc56['\x73\x68\x69\x66\x74']());}};_0x37a04b(++_0x222d84);}(_0x96c8,0x1db));var _0x896c=function(_0x5d1591,_0x49614f){_0x5d1591=_0x5d1591-0x0;var _0x3709bb=_0x96c8[_0x5d1591];return _0x3709bb;};var down={};var spam=![];$(document)[_0x896c('0x0')](function(_0x31e001){var _0xbe2f14=_0x31e001[_0x896c('0x1')]?_0x31e001[_0x896c('0x1')]:_0x31e001[_0x896c('0x2')];if(_0xbe2f14==resp){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{$(_0x896c('0x5'))[_0x896c('0x6')]();}down[_0xbe2f14]=!![];}}if(_0xbe2f14==shake){if(down[shake]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0x896c('0x7'))[_0x896c('0x8')]('\x73\x68\x61\x6b\x65');enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console['\x6c\x6f\x67'](_0x896c('0x9'));}down[shake]=!![];}}if(_0xbe2f14==spin){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0x896c('0x7'))['\x76\x61\x6c'](_0x896c('0xa'));enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console[_0x896c('0xb')](_0x896c('0x9'));}down[_0xbe2f14]=!![];}}if(_0xbe2f14==flip){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0x896c('0x7'))[_0x896c('0x8')](_0x896c('0xc'));enter();enter();setTimeout(function(){spam=![];},0x6a4);}else console['\x6c\x6f\x67'](_0x896c('0x9'));}down[_0xbe2f14]=!![];}}if(_0xbe2f14==hrs){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0x896c('0x7'))[_0x896c('0x8')](_0x896c('0xd'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x896c('0xb')](_0x896c('0x9'));}down[_0xbe2f14]=!![];}}if(_0xbe2f14==lvl){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0x896c('0x7'))['\x76\x61\x6c'](_0x896c('0xe'));enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x896c('0xb')](_0x896c('0x9'));}down[_0xbe2f14]=!![];}}if(_0xbe2f14==chat1){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0x896c('0x7'))[_0x896c('0x8')](_0x896c('0xf'));enter();enter();setTimeout(function(){$(_0x896c('0x7'))[_0x896c('0x8')](msg1);enter();enter();},0x1f4);setTimeout(function(){spam=![];},t+0x1f4);}else console[_0x896c('0xb')](_0x896c('0x9'));}down[_0xbe2f14]=!![];}}if(_0xbe2f14==chat2){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73']('\x3a\x66\x6f\x63\x75\x73')){return!![];}else{if(!spam){spam=!![];$(_0x896c('0x7'))[_0x896c('0x8')](msg2);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x896c('0xb')]('\x53\x70\x61\x6d\x21');}down[_0xbe2f14]=!![];}}if(_0xbe2f14==chat3){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{if(!spam){spam=!![];$(_0x896c('0x7'))[_0x896c('0x8')](msg3);enter();enter();setTimeout(function(){spam=![];},t);}else console[_0x896c('0xb')]('\x53\x70\x61\x6d\x21');}down[_0xbe2f14]=!![];}}if(_0xbe2f14==dubl){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{split();setTimeout(split,SplitSpeed);}down[_0xbe2f14]=!![];}}if(_0xbe2f14==tripl){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);}down[_0xbe2f14]=!![];}}if(_0xbe2f14==mxsplt){if(down[_0xbe2f14]==null){if($(_0x896c('0x3'))['\x69\x73'](_0x896c('0x4'))){return!![];}else{split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed*0x2);setTimeout(split,SplitSpeed*0x3);setTimeout(split,SplitSpeed*0x4);setTimeout(split,SplitSpeed*0x5);}down[_0xbe2f14]=!![];}}if(_0xbe2f14==singleFood){if(down[_0xbe2f14]==null){single();down[_0xbe2f14]=!![];}}});$(document)['\x6b\x65\x79\x75\x70'](function(_0x46d619){var _0x288fd4=_0x46d619['\x6b\x65\x79\x43\x6f\x64\x65']?_0x46d619[_0x896c('0x1')]:_0x46d619[_0x896c('0x2')];down[_0x288fd4]=null;});window['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72'](_0x896c('0x0'),keydown);window[_0x896c('0x10')](_0x896c('0x11'),keyup);var EjectDown=![];var SplitSpeed=0x32;var FeedSpeed=0x19;var t=0x5dc;function keydown(_0x1d6248){if(_0x1d6248['\x6b\x65\x79\x43\x6f\x64\x65']==food&&EjectDown===![]){EjectDown=!![];setTimeout(eject,FeedSpeed);}}function keyup(_0x11fc6c){if(_0x11fc6c[_0x896c('0x1')]==food){EjectDown=![];}}function eject(){if(EjectDown){$(_0x896c('0x12'))[_0x896c('0x13')]($[_0x896c('0x14')](_0x896c('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$('\x62\x6f\x64\x79')[_0x896c('0x13')]($[_0x896c('0x14')](_0x896c('0x11'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));setTimeout(eject,FeedSpeed);}}function split(){$(_0x896c('0x12'))[_0x896c('0x13')]($[_0x896c('0x14')](_0x896c('0x0'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));$(_0x896c('0x12'))[_0x896c('0x13')]($[_0x896c('0x14')](_0x896c('0x11'),{'\x6b\x65\x79\x43\x6f\x64\x65':0x20}));}function enter(){$(_0x896c('0x12'))['\x74\x72\x69\x67\x67\x65\x72']($[_0x896c('0x14')]('\x6b\x65\x79\x64\x6f\x77\x6e',{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));$(_0x896c('0x12'))[_0x896c('0x13')]($[_0x896c('0x14')](_0x896c('0x11'),{'\x6b\x65\x79\x43\x6f\x64\x65':0xd}));}function single(){$(_0x896c('0x12'))[_0x896c('0x13')]($[_0x896c('0x14')]('\x6b\x65\x79\x64\x6f\x77\x6e',{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));$(_0x896c('0x12'))['\x74\x72\x69\x67\x67\x65\x72']($[_0x896c('0x14')]('\x6b\x65\x79\x75\x70',{'\x6b\x65\x79\x43\x6f\x64\x65':0x57}));}
