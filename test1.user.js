// ==UserScript==
// @name         Agma.io test
// @namespace    http://agma.io/
// @version      1.1
// @description  Fast mass, fast splits, fast respawn, cell and chat commands, anti-spam
// @author       Heisenberg-(TheOldOne)
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
// @updateURL    https://github.com/OldAgario/Agma/raw/master/test.user.js

// @run-at       document-end
// ==/UserScript==


alert('test');

//$('#megaholder').remove();
$('.featured-yt, #advertCenterPanel, #zoomItem, .tos').remove();
$('.low-margin').next().remove();
$('#agmaAdHref').parent().remove();
$('<br>').insertAfter($('#statsContinue').parent());
//END REMOVE SOME DIVS
