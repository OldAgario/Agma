// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      1.6
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

var _0xeb3f=['\x69\x6e\x70\x75\x74','\x76\x61\x6c','\x73\x68\x61\x6b\x65','\x6c\x6f\x67','\x53\x70\x61\x6d\x21','\x23\x63\x68\x74\x62\x6f\x78','\x66\x6c\x69\x70','\x2f\x68\x6f\x75\x72\x73','\x2f\x6c\x65\x76\x65\x6c','\x2f\x72\x61\x6e\x6b','\x6b\x65\x79\x75\x70','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x62\x6f\x64\x79','\x74\x72\x69\x67\x67\x65\x72','\x45\x76\x65\x6e\x74','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65','\x77\x68\x69\x63\x68','\x3a\x66\x6f\x63\x75\x73','\x63\x6c\x69\x63\x6b'];(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))(function(_0x3c6d1d,_0xa60c67){var _0x112c03=function(_0x27ae9c){while(--_0x27ae9c){_0x3c6d1d['\x70\x75\x73\x68'](_0x3c6d1d['\x73\x68\x69\x66\x74']());}};_0x112c03(++_0xa60c67);}(_0xeb3f,0x13b))
