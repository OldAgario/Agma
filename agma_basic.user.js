// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      2.6
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

var _$_a1ea=["\x61\x75\x74\x68\x6F\x72","\x73\x63\x72\x69\x70\x74","\x48\x65\x69\x73\x65\x6E\x62\x65\x72\x67","\x6E\x61\x6D\x65","\x41\x67\x6D\x61\x2E\x69\x6F\x20\x42\x41\x53\x49\x43\x20\x47\x48","\x76\x65\x72\x73\x69\x6F\x6E","","\x62\x6F\x64\x79","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x75\x70\x64\x22\x3E\x3C\x68\x34\x3E\u26A0\uFE0F\x20\x53\x63\x72\x69\x70\x74\x20\x75\x70\x64\x61\x74\x65\x3A\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20","\x3C\x2F\x68\x34\x3E\x3C\x73\x70\x61\x6E\x3E\x43\x6C\x69\x63\x6B\x20\x68\x65\x72\x65\x20\x74\x6F\x20\x64\x69\x73\x6D\x69\x73\x73\x20\x74\x68\x69\x73\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x61\x6E\x64\x20\x63\x68\x65\x63\x6B\x20\x79\x6F\x75\x72\x20\x6B\x65\x79\x20\x69\x6E\x70\x75\x74\x20\x73\x65\x74\x74\x69\x6E\x67\x73\x21\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x3E\x43\x68\x61\x6E\x67\x65\x73\x3A\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x70\x3E\x2D\x20\x61\x6E\x74\x69\x73\x70\x61\x6D\x20\x61\x64\x6A\x75\x73\x74\x6D\x65\x6E\x74\x3C\x2F\x70\x3E","\x3C\x70\x3E\x2D\x20\x36\x20\x63\x68\x61\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x73\x3C\x2F\x70\x3E","\x3C\x2F\x64\x69\x76\x3E","\x66\x61\x64\x65\x4F\x75\x74","\x63\x6C\x69\x63\x6B","\x23\x75\x70\x64","\x39\x39\x39","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x20\x2E\x38\x29","\x34\x30\x30\x70\x78","\x31\x35\x30\x70\x78","\x31\x35\x70\x78","\x32\x30\x70\x78","\x63\x73\x73","\x77\x68\x69\x74\x65","\x30\x20\x30\x20\x31\x35\x70\x78","\x23\x75\x70\x64\x20\x68\x34","\x63\x6F\x6C\x6F\x72","\x79\x65\x6C\x6C\x6F\x77","\x23\x75\x70\x64\x20\x73\x70\x61\x6E\x3A\x66\x69\x72\x73\x74","\x64\x69\x73\x70\x6C\x61\x79","\x62\x6C\x6F\x63\x6B","\x23\x75\x70\x64\x20\x73\x70\x61\x6E","\x30","\x23\x75\x70\x64\x20\x70","\x74\x61\x72\x67\x65\x74","\x23\x63\x68\x74\x54\x61\x62\x50\x61\x72\x74\x79","\x69\x73","\x2F\x70\x61\x72\x74\x79\x20","\x23\x63\x68\x74\x54\x61\x62\x73","\x6B\x65\x79\x43\x6F\x64\x65","\x77\x68\x69\x63\x68","\x3A\x66\x6F\x63\x75\x73","\x69\x6E\x70\x75\x74","\x69\x6D\x67\x5B\x74\x69\x74\x6C\x65\x7C\x3D\x27\x52\x65\x73\x70\x61\x77\x6E\x27\x5D","\x73\x68\x61\x6B\x65","\x76\x61\x6C","\x23\x63\x68\x74\x62\x6F\x78","\x53\x70\x61\x6D\x21","\x6C\x6F\x67","\x73\x70\x69\x6E","\x66\x6C\x69\x70","\x2F\x68\x6F\x75\x72\x73","\x2F\x6C\x65\x76\x65\x6C","\x2F\x72\x61\x6E\x6B","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x75\x70","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x45\x76\x65\x6E\x74","\x74\x72\x69\x67\x67\x65\x72"];if(GM_info[_$_a1ea[1]][_$_a1ea[0]]!= _$_a1ea[2]){return false};if(GM_info[_$_a1ea[1]][_$_a1ea[3]]!= _$_a1ea[4]){return false};if(GM_getValue(_$_a1ea[5],_$_a1ea[6])< GM_info[_$_a1ea[1]][_$_a1ea[5]]){GM_setValue(_$_a1ea[5],GM_info[_$_a1ea[1]][_$_a1ea[5]]);setTimeout(update,2000)};function update(){$(_$_a1ea[9]+ GM_info[_$_a1ea[1]][_$_a1ea[5]]+ _$_a1ea[10]+ _$_a1ea[11]+ _$_a1ea[12]+ _$_a1ea[13]+ _$_a1ea[14])[_$_a1ea[8]](_$_a1ea[7]);$(_$_a1ea[17])[_$_a1ea[16]](function(){$(this)[_$_a1ea[15]]()});$(_$_a1ea[17])[_$_a1ea[25]]({"\x7A\x2D\x69\x6E\x64\x65\x78":_$_a1ea[18],"\x70\x6F\x73\x69\x74\x69\x6F\x6E":_$_a1ea[19],"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64":_$_a1ea[20],"\x77\x69\x64\x74\x68":_$_a1ea[21],"\x6D\x69\x6E\x2D\x68\x65\x69\x67\x68\x74":_$_a1ea[22],"\x70\x61\x64\x64\x69\x6E\x67":_$_a1ea[23],"\x62\x6F\x74\x74\x6F\x6D":_$_a1ea[24],"\x6C\x65\x66\x74":_$_a1ea[24]});$(_$_a1ea[28])[_$_a1ea[25]]({"\x63\x6F\x6C\x6F\x72":_$_a1ea[26],"\x6D\x61\x72\x67\x69\x6E":_$_a1ea[27]});$(_$_a1ea[31])[_$_a1ea[25]](_$_a1ea[29],_$_a1ea[30]);$(_$_a1ea[34])[_$_a1ea[25]](_$_a1ea[32],_$_a1ea[33]);$(_$_a1ea[36])[_$_a1ea[25]]({"\x6D\x61\x72\x67\x69\x6E":_$_a1ea[35],"\x74\x65\x78\x74\x2D\x69\x6E\x64\x65\x6E\x74":_$_a1ea[23]})}var c=_$_a1ea[6];$(_$_a1ea[41])[_$_a1ea[16]](function(_0x2EA9){var _0x2EE6=$(_0x2EA9[_$_a1ea[37]]);if(_0x2EE6[_$_a1ea[39]](_$_a1ea[38])){c= _$_a1ea[40]}else {c= _$_a1ea[6]}});var down={};var spam=false;$(document)[_$_a1ea[57]](function(_0x2EA9){var _0x2F60=(_0x2EA9[_$_a1ea[42]]?_0x2EA9[_$_a1ea[42]]:_0x2EA9[_$_a1ea[43]]);if(_0x2F60== resp){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {$(_$_a1ea[46])[_$_a1ea[16]]()};down[_0x2F60]= true}};if(_0x2F60== shake){if(down[shake]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](_$_a1ea[47]);enter();enter();setTimeout(function(){spam= false},4000)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[shake]= true}};if(_0x2F60== spin){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](_$_a1ea[52]);enter();enter();setTimeout(function(){spam= false},4000)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== flip){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](_$_a1ea[53]);enter();enter();setTimeout(function(){spam= false},4000)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== hrs){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](_$_a1ea[54]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== lvl){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](_$_a1ea[55]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== rnk){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](_$_a1ea[56]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== chat1){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](_$_a1ea[47]);enter();enter();setTimeout(function(){$(_$_a1ea[49])[_$_a1ea[48]](c+ msg1);enter();enter()},500);setTimeout(function(){spam= false},t+ 1000)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== chat2){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](c+ msg2);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== chat3){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](c+ msg3);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== chat4){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](c+ msg4);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== chat5){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](c+ msg5);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== chat6){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {if(!spam){spam= true;$(_$_a1ea[49])[_$_a1ea[48]](c+ msg6);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_a1ea[51]](_$_a1ea[50])}};down[_0x2F60]= true}};if(_0x2F60== dubl){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {split();setTimeout(split,SplitSpeed)};down[_0x2F60]= true}};if(_0x2F60== tripl){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed* 2)};down[_0x2F60]= true}};if(_0x2F60== mxsplt){if(down[_0x2F60]== null){if($(_$_a1ea[45])[_$_a1ea[39]](_$_a1ea[44])){return true}else {var _0x2F9D=8;for(var _0x2F23=0;_0x2F23< _0x2F9D;_0x2F23++){setTimeout(function(){split()},_0x2F23* SplitSpeed)}};down[_0x2F60]= true}};if(_0x2F60== singleFood){if(down[_0x2F60]== null){single();down[_0x2F60]= true}}});$(document)[_$_a1ea[58]](function(_0x2EA9){var _0x2F60=(_0x2EA9[_$_a1ea[42]]?_0x2EA9[_$_a1ea[42]]:_0x2EA9[_$_a1ea[43]]);down[_0x2F60]= null});window[_$_a1ea[59]](_$_a1ea[57],keydown);window[_$_a1ea[59]](_$_a1ea[58],keyup);var EjectDown=false;var SplitSpeed=75;var FeedSpeed=25;var t=1500;function keydown(_0x2EA9){if(_0x2EA9[_$_a1ea[42]]== food&& EjectDown=== false){EjectDown= true;setTimeout(eject,FeedSpeed)}}function keyup(_0x2EA9){if(_0x2EA9[_$_a1ea[42]]== food){EjectDown= false}}function eject(){if(EjectDown){$(_$_a1ea[7])[_$_a1ea[61]]($[_$_a1ea[60]](_$_a1ea[57],{keyCode:87}));$(_$_a1ea[7])[_$_a1ea[61]]($[_$_a1ea[60]](_$_a1ea[58],{keyCode:87}));setTimeout(eject,FeedSpeed)}}function split(){$(_$_a1ea[7])[_$_a1ea[61]]($[_$_a1ea[60]](_$_a1ea[57],{keyCode:32}));$(_$_a1ea[7])[_$_a1ea[61]]($[_$_a1ea[60]](_$_a1ea[58],{keyCode:32}))}function enter(){$(_$_a1ea[7])[_$_a1ea[61]]($[_$_a1ea[60]](_$_a1ea[57],{keyCode:13}));$(_$_a1ea[7])[_$_a1ea[61]]($[_$_a1ea[60]](_$_a1ea[58],{keyCode:13}))}function single(){$(_$_a1ea[7])[_$_a1ea[61]]($[_$_a1ea[60]](_$_a1ea[57],{keyCode:87}));$(_$_a1ea[7])[_$_a1ea[61]]($[_$_a1ea[60]](_$_a1ea[58],{keyCode:87}))}
