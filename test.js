// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      3.3
// @description  Fast mass, fast splits, fast respawn, cell and chat commands, anti-spam
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

var _$_d639=["\x0A\x2F\x2A\x43\x75\x73\x74\x6F\x6D\x20\x43\x53\x53\x20\x62\x79\x20\x48\x65\x69\x73\x65\x6E\x62\x65\x72\x67\x2A\x2F\x0A\x2A\x20\x7B\x6F\x75\x74\x6C\x69\x6E\x65\x3A\x30\x3B\x7D\x0A\x23\x75\x70\x64\x20\x7B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x39\x39\x39\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x20\x2E\x38\x29\x3B\x77\x69\x64\x74\x68\x3A\x34\x30\x30\x70\x78\x3B\x6D\x69\x6E\x2D\x68\x65\x69\x67\x68\x74\x3A\x31\x35\x30\x70\x78\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x31\x35\x70\x78\x3B\x62\x6F\x74\x74\x6F\x6D\x3A\x32\x30\x70\x78\x3B\x6C\x65\x66\x74\x3A\x32\x30\x70\x78\x3B\x7D\x0A\x23\x75\x70\x64\x20\x68\x34\x20\x7B\x63\x6F\x6C\x6F\x72\x3A\x77\x68\x69\x74\x65\x3B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x20\x30\x20\x31\x35\x70\x78\x3B\x7D\x0A\x23\x75\x70\x64\x20\x73\x70\x61\x6E\x3A\x66\x69\x72\x73\x74\x2D\x6F\x66\x2D\x74\x79\x70\x65\x20\x7B\x63\x6F\x6C\x6F\x72\x3A\x79\x65\x6C\x6C\x6F\x77\x3B\x7D\x0A\x23\x75\x70\x64\x20\x73\x70\x61\x6E\x20\x7B\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x3B\x7D\x0A\x23\x75\x70\x64\x20\x70\x20\x7B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x3B\x74\x65\x78\x74\x2D\x69\x6E\x64\x65\x6E\x74\x3A\x31\x35\x70\x78\x3B\x7D\x0A","\x61\x64\x64\x53\x74\x79\x6C\x65","\x61\x75\x74\x68\x6F\x72","\x73\x63\x72\x69\x70\x74","\x48\x65\x69\x73\x65\x6E\x62\x65\x72\x67\x2D\x28\x54\x68\x65\x4F\x6C\x64\x4F\x6E\x65\x29","\x6E\x61\x6D\x65","\x41\x67\x6D\x61\x2E\x69\x6F\x20\x42\x41\x53\x49\x43\x20\x47\x48","\x76\x65\x72\x73\x69\x6F\x6E","","\x62\x6F\x64\x79","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x75\x70\x64\x22\x3E\x3C\x68\x34\x3E\u26A0\uFE0F\x20\x53\x63\x72\x69\x70\x74\x20\x75\x70\x64\x61\x74\x65\x3A\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20","\x3C\x2F\x68\x34\x3E\x3C\x73\x70\x61\x6E\x3E\x43\x6C\x69\x63\x6B\x20\x68\x65\x72\x65\x20\x74\x6F\x20\x64\x69\x73\x6D\x69\x73\x73\x20\x74\x68\x69\x73\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x61\x6E\x64\x20\x63\x68\x65\x63\x6B\x20\x79\x6F\x75\x72\x20\x6B\x65\x79\x20\x69\x6E\x70\x75\x74\x20\x73\x65\x74\x74\x69\x6E\x67\x73\x21\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x3E\x43\x68\x61\x6E\x67\x65\x73\x3A\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x70\x3E\x2D\x20\x79\x6F\x75\x72\x20\x73\x65\x74\x74\x69\x6E\x67\x73\x20\x77\x69\x6C\x6C\x20\x6E\x6F\x74\x20\x62\x65\x20\x6C\x6F\x73\x74\x20\x61\x66\x74\x65\x72\x20\x61\x6E\x20\x75\x70\x64\x61\x74\x65\x3C\x2F\x70\x3E","\x3C\x2F\x64\x69\x76\x3E","\x66\x61\x64\x65\x4F\x75\x74","\x63\x6C\x69\x63\x6B","\x23\x75\x70\x64","\x76\x61\x6C","\x23\x63\x68\x74\x62\x6F\x78","\x23\x63\x68\x74\x54\x61\x62\x73","\x74\x65\x78\x74","\x23\x63\x6F\x6E\x74\x65\x78\x74\x50\x6C\x61\x79\x65\x72\x4E\x61\x6D\x65","\x28\x6E\x6F\x20\x70\x6C\x61\x79\x65\x72\x20\x73\x65\x6C\x65\x63\x74\x65\x64\x29","\x48\x69\x20\x65\x76\x65\x72\x79\x6F\x6E\x65\x21","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x48\x69\x2C\x20","\x21","\x6F\x6E","\x23\x63\x6F\x6E\x74\x65\x78\x74\x50\x6C\x61\x79\x65\x72","\x6B\x65\x79\x43\x6F\x64\x65","\x77\x68\x69\x63\x68","\x3A\x66\x6F\x63\x75\x73","\x69\x73","\x69\x6E\x70\x75\x74","\x69\x6D\x67\x5B\x74\x69\x74\x6C\x65\x7C\x3D\x27\x52\x65\x73\x70\x61\x77\x6E\x27\x5D","\x73\x68\x61\x6B\x65","\x53\x70\x61\x6D\x21","\x6C\x6F\x67","\x73\x70\x69\x6E","\x66\x6C\x69\x70","\x2F\x68\x6F\x75\x72\x73","\x2F\x6C\x65\x76\x65\x6C","\x2F\x72\x61\x6E\x6B","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x75\x70","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x45\x76\x65\x6E\x74","\x74\x72\x69\x67\x67\x65\x72"];GM[_$_d639[1]](_$_d639[0]);if(GM_info[_$_d639[3]][_$_d639[2]]!= _$_d639[4]){return false};if(GM_info[_$_d639[3]][_$_d639[5]]!= _$_d639[6]){return false};if(GM_getValue(_$_d639[7],_$_d639[8])< GM_info[_$_d639[3]][_$_d639[7]]){GM_setValue(_$_d639[7],GM_info[_$_d639[3]][_$_d639[7]]);setTimeout(update,2000)};function update(){$(_$_d639[11]+ GM_info[_$_d639[3]][_$_d639[7]]+ _$_d639[12]+ _$_d639[13]+ _$_d639[14]+ _$_d639[15])[_$_d639[10]](_$_d639[9]);$(_$_d639[18])[_$_d639[17]](function(){$(this)[_$_d639[16]]()})}if(shake== food){shake= 66};if(spin== food){spin= 78};if(flip== food){flip= 77};var c=_$_d639[8];$(_$_d639[21])[_$_d639[17]](function(){setTimeout(function(){c= $(_$_d639[20])[_$_d639[19]]()},100)});$(_$_d639[30])[_$_d639[29]](_$_d639[17],function(){if($(_$_d639[23])[_$_d639[22]]()== _$_d639[24]){$(_$_d639[20])[_$_d639[19]](_$_d639[25]);$(_$_d639[9])[_$_d639[26]]();enter();enter()}else {$(_$_d639[20])[_$_d639[19]](_$_d639[27]+ $(_$_d639[23])[_$_d639[22]]()+ _$_d639[28]);$(_$_d639[9])[_$_d639[26]]();enter();enter()}});var down={};var spam=false;$(document)[_$_d639[45]](function(_0x2E41){var _0x2E82=(_0x2E41[_$_d639[31]]?_0x2E41[_$_d639[31]]:_0x2E41[_$_d639[32]]);if(_0x2E82== resp){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {$(_$_d639[36])[_$_d639[17]]()};down[_0x2E82]= true}};if(_0x2E82== shake){if(down[shake]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](_$_d639[37]);enter();enter();setTimeout(function(){spam= false},3000)}else {console[_$_d639[39]](_$_d639[38])}};down[shake]= true}};if(_0x2E82== spin){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](_$_d639[40]);enter();enter();setTimeout(function(){spam= false},3000)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== flip){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](_$_d639[41]);enter();enter();setTimeout(function(){spam= false},3000)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== hrs){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](_$_d639[42]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== lvl){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](_$_d639[43]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== rnk){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](_$_d639[44]);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== chat1){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](_$_d639[37]);enter();enter();setTimeout(function(){$(_$_d639[20])[_$_d639[19]](c+ msg1);enter();enter()},500);setTimeout(function(){spam= false},t+ 1000)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== chat2){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](c+ msg2);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== chat3){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](c+ msg3);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== chat4){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](c+ msg4);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== chat5){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](c+ msg5);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== chat6){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {if(!spam){spam= true;$(_$_d639[20])[_$_d639[19]](c+ msg6);enter();enter();setTimeout(function(){spam= false},t)}else {console[_$_d639[39]](_$_d639[38])}};down[_0x2E82]= true}};if(_0x2E82== dubl){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {split();setTimeout(split,SplitSpeed)};down[_0x2E82]= true}};if(_0x2E82== tripl){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {split();setTimeout(split,SplitSpeed);setTimeout(split,SplitSpeed* 2)};down[_0x2E82]= true}};if(_0x2E82== mxsplt){if(down[_0x2E82]== null){if($(_$_d639[35])[_$_d639[34]](_$_d639[33])){return true}else {var _0x2EC3=8;for(var _0x2E00=0;_0x2E00< _0x2EC3;_0x2E00++){setTimeout(function(){split()},_0x2E00* SplitSpeed)}};down[_0x2E82]= true}};if(_0x2E82== singleFood){if(down[_0x2E82]== null){single();down[_0x2E82]= true}}});$(document)[_$_d639[46]](function(_0x2E41){var _0x2E82=(_0x2E41[_$_d639[31]]?_0x2E41[_$_d639[31]]:_0x2E41[_$_d639[32]]);down[_0x2E82]= null});window[_$_d639[47]](_$_d639[45],keydown);window[_$_d639[47]](_$_d639[46],keyup);var EjectDown=false;var SplitSpeed=75;var FeedSpeed=25;var t=2000;function keydown(_0x2E41){if(_0x2E41[_$_d639[31]]== food&& EjectDown=== false){EjectDown= true;setTimeout(eject,FeedSpeed)}}function keyup(_0x2E41){if(_0x2E41[_$_d639[31]]== food){EjectDown= false}}function eject(){if(EjectDown){$(_$_d639[9])[_$_d639[49]]($[_$_d639[48]](_$_d639[45],{keyCode:87}));$(_$_d639[9])[_$_d639[49]]($[_$_d639[48]](_$_d639[46],{keyCode:87}));setTimeout(eject,FeedSpeed)}}function split(){$(_$_d639[9])[_$_d639[49]]($[_$_d639[48]](_$_d639[45],{keyCode:32}));$(_$_d639[9])[_$_d639[49]]($[_$_d639[48]](_$_d639[46],{keyCode:32}))}function enter(){$(_$_d639[9])[_$_d639[49]]($[_$_d639[48]](_$_d639[45],{keyCode:13}));$(_$_d639[9])[_$_d639[49]]($[_$_d639[48]](_$_d639[46],{keyCode:13}))}function single(){$(_$_d639[9])[_$_d639[49]]($[_$_d639[48]](_$_d639[45],{keyCode:87}));$(_$_d639[9])[_$_d639[49]]($[_$_d639[48]](_$_d639[46],{keyCode:87}))}
