// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      2.2
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

var _$_c9fb=["\x61\x75\x74\x68\x6F\x72","\x73\x63\x72\x69\x70\x74","\x48\x65\x69\x73\x65\x6E\x62\x65\x72\x67","\x76\x65\x72\x73\x69\x6F\x6E","","\x62\x6F\x64\x79","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x75\x70\x64\x22\x3E\x3C\x68\x34\x3E\u26A0\uFE0F\x20\x53\x63\x72\x69\x70\x74\x20\x75\x70\x64\x61\x74\x65\x3A\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20","\x3C\x2F\x68\x34\x3E\x3C\x73\x70\x61\x6E\x3E\x43\x6C\x69\x63\x6B\x20\x68\x65\x72\x65\x20\x74\x6F\x20\x64\x69\x73\x6D\x69\x73\x73\x20\x74\x68\x69\x73\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x61\x6E\x64\x20\x63\x68\x65\x63\x6B\x20\x79\x6F\x75\x72\x20\x6B\x65\x79\x20\x69\x6E\x70\x75\x74\x20\x73\x65\x74\x74\x69\x6E\x67\x73\x21\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x3E\x43\x68\x61\x6E\x67\x65\x73\x3A\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x70\x3E\x2D\x20\x6D\x69\x6E\x6F\x72\x20\x66\x69\x78\x65\x73\x3C\x2F\x70\x3E","\x3C\x2F\x64\x69\x76\x3E","\x66\x61\x64\x65\x4F\x75\x74","\x63\x6C\x69\x63\x6B","\x23\x75\x70\x64","\x39\x39\x39","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x20\x2E\x38\x29","\x34\x30\x30\x70\x78","\x31\x35\x30\x70\x78","\x31\x35\x70\x78","\x32\x30\x70\x78","\x63\x73\x73","\x77\x68\x69\x74\x65","\x30\x20\x30\x20\x31\x35\x70\x78","\x23\x75\x70\x64\x20\x68\x34","\x63\x6F\x6C\x6F\x72","\x79\x65\x6C\x6C\x6F\x77","\x23\x75\x70\x64\x20\x73\x70\x61\x6E\x3A\x66\x69\x72\x73\x74","\x64\x69\x73\x70\x6C\x61\x79","\x62\x6C\x6F\x63\x6B","\x23\x75\x70\x64\x20\x73\x70\x61\x6E","\x30","\x23\x75\x70\x64\x20\x70","\x74\x61\x72\x67\x65\x74","\x23\x63\x68\x74\x54\x61\x62\x50\x61\x72\x74\x79","\x69\x73","\x2F\x70\x61\x72\x74\x79\x20","\x23\x63\x68\x74\x54\x61\x62\x73","\x6B\x65\x79\x43\x6F\x64\x65","\x77\x68\x69\x63\x68","\x3A\x66\x6F\x63\x75\x73","\x69\x6E\x70\x75\x74","\x69\x6D\x67\x5B\x74\x69\x74\x6C\x65\x7C\x3D\x27\x52\x65\x73\x70\x61\x77\x6E\x27\x5D","\x73\x68\x61\x6B\x65","\x76\x61\x6C","\x23\x63\x68\x74\x62\x6F\x78","\x53\x70\x61\x6D\x21","\x6C\x6F\x67","\x73\x70\x69\x6E","\x66\x6C\x69\x70","\x2F\x68\x6F\x75\x72\x73","\x2F\x6C\x65\x76\x65\x6C","\x2F\x72\x61\x6E\x6B","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x75\x70","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x45\x76\x65\x6E\x74","\x74\x72\x69\x67\x67\x65\x72"];if(GM_info[_$_c9fb[1]][_$_c9fb[0]]!= _$_c9fb[2]){return false};if(GM_getValue(_$_c9fb[3],_$_c9fb[4])< GM_info[_$_c9fb[1]][_$_c9fb[3]]){GM_setValue(_$_c9fb[3],GM_info[_$_c9fb[1]][_$_c9fb[3]]);setTimeout(update,2000)};function update(){$(_$_c9fb[7]+ GM_info[_$_c9fb[1]][_$_c9fb[3]]+ _$_c9fb[8]+ _$_c9fb[9]+ _$_c9fb[10]+ _$_c9fb[11])[_$_c9fb[6]](_$_c9fb[5]);$(_$_c9fb[14])[_$_c9fb[13]](function(){$(this)[_$_c9fb[12]]()});$(_$_c9fb[14])[_$_c9fb[22]]({"\x7A\x2D\x69\x6E\x64\x65\x78":_$_c9fb[15],"\x70\x6F\x73\x69\x74\x69\x6F\x6E":_$_c9fb[16],"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64":_$_c9fb[17],"\x77\x69\x64\x74\x68":_$_c9fb[18],"\x6D\x69\x6E\x2D\x68\x65\x69\x67\x68\x74":_$_c9fb[19],"\x70\x61\x64\x64\x69\x6E\x67":_$_c9fb[20],"\x62\x6F\x74\x74\x6F\x6D":_$_c9fb[21],"\x6C\x65\x66\x74":_$_c9fb[21]});$(_$_c9fb[25])[_$_c9fb[22]]({"\x63\x6F\x6C\x6F\x72":_$_c9fb[23],"\x6D\x61\x72\x67\x69\x6E":_$_c9fb[24]});$(_$_c9fb[28])[_$_c9fb[22]](_$_c9fb[26],_$_c9fb[27]);$(_$_c9fb[31])[_$_c9fb[22]](_$_c9fb[29],_$_c9fb[30]);$(_$_c9fb[33])[_$_c9fb[22]]({"\x6D\x61\x72\x67\x69\x6E":_$_c9fb[32],"\x74\x65\x78\x74\x2D\x69\x6E\x64\x65\x6E\x74":_$_c9fb[20]})}var c=_$_c9fb[4];$(_$_c9fb[38])[_$_c9fb[13]](function(_0x23A8D){var _0x23AA4=$(_0x23A8D[_$_c9fb[34]]);if(_0x23AA4[_$_c9fb[36]](_$_c9fb[35])){c= _$_c9fb[37]}else {c= _$_c9fb[4]}});var down={};var spam=false;$(document)[_$_c9fb[54]](function(_0x23A8D){var _0x23AD2=(_0x23A8D[_$_c9fb[39]]?_0x23A8D[_$_c9fb[39]]:_0x23A8D[_$_c9fb[40]]);if(_0x23AD2== resp){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {$(_$_c9fb[43])[_$_c9fb[13]]()};down[_0x23AD2]= true}};if(_0x23AD2== shake){if(down[shake]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](_$_c9fb[44]);enter();enter();setTimeout(function(){spam= false},1800)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[shake]= true}};if(_0x23AD2== spin){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](_$_c9fb[49]);enter();enter();setTimeout(function(){spam= false},1800)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== flip){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](_$_c9fb[50]);enter();enter();setTimeout(function(){spam= false},2800)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== hrs){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](_$_c9fb[51]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== lvl){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](_$_c9fb[52]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== rnk){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](_$_c9fb[53]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== chat1){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](_$_c9fb[44]);enter();enter();setTimeout(function(){$(_$_c9fb[46])[_$_c9fb[45]](c+ msg1);enter();enter()},500);setTimeout(function(){spam= false},t+ 1000)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== chat2){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](c+ msg2);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== chat3){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](c+ msg3);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== chat4){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](c+ msg4);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== chat5){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {if(!spam){spam= true;$(_$_c9fb[46])[_$_c9fb[45]](c+ msg5);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_c9fb[48]](_$_c9fb[47])}};down[_0x23AD2]= true}};if(_0x23AD2== dubl){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {split();setTimeout(split,SplitSpeed)};down[_0x23AD2]= true}};if(_0x23AD2== tripl){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed* 2)};down[_0x23AD2]= true}};if(_0x23AD2== mxsplt){if(down[_0x23AD2]== null){if($(_$_c9fb[42])[_$_c9fb[36]](_$_c9fb[41])){return true}else {var _0x23AE9=8;for(var _0x23ABB=0;_0x23ABB< _0x23AE9;_0x23ABB++){setTimeout(function(){split()},_0x23ABB* SplitSpeed)}};down[_0x23AD2]= true}};if(_0x23AD2== singleFood){if(down[_0x23AD2]== null){single();down[_0x23AD2]= true}}});$(document)[_$_c9fb[55]](function(_0x23A8D){var _0x23AD2=(_0x23A8D[_$_c9fb[39]]?_0x23A8D[_$_c9fb[39]]:_0x23A8D[_$_c9fb[40]]);down[_0x23AD2]= null});window[_$_c9fb[56]](_$_c9fb[54],keydown);window[_$_c9fb[56]](_$_c9fb[55],keyup);var EjectDown=false;var SplitSpeed=75;var FeedSpeed=25;var t=3000;function keydown(_0x23A8D){if(_0x23A8D[_$_c9fb[39]]== food&& EjectDown=== false){EjectDown= true;setTimeout(eject,FeedSpeed)}}function keyup(_0x23A8D){if(_0x23A8D[_$_c9fb[39]]== food){EjectDown= false}}function eject(){if(EjectDown){$(_$_c9fb[5])[_$_c9fb[58]]($[_$_c9fb[57]](_$_c9fb[54],{keyCode:87}));$(_$_c9fb[5])[_$_c9fb[58]]($[_$_c9fb[57]](_$_c9fb[55],{keyCode:87}));setTimeout(eject,FeedSpeed)}}function split(){$(_$_c9fb[5])[_$_c9fb[58]]($[_$_c9fb[57]](_$_c9fb[54],{keyCode:32}));$(_$_c9fb[5])[_$_c9fb[58]]($[_$_c9fb[57]](_$_c9fb[55],{keyCode:32}))}function enter(){$(_$_c9fb[5])[_$_c9fb[58]]($[_$_c9fb[57]](_$_c9fb[54],{keyCode:13}));$(_$_c9fb[5])[_$_c9fb[58]]($[_$_c9fb[57]](_$_c9fb[55],{keyCode:13}))}function single(){$(_$_c9fb[5])[_$_c9fb[58]]($[_$_c9fb[57]](_$_c9fb[54],{keyCode:87}));$(_$_c9fb[5])[_$_c9fb[58]]($[_$_c9fb[57]](_$_c9fb[55],{keyCode:87}))}
