// ==UserScript==
// @name         Agma.io test
// @namespace    http://agma.io/
// @version      1.0
// @description  Fast mass, fast splits, fast respawn, cell and chat commands, anti-spam
// @author       Heisenberg-(TheOldOne)
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
// @updateURL    https://github.com/OldAgario/Agma/raw/master/test.user.js
// @grant        GM.addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

GM.addStyle(`
/*Custom CSS by WiCKED*/
* {outline:0;}
#scorebox {margin-right: 0;height:auto;}
#statsContinue {position: unset;}
`);
alert('test');

//$('#megaholder').remove();
$('.featured-yt, #advertCenterPanel, #zoomItem, .tos').remove();
$('.low-margin').next().remove();
$('#agmaAdHref').parent().remove();
$('<br>').insertAfter($('#statsContinue').parent());
//END REMOVE SOME DIVS
