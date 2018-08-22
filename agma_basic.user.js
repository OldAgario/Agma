// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      1.9
// @description  Fast mass ejector, respawn macro, fast respawn, fast feed, fast splits, cell and chat commands, anti-spam
// @author       Heisenberg
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
// @updateURL    https://github.com/OldAgario/Agma/raw/master/agma_basic.user.js
// @downloadURL  https://github.com/OldAgario/Agma/raw/master/agma_basic.user.js
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
var dubl = 68; // D (Double Split)
var tripl = 65; // A (Triple Split)
var mxsplt = 16; // SHIFT (Max Split)
//---
var chat1 = 49; // Key 1 (Chat 1)
var chat2 = 50; // Key 2 (Chat 2)
var chat3 = 51; // Key 3 (Chat 3)
var chat4 = 52; // Key 4 (Chat 4)
var chat5 = 53; // Key 5 (Chat 5)
//---
var shake = 66; // B (Shake)
var spin = 78; // N (Spin)
var flip = 77; // M (Flip)
var hrs = 74; // J (Show Hours)
var lvl = 75; // K (Show Level)
var rnk = 76; // L (Show Rank)
//END EDIT KEYBINDS

//EDIT MESSAGES
var msg1 = "FEED!";
var msg2 = "Where are you?";
var msg3 = "Shoot virus!";
var msg4 = "Remove viruses!";
var msg5 = "No problem!";
//END EDIT MESSAGES

var _0x2db8=['\x32\x30\x70\x78','\x23\x75\x70\x64\x20\x68\x34','\x77\x68\x69\x74\x65','\x23\x75\x70\x64\x20\x73\x70\x61\x6e\x3a\x66\x69\x72\x73\x74','\x79\x65\x6c\x6c\x6f\x77','\x23\x75\x70\x64\x20\x73\x70\x61\x6e','\x62\x6c\x6f\x63\x6b','\x23\x75\x70\x64\x20\x68\x34\x2c\x20\x23\x75\x70\x64\x20\x73\x70\x61\x6e','\x70\x61\x64\x64\x69\x6e\x67','\x30\x20\x31\x35\x70\x78','\x6b\x65\x79\x64\x6f\x77\x6e','\x6b\x65\x79\x43\x6f\x64\x65','\x77\x68\x69\x63\x68','\x69\x6e\x70\x75\x74','\x69\x6d\x67\x5b\x74\x69\x74\x6c\x65\x7c\x3d\x27\x52\x65\x73\x70\x61\x77\x6e\x27\x5d','\x3a\x66\x6f\x63\x75\x73','\x23\x63\x68\x74\x62\x6f\x78','\x76\x61\x6c','\x73\x68\x61\x6b\x65','\x6c\x6f\x67','\x53\x70\x61\x6d\x21','\x73\x70\x69\x6e','\x2f\x6c\x65\x76\x65\x6c','\x6b\x65\x79\x75\x70','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x45\x76\x65\x6e\x74','\x74\x72\x69\x67\x67\x65\x72','\x73\x63\x72\x69\x70\x74','\x76\x65\x72\x73\x69\x6f\x6e','\x3c\x64\x69\x76\x20\x69\x64\x3d\x22\x75\x70\x64\x22\x3e\x3c\x68\x34\x3e\u26a0\ufe0f\x20\x53\x63\x72\x69\x70\x74\x20\x75\x70\x64\x61\x74\x65\x3a\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20','\x3c\x2f\x68\x34\x3e\x3c\x73\x70\x61\x6e\x3e\x43\x6c\x69\x63\x6b\x20\x68\x65\x72\x65\x20\x74\x6f\x20\x64\x69\x73\x6d\x69\x73\x73\x20\x74\x68\x69\x73\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x61\x6e\x64\x20\x63\x68\x65\x63\x6b\x20\x79\x6f\x75\x72\x20\x6b\x65\x79\x20\x69\x6e\x70\x75\x74\x20\x73\x65\x74\x74\x69\x6e\x67\x73\x21\x3c\x2f\x73\x70\x61\x6e\x3e','\x3c\x73\x70\x61\x6e\x3e\x43\x68\x61\x6e\x67\x65\x73\x3a\x3c\x62\x72\x20\x2f\x3e\x2d\x20\x32\x20\x6e\x65\x77\x20\x63\x68\x61\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x73\x2c\x20\x6e\x6f\x77\x20\x74\x6f\x74\x61\x6c\x20\x35\x20\x28\x6b\x65\x79\x73\x20\x31\x2d\x35\x29\x3c\x62\x72\x20\x2f\x3e\x2d\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x20\x72\x65\x61\x72\x72\x61\x6e\x67\x65\x2c\x20\x73\x68\x61\x6b\x65\x2c\x20\x73\x70\x69\x6e\x20\x61\x6e\x64\x20\x66\x6c\x69\x70\x20\x6e\x6f\x77\x20\x6f\x6e\x20\x42\x2c\x20\x4e\x2c\x20\x4d\x3c\x2f\x73\x70\x61\x6e\x3e','\x61\x70\x70\x65\x6e\x64\x54\x6f','\x62\x6f\x64\x79','\x23\x75\x70\x64','\x63\x6c\x69\x63\x6b','\x63\x73\x73','\x39\x39\x39','\x61\x62\x73\x6f\x6c\x75\x74\x65','\x72\x67\x62\x61\x28\x30\x2c\x30\x2c\x30\x2c\x20\x2e\x38\x29','\x34\x30\x30\x70\x78'];(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))(function(_0x2d1e42,_0x264d6f){var _0x23b478=function(_0x51f4be){while(--_0x51f4be){_0x2d1e42['\x70\x75\x73\x68'](_0x2d1e42['\x73\x68\x69\x66\x74']());}};_0x23b478(++_0x264d6f);}(_0x2db8,0x1b5))
