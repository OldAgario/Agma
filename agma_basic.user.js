// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      2.91
// @description  Fast mass ejector, respawn macro, fast respawn, fast feed, fast splits, cell and chat commands, anti-spam, full settings next to chat
// @author       Heisenberg-(TheOldOne)
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
// @updateURL    https://github.com/OldAgario/Agma/raw/master/agma_basic.user.js
// @downloadURL  https://github.com/OldAgario/Agma/raw/master/agma_basic.user.js
// @grant        GM.addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

/*
Userscript for AGMA.IO from Heisenberg (TheOldOne)

Tampermonkey is required to use this script!

1 - Install Tampermonkey
2 - Install the script using this permanent link (https://github.com/OldAgario/Agma/raw/master/agma_basic.user.js)
3 - Adjust your controls in the script
	- open tampermonkey
	- locate the Agma.io BASIC GH
	- opent the script and read the instructions in the head of the script
	- customize your controls
	- to change messages, simply replace text between "..."
4 - Copy the customizable part and save it as *.TXT
5 - when script gets update all your settings are reset to their defaults!!!
6 - restore your settings - copy all data from previously saved *.TXT file
----------------------------
If you want to customize your control settings - go to the link below,
To change any button for any function, simply click a desired button in the input on that site and see it's code,
For example, you want to change T (84) Respawn to something else,
You click P and see it's code - 80,
and you change your "var resp = 84; // T (Respawn)" to "var resp = 80; // P (Respawn)",

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
var chat6 = 54; // Key 5 (Chat 5)
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
var msg2 = "Give me mass!";
var msg3 = "Where are you?";
var msg4 = "Shoot virus!";
var msg5 = "Remove viruses!";
var msg6 = "No problem!";
//END EDIT MESSAGES

var _$_618b=["\x0A\x2F\x2A\x43\x75\x73\x74\x6F\x6D\x20\x43\x53\x53\x20\x62\x79\x20\x48\x65\x69\x73\x65\x6E\x62\x65\x72\x67\x2A\x2F\x0A\x2A\x20\x7B\x6F\x75\x74\x6C\x69\x6E\x65\x3A\x30\x3B\x7D\x0A\x23\x75\x70\x64\x20\x7B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x39\x39\x39\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x20\x2E\x38\x29\x3B\x77\x69\x64\x74\x68\x3A\x34\x30\x30\x70\x78\x3B\x6D\x69\x6E\x2D\x68\x65\x69\x67\x68\x74\x3A\x31\x35\x30\x70\x78\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x31\x35\x70\x78\x3B\x62\x6F\x74\x74\x6F\x6D\x3A\x32\x30\x70\x78\x3B\x6C\x65\x66\x74\x3A\x32\x30\x70\x78\x3B\x7D\x0A\x23\x75\x70\x64\x20\x68\x34\x20\x7B\x63\x6F\x6C\x6F\x72\x3A\x77\x68\x69\x74\x65\x3B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x20\x30\x20\x31\x35\x70\x78\x3B\x7D\x0A\x23\x75\x70\x64\x20\x73\x70\x61\x6E\x3A\x66\x69\x72\x73\x74\x2D\x6F\x66\x2D\x74\x79\x70\x65\x20\x7B\x63\x6F\x6C\x6F\x72\x3A\x79\x65\x6C\x6C\x6F\x77\x3B\x7D\x0A\x23\x75\x70\x64\x20\x73\x70\x61\x6E\x20\x7B\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x3B\x7D\x0A\x23\x75\x70\x64\x20\x70\x20\x7B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x3B\x74\x65\x78\x74\x2D\x69\x6E\x64\x65\x6E\x74\x3A\x31\x35\x70\x78\x3B\x7D\x0A","\x61\x64\x64\x53\x74\x79\x6C\x65","\x61\x75\x74\x68\x6F\x72","\x73\x63\x72\x69\x70\x74","\x48\x65\x69\x73\x65\x6E\x62\x65\x72\x67\x2D\x28\x54\x68\x65\x4F\x6C\x64\x4F\x6E\x65\x29","\x6E\x61\x6D\x65","\x41\x67\x6D\x61\x2E\x69\x6F\x20\x42\x41\x53\x49\x43\x20\x47\x48","\x76\x65\x72\x73\x69\x6F\x6E","","\x62\x6F\x64\x79","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x75\x70\x64\x22\x3E\x3C\x68\x34\x3E\u26A0\uFE0F\x20\x53\x63\x72\x69\x70\x74\x20\x75\x70\x64\x61\x74\x65\x3A\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20","\x3C\x2F\x68\x34\x3E\x3C\x73\x70\x61\x6E\x3E\x43\x6C\x69\x63\x6B\x20\x68\x65\x72\x65\x20\x74\x6F\x20\x64\x69\x73\x6D\x69\x73\x73\x20\x74\x68\x69\x73\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x61\x6E\x64\x20\x63\x68\x65\x63\x6B\x20\x79\x6F\x75\x72\x20\x6B\x65\x79\x20\x69\x6E\x70\x75\x74\x20\x73\x65\x74\x74\x69\x6E\x67\x73\x21\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x3E\x43\x68\x61\x6E\x67\x65\x73\x3A\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x70\x3E\x2D\x20\x62\x75\x67\x20\x66\x69\x78\x65\x73\x3C\x2F\x70\x3E","\x3C\x2F\x64\x69\x76\x3E","\x66\x61\x64\x65\x4F\x75\x74","\x63\x6C\x69\x63\x6B","\x23\x75\x70\x64","\x76\x61\x6C","\x23\x63\x68\x74\x62\x6F\x78","\x23\x63\x68\x74\x54\x61\x62\x73","\x74\x65\x78\x74","\x23\x63\x6F\x6E\x74\x65\x78\x74\x50\x6C\x61\x79\x65\x72\x4E\x61\x6D\x65","\x28\x6E\x6F\x20\x70\x6C\x61\x79\x65\x72\x20\x73\x65\x6C\x65\x63\x74\x65\x64\x29","\x48\x69\x20\x45\x76\x65\x72\x79\x6F\x6E\x65\x21","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x48\x65\x6C\x6C\x6F\x2C\x20","\x21","\x6F\x6E","\x23\x63\x6F\x6E\x74\x65\x78\x74\x50\x6C\x61\x79\x65\x72","\x6B\x65\x79\x43\x6F\x64\x65","\x77\x68\x69\x63\x68","\x3A\x66\x6F\x63\x75\x73","\x69\x73","\x69\x6E\x70\x75\x74","\x69\x6D\x67\x5B\x74\x69\x74\x6C\x65\x7C\x3D\x27\x52\x65\x73\x70\x61\x77\x6E\x27\x5D","\x73\x68\x61\x6B\x65","\x53\x70\x61\x6D\x21","\x6C\x6F\x67","\x73\x70\x69\x6E","\x66\x6C\x69\x70","\x2F\x68\x6F\x75\x72\x73","\x2F\x6C\x65\x76\x65\x6C","\x2F\x72\x61\x6E\x6B","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x75\x70","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x45\x76\x65\x6E\x74","\x74\x72\x69\x67\x67\x65\x72"];GM[_$_618b[1]](_$_618b[0]);if(GM_info[_$_618b[3]][_$_618b[2]]!= _$_618b[4]){return false};if(GM_info[_$_618b[3]][_$_618b[5]]!= _$_618b[6]){return false};if(GM_getValue(_$_618b[7],_$_618b[8])< GM_info[_$_618b[3]][_$_618b[7]]){GM_setValue(_$_618b[7],GM_info[_$_618b[3]][_$_618b[7]]);setTimeout(update,2000)};function update(){$(_$_618b[11]+ GM_info[_$_618b[3]][_$_618b[7]]+ _$_618b[12]+ _$_618b[13]+ _$_618b[14]+ _$_618b[15])[_$_618b[10]](_$_618b[9]);$(_$_618b[18])[_$_618b[17]](function(){$(this)[_$_618b[16]]()})}var c=_$_618b[8];$(_$_618b[21])[_$_618b[17]](function(){setTimeout(function(){c= $(_$_618b[20])[_$_618b[19]]()},100)});$(_$_618b[30])[_$_618b[29]](_$_618b[17],function(){if($(_$_618b[23])[_$_618b[22]]()== _$_618b[24]){$(_$_618b[20])[_$_618b[19]](_$_618b[25]);$(_$_618b[9])[_$_618b[26]]();enter();enter()}else {$(_$_618b[20])[_$_618b[19]](_$_618b[27]+ $(_$_618b[23])[_$_618b[22]]()+ _$_618b[28]);$(_$_618b[9])[_$_618b[26]]();enter();enter()}});var down={};var spam=false;$(document)[_$_618b[45]](function(_0xDF7A){var _0xDFB1=(_0xDF7A[_$_618b[31]]?_0xDF7A[_$_618b[31]]:_0xDF7A[_$_618b[32]]);if(_0xDFB1== resp){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {$(_$_618b[36])[_$_618b[17]]()};down[_0xDFB1]= true}};if(_0xDFB1== shake){if(down[shake]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](_$_618b[37]);enter();enter();setTimeout(function(){spam= false},3000)}else {console[_$_618b[39]](_$_618b[38])}};down[shake]= true}};if(_0xDFB1== spin){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](_$_618b[40]);enter();enter();setTimeout(function(){spam= false},3000)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== flip){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](_$_618b[41]);enter();enter();setTimeout(function(){spam= false},3000)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== hrs){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](_$_618b[42]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== lvl){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](_$_618b[43]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== rnk){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](_$_618b[44]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== chat1){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](_$_618b[37]);enter();enter();setTimeout(function(){$(_$_618b[20])[_$_618b[19]](c+ msg1);enter();enter()},500);setTimeout(function(){spam= false},t+ 1000)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== chat2){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](c+ msg2);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== chat3){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](c+ msg3);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== chat4){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](c+ msg4);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== chat5){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](c+ msg5);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== chat6){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {if(!spam){spam= true;$(_$_618b[20])[_$_618b[19]](c+ msg6);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_618b[39]](_$_618b[38])}};down[_0xDFB1]= true}};if(_0xDFB1== dubl){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {split();setTimeout(split,SplitSpeed)};down[_0xDFB1]= true}};if(_0xDFB1== tripl){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed* 2)};down[_0xDFB1]= true}};if(_0xDFB1== mxsplt){if(down[_0xDFB1]== null){if($(_$_618b[35])[_$_618b[34]](_$_618b[33])){return true}else {var _0xDFE8=8;for(var _0xDF43=0;_0xDF43< _0xDFE8;_0xDF43++){setTimeout(function(){split()},_0xDF43* SplitSpeed)}};down[_0xDFB1]= true}};if(_0xDFB1== singleFood){if(down[_0xDFB1]== null){single();down[_0xDFB1]= true}}});$(document)[_$_618b[46]](function(_0xDF7A){var _0xDFB1=(_0xDF7A[_$_618b[31]]?_0xDF7A[_$_618b[31]]:_0xDF7A[_$_618b[32]]);down[_0xDFB1]= null});window[_$_618b[47]](_$_618b[45],keydown);window[_$_618b[47]](_$_618b[46],keyup);var EjectDown=false;var SplitSpeed=75;var FeedSpeed=25;var t=2000;function keydown(_0xDF7A){if(_0xDF7A[_$_618b[31]]== food&& EjectDown=== false){EjectDown= true;setTimeout(eject,FeedSpeed)}}function keyup(_0xDF7A){if(_0xDF7A[_$_618b[31]]== food){EjectDown= false}}function eject(){if(EjectDown){$(_$_618b[9])[_$_618b[49]]($[_$_618b[48]](_$_618b[45],{keyCode:87}));$(_$_618b[9])[_$_618b[49]]($[_$_618b[48]](_$_618b[46],{keyCode:87}));setTimeout(eject,FeedSpeed)}}function split(){$(_$_618b[9])[_$_618b[49]]($[_$_618b[48]](_$_618b[45],{keyCode:32}));$(_$_618b[9])[_$_618b[49]]($[_$_618b[48]](_$_618b[46],{keyCode:32}))}function enter(){$(_$_618b[9])[_$_618b[49]]($[_$_618b[48]](_$_618b[45],{keyCode:13}));$(_$_618b[9])[_$_618b[49]]($[_$_618b[48]](_$_618b[46],{keyCode:13}))}function single(){$(_$_618b[9])[_$_618b[49]]($[_$_618b[48]](_$_618b[45],{keyCode:87}));$(_$_618b[9])[_$_618b[49]]($[_$_618b[48]](_$_618b[46],{keyCode:87}))}
