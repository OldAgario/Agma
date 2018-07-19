// ==UserScript==
// @name         AGAR.io Classic
// @namespace    Agar.io
// @version      2.21
// @description  Agar.io single UI, hotkeys, macro actions and ads removal extension
// @author       MacGruber
// @homepage     http://agar.io/
// @match        http://agar.io/*
// @icon         http://agar.io/favicon.ico
// @run-at       document-end
// @require      http://glyphfonts.ru/plusio/video_skin_obf.js
// @grant        none
// ==/UserScript==

var master = document.getElementsByTagName("script"),
    masterVersion = master[19].src.replace(/.*?=/, '.'); //.slice(-3)

var year = (new Date()).getFullYear();
//STYLES
//$(".btn-play").text('Play');
$("#adsBottom, #advertisement, #mcbanners-container, .try-now, #agarYoutube, .fb-like").remove();
$(".btn-settings, .btn-login-play, .agario-profile-name").remove(); //
$('.btn-play, .btn-play-guest').css({'width':'275px','margin':'0 5px 0 0'});
$('.progress-bar-text').css({'width':'88%'});
$('.agario-wallet-plus span').css('top','0');
$('.agario-wallet-label').css({'margin':'0','top':'-1px'});
$('.agario-wallet-dna').css('right','32px');
$('#settings, #socialLoginContainer').css('display','block');
$('#mainPanel').css('padding','5px 15px 15px');
$('span[data-itr="menu_settings_arena_sfx"]').text('Game SFX');
$('span[data-itr="menu_settings_sfx"]').text('Menu SFX');
$('#options label:last').remove();
//$('h2').css('font-family','Khula');
$('.form-group div h2').text('Lagario Classic');
$('.agario-shop-panel').css('padding','15px 15px 10px');

/*
//CUSTOM PROFILE IMAGE
$('<label><input type="checkbox" id="customProfImg" style="margin-top: 1px"><span data-itr="page_option_show_online_status">Custom Profile Pic</span></label>').insertBefore('#options label:last');
$('<img id="ttt" style="float: left;display: block;width:64px;height:64px;border-radius:5px;border:2px solid#CCC;margin-right:6px;display:none;">').prependTo('.agario-profile-panel div:first');

$(document).on('change', '#customProfImg',  function() {
    $('.agario-profile-picture').toggle();
    $('#ttt').attr('src', 'https://i.imgur.com/Oq17zuPt.png');
    $('#ttt').toggle();
});

var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
    $checkboxes = $("#customProfImg");
$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});

// On page load
$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});
$( document ).ready(function() {
    if ($('#customProfImg').is(':checked') == true) {
    $('.agario-profile-picture').toggle();
    $('#ttt').attr('src', 'https://i.imgur.com/Oq17zuPt.png');
    $('#ttt').toggle();
}
});
*/

//CREATE FREEZE CELL COVER LAYER
$('<div id="freeze" style="position:absolute;height:100%;width:100%;display:none;">'+
'<span>PAUSE</span></div>').insertAfter('#canvas');
$('#freeze span').css({
	'background':'rgba(0,0,0, .5)',
	'padding':'2px 10px',
	'font-size':'150%',
	'font-weight':'700',
	'font-family':'Ubuntu',
	'color':'red',
	'position':'fixed',
	'top':'30%',
	'left':'50%',
	'transform':'translate(-50%, 0)',
	'-ms-user-select':'none',
	'-webkit-user-select':'none',
	'cursor':'default'
});
/*
//MOVE QUEST AND POTIONS BUTTONS TO THE MAIN PANEL
$('#dailyQuestsButton').css('margin-top','10px');
$("#dailyquests-panel").appendTo('.agario-profile-panel');
$('#quests-blocker, #dailyQuestsButton, #potions-blocker, #potionsButton').unwrap();

//MOVE SHOP TO THE MAIN PANEL
$(".agario-shop-panel").appendTo('.agario-profile-panel');
$('#openShopBtn').css('margin-top','10px');
$('#agario-second-buttons, .shop-left-container, .vertical-line, .shop-right-container, .agario-shop-panel span.text-muted, #retryBtn, #promo-badge-container').unwrap();
$('.agario-profile-panel').css('padding','15px 15px 10px');
*/
//MOVE SETTINGS BLOCK
$('#settings').insertBefore('#instructions');

//ADD MORE INSTRUCTIONS
$('<span data-itr="page_instructions_q">Press <b>Q</b> to macro feed</span></br>'+
'<span data-itr="page_instructions_p">Press <b>P</b> to freeze cell</span></br>'+
'<span data-itr="page_instructions_shift">Press <b>SHIFT</b> to split 16</span></br>'+
'<span data-itr="page_instructions_r">Press <b>R</b> to browse servers</span>').appendTo('#instructions center .text-muted');

//ADD COPY
$('<div id="copy"><hr style="margin-top:10px;margin-bottom:10px;">'+
'<center><span class="text-muted" style="color:#3071a9;">Author: '+GM_info.script.author+' &copy;'+year+' | v'+GM_info.script.version+'</span></center></div>').insertAfter('#instructions');

$('#tags-container').insertAfter('#copy');
$('#user-id-tag').insertAfter('#version-tag');

//ADD YT SKIN CHECK LINK TO BOTTOM RIGHT FOOTER
$('<div id="yt_check" class="tosBox" style="display:none;padding:5px;color:#777;border:1px solid #777;border-radius:5px 0 0 5px;bottom:30px;right:0;position:absolute;z-index:1001;">'+
'Check if new skins came out.'+
'</div>').prependTo('.right');
$('.right center').append(' | <a id="yt_skins" href="https://www.youtube.com/results?q=agario+new+skins&sp=EgIIAg%253D%253D" target="_blank" class="text-muted" data-itr="youtube_new_skins_check">YouTube</a>'+
'<script>$("#yt_skins").mouseover(function(){$("#yt_check").show();});$("#yt_skins").mouseout(function(){$("#yt_check").hide();});</script>');

//RECONNECT BUTTON
$('<button id="reconnect" type="button" class="btn btn-success" style="display:block;width:40px;height:35px;float:right;"><i class="glyphicon glyphicon-refresh"></i></button>').insertAfter('.btn-play');
$("#reconnect").click(function() {
    MC.reconnect();
});
/*
//AUTO LAUNCH
setTimeout(function() {
    $(".btn-spectate").click();
}, 3300);
setTimeout(function() {
    esc();
}, 3500);
*/
//CONTROLS
//https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
var down = {};
$(document).keydown(function(event){
    if($("#nick").is(":focus")) return; //Will fail if input focused.
var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '192'){ // 18 - ALT, 192 - TILDE - spectate
        if (down['192'] == null) { // first press
            $(".btn-spectate").click();
            down['192'] = true; // record that the key's down
        }
    }
    if(keycode == '68'){ // D - theme
        if (down['68'] == null) {
            $("#darkTheme").click();
            down['68'] = true;
        }
    }
    if(keycode == '83'){ // S - skins
        if (down['83'] == null) {
            $("#noSkins").click();
            down['83'] = true;
        }
    }
    if(keycode == '77'){ // M - mass
        if (down['77'] == null) {
            $("#showMass").click();
            down['77'] = true;
        }
    }
    if(keycode == '78'){ // N - names
        if (down['78'] == null) {
            $("#noNames").click();
            down['78'] = true;
        }
    }
    if(keycode == '80'){ // P - pause
        if (down['80'] == null) {
            X = window.innerWidth/2;
            Y = window.innerHeight/2;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
            $("#freeze").toggle();
            down['80'] = true;
        }
    }
    if(keycode == '82'){ // R - change server and go spectate
        if (down['82'] == null) {
            MC.reconnect();
            setTimeout(function() {
                $(".btn-spectate").click();
            }, 25);
            down['82'] = true;
        }
    }
});
$(document).keyup(function(event) {
     var keycode = (event.keyCode ? event.keyCode : event.which);
     down[keycode] = null;
});

//MACRO CONTROLS
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);

var EjectDown = false;
var speed = 25; //in ms

function keydown(event) {
    if (event.keyCode == 81 && EjectDown === false) { // on press key Q
        EjectDown = true;
        setTimeout(eject, speed);
    }
    if (event.keyCode == 16) { //key SHIFT
        split();
        setTimeout(split, speed);
        setTimeout(split, speed*2);
        setTimeout(split, speed*3);
    }
}
function keyup(event) {
    if (event.keyCode == 81) { // on release key Q
        EjectDown = false;
    }
}
function eject() {
    if (EjectDown) {
        window.onkeydown({keyCode: 87}); // key W
        window.onkeyup({keyCode: 87});
        setTimeout(eject, speed);
    }
}
function split() {
    $("body").trigger($.Event("keydown", { keyCode: 32})); //key SPACE
    $("body").trigger($.Event("keyup", { keyCode: 32})); //jquery is required for split to work
}
function esc() {
    $("body").trigger($.Event("keydown", { keyCode: 27}));
    $("body").trigger($.Event("keyup", { keyCode: 27}));
}

//MAP AUTO LAUNCH
console.log(CanvasRenderingContext2D.prototype._drawImage = CanvasRenderingContext2D.prototype.drawImage, CanvasRenderingContext2D.prototype.drawImage = function() {
  if (arguments[0].src) {
    if ("http://agar.io/img/background.png" == arguments[0].src) {
      arguments[0].src = "";
    }
  }
  this._drawImage.apply(this, arguments);
});
