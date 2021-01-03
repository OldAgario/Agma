function execute() {
//CONTROLS: 0-9, A-Z, NUM 0 - NUM 9
var drop1 = "1";
var drop2 = "2";
//CONTROLS END


var Kb={
"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,
"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90,
"NUM 0":96,"NUM 1":97,"NUM 2":98,"NUM 3":99,"NUM 4":100,"NUM 5":101,"NUM 6":102,"NUM 7":103,"NUM 8":104,"NUM 9":105};


//FULL XP STATISTICS
$(".lower-dashboard-box").append('<div class="ranking text-left"><div style="display:inline;">Level Progress: </div><div id="ext_lvl" style="display:inline;cursor:pointer;" title="Click to Shout"> Loading... (12s interval)</div></div><div class="ranking text-left"><div style="display:inline;">Overall XP: </div><div id="ext_xp" style="display:inline;cursor:pointer;" title="Click to Shout"> Loading... (12s interval)</div><div id="plus_xp" style="display:inline;color:#22dd22;" title="Earned XP Points"></div></div>');

var xp_int = {};
var user;
function loadXP() {
	user = $(".username").text();
	clearInterval(xp_int);
var array = [];

//Get data
var lvl = $("#level").text();//current evel
var lvl_perc = $("#dashPanel .progress-bar").attr("style").replace(/^\D+|\%;?$/g, "");//clean percentage

//Make level points
var lvl_pnts = lvl + "000";

a = +lvl_pnts/100;
b = a*lvl_perc;

//Create an array of the levels 1-...
for (var i = 0; i <= lvl-1; i++) {
	array.push(i);
}

for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
	pts = sum + "000";
	pts_num = Number(pts);
	progress = Math.round(pts_num + b);

		$("#ext_xp").attr("data-xp", progress);//write initial progress
		fullXP();
		xp_int = setInterval(fullXP, 12e3);//3e4

}

//LOAD FULL XP
show = false;
function fullXP(){
	show = true;
	user != $(".username").text()&&loadXP();

var array = [];
//get data
var lvl_ = $("#level").text();//current evel
var lvl_perc_ = $("#dashPanel .progress-bar").attr("style").replace(/^\D+|\%;?$/g, "");//clean percentage

//Make level points
var lvl_pnts_ = lvl_ + "000";

c = +lvl_pnts_/100;
d = c*lvl_perc_;

//Show level progress
$("#ext_lvl").text(Intl.NumberFormat('en-US').format(Math.round(d)) + " / " + Intl.NumberFormat('en-US').format(lvl_pnts_))

//Create an array of the levels 1-...
for (var i = 0; i <= lvl_-1; i++) {
	array.push(i);
}

for (var i = 0, sum_ = 0; i < array.length; sum_ += array[i++]);
	pts_ = sum_ + "000";
	pts_num_ = Number(pts_);
	$("#ext_xp").text(Intl.NumberFormat('en-US').format(Math.round(pts_num_ + d)));
	$("#plus_xp").text(" (+" + Number(Math.round(pts_num_ + d) - progress) + ")");

}

setTimeout(loadXP, 10e3);
xp_int = setInterval(fullXP, 12e3);//3e4




//Click
$("#ext_lvl, .xpBarTop .progress").on("click", function() {
	if(show) {
		$("#chtbox").val("Level Progress: " + $("#level").text() + " + " + $("#dashPanel .progress-bar").text().replace(/\s+/g, "") + ", (" + $("#ext_lvl").text() + ")")
	} else {
		$("#curser").css({"font-size":" 18px", "color": "rgb(255, 0, 0)"}).text("Wait. XP is loading...").show()
		setTimeout(function() {$("#curser").fadeOut(300)},1e3)
	};
});
$("#ext_xp").on("click", function() {
	if(show) {
		$("#chtbox").val("My overall XP is: " + $("#ext_xp").text())
	} else {
		$("#curser").show().text("Wait. Overall XP is loading...")
		setTimeout(function() {$("#curser").fadeOut(300)},1e3)
	};
});








//----------------------------------CONTEXT MENU----------------------------------
//HELLO
$("#contextPlayer").on( "click", function() {
if($("#contextPlayerName").text() == "(no player selected)") {
	$("body").mousedown();
	$("#chtbox").val("Hi everyone!").focus();
} else {
	$("body").mousedown();
	$("#chtbox").val("Hi, "+$("#contextPlayerName").text()+"!").focus();
}
});

//BYE
$('<li id="contextBye" class="contextmenu-item enabled"><div class="context-icon" style="background-position: -192px 0;"></div><p>Bye!</p></li>').insertAfter("#contextMute");
$("#contextBye").on( "click", function() {
if($("#contextPlayerName").text() == "(no player selected)") {
	$("body").mousedown();
	$("#chtbox").val("Bye!").focus();
} else {
	$("body").mousedown();
	$("#chtbox").val("Bye, "+$("#contextPlayerName").text()+"!").focus();
}
});

//--------------------------------------MOUSE COORDINATES FOR POWER DROP--------------------------------------
var Cy, Cx;
$(document).on("mousemove", function(event) {
	Cx = event.clientX;
	Cy = event.clientY;
	// coords = "X coords: " + Cx + ", Y coords: " + Cy;
})

//----------------------------------KEY PRESS----------------------------------
var down = {};
$(document).keydown(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
if(down[keycode] == null) {
	if($("input").is(":focus")) {
		return true;
	} else {

//--------------------------------------DROP POWERUPS--------------------------------------
//http://www.openjs.com/articles/syntax/short_circuit_operators.php
keycode == Kb[drop1] && (multiArr = ["#invSpawnVirus","#invAntiRecombine","#invFreeze"]) && multi();
keycode == Kb[drop2] && (invar = "#invGrowth") && exec();

//SIMULATE MOUSE CLICK
function simulateMouseDown(targetNode) {
    function triggerMouseEvent(targetNode, eventType) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        targetNode.dispatchEvent(clickEvent);
    }
    ["mouseover", "mousedown"].forEach(function(eventType) { 
        triggerMouseEvent(targetNode, eventType);
    });
}
		
function simulatedClick(target, options) {
var event = target.ownerDocument.createEvent('MouseEvents'),
options = options || {},
opts = { // These are the default values, set up for un-modified left clicks
	type: 'mouseup',
	canBubble: true,
	cancelable: true,
	view: target.ownerDocument.defaultView,
	detail: 1,
	screenX: 0, //The coordinates within the entire page
	screenY: 0,
	clientX: 0, //The coordinates within the viewport
	clientY: 0,
	ctrlKey: false,
	altKey: false,
	shiftKey: false,
	metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
	button: 0, //0 = left, 1 = middle, 2 = right
	relatedTarget: null,
};
 //Merge the options with the defaults
for (var key in options) {
	if (options.hasOwnProperty(key)) {
		opts[key] = options[key];
	}
}
//Pass in the options
event.initMouseEvent(
	opts.type,
	opts.canBubble,
	opts.cancelable,
	opts.view,
	opts.detail,
	opts.screenX,
	opts.screenY,
	opts.clientX,
	opts.clientY,
	opts.ctrlKey,
	opts.altKey,
	opts.shiftKey,
	opts.metaKey,
	opts.button,
	opts.relatedTarget
);
 //Fire the event
	target.dispatchEvent(event);
}

function exec() {//EXECUTE
	simulateMouseDown(document.querySelector(invar));
		var options = {
			clientX: Cx,
			clientY: Cy
		}
	simulatedClick(document.querySelector('#canvas'), options);
	// console.log('Item: '+invar)
};

function multi() {//EXECUTE
	for (var i = 0; i < multiArr.length; i++) {
		simulateMouseDown(document.querySelector(multiArr[i]));
			var options = {
				clientX: Cx,
				clientY: Cy
			}
		simulatedClick(document.querySelector('#canvas'), options);
		// console.log('Item: '+multiArr[i])
	}
};

// var times = 10;
// for(var i=0; i < times; i++){
    // doSomething();
// }



	down[keycode] = true;
};
};
});
$(document).keyup(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	down[keycode] = null;
});

}

//------------------------------------------------------------AGMA------------------------------------------------------------//

!function(c,f){function x(){Wi=!0,ox(),qx(),Ru(qx,0),Ru(qx,3e4),In.focus(),_()
execute();
var x,t=!1,r=!1
null!=c["localStorage"]["settings"]&&(x=JSON.parse(c["localStorage"]["settings"]),typeof x["nickName"]!=="undefined"&&(_l["nickName"]=x["nickName"]),typeof x["user"]!=="undefined"&&x["user"]==""&&(typeof x["skinId"]!=="undefined"&&(_l["skinId"]=x["skinId"]),typeof x["wearablesSelected"]!=="undefined"&&(_l["wearablesSelected"]=x["wearablesSelected"].slice(0)),_l["user"]=""),typeof x["sSkins"]!=="undefined"&&(_l["sSkins"]=x["sSkins"]),typeof x["sWearables"]!=="undefined"&&(_l["sWearables"]=x["sWearables"]),typeof x["sColors"]!=="undefined"&&(_l["sColors"]=x["sColors"]),typeof x["sNames"]!=="undefined"&&(_l["sNames"]=x["sNames"]),typeof x["sMinionNames"]!=="undefined"&&(_l["sMinionNames"]=x["sMinionNames"]),typeof x["sMass"]!=="undefined"&&(_l["sMass"]=x["sMass"]),typeof x["sFood"]!=="undefined"&&(_l["sFood"]=x["sFood"]),typeof x["sCellAnimations"]!=="undefined"&&(_l["sCellAnimations"]=x["sCellAnimations"]),typeof x["sSkinAnimations"]!=="undefined"&&(_l["sSkinAnimations"]=x["sSkinAnimations"]),typeof x["sMapBorder"]!=="undefined"&&(_l["sMapBorder"]=x["sMapBorder"]),typeof x["sFancyGrid"]!=="undefined"&&(_l["sFancyGrid"]=x["sFancyGrid"]),typeof x["sSectionGrid"]!=="undefined"&&(_l["sSectionGrid"]=x["sSectionGrid"]),typeof x["sGrid"]!=="undefined"&&(_l["sGrid"]=x["sGrid"]&&!_l["sFancyGrid"]),typeof x["sCustomBack"]!=="undefined"&&(_l["sCustomBack"]=x["sCustomBack"]),typeof x["sCustomBackType"]!=="undefined"&&(_l["sCustomBackType"]=x["sCustomBackType"]),typeof x["sCustomBackOpacity"]!=="undefined"&&(_l["sCustomBackOpacity"]=x["sCustomBackOpacity"]),typeof x["sCustomBackClip"]!=="undefined"&&(_l["sCustomBackClip"]=x["sCustomBackClip"]),typeof x["sCustomBackEnableColor"]!=="undefined"&&(_l["sCustomBackEnableColor"]=x["sCustomBackEnableColor"]),typeof x["sCustomBackColor"]!=="undefined"&&(_l["sCustomBackColor"]=x["sCustomBackColor"]),typeof x["sDark"]!=="undefined"&&(_l["sDark"]=x["sDark"]),typeof x["sAcid"]!=="undefined"&&(_l["sAcid"]=x["sAcid"]),typeof x["sSlowMotion"]!=="undefined"&&(_l["sSlowMotion"]=x["sSlowMotion"]),typeof x["sFPS"]!=="undefined"&&(_l["sFPS"]=x["sFPS"]),typeof x["sZoom"]!=="undefined"&&(_l["sZoom"]=x["sZoom"]),typeof x["sFixedZoom"]!=="undefined"&&(_l["sFixedZoom"]=x["sFixedZoom"]),typeof x["fixedZoomScale"]!=="undefined"&&(_l["fixedZoomScale"]=x["fixedZoomScale"]),typeof x["sMinionUi"]!=="undefined"&&(_l["sMinionUi"]=x["sMinionUi"]),typeof x["sLeaderboard"]!=="undefined"&&(_l["sLeaderboard"]=x["sLeaderboard"]),typeof x["sChat"]!=="undefined"&&(_l["sChat"]=x["sChat"]),typeof x["sMinimap"]!=="undefined"&&(_l["sMinimap"]=x["sMinimap"]),typeof x["sCellBorders"]!=="undefined"&&(_l["sCellBorders"]=x["sCellBorders"]),typeof x["sLargeNames"]!=="undefined"&&(_l["sLargeNames"]=x["sLargeNames"]),typeof x["sNameOutlines"]!=="undefined"&&(_l["sNameOutlines"]=x["sNameOutlines"]),typeof x["sCellSpikes"]!=="undefined"&&(_l["sCellSpikes"]=x["sCellSpikes"]),typeof x["sTransparentViruses"]!=="undefined"&&(_l["sTransparentViruses"]=x["sTransparentViruses"]),typeof x["sClassicViruses"]!=="undefined"&&(_l["sClassicViruses"]=x["sClassicViruses"]),typeof x["sPolygonShapes"]!=="undefined"&&(_l["sPolygonShapes"]=x["sPolygonShapes"]),typeof x["sLineShapes"]!=="undefined"&&(_l["sLineShapes"]=x["sLineShapes"]),typeof x["sBubbleCells"]!=="undefined"&&(_l["sBubbleCells"]=x["sBubbleCells"]),typeof x["sMobileLeft"]!=="undefined"&&(_l["sMobileLeft"]=x["sMobileLeft"]),typeof x["sMobileFeedLock"]!=="undefined"&&(_l["sMobileFeedLock"]=x["sMobileFeedLock"])),ue&&x&&(x["version"]||0)<2&&setDefaults(),el=!1,_l["nickName"]&&f("#nick").prop("value",_l["nickName"]),df(_l["skinId"]),kf(_l["wearablesSelected"]),f("#cSkins").prop("checked",_l["sSkins"]).change(),f("#cWearables").prop("checked",_l["sWearables"]).change(),f("#cColors").prop("checked",_l["sColors"]).change(),f("#cNames").prop("checked",_l["sNames"]).change(),f("#cMinionNames").prop("checked",_l["sMinionNames"]).change(),f("#cMass").prop("checked",_l["sMass"]).change(),f("#cFood").prop("checked",_l["sFood"]).change(),f("#cCellAnimations").prop("checked",_l["sCellAnimations"]).change(),f("#cSkinAnimations").prop("checked",_l["sSkinAnimations"]).change(),f("#cMapBorder").prop("checked",_l["sMapBorder"]).change(),f("#cFancyGrid").prop("checked",_l["sFancyGrid"]).change(),f("#cSectionGrid").prop("checked",_l["sSectionGrid"]).change(),f("#cGrid").prop("checked",_l["sGrid"]).change(),f("#cCustomBack").prop("checked",_l["sCustomBack"]).change(),f("input[name=customBackType][value="+_l["sCustomBackType"]+"]").prop("checked",!0).change(),f("#customBackOpacitySlider").val(Math.min(Math.max(~~(100*(parseFloat(_l["sCustomBackOpacity"])||0)+.5),0),100)).change(),f("#cCustomBackClip").prop("checked",_l["sCustomBackClip"]).change(),f("#cCustomBackEnableColor").prop("checked",_l["sCustomBackEnableColor"]).change(),f("#customBackColorPicker").val(_l["sCustomBackColor"]).change(),f("#cDark").prop("checked",_l["sDark"]).change(),f("#cSlowMotion").prop("checked",_l["sSlowMotion"]).change(),f("#cFPS").prop("checked",_l["sFPS"]).change(),f("#cZoom").prop("checked",_l["sZoom"]).change(),_l["sFixedZoom"]&&(El=Ti=_l["fixedZoomScale"]),f("#cFixedZoom").prop("checked",_l["sFixedZoom"]).change(),f("#cMinionUi").prop("checked",_l["sMinionUi"]).change(),f("#cLeaderboard").prop("checked",_l["sLeaderboard"]).change(),f("#cChat").prop("checked",_l["sChat"]).change(),f("#cMinimap").prop("checked",_l["sMinimap"]).change(),f("#cCellBorders").prop("checked",_l["sCellBorders"]).change(),f("#cLargeNames").prop("checked",_l["sLargeNames"]).change(),f("#cNameOutlines").prop("checked",_l["sNameOutlines"]).change(),f("#cCellSpikes").prop("checked",_l["sCellSpikes"]).change(),f("#cClassicViruses").prop("checked",_l["sClassicViruses"]).change(),f("#cPolygonShapes").prop("checked",_l["sPolygonShapes"]).change(),f("#cLineShapes").prop("checked",_l["sLineShapes"]).change(),f("#cBubbleCells").prop("checked",_l["sBubbleCells"]).change(),ue&&(f("#cMobileLeft").prop("checked",_l["sMobileLeft"]).change(),f("#cMobileFeedLock").prop("checked",_l["sMobileFeedLock"]).change()),el=!0,j_(),n_(),R_("general","cbgDataURL",function(c){c=c||"",c!=""&&(kl||ks?P_(c,!1):Cs=c)}),Pf()
var m,p=document["body"],M=document.getElementById("chtbox"),S=document.getElementById("chtControls"),T=document.getElementById("emojiDropdown"),U=document.getElementById("skinExampleMenu"),D=document.getElementById("cellExampleShop"),E=document.getElementById("friendDialog"),O=document.getElementById("friendAddInput"),Y=document.getElementById("settingsBtn"),Z=document.getElementById("settingsDialog"),ec=document.getElementById("customBackContainer"),nc=document.getElementById("inventory"),ac=document.getElementById("contextMenu"),ic=document.getElementById("contextSubMenu"),rc=function(c){c.stopPropagation()},sc=function(c){c.preventDefault(),c.stopPropagation()}
if(f("#loginMobile").click(Fc),f("#serverMobile").click(Bc),f(".mainPanelNavMob").click(Dc),In["onfocus"]=M["onblur"]=function(){t=!1,M["placeholder"]="Press Enter To Chat"},M["onfocus"]=function(){t=!0,M["placeholder"]=""},p["ondragstart"]=p["ondrop"]=function(c){c.preventDefault()},p["ondragenter"]=p["ondragover"]=function(c){c.preventDefault(),pe&&c["dataTransfer"]&&(c["dataTransfer"]["dropEffect"]="none")},p["onmousedown"]=function(c){C(),2==c["button"]&&Ao&&(Va=c["clientX"],ja=c["clientY"],H(),Tx())},S["onmousedown"]=function(c){C(1),c.stopPropagation()},document.getElementById("emojiBtn").onclick=function(c){n(),c.stopPropagation()},f("#reg").on("show.bs.tab",function(c){window["AG"]&&window["AG"]["showCaptchaReg"]&&window["AG"].showCaptchaReg()}),T["onclick"]=function(c){i(c["target"]),c.stopPropagation()},document.getElementById("curser").onclick=function(c){I(),c.stopPropagation()},document.getElementById("chtTabs").onclick=function(c){A(c["target"]),c.stopPropagation()},document.getElementById("btnFriends").onclick=document.getElementById("friendDialogClose").onclick=cf,document.getElementById("friendHeader").onmousedown=ef,document.getElementById("friendResizer").onmousedown=tf,O["onblur"]=function(){r=!1},O["onfocus"]=function(){r=!0},f("#skinsTab a").on("show.bs.tab",function(c){Ur&&uf()}),f("#wearablesTab a").on("show.bs.tab",function(c){Br&&pf()}),U["onclick"]=function(c){showSkin(al,!1),c.stopPropagation()},U["onmousedown"]=function(c){2==c["button"]&&(df(0),yf(),f_())},U["oncontextmenu"]=D["oncontextmenu"]=sc,D["onmousemove"]=Sf,D["onmouseleave"]=Cf,D["onclick"]=Tf,D["onmousedown"]=If,f("#hiscoresTab a").on("show.bs.tab",rf),Y["onclick"]=function(c){nf(),C(3),c.stopPropagation()},Y["onmousedown"]=Z["onmousedown"]=function(c){C(3),c.stopPropagation()},Z["onkeyup"]=function(c){32==c["keyCode"]&&c.preventDefault()},document.getElementById("megaholder").onclick=function(c){f("#megaholder").hide()},f(".hotkey-input:not(.hotkey-unchangeable)").click(hotkeySelect).contextmenu(hotkeyClear),f('input[type="checkbox"]').click(function(c){c&&c["originalEvent"]&&typeof c["originalEvent"]["isTrusted"]!=="undefined"&&!c["originalEvent"]["isTrusted"]&&c["originalEvent"].preventDefault()}),document.getElementById("invisibleOverlay").onclick=rc,ec["onmousedown"]=function(c){2==c["button"]&&P_("")},ec["oncontextmenu"]=sc,ec["onmouseenter"]=ec["onmousemove"]=function(c){!Ms&&(Ms=!0,F_())},ec["onmouseleave"]=function(c){Ms&&(Ms=!1,F_())},pe){var dc=document.getElementById("customBackBtn")
dc["ondragenter"]=dc["ondragover"]=I_,dc["ondragleave"]=U_,dc["ondrop"]=A_,f("#customBackDragText").show()}if(de?(lc(p,h),lc(Nn,s),M["ontouchstart"]=T["ontouchstart"]=E["ontouchstart"]=Y["ontouchstart"]=Z["ontouchstart"]=ac["ontouchstart"]=ic["ontouchstart"]=rc):(p.addEventListener("contextmenu",h,!1),Nn["oncontextmenu"]=s),Nn["onmouseover"]=Nn["onmousemove"]=function(c){qo&&qo!==o(c["clientX"],c["clientY"])&&(qo=null,ea=!0),Zo=ei+200},Nn["onmousedown"]=function(f){0==f["button"]&&!Ji&&(c["isSpectating"]&&!o(f["clientX"],f["clientY"])&&u(f),!qo&&(Zo=ei))},Nn["onmouseout"]=function(c){qo&&(qo=null,ea=!0),Zo=0},Nn["ondblclick"]=l,M["oncontextmenu"]=T["oncontextmenu"]=E["oncontextmenu"]=Y["oncontextmenu"]=Z["oncontextmenu"]=rc,ac["oncontextmenu"]=ic["oncontextmenu"]=sc,ac["onmouseover"]=ic["onmouseover"]=ac["onmousemove"]=ic["onmousemove"]=v,ac["onmousedown"]=ic["onmousedown"]=function(c){v(c),c.stopPropagation()},ac["onmouseleave"]=ic["onmouseleave"]=b,ac["onclick"]=function(c){k(),c.stopPropagation()},ic["onclick"]=function(c){Qx(c),w(),c.stopPropagation()},In["onmousedown"]=function(c){0==c["button"]&&(1==Mo&&d(c),u(c))},ue){var hc=document.getElementById("zoomBtnMinus"),mc=document.getElementById("zoomBtnPlus"),bc=document.getElementById("touchSplitBtn"),yc=document.getElementById("touchEjectBtn"),kc=document.getElementById("touchEjectLockBtn")
tFreezeBtn=document.getElementById("touchFreezeBtn"),c.addEventListener("touchstart",function(c){Ps=Fs,c["touches"]["length"]<=1&&oc()},!0),c.addEventListener("touchmove",function(c){Ps=Fs},!0),c.addEventListener("touchend",function(c){Ps=Fs},!0),In.addEventListener("touchstart",Q,!1),In.addEventListener("touchmove",G,!1),In.addEventListener("touchend",W,!1),Nn.addEventListener("touchstart",Q,!1),Nn.addEventListener("touchmove",G,!1),Nn.addEventListener("touchend",W,!1),bc.addEventListener("touchstart",K,!1),bc.addEventListener("touchmove",sc,!1),bc.addEventListener("touchend",cc,!1),yc.addEventListener("touchstart",fc,!1),yc.addEventListener("touchmove",sc,!1),yc.addEventListener("touchend",xc,!1),kc.addEventListener("touchstart",_c,!1),kc.addEventListener("touchmove",sc,!1),kc.addEventListener("touchend",sc,!1),tFreezeBtn.addEventListener("touchstart",tc,!1),tFreezeBtn.addEventListener("touchmove",sc,!1),tFreezeBtn.addEventListener("touchend",sc,!1),hc.addEventListener("touchstart",z,!1),hc.addEventListener("touchmove",sc,!1),hc.addEventListener("touchend",L,!1),mc.addEventListener("touchstart",R,!1),mc.addEventListener("touchmove",sc,!1),mc.addEventListener("touchend",L,!1),Jn.addEventListener("touchstart",N,!1),Jn.addEventListener("touchmove",P,!1),Jn.addEventListener("touchend",F,!1),Yn.addEventListener("touchstart",B,!1),Yn.addEventListener("touchmove",sc,!1),Yn.addEventListener("touchend",sc,!1),m=document.getElementById("invRecombine"),m["ontouchstart"]=function(c){Kf(30),J(c,1)},m=document.getElementById("invSpeed"),m["ontouchstart"]=function(c){Kf(31),J(c,2)},m=document.getElementById("invGrowth"),m["ontouchstart"]=function(c){J(c,3)},m=document.getElementById("invSpawnVirus"),m["ontouchstart"]=function(c){J(c,4)},m=document.getElementById("invSpawnMothercell"),m["ontouchstart"]=function(c){J(c,5)},m=document.getElementById("invSpawnPortal"),m["ontouchstart"]=function(c){J(c,6)},m=document.getElementById("invSpawnGoldOre"),m["ontouchstart"]=function(c){J(c,9)},m=document.getElementById("invWall"),m["ontouchstart"]=function(c){J(c,10)},m=document.getElementById("inv360Shot"),m["ontouchstart"]=function(c){J(c,7),wx(1)},m=document.getElementById("invFreeze"),m["ontouchstart"]=function(c){J(c,8)},m=document.getElementById("invAntiFreeze"),m["ontouchstart"]=function(c){J(c,11)},m=document.getElementById("invAntiRecombine"),m["ontouchstart"]=function(c){J(c,12)},m=document.getElementById("invFrozenVirus"),m["ontouchstart"]=function(c){J(c,13),wx(3)},nc["ontouchstart"]=V,nc["ontouchmove"]=j,nc["ontouchend"]=X,document.getElementById("fullscreenBtn").onclick=function(){vc()?gc():pc()}}else p["onmousemove"]=p["onmouseenter"]=Ux,m=document.getElementById("invRecombine"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(1)},m=document.getElementById("invSpeed"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(2)},m=document.getElementById("invGrowth"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(3)},m=document.getElementById("invSpawnVirus"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(4)},m=document.getElementById("invSpawnMothercell"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(5)},m=document.getElementById("invSpawnPortal"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(6)},m=document.getElementById("invSpawnGoldOre"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(9)},m=document.getElementById("invWall"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(10)},m=document.getElementById("inv360Shot"),m["onmouseenter"]=function(){kx(7)},m["onmousedown"]=function(c){kx(7),0==c["button"]&&wx(1)},m=document.getElementById("invFreeze"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(8)},m=document.getElementById("invAntiFreeze"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(11)},m=document.getElementById("invAntiRecombine"),m["onmouseenter"]=m["onmousedown"]=function(c){kx(12)},m=document.getElementById("invFrozenVirus"),m["onmouseenter"]=function(){kx(13)},m["onmousedown"]=function(c){kx(13),0==c["button"]&&wx(3)},nc["onmouseleave"]=function(){kx(0)},nc["onmousedown"]=function(c){0==c["button"]&&(Va=c["clientX"],ja=c["clientY"],H(),Mx())},nc["onmouseup"]=function(c){0==c["button"]&&(Sx(),c.stopPropagation())},p["onmouseup"]=function(c){0==c["button"]&&(Va=c["clientX"],ja=c["clientY"],H(),Cx())},Jn["onmousedown"]=N,Yn["onmousedown"]=B
se?document.addEventListener("DOMMouseScroll",uc,!1):p["onmousewheel"]=uc
var wc=!1,Mc=!1,Sc=!1,Cc=!1,Tc=!1,Ic=!1,Uc=!1,Ac=!1,Nc=!1,Pc=!1,Ec=!1,zc=!1,Rc=!1,$c=!1,Lc=!1,Gc=0,Wc=0,Yc=0,Jc=0,Vc=0,jc=0,Xc=0,Hc=0,Zc=0,qc=0,Kc=0,ff=0,xf=0,_f=0,af=0,sf=0
multiEjectCellsAmountChosen=5,multiEjectCells=1,multiEjectServerChanged=!1,c.addEventListener("click",Ox,!0),c.addEventListener("change",Qx,!0),c.addEventListener("mousedown",function(c){Ps=Fs,tu&&(!f(c["target"]).hasClass("hotkey-input")||!f(c["target"]).hasClass("selected"))&&W_()},!0),c.addEventListener("keydown",function(c){Ps=Fs,(typeof c["isTrusted"]==="undefined"||c["isTrusted"])&&(sf=c["keyCode"]),tu&&(Y_(c),c.stopImmediatePropagation())},!0),c["onkeydown"]=function(x){if(!t&&!r){var _=Date.now()
if(!Ji){if(x["keyCode"]==eu["Space"]["c"]&&!wc&&_-50>=Gc&&(Gc=_,q(1),wc=!0),x["keyCode"]==eu["W"]["c"]&&!Mc&&_-50>=Wc){if(1!=multiEjectCells&&(multiEjectCells=1,qf())){var e=Oc(2)
e.setUint8(0,180),e.setUint8(1,multiEjectCells),Qc(e)}Wc=_,1==Mo&&eu["W"]["c"]!=eu["W360"]["c"]&&wx(1,!0),Qf(),Kf(21),Mc=!0}if(x["keyCode"]==eu["V"]["c"]&&!Mc&&_-50>=Wc){if((multiEjectCells!=multiEjectCellsAmountChosen||multiEjectServerChanged)&&(multiEjectServerChanged=!1,multiEjectCells=multiEjectCellsAmountChosen,qf())){var e=Oc(2)
e.setUint8(0,180),e.setUint8(1,multiEjectCells),Qc(e)}Wc=_,1==Mo&&eu["V"]["c"]!=eu["W360"]["c"]&&wx(1,!0),Qf(),Kf(21),Mc=!0}if(x["keyCode"]==eu["Z"]["c"]&&!Sc&&_-50>=Yc&&(Yc=_,Qf(),Kf(37),Sc=!0),x["keyCode"]==eu["F"]["c"]&&!Cc&&_-50>=Jc&&(Jc=_,Kf(35),Cc=!0),x["keyCode"]==eu["Q"]["c"]&&!Tc&&_-50>=Vc&&(Vc=_,Kf(18),Tc=!0),x["keyCode"]==eu["E"]["c"]&&!Ic&&_-50>=jc&&(jc=_,Kf(30),Ic=!0),x["keyCode"]==eu["S"]["c"]&&!Uc&&_-50>=Xc&&(Xc=_,Kf(31),Uc=!0),x["keyCode"]==eu["A"]["c"]&&!Ac&&_-50>=Hc&&(Hc=_,Qf(),Kf(32),Ac=!0),x["keyCode"]==eu["X"]["c"]&&!Nc&&_-50>=Zc&&(Zc=_,Qf(),Kf(39),Nc=!0),x["keyCode"]==eu["I"]["c"]&&!Pc&&_-50>=qc&&(qc=_,Kf(28),Pc=!0),x["keyCode"]!=eu["C"]["c"]||Wa||(Ya=iu,Ja=ou,Wa=!0),x["keyCode"]==eu["D"]["c"]&&!Ec&&_-50>=Kc&&(Kc=_,q(2),Ec=!0),x["keyCode"]==eu["T"]["c"]&&!zc&&_-50>=ff&&(ff=_,q(3),zc=!0),x["keyCode"]==eu["W360"]["c"]&&!$c&&_-50>=_f&&!Mc&&eu["W"]["c"]!=eu["W360"]["c"]&&(_f=_,1!=Mo&&wx(1,!0),1==Mo&&(Qf(),Kf(21),Kf(36)),$c=!0),x["keyCode"]==eu["DW"]["c"]&&!Lc&&_-50>=af){if(af=_,Ao&&xi)Sx()
else{var n=Po
Po=10,Va=La,ja=Oa,H(),Mx(),Po=n,xi=!0,f("#invWall").addClass("active")}Lc=!0}}x["keyCode"]==eu["M"]["c"]&&!Rc&&_-50>=xf&&(Ji&&(x["target"]["tagName"]=="INPUT"&&x["target"]["type"]!="checkbox"||x["target"]["tagName"]=="TEXTAREA"||x["target"]["tagName"]=="SELECT"||0!=f("div.modal.in:visible").length)||(xf=_,rspwn(document.getElementById("nick").value),Rc=!0))}switch(x["keyCode"]){case 27:var i=f("div.modal.in:visible")
Mn||0==i["length"]?t||Vr||ds||Ao||r||vs?(M.blur(),O.blur(),C(),Sx()):yt?c.closeAdvert():(!f("#dashPanel").is(":visible")&&f("#login").is(":visible")&&(Ee=0),azad(!0)):i.last().modal("hide"),(vi||se)&&x.preventDefault()
break
case 13:ds?hs?(Qx(x),w()):k():t?(a(),13==sf&&Zf(M["value"]),M["value"]=Oo,M["selectionStart"]=M["selectionEnd"]=Oo["length"],M.blur(),t=!1):$l||0!=f("div.modal.in:visible").length||(M.focus(),t=!0)
break
case 38:ds&&y(-1)
break
case 40:ds&&y(1)
break
case 37:hs&&g()
break
case 39:if(ds){var i=f("#contextMenu").find("li.context-has-submenu.hover")
i&&i["length"]&&i[0]!==er&&(g(),k(),hs&&f("#contextSubMenu").find("li.enabled").first().addClass("hover"))}}sf=0},c["onkeyup"]=function(c){c["keyCode"]==eu["Space"]["c"]&&wc&&(wc=!1),c["keyCode"]==eu["W"]["c"]&&Mc&&(Kf(36),Mc=!1),c["keyCode"]==eu["V"]["c"]&&Mc&&(Kf(36),Mc=!1),c["keyCode"]==eu["Z"]["c"]&&Sc&&(Kf(38),Sc=!1),c["keyCode"]==eu["F"]["c"]&&Cc&&(Cc=!1),c["keyCode"]==eu["Q"]["c"]&&Tc&&(Tc=!1),c["keyCode"]==eu["E"]["c"]&&Ic&&(Ic=!1),c["keyCode"]==eu["S"]["c"]&&Uc&&(Uc=!1),c["keyCode"]==eu["A"]["c"]&&Ac&&(Ac=!1),c["keyCode"]==eu["X"]["c"]&&Nc&&(Kf(40),Nc=!1),c["keyCode"]==eu["I"]["c"]&&Pc&&(Pc=!1),c["keyCode"]==eu["C"]["c"]&&Wa&&(Wa=!1,Qf(!0)),c["keyCode"]==eu["D"]["c"]&&Ec&&(Ec=!1),c["keyCode"]==eu["T"]["c"]&&zc&&(zc=!1),c["keyCode"]==eu["M"]["c"]&&Rc&&(Rc=!1),c["keyCode"]==eu["W360"]["c"]&&$c&&($c=!1),c["keyCode"]==eu["DW"]["c"]&&Lc&&(Lc=!1)},c["onblur"]=function(){Mc&&Kf(36),Sc&&Kf(38),Nc&&Kf(40),wc=Mc=Sc=Cc=Tc=Ic=Uc=Ac=Nc=Pc=Wa=Ec=zc=Rc=$c=Lc=!1},c["onresize"]=cx,c.requestAnimationFrame(jn),Rs=setTimeout(function(){Rs=0},0),setInterval(Qf,50),setInterval(Bf,1e3),setInterval(function(){Kf(95)},18e3),setInterval(tx,1e3),setInterval(ax,6500),e(),-1!==(""+c[[zu[2]]+[zu[22]]]).indexOf(zu[23])&&setInterval(function(){Gi&&qf()&&(document.getElementById(zu[10])[zu[11]][zu[16]][zu[7]][zu[17]][zu[21]](oa,new c[zu[19]]([104,0,104])[zu[20]]),Qf(!0))},1e3),function(){var c=window["swal"]["close"],f=window["onkeydown"],x=window["onfocus"]
window["swal"]["close"]=function(){$("div.modal").css("overflow-y",""),c(),window["onkeydown"]=f,window["onfocus"]=x}}(),Rs?(clearTimeout(Rs),Rs=0):zs=!0,(parseInt(c["localStorage"]["serverlistVersion"])||0)<=6&&c["localStorage"].removeItem("gameservers")
var lf=""
if(null!=c["localStorage"]["gameservers"]){dr=JSON.parse(c["localStorage"]["gameservers"])
for(var hf=0,mf=0;mf<dr["length"];++mf){var gf=dr[mf]
gf["players"]=0,gf["isCurrent"]&&(gf["address"]&&(lf=gf["address"],mr=gf["name"],hr=gf["id"]),!isNaN(gf["location"])&&(hf=gf["location"]))}of(hf)}lf!=""?setserver(lf,mr):connectDefault(),f("#overlays").show(),++_i,cx(),kn=!1,f(".innerBoxDashboard2").show(),f("#btnFriends").show(),f("#settingsBtn").show(),ue&&(f("#touch").show(),f("#fullscreenBtn").show(),f("#zoomControls").show(),f("#respawnTouch").show())}function _(c){Tn["font"]="18px Ubuntu, sans-serif"
var f="QW@HhsXJ",x=Tn.measureText(f).width
if(Tn["font"]="18px Ubuntu",x==Tn.measureText(f).width){for(x=1;1500>=x;x++)Tn["font"]=x+"px Ubuntu"
setTimeout(function(){Yi=!0},500)}else!c&&(c=1),300>c?setTimeout(function(){_(c+1)},10):Yi=!0}function e(){}function t(){for(var c,f="<table><tbody>",x=0,_=0;_<emoList["length"];_++)c=emoList[_],0==x&&(f+="<tr>"),f+=le?"<td title='"+c+"'><div class='emo-img' style='background-position:"+(""+-20*x)+"px "+(""+-20*~~(_/8))+"px;'></div></td>":"<td title='"+c+"'><svg width='20' height='20' class='emo-svg'><use xlink:href='emotes/svg/emosprites.svg#emo-svg-"+("0000"+(""+_)).substr(-4)+"' /></svg></td>",x++,x>=8&&(x=0,f+="</tr>")
0!=x&&(f+="</tr>"),f+="</tbody></table><p style='padding:10px 5px 0px;color:#444444;font-size:9px;font-weight:bold;'>Emoji art provided by <a target='_blank' href='http://emojione.com'>EmojiOne</a></p>",document.getElementById("emojiDropdown").innerHTML=f}function n(){var c=document.getElementById("chtbox")
Vr?(f("#emojiDropdown").slideUp(50),Vr=!1,0!=c["value"]["length"]&&c.focus()):(f("#emojiDropdown").slideDown(50),Vr=!0,c.focus())}function a(){Vr&&(f("#emojiDropdown").hide(),Vr=!1)}function i(c){if(c&&c["tagName"]=="TD"){var f=c["title"]
if(f){var x=document.getElementById("chtbox"),_=x["value"],e=x["selectionEnd"],t=(e>0&&_["length"]>0&&_.substr(e-1,1)!=" "?" ":"")+f+" "
_["length"]+t["length"]<=x["maxLength"]&&(x["value"]=_.substring(0,e)+t+_.substring(e),x["selectionStart"]=x["selectionEnd"]=e+t["length"],x.focus())}}}function o(c,x){var _=null
if(!Ji){var e=f("#chtCanvas").offset()
e&&(c-=e["left"],x-=e["top"])
for(var t=0;t<cr["length"];t++){var n=cr[t]
if(c>=n["x0"]&&x>=n["y0"]&&c<=n["x1"]&&x<=n["y1"]){_=n["ch"]
break}}}return _}function r(c,f){Ji||qo||Ko||(qo=o(c,f),qo&&(ea=!0))}function s(c){if(!Ji){var f=Ko
Ko=o(c["clientX"],c["clientY"]),(f||Ko)&&(qo=null,ea=!0)}}function l(c){Ji||Ao||(s(c),Ko&&(h(c),f("#contextMenu").find("li.hover").removeClass("hover"),f("#contextUserProfile.enabled").addClass("hover"),k(),p()))}function u(x){Ji||Ao||!c["isSpectating"]||0!=ka["length"]||(p(),h(x),f("#contextMenu").find("li.hover").removeClass("hover"),f("#contextSpectate.enabled").addClass("hover"),k(),p())}function d(c){if(!Ji&&!Ao&&ka["length"]>0){for(var f=null,x=(c["pageX"]-On/2)/Ci+ba,_=(c["pageY"]-Qn/2)/Ci+ya,e=Sa["length"]-1;e>=0;e--){var t=Sa[e]
if(0==t["cellType"]){var n=t["x"]-x,a=t["y"]-_
if(n*n+a*a<t["size"]*t["size"]){f=t
break}}}if(f){var i=ka.indexOf(f["id"]),o=Oc(6)
o.setUint8(0,162),o.setUint8(1,i),o.setUint32(2,f["pid"],!0),Qc(o)}}}function h(x){if(!Ji){if(x.preventDefault(),Ao)return
document.getElementById("chtbox").blur()
var _=null
if(!Ko)for(var e=(x["pageX"]-On/2)/Ci+ba,t=(x["pageY"]-Qn/2)/Ci+ya,n=Sa["length"]-1;n>=0;n--){var a=Sa[n]
if(0==a["cellType"]){var i=a["x"]-e,o=a["y"]-t
if(i*i+o*o<a["size"]*a["size"]){_=a
break}}}if(Ko||_)if(Ko){if(qf()&&Ko["sid"]==hr&&0!=Ko["pid"]){var r=Oc(6)
r.setUint8(0,60),r.setUint8(1,0),r.setUint32(2,Ko["pid"],!0),Qc(r)}f("#contextPlayerSkin").css({"background-image":"","background-color":Ko["color"]}),f(".context-player-wear").css("background-image","").hide(),f("#contextPlayerName").text(Ko["name"]).css("color","").removeClass("gold black"),Ko["goldMember"]&&f("#contextPlayerName").addClass("gold"),Ko["sid"]==hr&&0!=Ko["pid"]?(f("#contextPartyInvite").addClass("enabled"),f("#contextFriendAdd").addClass("enabled"),f("#contextUserProfile").addClass("enabled"),f("#contextPrivateMessage").addClass("enabled"),Nt>0?f("#contextModerate").addClass("enabled"):f("#contextModerate").removeClass("enabled"),c["isSpectating"]&&0==ka["length"]?f("#contextSpectate").addClass("enabled"):f("#contextSpectate").removeClass("enabled")):(f("#contextModerate").removeClass("enabled"),f("#contextPartyInvite").removeClass("enabled"),f("#contextUserProfile").removeClass("enabled"),2==Ko["category"]?(f("#contextFriendAdd").addClass("enabled"),f("#contextPrivateMessage").addClass("enabled")):(f("#contextFriendAdd").removeClass("enabled"),f("#contextPrivateMessage").removeClass("enabled")),f("#contextSpectate").removeClass("enabled")),f("#contextMute").addClass("enabled")}else{if(qf()){var r=Oc(6)
r.setUint8(0,60),r.setUint8(1,1),r.setUint32(2,_["pid"],!0),Qc(r)}f("#contextPlayerSkin").css("background-color",_["color"]),_["hasImage"]&&ol&&(0!=_["skinId"]&&!ui||0!=_["imageId"])?0==_["skinId"]||ui?f("#contextPlayerSkin").css("background-image","url("+Te+(""+_["imageId"])+"_lo.png?v="+(""+Ne)+")"):f("#contextPlayerSkin").css("background-image","url("+Ce+(""+_["skinId"])+"_lo.png?u="+(Sr[_["skinId"]]||0)+")"):f("#contextPlayerSkin").css("background-image","")
for(var r=1;5>=r;r++)if(_["wears"]&&rl&&r<=_["wears"]["length"]){var s=_["wears"][r-1],l=wu[s["wearArea"]]||""
f("#contextPlayerWear"+r).css("background-image","url("+Ie+(""+s["wearId"])+"_lo.png?v="+(""+Ue)+")").removeClass("center top bottom left right max".replace(l,"")).addClass(l).show()}else f("#contextPlayerWear"+r).css("background-image","").hide()
f("#contextPlayerName").text(_["name"]?_["name"]:bu).css("color",_["name"]&&_["colorIndexName"]>1?Mu[_["colorIndexName"]]:"").removeClass("gold black"),_["name"]&&(1==_["colorIndexName"]?f("#contextPlayerName").addClass("gold"):6==_["colorIndexName"]&&f("#contextPlayerName").addClass("black")),f("#contextPartyInvite").addClass("enabled"),f("#contextFriendAdd").addClass("enabled"),f("#contextUserProfile").addClass("enabled"),f("#contextPrivateMessage").addClass("enabled"),f("#contextMute").addClass("enabled"),Nt>0?f("#contextModerate").addClass("enabled"):f("#contextModerate").removeClass("enabled"),c["isSpectating"]&&0==ka["length"]?f("#contextSpectate").addClass("enabled"):f("#contextSpectate").removeClass("enabled")}else f("#contextPlayerSkin").css({"background-image":"","background-color":""}),f(".context-player-wear").css("background-image","").hide(),f("#contextPlayerName").text("(no player selected)").css("color","").removeClass("gold black"),f("#contextPartyInvite").removeClass("enabled"),f("#contextFriendAdd").removeClass("enabled"),f("#contextUserProfile").removeClass("enabled"),f("#contextPrivateMessage").removeClass("enabled"),f("#contextMute").removeClass("enabled"),f("#contextSpectate").removeClass("enabled"),f("#contextModerate").removeClass("enabled")
zo["length"]>0?(f("#contextPartyMessage").addClass("enabled"),f("#contextPartyLeave").addClass("enabled")):(f("#contextPartyMessage").removeClass("enabled"),f("#contextPartyLeave").removeClass("enabled")),fr["length"]>0?f("#contextUnmute").addClass("enabled"):f("#contextUnmute").removeClass("enabled")
var u=f("#contextMenu"),d=u.outerHeight(),h=u.outerWidth(),m=x["pageY"],p=x["pageX"]
m=Math.max(m+d>Qn&&m-d+1>=0?m-d+1:Math.min(m,Qn-d),0),p=Math.max(Math.min(p,On-h),0),u.show(),u.css({top:m,left:p}),ds=!0}}function m(c){var x=f("#contextSubMenu"),_=f(c),e=_.outerHeight(),t=_.outerWidth(),n=_.offset(),a=n["top"],i=n["left"],o=x.outerHeight(),r=x.outerWidth(),s=Math.max(a-4+o>Qn&&a+4+e-o>=0?a+4+e-o:Math.min(a-4,Qn-o),0),l=Math.max(i-4+t+r>On?i+4-r>=0?i+4-r:On-i-t>=i?On-r:0:Math.min(i-4+t,On-r),0)
x.show(),x.css({top:s,left:l}),He&&(clearTimeout(He),He=0),Ze&&(clearTimeout(Ze),Ze=0),er=c,hs=!0}function p(){if(ds){if(qf()){var c=Oc(6)
c.setUint8(0,60),c.setUint8(1,0),c.setUint32(2,0,!0),Qc(c)}g(),f("#contextMenu").hide().find("li.hover").removeClass("hover"),Ko&&(Ko=null,ea=!0),ds=!1}}function g(){hs&&(f("#contextSubMenu").hide().find("li.hover").removeClass("hover"),er=null,tr={},hs=!1)}function v(c){var x=null
if(c){if(c["currentTarget"]&&!ue){var _=f(c["currentTarget"]),e=_.outerHeight()
e>Qn&&(c["pageY"]>Qn-10&&c["pageY"]<Qn?!_.is(":animated")&&_.animate({top:Qn-e},1e3):c["pageY"]<10&&c["pageY"]>0?!_.is(":animated")&&_.animate({top:0},1e3):_.stop(!0,!1))}c["target"]&&c["target"]["tagName"]=="LI"&&(x=f(c["target"]),x.hasClass("enabled")||(x=null))}He&&(clearTimeout(He),He=0),c&&c["currentTarget"]&&c["currentTarget"]["id"]=="contextSubMenu"?(Ze&&(clearTimeout(Ze),Ze=0),f(".contextmenu").find("li.hover").removeClass("hover"),x&&x.addClass("hover"),er&&f(er).addClass("hover")):(f("#contextMenu").find("li.hover").removeClass("hover"),x&&(x.addClass("hover"),x[0]!==er&&x.hasClass("context-has-submenu")&&(He=setTimeout(function(){x[0]!==er&&x.hasClass("hover")&&(g(),k()),He=0},400))),Ze||!hs||x&&x[0]===er||(Ze=setTimeout(function(){g(),Ze=0},400)))}function b(c){c&&c["currentTarget"]&&f(c["currentTarget"]).stop(!0,!1).find("li.hover").removeClass("hover"),He&&(clearTimeout(He),He=0),Ze||!hs||c&&c["currentTarget"]&&c["currentTarget"]["id"]=="contextSubMenu"||(Ze=setTimeout(function(){g(),Ze=0},400))}function y(c){if(c){var x=f(hs?"#contextSubMenu":"#contextMenu"),_=x.find("li.enabled")
if(_&&_["length"]){var e=_.filter(".hover"),t=(e&&e["length"]?_.index(e[0]):-1)+parseInt(c)
t=0>t?_["length"]-1:t>=_["length"]?0:t,x.find("li.hover").removeClass("hover")
var n=_.eq(t)
if(n.addClass("hover"),n["length"]>0){var a=n.offset().top,i=n.outerHeight()
a+i>Qn-2?ue?x.scrollTop(x.scrollTop()+a+i-Qn+2):x.stop(!0,!1).css({top:"-="+(a+i-Qn+2)}):2>a&&(ue?x.scrollTop(x.scrollTop()+a-2):x.stop(!0,!1).css({top:"-="+(a-2)}))}}}}function k(){function c(c){n!=""&&c["length"]&&(n+="<hr>")
for(var f=0;f<c["length"];f++){var x=c.eq(f),_=x.is(":checked"),e=x.is(":disabled"),t=x.next("span").html()||" ",a="contextSetting"+(""+(o+f))
tr[a]=x,n+='<li id="'+a+'" class="contextmenu-item '+(e?"":"enabled")+'">'+(_?'<div class="context-icon context-icon-checked"></div>':"")+"<p>"+t+"</p></li>",x[0]["id"]=="cCustomBack"&&(n+='<li id="contextSettingSetBackground" class="contextmenu-item enabled"><p> Set Background...</p></li>')}o+=c["length"]}var x=f("#contextMenu").find("li.enabled.hover")
if(x&&x["length"]){var _=x[0]
switch(_["id"]){case "contextPartyInvite":Kf(61),p()
break
case "contextFriendAdd":Ko&&2==Ko["category"]?Jf(81,Ko["name"]):Kf(84),p()
break
case "contextUserProfile":Kf(88),p()
break
case "contextPrivateMessage":Ko&&2==Ko["category"]?insertPMText(Ko["name"]):Kf(45),p()
break
case "contextMute":Ko?M(Ko["uid"],Ko["iid"],Ko["name"]):Kf(109),p()
break
case "contextSpectate":Kf(92),p()
break
case "contextPartyMessage":if(!$l){var e=document.getElementById("chtbox"),t="/party "
e["value"]=t,e["selectionStart"]=e["selectionEnd"]=t["length"],e.focus()}p()
break
case "contextPartyLeave":Kf(64),p()
break
case "contextUnmute":if(ue&&hs&&er==_){g()
break}tr={}
for(var n="",e=fr["length"]-1;e>=0;e--){var a="contextUnmute"+(""+e)
n+='<li id="'+a+'" class="contextmenu-item enabled"><p></p></li>'}n+="<hr>",n+='<li id="contextUnmuteAll" class="contextmenu-item enabled"><p>Unmute All</p></li>',tr["contextUnmuteAll"]=null,f("#contextSubMenu > ul").html(n)
for(var e=0;e<fr["length"];e++){var i=fr[e],a="contextUnmute"+(""+e)
tr[a]=i,f("#"+a+" > p").text(i["name"]?i["name"]:bu)}f("#contextSubMenu").removeClass("compact"),m(_)
break
case "contextModerate":if(ue&&hs&&er==_){g()
break}tr={}
var n=""
n+="<hr>",n+='<li id="contextWarn" class="contextmenu-item enabled"><p>Warn User</p></li>',n+="<hr>",n+='<li id="contextWarnFreeze" class="contextmenu-item enabled"><p>Warn+Freeze Teamer</p></li>',n+="<hr>",n+='<li id="contextMuteUser" class="contextmenu-item enabled"><p>Mute (user auto unmuted on disconnect)</p></li>',n+="<hr>",n+='<li id="contextBanUser" class="contextmenu-item enabled"><p>Ban User 24H</p></li>',tr["contextWarn"]=0,tr["contextWarnFreeze"]=1,tr["contextMuteUser"]=2,tr["contextBanUser"]=3,f("#contextSubMenu > ul").html(n),f("#contextSubMenu").removeClass("compact"),m(_)
break
case "contextSettings":if(ue&&hs&&er==_){g()
break}tr={}
var o=0,n=""
c(f('#settingPage1 label:not(.touch-setting) input[type="checkbox"]')),ue&&c(f('#settingPage1 label.touch-setting input[type="checkbox"]')),c(f('#userSettings .settings-green input[type="checkbox"]')),c(f('#userSettings .settings-gold input[type="checkbox"]')),c(f('#userSettings .settings-orange input[type="checkbox"]:not(:disabled)')),n+='<hr><li id="contextSettingControls" class="contextmenu-item enabled"><p> Controls...</p></li>',f("#contextSubMenu > ul").html(n),f("#contextSubMenu").addClass("compact"),m(_)
break
case "contextScreenshot":E(),p()}}}function w(){if(er){var c=f("#contextSubMenu").find("li.enabled.hover")
if(c&&c["length"]){var x=c[0]
switch(er["id"]){case "contextUnmute":S(tr[x["id"]]),p()
break
case "contextModerate":0==tr[x["id"]]?Vf(93):1==tr[x["id"]]?Kf(89):2==tr[x["id"]]?Kf(96):3==tr[x["id"]]&&Kf(94),p()
break
case "contextSettings":if(x["id"]=="contextSettingControls")az(0,3),f("#gameSettingsTab a").tab("show"),openSettingPage(2),p()
else if(x["id"]=="contextSettingSetBackground")f("#customBackModal").modal("show"),p()
else{var _=tr[x["id"]]
if(_&&!_.is(":disabled")&&_.prop("checked",!_.is(":checked")).change(),er&&f(er).filter(".enabled").hasClass("hover")){var e=x["id"],t=f("#contextSubMenu").offset().top
g(),k(),f("#contextSubMenu").css({top:t}),f("#"+e+".enabled").addClass("hover")}else p()}}}}}function M(c,f,x){var _=c!=ua&&!xr[c],e=f!=ua&&!_r[f]
_||e?(fr.push({uid:c,iid:f,name:x}),xr[c]=(xr[c]||0)+1,_r[f]=(_r[f]||0)+1,ea=!0,T("Muted "+x,!1,!1,0,10)):c!=ua||f!=ua?T("That player is already muted",!1,!1,0,10):T("You cannot mute that player",!1,!1,0,10)}function S(c){if(c){var f=fr.indexOf(c);-1!=f&&fr.splice(f,1),xr[c["uid"]]&&(xr[c["uid"]]--,xr[c["uid"]]<=0&&delete xr[c["uid"]]),_r[c["iid"]]&&(_r[c["iid"]]--,_r[c["iid"]]<=0&&delete _r[c["iid"]]),T("Unmuted "+c["name"],!1,!1,1,10)}else fr=[],xr={},_r={},T("Unmuted all players",!1,!1,1,10)
ea=!0}function C(c){typeof c==="undefined"&&(c=0),1!==c&&a(),2!==c&&p(),3!==c&&af()}function T(c,x,_,e,t){var n=f("#curser")
Pe&&(clearTimeout(Pe),Pe=0),x?n.html(c):n.text(c),n.css({fontSize:_?"24px":"18px",color:2==e?"#999999":1==e?"#00C000":"#FF0000"}),!Jr&&(n.finish().slideDown(50),Jr=!0),t>0&&(Pe=setTimeout(function(){I(!0)},1e3*t))}function I(c){Pe&&(clearTimeout(Pe),Pe=0),c?f("#curser").fadeOut(400):f("#curser").text("").hide(),Jr=!1}function U(c){if(c){var x=c.toLowerCase()
if(!Ro[x]&&x!=Hn.toLowerCase()){var _=document.createElement("div")
_.setAttribute("class","chat-tab"),_.setAttribute("data-category","2"),_.setAttribute("data-username",""+c),_.setAttribute("data-insert","/pm "+c+" "),_.setAttribute("data-tooltip","/pm username ..."),_["innerHTML"]=c,(0==$o||2==$o&&Lo=="")&&f(_).addClass("semi-selected"),document.getElementById("chtTabs").appendChild(_),Ro[x]=_}}}function A(c){if(c){var x=f(c)
if(x&&x.hasClass("chat-tab")){var _=document.getElementById("chtbox")
if(!x.hasClass("selected")){f("#chtTabs").find("div.selected").removeClass("selected"),f("#chtTabs").find("div.semi-selected").removeClass("semi-selected"),x.removeClass("blink").addClass("selected"),$o=parseInt(c.getAttribute("data-category")),isNaN($o)&&($o=0),Lo=c.getAttribute("data-username"),!Lo&&(Lo=""),Oo=c.getAttribute("data-insert"),!Oo&&(Oo="")
var e=c.getAttribute("data-tooltip")
!e&&(e=""),_["title"]=e,0==$o?f("#chtTabs").find("div").not("#chtTabPublic").removeClass("blink").addClass("semi-selected"):2==$o&&Lo==""&&f("#chtTabs").find('[data-username!=""]').removeClass("blink").addClass("semi-selected"),ea=!0}1!=Vo&&(Vo=1,ea=!0),_["value"]=Oo,_.focus(),_["selectionStart"]=_["selectionEnd"]=Oo["length"],_.blur()}}}function N(c){if(ue){if(C(),c.preventDefault(),c.stopPropagation(),!Go&&c["changedTouches"]["length"]>0&&null===Ho){Go=!0
var f=c["changedTouches"][0]
Ho=f["identifier"],jo=f["pageY"]}}else 0==c["button"]&&(Go=!0,jo=c["pageY"],document["body"].addEventListener("mousemove",P,!1),document["body"].addEventListener("mouseup",F,!1))}function P(c){if(ue){if(c.preventDefault(),c.stopPropagation(),Go)for(var f=0;f<c["changedTouches"]["length"];f++){var x=c["changedTouches"][f]
if(Ho==x["identifier"]){D(Jo+jo-x["pageY"])
break}}}else Go&&D(Jo+jo-c["pageY"])}function F(c){if(ue){if(c.preventDefault(),c.stopPropagation(),Go)for(var f=0;f<c["changedTouches"]["length"];f++){var x=c["changedTouches"][f]
if(Ho==x["identifier"]){Go=!1,Ho=null,D(Jo+jo-x["pageY"])
break}}}else Go&&0==c["button"]&&(Go=!1,D(Jo+jo-c["pageY"]),document["body"].removeEventListener("mousemove",P,!1),document["body"].removeEventListener("mouseup",F,!1))}function B(c){if(ue){if(C(),c.preventDefault(),c.stopPropagation(),!Go&&c["changedTouches"]["length"]>0){var x=~~(c["changedTouches"][0]["pageY"]-f("#chtScrollbar").offset().top)
Wo-Yo-Jo>x?D(Jo+Xo):x>Wo-Jo&&D(Jo-Xo)}}else Go||0!=c["button"]||(c["offsetY"]<Wo-Yo-Jo?D(Jo+Xo):c["offsetY"]>Wo-Jo&&D(Jo-Xo))}function D(c){var f=Wo-Yo-2
c=Math.max(Math.min(c,f),0),Vo=f>0?1-c/f:1,Jn["style"]["bottom"]=c+"px",ea=!0}function E(){var c=document.createElement("canvas"),f=c.getContext("2d")
c["width"]=Cn["width"],c["height"]=Cn["height"],f.drawImage(Cn,0,0)
var x=c.toDataURL(),_=Math.max(~~(c["width"]/5),100),e=Math.max(~~(c["height"]/5),100),t="width="+_+",height="+e+",menubar=0,toolbar=0,status=0,resizable=1,scrollbars=1"
if(se)window.open(x,"_blank",t)
else{var n=window.open("","_blank",t)
n&&(n["document"].writeln("<html><head><title>Screenshot</title><style>@media(min-width:"+Math.max(c["width"]-200,100)+"px){img{width:"+c["width"]+'px;}}</style></head><body style="margin:0px;background:#000;"><img width="100%" src="'+x+'" style="max-width:'+c["width"]+"px;max-height:"+c["height"]+'px;"></body></html>'),n["document"]["location"]["href"]="#",n["document"].close())}}function z(c){function x(){Us*=.98,dc()}C(),L(c),tt=setInterval(x,1e3/60),x(),f("#zoomBtnMinus").addClass("active")}function R(c){function x(){Us/=.98,dc()}C(),L(c),tt=setInterval(x,1e3/60),x(),f("#zoomBtnPlus").addClass("active")}function L(c){c.preventDefault(),c.stopPropagation(),tt&&(clearInterval(tt),tt=0),f(".zoom-btn").removeClass("active")}function O(){if(we++,(3==we||4==we||7==we||9==we||11==we||12==we||16==we)&&!Xn){var c=""
c=3==we||11==we?"Hey you! You really should register an agma.io account! It will let you save your progress, level up, and lots of more features and benefits!":'To register an account, press esc (main menu) and on the left side of the screen press "register". It takes 1 minute, and you will have loads of benefits!',T(c,!1,!1,1,20)}}function Q(c){if(C(),c["changedTouches"]["length"]>0&&null===ke&&!Ji){var x=c["changedTouches"][0]
ke=x["identifier"],Me.reset(x["clientX"],x["clientY"]),Se.reset(0,0),$n["style"]["left"]=Me["x"]-fa/2+"px",$n["style"]["top"]=Me["y"]-fa/2+"px",Ln["style"]["left"]=Me["x"]-xa/2+"px",Ln["style"]["top"]=Me["y"]-xa/2+"px",f("#touchPad").show(),f("#touchPadThumb").show()}}function G(c){0==~~(window["innerHeight"]-document["documentElement"]["clientHeight"])&&c.preventDefault()
for(var f=0;f<c["changedTouches"]["length"];f++){var x=c["changedTouches"][f]
if(ke==x["identifier"]){Se.reset(x["clientX"],x["clientY"]),Se.minusEq(Me),Y()
var _=Se["x"]*Se["x"]+Se["y"]*Se["y"],e=fa/2
_>e*e&&Se.multiplyEq(e/Math.sqrt(_)),Ln["style"]["left"]=Me["x"]+Se["x"]-xa/2+"px",Ln["style"]["top"]=Me["y"]+Se["y"]-xa/2+"px"
break}}}function W(c){for(var x=0;x<c["changedTouches"]["length"];x++){var _=c["changedTouches"][x]
if(ke==_["identifier"]){ke=null,Se.reset(0,0),f("#touchPad").hide(),f("#touchPadThumb").hide()
break}}}function Y(){La=2*Se["x"]*Ws/fa+On/2,Oa=2*Se["y"]*Ws/fa+Qn/2,hc()}function J(c,f){C(),c.preventDefault(),null===Ka&&(ci=f,fi=c["currentTarget"])}function V(c){if(c.preventDefault(),c.stopPropagation(),c["changedTouches"]["length"]>0&&null===Ka&&!Ji){var x=c["changedTouches"][0]
Ka=x["identifier"],Va=x["clientX"],ja=x["clientY"],H(),f(fi).addClass("active hover"),kx(ci),Mx()}}function j(c){c.preventDefault(),c.stopPropagation()
for(var x=0;x<c["changedTouches"]["length"];x++){var _=c["changedTouches"][x]
if(Ka==_["identifier"]){Va=_["clientX"],ja=_["clientY"],H(),f(".inventory-box.hover").removeClass("hover")
var e=Z(_["clientX"],_["clientY"],".inventory-box")
e?(f(e).addClass("hover"),kx(ci)):kx(0)
break}}}function X(c){c.preventDefault(),c.stopPropagation()
for(var x=0;x<c["changedTouches"]["length"];x++){var _=c["changedTouches"][x]
if(Ka==_["identifier"]){Ka=null,Va=_["clientX"],ja=_["clientY"],H(),f(fi).removeClass("active"),f(".inventory-box.hover").removeClass("hover"),Z(_["clientX"],_["clientY"],".inventory-box")?Sx():Cx()
break}}}function H(){Xa=Va/Ci+ba-Gn,Ha=ja/Ci+ya-Wn}function Z(c,x,_){var e=document.elementFromPoint(c,x)
if(e&&_){var t=f(e).closest(_)
return t["length"]>0?t[0]:null}return e}function q(c){Qf(),Kf(17),c&&(Ks=c),Ks--,cl&&(clearTimeout(cl),cl=0),Ks>0&&(cl=setTimeout(q,60))}function K(c){C(),c.preventDefault(),c.stopPropagation(),js=!0,q(1),ac(),f("#touchSplitBtn").addClass("active")}function cc(c){c.preventDefault(),c.stopPropagation(),js=!1,Kf(38),ic(),f("#touchSplitBtn").removeClass("active")}function fc(c){C(),c.preventDefault(),c.stopPropagation(),Xs=!0,Hs&&(Hs=!1,f("#touchEjectLockBtn").removeClass("active")),Qf(),Kf(21),js&&ac(),f("#touchEjectBtn").addClass("active")}function xc(c){c.preventDefault(),c.stopPropagation(),Xs=!1,Kf(36),f("#touchEjectBtn").removeClass("active")}function _c(c){C(),c.preventDefault(),c.stopPropagation(),Hs=!Hs,Hs?(Qf(),Kf(21),js&&ac(),f("#touchEjectLockBtn").addClass("active")):(Kf(36),f("#touchEjectLockBtn").removeClass("active"))}function ec(){Hs&&(Hs=!1,Kf(36),f("#touchEjectLockBtn").removeClass("active"))}function tc(c){C(),c.preventDefault(),c.stopPropagation(),Zs=!Zs,Zs?(Qf(),Kf(35),f("#touchFreezeBtn").addClass("active")):(Kf(35),f("#touchFreezeBtn").removeClass("active"))}function nc(c){Zs&&(Zs=!1,f("#touchFreezeBtn").removeClass("active"))}function ac(){ic(),qs=setTimeout(function(){Qf(),Kf(37)},Xs||Hs?120:500)}function ic(){qs&&(clearTimeout(qs),qs=0)}function oc(){null!==ke&&(ke=null,f("#touchPad").hide(),f("#touchPadThumb").hide()),null!==Ka&&(Ka=null,f(fi).removeClass("active"),f(".inventory-box.hover").removeClass("hover"),Sx()),null!==Ho&&(Ho=null,Go=!1)}function rc(c){if(sc(),c.stopPropagation(),1==c["touches"]["length"]&&1==c["changedTouches"]["length"]){var f=c["currentTarget"],x=c["changedTouches"][0]
qe=setTimeout(function(){sc(),f.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0,clientX:x["clientX"],clientY:x["clientY"],pageX:x["pageX"],pageY:x["pageY"],screenX:x["screenX"],screenY:x["screenY"]}))},750)}}function sc(){qe&&(clearTimeout(qe),qe=0)}function lc(c,f){c.addEventListener("touchstart",rc,!1),c.addEventListener("touchmove",sc,!1),c.addEventListener("touchend",sc,!1),c.addEventListener("touchcancel",sc,!1),c.addEventListener("contextmenu",function(c){sc(),f(c)},!1)}function uc(c){Ji||(Us*=Math.pow(.9,c["wheelDelta"]/-120||c["detail"]||0),dc())}function dc(){var c=Bl?.001:1
c>Us&&(Us=c),Us>4/Ci&&(Us=4/Ci),Dl&&_i>0&&(El=Oi*fx(),f_())}function hc(){Qa=(La-On/2)/Ci+ba,Ga=(Oa-Qn/2)/Ci+ya}function mc(){qf()&&(f("#overlays").finish().fadeOut(200),f("#advert").hide(),f("#invisibleOverlay").hide(),yt=!1,As=!0,Xf(),Ji=!1,Ic(),Is&&f("#minionUi").removeClass("minimized"),ue&&(typeof c["localStorage"]!=="undefined"&&c["localStorage"]["fullscreen"]?parseInt(c["localStorage"]["fullscreen"])||0:!de)&&pc())}function pc(){var x=document["documentElement"]
x["requestFullscreen"]?x.requestFullscreen():x["mozRequestFullScreen"]?x.mozRequestFullScreen():x["webkitRequestFullscreen"]?x.webkitRequestFullscreen():x["msRequestFullscreen"]&&x.msRequestFullscreen(),f("#fullscreenBtn").addClass("inFullscreen"),typeof c["localStorage"]!=="undefined"&&(c["localStorage"]["fullscreen"]=1)}function gc(){document["exitFullscreen"]?document["fullscreenElement"]&&document.exitFullscreen():document["mozCancelFullScreen"]?document["mozFullScreenElement"]&&document.mozCancelFullScreen():document["webkitExitFullscreen"]?document["webkitFullscreenElement"]&&document.webkitExitFullscreen():document["msExitFullscreen"]&&document["msFullscreenElement"]&&document.msExitFullscreen(),f("#fullscreenBtn").removeClass("inFullscreen"),typeof c["localStorage"]!=="undefined"&&(c["localStorage"]["fullscreen"]=0)}function vc(){return f("#fullscreenBtn").hasClass("inFullscreen")}function bc(){lt=Date.now(),window["aiptag"]&&aiptag["cmd"]["display"].push(function(){aipDisplayTag.display("AGM_agma-io_300x250")}),yc(),kt=!1,pt=!0}function yc(){ut=Date.now(),window["aiptag"]&&aiptag["cmd"]["display"].push(function(){aipDisplayTag.display("agma-io_728x90")})}function kc(){dt=Date.now(),window["aiptag"]&&aiptag["cmd"]["display"].push(function(){aipDisplayTag.display("agma-io_728x90_2")})}function wc(){ht=Date.now(),window["aiptag"]&&aiptag["cmd"]["display"].push(function(){aipDisplayTag.display("agma-io_160x600")})}function Mc(){mt=Date.now(),window["aiptag"]&&aiptag["cmd"]["display"].push(function(){aipDisplayTag.display("agma-io_970x250")}),gt=!0}function Sc(){!window["adplayer"]&&ln&&(window["adplayer"]=ln),adplayer.startPreRoll()}function Cc(){!window["adplayer"]&&ln&&(window["adplayer"]=ln),adplayer.startRewardedAd()}function Tc(){dt=0,window["aiptag"]&&aiptag["cmd"]["display"].push(function(){aipDisplayTag.clear("agma-io_728x90_2")})}function Ic(){ht=0,window["aiptag"]&&aiptag["cmd"]["display"].push(function(){aipDisplayTag.clear("agma-io_160x600")})}function Uc(){mt=0,window["aiptag"]&&aiptag["cmd"]["display"].push(function(){aipDisplayTag.clear("agma-io_970x250")})}function Ac(){Mc(),kc(),gt&&!bt&&(vt&&(hn=mn=pn=gn=0,Nc()),bt=!0,Xx(),f("#advertContinue").prop("disabled",!0).html('Continue<br><i class="fa fa-spin" style="animation-duration:1s; margin:0px 0px -2px; opacity:0.7;"><img src="img/loading3.png" style="width:20px;"></i>').css("opacity","0.7"),nt=at=!1,hn=mn=_i,pn=gn=Date.now(),rt=600,st=1600,it=setTimeout(function(){at=!0,nt&&Pc()},rt),ot=setTimeout(Pc,st)),kt=!0,setTimeout(function(){kt&&bc()},1e3),C(),Sx(),ue&&!ec()&&nc(),O(),shuffleGameAds(),C_(),shuffleGameTips(),f("#advert").fadeIn(600),f("#overlays").hide(),yt=!0,Ji=!0,nl=null,Kf(14)}function Nc(){vt&&(hn>0&&(mn=hn+5,gn=pn+(nt?rt:st)-50,mn>_i||Date.now()<gn)||(f("#playBtn").prop("disabled",!1).text("Play").css("opacity",""),pt=vt=!1,bt||(it&&(clearTimeout(it),it=0),ot&&(clearTimeout(ot),ot=0))))}function Pc(){bt&&(hn>0&&(mn=hn+5,gn=pn+(nt?rt:st)-50,mn>_i||Date.now()<gn)||(f("#advertContinue").prop("disabled",!1).text("Continue").css("opacity",""),gt=bt=!1,vt||(it&&(clearTimeout(it),it=0),ot&&(clearTimeout(ot),ot=0))))}function Fc(){!f("#loginPanel").is(":visible")&&f("#overlaysContent").fadeOut(100),setTimeout(function(){f("#mainPanel,#serverPanel").hide(),f("#overlaysContent").show(),f("#loginPanel").fadeIn(150)},150)}function Bc(){!f("#serverPanel").is(":visible")&&f("#overlaysContent").fadeOut(100),setTimeout(function(){f("#loginPanel,#mainPanel").hide(),f("#overlaysContent").show(),f("#serverPanel").fadeIn(150)},150)}function Dc(){!f("#mainPanel").is(":visible")&&f("#overlaysContent").fadeOut(100),setTimeout(function(){f("#loginPanel,#serverPanel").hide(),f("#overlaysContent").show(),f("#mainPanel").fadeIn(150)},150)}function Ec(){Wi&&null!=ae&&zc()}function zc(){if(Rc(),null!=ae&&0!=Es){if(!ix())return!Fe&&Lc(),Be=setTimeout(Ec,nu),void(nu*=1.5)
var x="wss://"+ae
location&&location["protocol"]&&location["protocol"].substr(0,5)=="http:"&&(console.log("http"),x="ws://"+ae),ra=!1,Ds=60,ka=[],wa=[],Ma={},Sa=[],Ca=[],Ta=[],Ia={},Ua={},Aa=[],Na={},Pa={},Fa={},Ba=[],Da=[],Ea=[],we=0,wt=0,Mt=0,In=null,Qi=null,Zi=null,qi=-1,_o=0,eo=0,qn="",Kn="",m_(),to=!1,no=!1,ao=!1,ro=!1,so=!1,lo=0,Wa=!1,uo=0,ho=0,mo=0,po=0,go=0,vo=0,bo=0,yo=0,ko=0,wo=!0,Mo=0,f(".inventory-box").removeClass("activatedInv"),So=0,Co=0,To=0,Io=0,Uo=0,Eo=!1,zo=[],c["isSpectating"]=!1,_a=!0,ta=!0,dx(),hx(),mx(),px(),gx(),yx(),Sx(),Pi=0,As=!1,Gx(Ds),!Fe&&Lc(),Be&&(clearTimeout(Be),Be=0),au=!1,$c(),WebSocket=Qu,WebSocket["prototype"]["send"]=Gu,oa=new WebSocket(x),Object["defineProperty"]?Object.defineProperty(oa,"aSocket",{value:!0}):oa["aSocket"]=!0,oa["send"]=function(){},WebSocket["prototype"]["send"]=Wu,oa["binaryType"]="arraybuffer",oa["onopen"]=Gc,oa["onmessage"]=jc,oa["onclose"]=Vc,c["sckt"]=!0}}function Rc(){if(oa){oa["onopen"]=null,oa["onmessage"]=null,oa["onclose"]=null
try{oa.close()}catch(f){}oa=null,c["sckt"]=!1,Lx()}}function $c(){vi=!0,Xe&&(clearTimeout(Xe),Xe=0),Xe=setTimeout(function(){vi=!1,Xe=0},3e3)}function Lc(c){if(Fe&&(clearTimeout(Fe),Fe=0),qf())I()
else{!c&&(c=0)
for(var f=c>3?6-c:c,x="",_=0;f>_;_++)x+="."
T("<span style='opacity:0;'>."+x+"</span>Connecting"+x+"<span style='opacity:0;'>.</span>",!0,!0,2,0),Fe=setTimeout(function(){Lc((c+1)%6)},400)}}function Oc(c){return new DataView(new ArrayBuffer(c))}function Qc(c,f){(ra||!!f)&&Gu.call(oa,c["buffer"])}function Gc(){$a.push({selectable:!1,sid:0,pid:0,uid:ua,iid:ua,name:"Agma.io",receiver:"",color:"#0AFF0A",message:"Connected to server "+mr,category:0,goldMember:0,moderator:0,donator:0,yt:0,touchUser:0,shout:0,time:Date.now(),cache:null}),ea=!0
var c
nu=2e3
var f=+new Date
Ns=f,Fe&&(clearTimeout(Fe),Fe=0),I(),(!Ji||yt)&&az(),$c(),c=Oc(13),c.setUint8(0,245),c.setUint16(1,ie,!0),c.setUint16(3,oe,!0),c.setUint32(5,yi,!0),c.setUint32(9,Yc(c,0,9,245),!0),Qc(c,!0),multiEjectServerChanged=!0,ue&&nc()}function Wc(){var c=(new Date).toDateString(),f=localStorage.getItem("username")
if(null==localStorage.getItem("newv")&&null==f){localStorage.setItem("newv",c)
var x=Oc(2)
x.setUint8(0,160,!0),x.setUint8(1,Uo,!0),Qc(x)}else if(null==localStorage.getItem("newv"));else if(localStorage.getItem("newv")==c){var x=Oc(2)
x.setUint8(0,160,!0),x.setUint8(1,Uo,!0),Qc(x)}}function Yc(c,f,x,_){f+x>c["byteLength"]&&(x=0)
for(var e=12345678+_,t=0;x>t;t++)e+=c.getUint8(f+t)*(t+1)
return e}function Jc(c){bi=c,Gx(0)}function Vc(){if($a.push({selectable:!1,sid:0,pid:0,uid:ua,iid:ua,name:"Agma.io",receiver:"",color:"#FF0A0A",message:"Disconnected from server",category:0,goldMember:0,moderator:0,donator:0,yt:0,touchUser:0,shout:0,time:Date.now(),cache:null}),ea=!0,Lx(),v_(),0!=br["length"]){var f=br.shift()
$("table.server-table tr").removeClass("active"),$("#serverRow"+f["id"]).addClass("active"),setserver(f["address"],f["name"])}else au||(typeof Storage!=="undefined"&&c["localStorage"]["gameservers"]&&c["localStorage"]["serverlistVersion"]!=re?(ae=null,pr="",connectDefault()):(Be=setTimeout(Ec,nu),nu*=1.5))}function jc(c){Xc(new DataView(c["data"]))}function Xc(x){function _(){for(var c,f="";0!=(c=x.getUint16(t,!0));)t+=2,f+=String.fromCharCode(c)
return t+=2,f}function e(c){c=+c
var f=Math.floor(c/3600),x=Math.floor(c%3600/60)
Math.floor(c%3600%60)
return(f>0?f+" Hours & "+(10>x?"0":""):"")+x+" Minutes"}var t=0
switch(240==x.getUint8(t)&&(t+=5),x.getUint8(t++)){case 16:Ef(x,t)
break
case 17:var n=x.getFloat32(t,!0)
t+=4
var a=x.getFloat32(t,!0)
t+=4,Li=x.getFloat32(t,!0),t+=4
var i=Date.now()
Rx(i),Di=Fi,Ei=Bi,zi=n,Ri=a,$i=i
break
case 20:wa=[],ka=[],Ma={},Sa=[],Ca=[],Ta=[],Ia={},Ua={},ei=+new Date,Ns=ei,ta=!0
break
case 32:ka.push(x.getUint32(t,!0)),t+=4
break
case 33:var o,i,r=x.getUint8(t++,!0),s=1&r?1:2&r?2:0,l=!!(8&r),u=0,d=0,h=[]
if(!!(16&r)&&(u=x.getUint16(t,!0),t+=2),0!=s)d=x.getUint32(t,!0),t+=4
else{o=[],i=1,!!(4&r)&&(i=x.getUint16(t,!0),t+=2)
for(var m=0;i>m;m++)o.push(x.getUint32(t,!0)),t+=4}i=x.getUint8(t++,!0)
for(var m=0;i>m;m++)h.push(x.getUint8(t++,!0))
zf(s,d,o,h,l,u),Ns=+new Date
break
case 45:insertPMText(_())
break
case 48:fl=!0
case 49:49==x.getUint8(t-1)&&(fl=!1),Qi=null
var i=x.getUint16(t,!0)
t+=2,Aa=[]
for(var m=0;i>m;++m){var r=x.getUint8(t++),p=0,g=0
!!(1&r)&&(g=x.getUint8(t++)),!!(2&r)&&(p=x.getUint16(t,!0),t+=2)
var v=_(),b=null
if(8&r){for(var y=x.getUint8(t++),k=x.getUint8(t++),w=x.getUint8(t++),S=(y<<16|k<<8|w).toString(16);6>S["length"];)S="0"+S
for(S="#"+S,b8=(~~(y*Al)<<16|~~(k*Al)<<8|~~(w*Al)).toString(16);6>b8["length"];)b8="0"+b8
b8="#"+b8
var C=x.getUint16(t,!0),U=null,A=x.getUint8(t+2)
if(t+=3,0!=A){U=[]
for(var N=0;A>N;N++)U.push({wearId:x.getUint16(t,!0),wearArea:x.getUint8(t+2)}),t+=3}b={cellcolor:S,dimcolor:b8,skinId:C,wears:U}}(!ue||Aa["length"]<5)&&Aa.push({name:v,textcolor:g,pos:p,empty:!!(4&r),cell:b})}_a=!0
break
case 50:Qi=[]
var P=x.getUint16(t,!0)
t+=2
for(var m=0;P>m;++m)Qi.push(x.getFloat32(t,!0)),t+=4
_a=!0
break
case 53:var i=x.getUint16(t,!0)
t+=2
var F=x.getUint8(t++,!0)
xn=1==i&&F,f("#remainingSpins").text(i)
break
case 54:var B=x.getUint8(t,!0)
myWheel.stopAnimation(!1),myWheel["rotationAngle"]=0,myWheel.draw(),drawTriangle(),calculatePrize(B),t+=1
break
case 56:x.getUint8(t,!0)
t+=1,sn=2
try{Cc(),d_(!0)}catch(D){sn=0,console.log("Really? AdBlocker bruh?"),console.log(D),swal("Please turn off your adblock extension")}break
case 64:ai=si["left"]=si["oLeft"]=si["nLeft"]=x.getFloat64(t,!0),t+=8,ii=si["top"]=si["oTop"]=si["nTop"]=x.getFloat64(t,!0),t+=8,oi=si["right"]=si["oRight"]=si["nRight"]=x.getFloat64(t,!0),t+=8,ri=si["bottom"]=si["oBottom"]=si["nBottom"]=x.getFloat64(t,!0),t+=8,si["draw"]=!1,Fi=Di=zi=(oi+ai)/2,Bi=Ei=Ri=(ri+ii)/2,Li=1,0==wa["length"]&&(ba=Fi,ya=Bi,!Dl&&(Ci=Ti=1)),li=x.getInt16(t,!0),t+=2
var i=x.getUint32(t,!0)
t+=4
var E=x.getUint32(t,!0)
t+=4
var r=x.getUint8(t++)
if(di=!!(1&r),wo=!!(2&r),ui=!!(4&r),hi=2*x.getUint32(t,!0),t+=4,mi=2*x.getUint32(t,!0),t+=4,pi=x.getUint16(t,!0),t+=2,gi=x.getUint16(t,!0),t+=2,Ns=+new Date,ta=!0,ue&&!Rl&&_f(),17==li){for(var m=15;19>=m;m++)!gu[m]&&_e(m,16)
for(var m=100;103>=m;m++)!gu[m]&&_e(m,0)
for(var m=110;112>=m;m++)!gu[m]&&_e(m,0)}Dl&&_x(),i===E?70>Ds&&(Ds+=40,Jc(i)):(Rc(),Vc())
break
case 65:ai=si["left"]=si["oLeft"]=si["nLeft"]=x.getFloat64(t,!0),t+=8,ii=si["top"]=si["oTop"]=si["nTop"]=x.getFloat64(t,!0),t+=8,oi=si["right"]=si["oRight"]=si["nRight"]=x.getFloat64(t,!0),t+=8,ri=si["bottom"]=si["oBottom"]=si["nBottom"]=x.getFloat64(t,!0),t+=8,si["draw"]=!1,Ns=+new Date,ta=!0
break
case 66:var z=x.getFloat64(t,!0)
t+=8
var R=x.getFloat64(t,!0)
t+=8
var L=x.getFloat64(t,!0)
t+=8
var O=x.getFloat64(t,!0)
t+=8
var i=Date.now()
!si["draw"]||i-si["updateTime"]>3600?(si["left"]=si["oLeft"]=si["nLeft"]=z,si["top"]=si["oTop"]=si["nTop"]=R,si["right"]=si["oRight"]=si["nRight"]=L,si["bottom"]=si["oBottom"]=si["nBottom"]=O,si["ga"]=0,si["createTime"]=i):(zx(i),si["oLeft"]=si["left"],si["oTop"]=si["top"],si["oRight"]=si["right"],si["oBottom"]=si["bottom"],si["nLeft"]=z,si["nTop"]=R,si["nRight"]=L,si["nBottom"]=O),si["updateTime"]=i,si["draw"]=!0,ta=!0
break
case 75:if(15==li){var r=x.getUint8(t++,!0)
Zi={phase:x.getUint8(t,!0),runningTime:e_(x.getUint32(t+1,!0)),phaseTimer:x.getUint32(t+5,!0),isShrinking:!!(1&r),shrinkTimer:x.getUint16(t+9,!0),players:x.getUint16(t+11,!0),maxPlayers:x.getUint16(t+13,!0),spectators:x.getUint16(t+15,!0),coinRewards:[x.getUint32(t+17,!0),x.getUint32(t+21,!0),x.getUint32(t+25,!0)],isParticipant:!!(2&r),isEliminated:!!(4&r),finishPosition:x.getUint16(t+29,!0),kills:x.getUint16(t+31,!0),isGhosted:!!(8&r),ghostedTimer:x.getUint16(t+33,!0),totalMatches:x.getUint16(t+35,!0),totalWins:x.getUint16(t+37,!0),totalPoints:x.getUint32(t+39,!0),totalKills:x.getUint32(t+43,!0)},t+=47,dx(),mx()}else if(17==li){var r=x.getUint8(t++)
Zi={timeLeft:__(x.getUint32(t,!0)),infected:x.getUint16(t+4,!0),uninfected:x.getUint16(t+6,!0),isParticipant:!!(1&r),kills:x.getUint16(t+8,!0),othersInfected:x.getUint16(t+10,!0)},t+=12,mx()}break
case 76:qi=x.getFloat32(t,!0),t+=4,hx()
break
case 80:_o=x.getUint16(t,!0),t+=2,eo=x.getUint32(t,!0),t+=4
var Q=x.getUint8(t++)
to=!!(1&Q),no=!!(2&Q),ao=!!(4&Q),ro=!!(8&Q),so=!!(16&Q),lo=x.getUint16(t,!0),t+=2
var G=x.getUint16(t,!0)
t+=2
var W=x.getUint16(t,!0)
t+=2
var Y=x.getUint16(t,!0)
t+=2
var J=x.getUint16(t,!0)
t+=2
var V=x.getUint16(t,!0)
t+=2
var j=x.getUint16(t,!0)
t+=2
var X=x.getUint16(t,!0)
t+=2
var H=0
128&Q&&(H=x.getUint16(t,!0),t+=2)
var Z=x.getUint16(t,!0)
t+=2
var q=x.getUint16(t,!0)
t+=2
var K=x.getUint16(t,!0)
t+=2
var cc=x.getUint16(t,!0)
t+=2
var fc=x.getUint16(t,!0)
t+=2
var xc=x.getUint32(t,!0)
t+=4,(uo!=G||ho!=W||mo!=Y||po!=J||go!=V||vo!=j||bo!=X||yo!=H||ko!=Z||So!=q||Co!=K||To!=cc||Io!=fc)&&(uo=G,ho=W,mo=Y,po=J,go=V,vo=j,bo=X,yo=H,ko=Z,0==ko&&1==Mo&&(Mo=0,f("#inv360Shot").removeClass("activatedInv")),So=q,Co=K,To=cc,Io=fc,0==Io&&3==Mo&&(Mo=0,f("#invFrozenVirus").removeClass("activatedInv")),yx()),_o>0?(f("#startBots").hide(),f("#stopBots").show(),Uo=1):f("#stopBots").is(":visible")&&strMon(),Af(xc),px()
break
case 82:var Q=x.getUint8(t++)
Bo=x.getUint16(t,!0),t+=2,Ao&&Fo!=!!(1&Q)&&(Fo=!!(1&Q),document["body"]["style"]["cursor"]=Fo?"default":"not-allowed")
break
case 85:var r=x.getUint8(t++),i=x.getUint16(t,!0)
t+=2,Eo=!!(1&r),zo=[]
for(var m=0;i>m;++m){r=x.getUint8(t++)
var _c=_()
zo.push({name:_c,nameHTML:bx(_c),accepted:!!(1&r),showPos:!1,cx:0,cy:0,pp:null})}gx()
break
case 86:var i=x.getUint16(t,!0)
t+=2
for(var m=0;i>m&&m<zo["length"];++m){var ec=zo[m],r=x.getUint8(t++)
ec["showPos"]=!!(1&r),ec["cx"]=x.getInt32(t,!0),t+=4,ec["cy"]=x.getInt32(t,!0),t+=4}break
case 88:var tc=_(),r=x.getUint8(t++),nc=!!(2&r),ac=4&r?1:8&r?2:0,ic=!!(1&r),oc=16&r?1:32&r?2:64&r?3:0,rc=!!(128&r),sc=x.getUint16(t,!0),lc=x.getUint16(t+2,!0),uc=x.getUint32(t+4,!0),dc=x.getUint16(t+8,!0)
t+=8,swal({title:'<img src="'+(dc?Ce+(""+dc)+"_lo.png?u="+(""+(Sr[dc]||0)):"img/userprofile.png")+'" width="64" height="64" style="border-radius:50%;"><br><br><span style="'+(ic?"color:#f22;":lc?"color:"+Mu[lc]:"")+'">'+tc+'</span><span style="display:block; margin:-10px 0px 15px; font-size:12px; line-height:normal;">'+(rc?'<br><span style="padding:2px 5px; font-size:10px; background:#999; color:#000; border-radius:10px;">Hidden</span><br>':"")+(ac?'<br><span style="color:#f9f;">&#9734;&#9734; Staff &#9734;&#9734;</span>':"")+(ic?'<br><span style="color:#f22;">&#9734;&#9734; YouTuber &#9734;&#9734;</span>':"")+(nc?'<br><span style="color:#ffa;">&#9734;&#9734; Gold Member &#9734;&#9734;</span>':"")+(oc?'<br><span style="color:#4f4;">&#9734;&#9734; <img src="img/navpage/'+(1==oc?"super":2==oc?"legendary":"hot")+'_donator_ico.png" width="16" height="16"> Donator &#9734;&#9734;</span>':"")+"</span>",text:'<span style="color:#ffa;"><br>Level: '+sc+"<br>Rank: "+(uc>5e4?">50000":uc)+"<br><br></span>",type:"",customClass:nc?"swal-title-gold":"swal-title-white",html:!0})
break
case 89:var hc=_(),r=x.getUint8(t++),mc=!!(1&r),pc=x.getUint8(t++),gc=x.getUint16(t,!0)
t+=2,hc==""?I():T(hc,!1,mc,pc,gc)
break
case 91:var hc=_(),r=x.getUint8(t++),mc=!!(1&r),vc=x.getUint8(t++),gc=x.getUint16(t,!0)
if(t+=2,hc=="sFX_nuke"){var bc=new Audio("sounds/infection_nuke.mp3?v=2")
bc["volume"]=.07,bc.play(),f("#canvas").css("animation","shake 0.5s"),f("#canvas").css("animation-iteration-count","infinite"),setTimeout(function(){f("#canvas").css("animation-iteration-count","unset")},7e3)}else if(hc=="sFX_iceFrozen"){var bc=new Audio("sounds/Ice_barrage_sound.mp3")
bc["volume"]=.06,bc["currentTime"]=1,bc.play()}else if(hc=="sFX_fx_powerup_block.mp3"){var yc=new Audio("sounds/fx_powerup_block.mp3")
yc["volume"]=.2,yc["currentTime"]=1.05,yc.play()}else if(hc=="sFX_fx_teleport"){var yc=new Audio("sounds/fx_teleport.mp3")
yc["volume"]=.3,yc["currentTime"]=1.05,yc.play()}else if(hc=="sFX_fx_mothercell_blast"){var yc=new Audio("sounds/fx_mothercell_blast.mp3")
yc["volume"]=.15,yc["currentTime"]=1.05,yc.play()}else if(hc=="tutorial_infoholderInventory")f("#infoHolderInventory").show(),setTimeout(function(){f("#infoHolderInventory").fadeOut("slow")},2e4)
else if(hc=="tutorial_infoholderBots_showIn5Sec")setTimeout(function(){f("#infoHolderBots").show(),setMinionUi(!0)},2e4),setTimeout(function(){f("#infoHolderBots").fadeOut("slow"),f("#infoHolderFriends").fadeIn("slow")},85e3),setTimeout(function(){f("#infoHolderFriends").fadeOut("slow")},14e4)
else{f("#infection-text").html(hc),f("#zombieRemain1").attr("onclick","zombieRemain(1,"+vc+"); return false;"),f("#zombieRemain2").attr("onclick","zombieRemain(2,"+vc+"); return false;"),f("#infection_remain_zombie").stop(!0,!1).show(0).addClass("visible")
var kc=new Audio("sounds/popup.ogg")
kc["volume"]=.5,kc.play(),timerInfectionModal=setTimeout(function(){f("#infection_remain_zombie").stop(!0,!1).removeClass("visible").delay(400).hide(0)},1e3*gc)}break
case 94:var r=x.getUint8(t++),hc=_(),wc=x.getUint8(t++),pc=x.getUint8(t++),Mc=1&r?_():2>=pc?["Oops...","Success!","Info"][pc]:"",Sc=2&r?x.getUint8(t++):0,Tc=null,Ic=null,Uc="",Ac=0
if(0!=wc)switch(wc){case 1:lf()
break
case 2:mf()
break
case 3:az(0,0)
break
case 4:Tc="img/victory_goldencup2.gif",Ic="200x150",Ac=1e3
break
case 5:$("#abilityFreeze").addClass("has-ability")
break
case 6:$("#abilityCloak").addClass("has-ability")
break
case 7:$("#abilityDoubleSpawnSize").addClass("has-ability")
break
case 8:$("#abilityDoubleExp").addClass("has-ability")
break
case 9:pt=!0,az(0,2)
break
case 10:Tc="img/chest.png",Ac=1e3}if(0!=Sc)switch(Sc){case 1:Uc="swal-title-red"
break
case 2:Uc="swal-title-green"
break
case 3:Uc="swal-title-orange"
break
case 4:Uc="swal-title-yellow"}var Nc={title:Mc,text:hc,type:0==pc?"error":1==pc?"success":"",imageUrl:Tc,imageSize:Ic,customClass:Uc}
Ac?setTimeout(function(){swal(Nc)},Ac):swal(Nc)
break
case 95:var Pc=x.getUint8(t++,!0)
if(f("#registerSuccess").finish().hide(),1==Pc){if($("#login").fadeOut("slow",function(){}),Xn=!0,Hn=qn,Ee=0,Hn.toLowerCase()!=Pr.toLowerCase()&&lf(),Hn.toLowerCase()!=zr.toLowerCase()&&mf(),typeof Storage!=="undefined"){if(localStorage.setItem("username",qn),localStorage.setItem("password",ne(md5(qn))),null!=c["localStorage"]["settings"]){var Fc=JSON.parse(c["localStorage"]["settings"])
typeof Fc["user"]!=="undefined"&&Fc["user"].toLowerCase()==Hn.toLowerCase()&&(typeof Fc["skinId"]!=="undefined"&&0!=Fc["skinId"]&&df(Fc["skinId"]),typeof Fc["wearablesSelected"]!=="undefined"&&0!=Fc["wearablesSelected"]["length"]&&kf(Fc["wearablesSelected"]))}jx()}Hn.toLowerCase()!=rr.toLowerCase()&&f("#friendDialogMessage").text("Loading..."),gs&&(Ye&&(clearInterval(Ye),Ye=0),Ye=setInterval(ff,28e3),Hn.toLowerCase()!=rr.toLowerCase()?ff():(Je&&(clearInterval(Je),Je=0),Je=setTimeout(function(){gs&&Xn&&Date.now()-Ve>5e3&&ff()},5e3))),ys&&Kf(57),Gx(Ds),$("#loginError").finish().hide()}else 0==Pc?($("#loginError p").replaceWith("<p>Incorrect login <br> Wrong username or password.</p>"),$("#loginError").fadeIn()):2==Pc?!Xn&&Date.now()<Ee?ze=setTimeout(function(){h_(qn,Kn)},500):($("#loginError p").replaceWith("<p>Your account is already logged in... <br>Please wait a couple seconds. Make sure you're not logged in on another tab.</p>"),$("#loginError").finish().fadeIn(),f("#sent").removeAttr("disabled")):13==Pc?($("#loginError p").replaceWith("<p>Failed login <br> Login Server is down. Please try again later.</p>"),$("#loginError").fadeIn()):14==Pc&&($("#loginError p").replaceWith("<p>Failed login</p>"),$("#loginError").fadeIn())
if(3==Pc&&($("#loginError p").replaceWith("<p>Username too long... <br> Maximum is 20 characters</p>"),$("#loginError").fadeIn()),4==Pc&&($("#loginError p").replaceWith("<p>Something went wrong with the encryption of your password. Please try again</p>"),$("#loginError").fadeIn()),5==Pc&&($("#loginError p").replaceWith("<p>Email too long... <br> Maximum is 40 characters</p>"),$("#loginError").fadeIn()),6==Pc&&($("#loginError p").replaceWith("<p>Wow that's a short username!<br> Please type a longer username</p>"),$("#loginError").fadeIn()),7==Pc&&($("#loginError p").replaceWith("<p>Please enter a password<p>"),$("#loginError").fadeIn()),8==Pc&&($("#loginError p").replaceWith("<p>Wow, that's a short email!<br> Did you forget to type an email?</p>"),$("#loginError").fadeIn()),11==Pc&&($("#loginError p").replaceWith("<p>Username or Email contains invalid characters! Please try a different username or email.</p>"),$("#loginError").fadeIn()),9==Pc){f("#loginError").finish().hide(),f('a[href="#home"]').trigger("click"),f("#registerSuccess").fadeIn("slow").delay(1e4).fadeOut("slow"),f("#password").val(""),f("#email").val("")
var Bc=$("#regUsername").val()
f("#username").val(Bc),f("#regUsername").val(""),f("#regEmail").val(""),f("regPassword").val("")}10==Pc&&($("#loginError p").replaceWith("<p>Username or email already exists.<br> Please try a different username or email</p>"),$("#loginError").fadeIn()),12==Pc&&($("#loginError p").replaceWith("<p>Are you a robot?<br> You did not verify the captcha challenge. Please verify 'Im not a robot'</p>"),$("#loginError").fadeIn())
break
case 96:var r=x.getUint8(t++),Dc=128&r?x.getUint8(t++):0
Ut=!(1&r),Lt=!!(32&r),Ot=!!(64&r),Qt=!!(1&Dc),Gt=!!(2&Dc),Wt=!!(4&Dc),Yt=!!(8&Dc),Jt=!!(16&Dc),Vt=!!(32&Dc)
var Ec=!!(2&r),zc=!!(4&r),$c=!!(8&r),Lc=!!(16&r)
Vt&&(jt=x.getUint32(t,!0),t+=4)
var Oc=x.getUint32(t,!0)
t+=4
var Qc=x.getUint32(t,!0)
t+=4
var Gc=x.getUint32(t,!0)
t+=4,At=x.getUint8(t,!0),t++,Nt=x.getUint8(t,!0),t++,Nt>0?f("#contextModerate").show():f("#contextModerate").hide(),999999>Qc?f(".progress-bar-coins").css("color","#fff"):Qc>1e7?f(".progress-bar-coins").css("color","#83ebfb"):f(".progress-bar-coins").css("color","#98ff98")
var Yc=x.getUint16(t,!0)
t+=2
var jc=x.getUint32(t,!0)
t+=4,Zn=x.getUint32(t,!0),t+=4
var Xc=x.getUint32(t,!0)
t+=4
for(var _c,hc="";0!=(_c=x.getUint16(t,!0));)t+=2,hc+=String.fromCharCode(_c)
t+=2,kn=!0,Hn=hc,n_(),ga=!0,o_(),2==At?($(".username").hasClass("goldBar")||($(".username").addClass("goldBar"),setTimeout(function(){$(".username").hasClass("goldBar")&&!$(".username").hasClass("shine")&&($(".username").addClass("shine"),setTimeout(function(){$(".username").removeClass("shine")},2e3))},600)),$(".memberType").html('<p style="margin: 0 auto;text-align: center;color: #fffe12; text-shadow: 0px 0px 10px #c7920d; /*background: transparent url(img/particles.gif);*/">GOLD MEMBER</p>')):($(".username").removeClass("goldBar"),$(".memberType").html('<a href="member.php?camp=3" target="_blank"><p style="margin: 0 auto;text-align: center;color: white; font-size: 12px; font-weight: bold; text-shadow: 0px 0px 10px #2196F3;">NOT A GOLD MEMBER</p></a>')),f("#visibilityStatus").show(),f("#cVisibilityStatus").prop("disabled",!1),f("#cVisibilityStatus2").prop("disabled",!1),setFriendlistOnline(Ut,!0),f("#cGoldName").prop("disabled",2!=At),f("#cGoldName2").prop("disabled",2!=At),f("#cGoldCrownChat").prop("disabled",2!=At),f("#cGoldCrownChat2").prop("disabled",2!=At),f("#cMinionSkinsStatus").prop("disabled",2!=At),f("#cVideoAds").prop("disabled",2!=At),2==At&&(setGoldNickname(Bt),setGoldCrownChat(Dt),setMinionSkins(zt),setVideoAds(Rt)),f('#roleSettings input[type="checkbox"]').prop("disabled",!0),f("#roleSettings .role-setting").hide(),Nt>0||Lt||Ot||Qt||Gt||Wt||Yt||Jt||Vt?(f("#roleSettings").show(),Nt>0&&(f("#cModeratorIconChat").prop("disabled",!1).parents("div.role-setting").show(),setModeratorIconChat($t)),Lt&&(f("#cIconDRank").prop("disabled",!1).parents("div.role-setting").show(),setIconDRank(Xt)),Ot&&(f("#cIconYT").prop("disabled",!1).parents("div.role-setting").show(),setIconYT(Ht)),Qt&&(f("#cGreenName").prop("disabled",!1).parents("div.role-setting").show(),setGreenName(Zt)),Gt&&(f("#cBlueName").prop("disabled",!1).parents("div.role-setting").show(),setBlueName(qt)),Wt&&(f("#cOrangeName").prop("disabled",!1).parents("div.role-setting").show(),setOrangeName(Kt)),Yt&&(f("#cRedName").prop("disabled",!1).parents("div.role-setting").show(),setRedName(cn)),Jt&&(f("#cBlackName").prop("disabled",!1).parents("div.role-setting").show(),setBlackName(fn)),Vt&&(f("#cCustomColorName").prop("disabled",!1).parents("div.role-setting").show(),setCustomColorName(_n))):f("#roleSettings").hide(),$(".username p").replaceWith("<p>"+Hn+"</p>"),$("#coinsUserId2").val(Zn),$("#userCoins2").text(Hn),$("#referral").val(window["location"]["protocol"]+"//agma.io/?ref="+Xc),It||(Math.random()<.05&&setTimeout(function(){Ji&&$(".bs-example-modal-lg5").modal("show")},2500),It=!0),Gx(Ds),jc>5e4&&(jc=">50000"),$(".timePlayed span").text("Time played: "+e(Gc)),$(".ranking span").text("Your rank: "+jc),Af(Qc),Nf(Yc,Oc),$("#dashPanel").fadeIn("slow"),$("#dashTab").show(),$("#loginRegisterTab").hide(),$("#login").hide(),Ec?$("#abilityFreeze").addClass("has-ability"):$("#abilityFreeze").removeClass("has-ability"),zc?$("#abilityCloak").addClass("has-ability"):$("#abilityCloak").removeClass("has-ability"),$c?$("#abilityDoubleSpawnSize").addClass("has-ability"):$("#abilityDoubleSpawnSize").removeClass("has-ability"),Lc?$("#abilityDoubleExp").addClass("has-ability"):$("#abilityDoubleExp").removeClass("has-ability"),kn=!1
break
case 97:var Zc=x.getUint8(t,!0)
t++
for(var _c,hc="";0!=(_c=x.getUint16(t,!0));)hc+=String.fromCharCode(_c),t+=2
t+=2
for(var cf,xf="";0!=(cf=x.getUint16(t,!0));)xf+=String.fromCharCode(cf),t+=2
t+=2
var ef=x.getUint8(t++,!0),tf=x.getUint16(t,!0)
t+=2
for(var nf=x.getUint8(t++),af=[],i=0;nf>i;i++)af.push({wearId:x.getUint16(t,!0),wearArea:x.getUint8(t+2)}),t+=3
switch($("#megaphone_name").text(xf).css("color",ef>1?Mu[ef]:"").removeClass("gold black"),1==ef?f("#megaphone_name").addClass("gold"):6==ef&&f("#megaphone_name").addClass("black"),$("#megaphone_text").text(hc),Zc){case 1:$("#skinMegaWidget").css("background-color","#25a599")
break
case 2:$("#skinMegaWidget").css("background-color","#ff7043")
break
case 3:$("#skinMegaWidget").css("background-color","#ab47bc")
break
case 4:$("#skinMegaWidget").css("background-color","#ec407a")
break
case 5:$("#skinMegaWidget").css("background-color","#8ac249")
break
case 6:$("#skinMegaWidget").css("background-color","rgb(6, 187, 211)")
break
case 7:$("#skinMegaWidget").css("background-color","rgb(239, 84, 85)")}0!=tf?f("#skinMegaWidget").css("background-image","url('"+Ce+(""+tf)+"_lo.png?u="+(Sr[tf]||0)+"')"):f("#skinMegaWidget").css("background-image","none")
for(var i=1;5>=i;i++)if(i<=af["length"]){var rf=af[i-1],uf=wu[rf["wearArea"]]||""
f("#wearMegaWidget"+i).css("background-image","url('"+Ie+(""+rf["wearId"])+"_lo.png?v="+(""+Ue)+"')").removeClass("center top bottom left right max".replace(uf,"")).addClass(uf).show()}else f("#wearMegaWidget"+i).css("background-image","none").hide()
ct&&(clearTimeout(ct),ct=0),$("#megaholder").stop(!0,!1).show(0),$("#megaphone").animate({"margin-right":"10px"},function(){ct=setTimeout(function(){$("#megaphone").animate({"margin-right":"-350px"}),$("#megaholder").delay(900).hide(0)},3e4)})
break
case 98:var Yc=x.getUint16(t,!0)
t+=2
var Oc=x.getUint32(t,!0)
t+=4,Xn&&Nf(Yc,Oc)
break
case 99:Ff(x,t)
break
case 100:var pf=[],gf=0,vf=0,bf=0,i=x.getUint16(t,!0)
t+=2
for(var m=0;i>m;++m){var r=x.getUint8(t++)
pf.push({name:_(),accepted:!!(1&r),isRequester:!!(2&r),loginStatus:!!(4&r),goldMember:!!(16&r),serverName:4&r?_():""})
var _c=pf[m]
_c["accepted"]||!_c["isRequester"]?(_c["loginStatus"]&&gf++,vf++):bf++}Ve=Date.now()
var yf=pf["length"]!=nr["length"]||ar!=Xn||Hn.toLowerCase()!=rr.toLowerCase()
if(!yf)for(var m=0;m<nr["length"];++m){var wf=nr[m],Mf=pf[m]
if(wf["name"]!=Mf["name"]||wf["accepted"]!=Mf["accepted"]||wf["isRequester"]!=Mf["isRequester"]||wf["loginStatus"]!=Mf["loginStatus"]||wf["goldMember"]!=Mf["goldMember"]||wf["serverName"]!=Mf["serverName"]){yf=!0
break}}yf&&(nr=pf,ar=Xn,rr=Hn,sr=gf,lr=vf,ur=bf,Kc())
break
case 101:window["AG"]&&window["AG"]["showCaptcha"]&&(window["AG"].showCaptcha("bt"),az())
break
case 103:var Sf=x.getUint16(t,!0)
t+=2,f("#refCount").text(Sf)
break
case 105:m_(),p_(!0)
break
case 106:au=!0,Be&&(clearTimeout(Be),Be=0)
var p=+new Date,Cf=!0
if(typeof c["localStorage"]==="undefined")Cf=!1
else if(null!=c["localStorage"]["reloadTime"]){var g=JSON.parse(c["localStorage"]["reloadTime"])+36e5
g>p&&(Cf=!1)}if(Cf){c["localStorage"]["reloadTime"]=JSON.stringify(p)
try{window["location"].reload(!0)}catch(i){}}break
case 107:au=!0,Be&&(clearTimeout(Be),Be=0)
break
case 108:for(var r=x.getUint8(t++),i=1&r?x.getUint8(t++):1,_c=[],m=0;i>m;++m){var Tf=x.getUint32(t,!0)
t+=4
var If=x.getUint32(t,!0)
if(t+=4,Tf!==If){_c=null
break}_c.push(Tf)}typeof localStorage!=="undefined"&&_c&&_c["length"]>0&&(localStorage["cdbi4"]=i>1||_c[0]?ne(1==i?""+_c[0]:JSON.stringify(_c)):0,localStorage["cdbi3"]=0,localStorage["cdbi2"]=0,localStorage["cdbi"]=0)
break
case 109:var r=x.getUint8(t++),Uf=ua
2&r&&(Uf=md5((((x.getUint32(t,!0)^la)+4294967296)%4294967296).toString(36)),t+=4)
for(var i=1&r?x.getUint8(t++):1,Pf=[],m=0;i>m;++m)Pf.push((((x.getUint32(t,!0)^la)+4294967296)%4294967296).toString(36)),t+=4
Pf=md5(Pf["length"]>1?JSON.stringify(Pf):Pf[0]),M(Uf,Pf,_())
break
case 110:var Bf=0,i=x.getUint16(t,!0)
if(t+=2,i>0){for(var Df=[],m=0;i>m;++m){var r=x.getUint8(t++),Rf=x.getUint16(t,!0)
t+=2,Df.push({id:Rf,name:_(),description:_(),address:_(),location:x.getUint8(t++),gamemode:Hc(x.getUint8(t++)),players:x.getUint16(t,!0),maxPlayers:x.getUint16(t+2,!0),isCurrent:!!(1&r)}),t+=4,Df[m]["isCurrent"]&&(Bf=Df[m]["location"],qc(Df[m]["gamemode"]),hr=Rf)}if(!yr){var yf=Df["length"]!=dr["length"]
if(!yf)for(var m=0;m<dr["length"];++m){var $f=dr[m],Lf=Df[m]
if($f["id"]!=Lf["id"]||$f["name"]!=Lf["name"]||$f["description"]!=Lf["description"]||$f["address"]!=Lf["address"]||$f["location"]!=Lf["location"]||$f["gamemode"]!=Lf["gamemode"]||$f["maxPlayers"]!=Lf["maxPlayers"]){yf=!0
break}}yr=yf}dr=Df,null!=c["localStorage"]["gameservers"]&&(Bf=void 0),c["localStorage"]["gameservers"]=JSON.stringify(dr),c["localStorage"]["serverlistVersion"]=re,yr&&(of(Bf),yr=!1,Gx(Ds)),br=[]}break
case 111:var i=x.getUint16(t,!0)
t+=2
for(var m=0;i>m;++m){var Rf=x.getUint16(t,!0),Of=x.getUint16(t+2,!0),Qf=x.getUint16(t+4,!0)
t+=6,f("#serverPlayers"+Rf).text(Of+"/"+Qf)}break
case 114:var i=x.getUint16(t,!0)
if(t+=2,i>0){Fr=[]
for(var m=0;i>m;++m){var r=x.getUint8(t++),Gf=x.getUint16(t,!0),Wf=x.getUint8(t+2)
t+=3,Fr.push({id:Gf,type:Wf,name:_(),area:x.getUint8(t),zIndex:x.getUint16(t+1,!0),group:x.getUint16(t+3,!0),levelRequired:0,vipLevelRequired:0,price:0,approved:!!(2&r),pendingApproval:!!(4&r),enabled:!!(1&r)}),t+=5,1==Wf?(Fr[Fr["length"]-1]["levelRequired"]=x.getUint16(t,!0),t+=2):3==Wf?Fr[Fr["length"]-1]["vipLevelRequired"]=x.getUint8(t++):2==Wf&&(Fr[Fr["length"]-1]["price"]=x.getUint32(t,!0),t+=4)}hf(),Br=!1,zr=Hn}break
case 115:var i=x.getUint16(t,!0)
if(t+=2,i>0){Ir=[]
for(var m=0;i>m;++m){var r=x.getUint8(t++),Gf=x.getUint16(t,!0),Wf=x.getUint8(t+2),Yf=x.getUint32(t+3,!0)
t+=7,Ir.push({id:Gf,type:Wf,name:_(),levelRequired:0,vipLevelRequired:0,price:0,approved:!!(2&r),pendingApproval:0,userAssigned:!!(8&r),sharedPublic:!!(16&r),changedUnix:Yf,changedDaysAgo:0,changeAllowed:!!(32&r),popularity:0,enabled:!!(1&r)}),1==Wf?(Ir[Ir["length"]-1]["levelRequired"]=x.getUint16(t,!0),t+=2):3==Wf?Ir[Ir["length"]-1]["vipLevelRequired"]=x.getUint8(t++):2==Wf?(Ir[Ir["length"]-1]["price"]=x.getUint32(t,!0),t+=4):4==Wf&&(8&r?(Ir[Ir["length"]-1]["pendingApproval"]=x.getUint8(t),Ir[Ir["length"]-1]["changedDaysAgo"]=x.getUint16(t+1,!0),t+=3):16&r&&1&r&&(Ir[Ir["length"]-1]["popularity"]=x.getUint16(t,!0),t+=2)),Sr[Gf]=Yf}var p=x.getUint32(t,!0)
t+=4,p>0&&(Tr=p),sf(),Ur=!1,Pr=Hn}break
case 116:var i=x.getUint16(t,!0)
if(t+=2,i>0){Sr={}
for(var m=0;i>m;++m){var Gf=x.getUint16(t,!0)
Sr[Gf]=x.getUint32(t+2,!0),t+=6}i=x.getUint16(t,!0),t+=2,Cr={}
for(var m=0;i>m;++m)Cr[x.getUint16(t,!0)]=!0,t+=2}break
case 130:var Jf=x.getUint16(t,!0)
t+=2,et=!1,Fl&&f("#ping").html('<span style="color:'+(Jf>150?"#f44":Jf>100?"#fa4":"#2d2")+';">'+Jf+'<span style="font-size:12px;">ms</span></span>')
break
case 244:if(1==x["byteLength"]){ra=!0,y_(),showPartyInvite(Pt),setPartyAnimations(Ft),setAutoFeedEnabled(Et)
var Vf=+new Date
Ns=Vf,Ee=Vf+6e3,h_(),je&&(clearTimeout(je),je=0),ft&&(clearInterval(ft),ft=0),ft=setInterval(o_,1e4),Ur&&lf(),Br&&mf(),$x(),Wc(),ue&&Kf(182)}}}function Hc(c){var f=ku[c]
return f?f:""}function Zc(c){for(var f=0;f<dr["length"];++f){var x=dr[f]
if(x["address"]==c)return x}return null}function qc(c){c!=Hc(17)&&f(".agma-logo").hasClass("agma_corona-simulator")&&f(".agma-logo").removeClass("agma_corona-simulator"),c==Hc(15)?f(".agma-logo").attr("src","img/agma_royale_lo.png"):c==Hc(17)?(f(".agma-logo").attr("src","img/coronavirus_simulator_game.png"),f(".agma-logo").addClass("agma_corona-simulator")):f(".agma-logo").attr("src","img/agmalogo_a.png")}function Kc(){var c=f("#requestList").hasClass("active")?1:0,x={friendlist:nr,activeTab:c,loggedIn:ar},_=f(f("#friendDialog li.active a").attr("href")),e=_["length"]>0?_[0]["id"]:""
Rr++
var t=Rr
f.post("friendlist.php",{data:JSON.stringify(x)},function(c){if(t>$r){var x=e?f("#"+e).scrollTop():0
document.getElementById("phpFriendlist").innerHTML=c,f("#friendsLoggedInAmt").text(sr),f("#friendsTotalAmt").text(" / "+lr),f("#friendsRequestsAmt").text(ur>0?ur:"")
var _=f(f("#friendDialog li.active a").attr("href"))
_&&!_.hasClass("active")&&(f("#friendDialog div.friend-list").removeClass("active"),_.addClass("active")),e&&f("#"+e).scrollTop(x),$r=t}},"html")
for(var n=!1,a=0;a<nr["length"];++a){var _=nr[a]
if(!_["accepted"]&&_["isRequester"]){n=!0
break}}n?f("#friendRequestsBell").addClass("red"):f("#friendRequestsBell").removeClass("red")}function cf(){gs?(document.getElementById("friendAddInput").blur(),f("#friendDialog").stop(!0,!1).removeClass("shown").css({width:"",height:""}).delay(200).hide(0),gs=!1,Ye&&(clearInterval(Ye),Ye=0)):(f("#friendDialog").stop(!0,!1).show(0).addClass("shown").css({width:ir>0?ir+"px":"",height:or>0?or+"px":""}).delay(300).show(0,_f),gs=!0,Ye||((Date.now()-Ve>5e3||ar!=Xn||Hn.toLowerCase()!=rr.toLowerCase())&&ff(),Ye=setInterval(ff,28e3)))}function ff(){qf()&&Xn?Kf(80):xf()}function xf(){0!=nr["length"]||ar||rr!=""?(nr=[],ar=!1,rr="",sr=0,lr=0,ur=0,Kc()):f("#friendDialogMessage").text("Login to see your friendlist")}function _f(){var c=~~(Math.max(200*Math.min(1.6*Qn,On,1400)/1400,90)+.5)/200,x=Rl||ue&&(15==li||17==li)?~~(200*c+.5)+20:10
f("#btnFriends").css("right",x+"px")
var _=f("#friendDialog")
if(gs)var e=_.outerHeight()*(ue||me?.7:1),t=_.outerWidth()*(ue||me?.7:1),n=_.offset(),a=n["top"],i=n["left"],o=Math.max(Math.min(a,Qn-e),0),r=Math.min(Math.max(On-i-t,0),On-t)
else var s=ue||me?28:40,o=12+s,r=ue||me?0:x+s
_.css({right:r+"px",top:o+"px"})}function ef(c){function x(c){gs?t.css({right:On-(c["pageX"]-a)+"px",top:c["pageY"]-i+"px"}):e()}function _(c){0==c["button"]&&e()}function e(){t.removeClass("actives"),document["body"].removeEventListener("mousemove",x,!1),document["body"].removeEventListener("mouseup",_,!1),document["body"].removeEventListener("mouseleave",e,!1)}var t=f("#friendDialog")
if(0==c["button"]&&!t.hasClass("actives")){var n=t.offset(),a=c["pageX"]-n["left"]-t.width()*(ue||me?.7:1),i=c["pageY"]-n["top"]
t.addClass("actives"),document["body"].addEventListener("mousemove",x,!1),document["body"].addEventListener("mouseup",_,!1),document["body"].addEventListener("mouseleave",e,!1)}}function tf(c){function x(c){gs?(ir=Math.max(Math.min(o+(c["clientX"]-a)/(ue||me?.7:1),On),200),or=Math.max(Math.min(r+(c["clientY"]-i)/(ue||me?.7:1),Qn),240),t.css({width:ir+"px",height:or+"px",right:s-(ir-o)*(ue||me?.7:1)+"px"})):e()}function _(c){0==c["button"]&&e()}function e(){t.removeClass("actives"),document["body"].removeEventListener("mousemove",x,!1),document["body"].removeEventListener("mouseup",_,!1),document["body"].removeEventListener("mouseleave",e,!1)}var t=f("#friendDialog")
if(0==c["button"]&&!t.hasClass("actives")){var n=window.getComputedStyle(document.getElementById("friendDialog")),a=c["clientX"],i=c["clientY"],o=parseInt(n["width"]),r=parseInt(n["height"]),s=parseInt(n["right"])
t.addClass("actives"),document["body"].addEventListener("mousemove",x,!1),document["body"].addEventListener("mouseup",_,!1),document["body"].addEventListener("mouseleave",e,!1)}}function nf(){vs?(f("#settingsDialog").stop(!0,!1).css({overflow:""}).removeClass("shown").delay(200).hide(0),vs=!1):(f("#settingsDialog").stop(!0,!1).show(0).addClass("shown").delay(300).queue(function(c){$(this).css({overflow:ue?"auto":""}),c()}),vs=!0)}function af(){vs&&nf()}function of(c){var x=typeof c!=="undefined",_=x?c:f("#tabAS").is(":checked")?2:f("#tabNA").is(":checked")?1:0,e={gameservers:dr,activeTab:_}
Lr++
var t=Lr
f.post("gameservers.php",{data:JSON.stringify(e)},function(c){if(t>Or){var _=f("#serv input:radio:checked"),e=_["length"]>0?_[0]["id"]:""
document.getElementById("serv").innerHTML=c,Or=t
var n=Zc(ae)
n&&($("table.server-table tr").removeClass("active"),$("#serverRow"+n["id"]).addClass("active")),!x&&e&&f("#"+e).prop("checked",!0).change()}},"html")}function rf(){kr||(kr=!0,f.post("hscore2.php",{},function(c){document.getElementById("phpHiscores").innerHTML=c},"html"))}function sf(){var c=f("#skinsCustomTab").hasClass("active")?4:f("#skinsVIPTab").hasClass("active")?3:f("#skinsBuyTab").hasClass("active")?2:f("#skinsLevelTab").hasClass("active")?1:0,x={skins:Ir,activeTab:c,currentSkin:al,customSkinPrice:Tr,supportFileDragAndDrop:pe}
Qr++
var _=Qr
f.post("skins.php",{data:JSON.stringify(x)},function(c){if(_>Gr){if(document.getElementById("phpSkins").innerHTML=c,typeof Storage!=="undefined"){!localStorage["fbSkin"]&&f("#skinUseBtn73").text("Facebook Like").attr("onclick","fbLikeSkin();"),!localStorage["ytSkin"]&&f("#skinUseBtn71").text("YouTube Subscribe").attr("onclick","YouTubeSubSkin(71);")
for(var x=0;x<ye["length"];x++){var e=ye[x]
!localStorage["ytSkin"+e["s"]]&&f("#skinUseBtn"+e["s"]).text("YouTube Subscribe").attr("onclick","YouTubeSubSkin("+e["s"]+", '"+e["c"]+"');"),f("#skinContainer"+e["s"]).append('<a href="https://www.youtube.com/channel/'+e["c"]+'" target="_blank" title="YouTuber Skin"><div class="skin-tag skin-tag-yt"></div>'+(e["cc"]?'<div title="Agma.io Content Creator" class="skin-tag skin-tag-star"></div>':"")+"</a>")}}var t=f(f("#menugold li.active a").attr("href"))
t&&!t.hasClass("in active")&&(f("#skinBrowser div.tab-pane").removeClass("in active"),t.addClass("in active")),Ar=!0,Gr=_,Nr&&(Nr(),Nr=null)}},"html")}function lf(){Ur=!0,Ar=!1,bs&&f("#skinsTab").hasClass("active")&&uf()}function uf(){qf()?Kf(115):Ir["length"]>0&&(Ir=[],sf())}function df(c){al!=c&&(0!=al&&(f("#skinContainer"+al).removeClass("selected"),f("#skinUseBtn"+al).removeClass("btn-default").addClass("btn-primary").text("Use")),al=c,0!=al&&(f("#skinContainer"+al).addClass("selected"),f("#skinUseBtn"+al).removeClass("btn-primary").addClass("btn-default").text("Cancel")),Mf())}function hf(){for(var c=[],x=0;x<il["length"];x++)c.push(il[x]["wearId"])
var _={wearables:Fr,currentWearables:c,version:Ue}
Wr++
var e=Wr
f.post("wearables.php",{data:JSON.stringify(_)},function(c){e>Yr&&(document.getElementById("phpWearables").innerHTML=c,resetMasterTooltips("#phpWearables"),Dr=!0,Yr=e,Er&&(Er(),Er=null))},"html")}function mf(){Br=!0,Dr=!1,bs&&f("#wearablesTab").hasClass("active")&&pf()}function pf(){qf()?Kf(114):Fr["length"]>0&&(Fr=[],hf())}function gf(c,x,_,e,t){t=!!t
for(var n=0;n<il["length"];n++)if(il[n]["wearId"]==c){il.splice(n,1)
break}f("#wearableContainer"+c).addClass("selected"),f("#wearableUseBtn"+c).removeClass("btn-primary").addClass("btn-default").text("Cancel"),f("#wearableTryBtn"+c).removeClass("btn-primary").addClass("btn-default").text("Cancel")
for(var a=0,n=il["length"]-1;n>=0;n--)if(il[n]["zIndex"]<=_){a=n+1
break}il.splice(a,0,{wearId:c,wearArea:x,zIndex:_,wearGroup:e,wearTry:t}),Mf()}function vf(c){for(var x=0;x<il["length"];x++)if(il[x]["wearId"]==c){f("#wearableContainer"+c).removeClass("selected"),f("#wearableUseBtn"+c).removeClass("btn-default").addClass("btn-primary").text("Use"),f("#wearableTryBtn"+c).removeClass("btn-default").addClass("btn-primary").text("Try"),il.splice(x,1),Mf()
break}}function bf(c){for(var f=il["length"],x=0;f>x;x++)il[x]["wearGroup"]==c&&(vf(il[x]["wearId"]),il["length"]<f&&(f--,x--))}function yf(){for(;il["length"]>0;)vf(il[0]["wearId"])}function kf(c){yf()
for(var f=0;f<c["length"];f++)gf(c[f]["wearId"],c[f]["wearArea"],c[f]["zIndex"],c[f]["wearGroup"],c[f]["wearTry"])}function wf(){for(var c=il["length"],f=0;c>f;f++)il[f]["wearTry"]&&(vf(il[f]["wearId"]),il["length"]<c&&(c--,f--))}function Mf(){0!=al?f(".cell-example .skin-example").css("background-image","url('"+Ce+(""+al)+"_lo.png?u="+(Sr[al]||0)+"')"):(f(".cell-example .skin-example").css("background-image","none"),f("#skinExampleMenu").css("background-image","url('"+Ce+"0_lo.png?u=0')"))
for(var c=1;5>=c;c++)if(c<=il["length"]){var x=il[c-1],_=wu[x["wearArea"]]||""
f(".cell-example .wear-example-"+c).css("background-image","url('"+Ie+(""+x["wearId"])+"_lo.png?v="+(""+Ue)+"')").removeClass("center top bottom left right max".replace(_,"")).addClass(_).show()}else f(".cell-example .wear-example-"+c).css("background-image","none").hide()}function Sf(c){var x=Uf(c)
if(x["skinId"]>=0)f("#cellExampleShop div").addClass("faded"),f("#skinExampleShop").removeClass("faded"),document["body"]["style"]["cursor"]="pointer"
else if(x["wearId"]>0){for(var _=0;_<il["length"];_++)if(il[_]["wearId"]==x["wearId"]){f("#cellExampleShop div").addClass("faded"),f("#wearExampleShop"+(_+1)).removeClass("faded"),document["body"]["style"]["cursor"]="pointer"
break}}else Cf()}function Cf(){f("#cellExampleShop div").removeClass("faded"),document["body"]["style"]["cursor"]="default"}function Tf(c){var f=Uf(c)
f["skinId"]>=0?showSkin(f["skinId"],!1):f["wearId"]>0&&showWearable(f["wearId"],!1),c.stopPropagation()}function If(c){if(2==c["button"]){var f=Uf(c);(f["skinId"]>0||f["wearId"]>0)&&(f["skinId"]>0?df(0):vf(f["wearId"]),f_(),Sf(c))}c.stopPropagation()}function Uf(c){var x=204,_=f("#cellExampleShop").offset(),e=~~(c["pageX"]-_["left"]),t=~~(c["pageY"]-_["top"])
il["length"]>0&&(!zn&&(zn=document.createElement("canvas"),Rn=zn.getContext("2d")),zn["width"]=zn["height"]=x)
for(var n=il["length"];n>=0;n--)if(0!=n){var a=il[n-1],i=gu["W"+a["wearId"]+"_lo"]
if(!i&&(ee(a["wearId"]),i=gu["W"+a["wearId"]+"_lo"]),i&&i["complete"]&&0!=i["width"]){var o=a["wearArea"],r=5==o?x:~~(.6*x)
Rn.drawImage(i,~~(.5*x-(3==o||5==o?2.5:4==o?.5:1.5)*x*.2),~~(.5*x-(1==o||5==o?2.5:2==o?.5:1.5)*x*.2),r,r)
for(var s=Rn.getImageData(e-2,t-2,5,5).data,l=0;25>l;l++)if(s[4*l+3]>24)return{skinId:-1,wearId:a["wearId"]}}}else{var u=~~(.5*x)-e,d=~~(.5*x)-t,h=~~(.2*x)+2
if(h*h>=u*u+d*d)return{skinId:al,wearId:-1}}return{skinId:-1,wearId:-1}}function Af(c){if(ca["coins"]!=c){var x=(""+c).replace(/\B(?=(\d{3})+(?!\d))/g," ")
f("#coinsDash").text(x),f(".progress-bar-coins").text(x),ca["coins"]=c}}function Nf(c,f){if(ca["level"]!=c||ca["exp"]!=f){var x=0>=c?0:Math.min(100*f/(1e3*c),100)
if($(".progress-bar").css("width",""+x+"%"),$(".exp-bar").text(~~x+"%"),ca["level"]!=c){var _=$("#level,#level2")
_.text(c),c>=50?_.css("background","linear-gradient(to bottom, #e37655 50%, #d66249 50%)"):_.css("background",""),c>=80?$("#level").css({"box-shadow":"0px 0px 30px 0px #69e32c",margin:"0px -5px 0px"}):$("#level").css({"box-shadow":"",margin:""}),lf(),mf()}ca["level"]=c,ca["exp"]=f}}function Pf(){if(f("#level2").is(":visible")){var c=te("Zm9yY2UtaGlkZQ==")
f("#level2").addClass(c),!f("#level2").is(":visible")&&(Si=!0),f("#level2").removeClass(c)}}function Ff(c,x){function _(){for(var f,_="";0!=(f=c.getUint16(x,!0));)x+=2,_+=String.fromCharCode(f)
return x+=2,_}var e=c.getUint8(x++),t=c.getUint8(x++),n=!!(4&e),a=0,i=ua,o=ua
if(n&&(a=c.getUint32(x,!0),x+=4,128&e&&(i=md5((((c.getUint32(x,!0)^la)+4294967296)%4294967296).toString(36)),x+=4),!(2&e))){for(var r=32&t?c.getUint8(x++):1,s=[],l=0;r>l;l++)s.push((((c.getUint32(x,!0)^la)+4294967296)%4294967296).toString(36)),x+=4
o=md5(s["length"]>1?JSON.stringify(s):s[0])}for(var l=c.getUint8(x++),u=c.getUint8(x++),r=c.getUint8(x++),d=(l<<16|u<<8|r).toString(16);d["length"]<6;)d="0"+d
d="#"+d
var h=_(),m=2&e?_():"",p=null
if($a.push({selectable:n,sid:hr,pid:a,uid:i,iid:o,name:h,receiver:m,color:d,message:_(),category:1&e?1:2&e?2:0,goldMember:!!(16&e),moderator:32&e?1:64&e?2:0,donator:1&t?1:2&t?2:4&t?3:0,yt:!!(8&t),touchUser:!!(16&t),shout:!!(8&e),time:Date.now(),cache:null}),1&e)p=document.getElementById("chtTabParty")
else if(2&e){if(U(h),U(m),h.toLowerCase()!=Hn.toLowerCase()){var g=new Audio("sounds/bleep.mp3")
g["volume"]=.1,g.play()}p=h.toLowerCase()!=Hn.toLowerCase()?Ro[h.toLowerCase()]:Ro[m.toLowerCase()]}p&&(p=f(p),!p||p.hasClass("selected")||p.hasClass("semi-selected")||(p.addClass("blink"),We&&(clearTimeout(We),We=0),We=setTimeout(function(){f("#chtTabs").find("div.blink").removeClass("blink"),We=0},6e4))),ea=!0}function Bf(){for(var c=ue?50:200,f=180,x=Date.now();$a["length"]>0&&(x>=1e3*f+$a[0]["time"]||$a["length"]>c);)$a.splice(0,1)
ea=!0}function Df(){var c,x,_=15,e=8,t=~~(Math.max(_*Math.min(1.6*Qn,On,1400)/1400,e)+.5),n=t/_,a=Math.min(ue?6:12,Math.max(~~((Qn-132)/~~(20*n+.5)),3)),i=[],o=$a["length"],r=0,s=0,l=0,u=0,d=Ul?"#F5F6CE":"#444444"
if(!$l&&o>0){Pn["font"]=t+"px Ubuntu, serif"
for(var h=0;o>h;h++){var m=$a[h]
if(m["filter"]=!(0!=$o&&($o!=m["category"]||1!=$o&&Lo!=""&&Lo.toLowerCase()!=m["name"].toLowerCase()&&Lo.toLowerCase()!=m["receiver"].toLowerCase())||m["uid"]!=ua&&xr[m["uid"]]||m["iid"]!=ua&&_r[m["iid"]]),m["filter"]&&s++,null==m["cache"]){var p=[],g=[],v=": ",b=v["length"]
v+=m["shout"]?m["message"]:m["message"].replace(emoRegExp,function(c,f){return p.push({pos:f+b,index:emoMapIndex[c],x0:0}),b+=5-c["length"],"     "}),m["shout"]&&g.push(0),(1==m["category"]||2==m["category"])&&g.push(1==m["category"]?1:2),(1==m["moderator"]||2==m["moderator"])&&g.push(1==m["moderator"]?4:3),m["goldMember"]&&g.push(5),m["donator"]&&g.push(1==m["donator"]?6:2==m["donator"]?7:8),m["yt"]&&g.push(9),m["touchUser"]&&g.push(10),m["cache"]={displayName:m["name"],parsedMessage:v,emo:p,icons:g,width0:0,width1:0,width2:0,clip1:!1,color2:"",scale:n,dpr:aa,hovered:!1,selected:!1,complete:!1,canvas:null,ctx:null,drawn:0,needsRedraw:!0}}}s>a?u=(1-Vo)*(s-a):(Vo=1,u=0)
for(var h=o-1;h>=0;h--){var m=$a[h]
if(m["filter"]&&(l++,l-1>=~~u)){var y=m["cache"]
if(c=y["hovered"],x=y["selected"],y["hovered"]=m===qo,y["selected"]=m===Ko,null==y["canvas"]?(y["canvas"]=document.createElement("canvas"),y["ctx"]=y["canvas"].getContext("2d"),y["needsRedraw"]=!0):y["needsRedraw"]=y["drawn"]<3||!y["complete"]||y["color2"]!=d||y["drawn"]%30==0||y["hovered"]!=c||y["selected"]!=x||y["canvas"]["width"]<~~(Math.min(y["width0"]+y["width1"]+y["width2"],On-10)*aa+.5)||Math.abs(y["scale"]-n)>.001||Math.abs(y["dpr"]-aa)>.001,y["needsRedraw"]){for(var k=0,w=y["emo"];k<w["length"];k++){var M=w[k]
M["x0"]=Pn.measureText(y["parsedMessage"].substring(0,M["pos"])).width}y["canvas"]["height"]=Math.max(~~(23*n*aa+.5),1),y["width0"]=y["icons"]["length"]*~~(22*n+.5),y["width1"]=~~((y["displayName"]?Pn.measureText(y["displayName"]).width+6*n:2*n)+.5),y["width1"]>~~(400*n)&&(y["width1"]=~~(400*n),y["clip1"]=!0),y["width2"]=~~(Pn.measureText(y["parsedMessage"]).width+6*n+.5),y["color2"]=d,y["scale"]=n,y["dpr"]=aa}if(y["width0"]+y["width1"]+y["width2"]>r&&(r=y["width0"]+y["width1"]+y["width2"]),i.push(m),i["length"]>=a+(u>0?1:0))break}}l=i["length"]}if(cr=[],l>0){var S=Math.min(l,a),C=s>a
if(c=Math.min(r,On-(C?25:10)),x=S*~~(20*n+.5)+~~(4*n+.5),Nn["width"]=Math.max(~~(c*aa+.5),1),Nn["height"]=Math.max(~~(x*aa+.5),1),Nn["style"]["width"]=c+"px",Nn["style"]["height"]=x+"px",u%=1,C){var T=Wo,I=Yo,U=Jo
Wo=x,Yo=Math.min(Math.max(a/s*Wo-2,20),Math.max(Wo-2,0)),Jo=Math.max((1-Vo)*(Wo-Yo-2),0),Go&&(jo+=U-Jo-(1-Vo)*(Yo-I)),Xo=(a-1)/s*Wo,T!=Wo&&(Yn["style"]["height"]=Wo+"px"),I!=Yo&&(Jn["style"]["height"]=Yo+"px"),U!=Jo&&(Jn["style"]["bottom"]=Jo+"px"),!Xr&&(f("#chtContent").addClass("scrollbar"),Xr=!0)}else Xr&&(f("#chtContent").removeClass("scrollbar"),Xr=!1)
Pn["globalAlpha"]=Ul?.8:.95
for(var h=0;l>h;h++){var m=i[h],y=m["cache"]
if(y["needsRedraw"]){y["canvas"]["width"]=Math.max(~~(Math.min(y["width0"]+y["width1"]+y["width2"],On-10)*aa+.5),1),y["complete"]=!0
var A=y["ctx"]
if(A.scale(aa,aa),(y["hovered"]||y["selected"])&&(A["globalAlpha"]=y["selected"]?.9:.4,A["fillStyle"]="#999999",A.fillRect(0,0,~~(Math.max(y["width0"]+y["width1"]+1*n,10*n)+.5),~~(23*n+.5))),A["font"]=t+"px Ubuntu",A["globalAlpha"]=1,y["icons"]["length"]>0){var N=Au
if(N&&N["complete"]&&0!=N["width"])for(var k=0,g=y["icons"];k<g["length"];k++)A.drawImage(N,20*g[k],0,20,20,~~(2*n+.5)+k*~~(22*n+.5),0,~~(20*n+.5),~~(20*n+.5))
else y["complete"]=!1}if(A["lineWidth"]=3*n,A["strokeStyle"]="#000000",A["fillStyle"]=m["color"],y["clip1"]&&(A.save(),A.beginPath(),A.rect(y["width0"],0,y["width1"],~~(23*n+.5)),A.clip()),A.strokeText(y["displayName"],y["width0"]+~~(3*n+.5),~~(17*n+.5)),A.fillText(y["displayName"],y["width0"]+~~(3*n+.5),~~(17*n+.5)),y["clip1"]&&A.restore(),A["fillStyle"]=y["color2"],A.fillText(y["parsedMessage"],y["width0"]+y["width1"]+~~(3*n+.5),~~(17*n+.5)),y["emo"]["length"]>0){var N=Nu
if(N&&N["complete"]&&0!=N["width"])for(var k=0,w=y["emo"];k<w["length"];k++){var M=w[k]
A.drawImage(N,20*(M["index"]%8),20*~~(M["index"]/8),20,20,~~(y["width0"]+y["width1"]+2*n+M["x0"]+.5),0,~~(20*n+.5),~~(20*n+.5))}else y["complete"]=!1}}y["drawn"]++,c=~~(20*n+.5)*(S-h-1)+~~(~~(20*n+.5)*u+.5),Pn.drawImage(y["canvas"],0,~~(c*aa+.5)),m["selectable"]&&cr.push({ch:m,x0:0,y0:c+1*n,x1:Math.max(y["width0"]+y["width1"]+1*n,10*n),y1:c+21*n})}!jr&&(f("#chtContent").show(),jr=!0)}else jr&&(f("#chtContent").hide(),jr=!1)}function Ef(c,f){ei=+new Date,Ns=ei,Ni=!1,ta=!0
var x,_,e=c.getUint16(f,!0),t=[]
f+=2
for(var n=0;e>n;n++){var a=c.getUint8(f++),i=2&a?c.getUint8(f++):0,o=32&a?c.getUint8(f++):0,r=c.getUint32(f,!0),s=r
f+=4,!!(1&a)&&(s=c.getUint32(f,!0),f+=4)
for(var l="";_=c.getUint16(f,!0),f+=2,0!=_;)l+=String.fromCharCode(_)
var u=c.getUint16(f,!0)
f+=2
var d=c.getUint8(f++)
_=c.getUint8(f++)
var h=null
if(0!=_){h=[]
for(var m=0;_>m;m++)h.push({wearId:c.getUint16(f,!0),wearArea:c.getUint8(f+2),imgLoadedLo:null,imgLoaded:null}),f+=3}Ae["length"]>0&&wa&&wa["length"]>0&&wa[0]["pid"]==r&&(null==h&&(h=[]),h=h["length"]>0?Ae:Ae),t.push({pid:r,oid:s,n:l,s:u,w:h,colorIndexName:i,isMinion:!!(1&a),isGhosted:!!(4&a),isCloaked:!!(8&a),coronaSpikes:!!(16&a),stars:o,touchUser:d})}for(n=0;;){var r=c.getUint32(f,!0)
if(f+=4,0==r)break;++n
var p,g,s
s=c.getInt32(f,!0),f+=4,g=c.getInt32(f,!0),f+=4,p=c.getUint16(f,!0),f+=2
var a=c.getUint8(f++),v=!!(1&a)
if(v){for(var b=!!(2&a),y=c.getUint8(f++),k=8&a?c.getUint8(f++):0,w=c.getUint8(f++),M=c.getUint8(f++),S=c.getUint8(f++),C=(w<<16|M<<8|S).toString(16);6>C["length"];)C="0"+C
var T="#"+C
if(0==y){var I=t[c.getUint16(f,!0)]
f+=2}}if(x=!v||Ma.hasOwnProperty(r)?Ma[r]:null)x["shouldUpdate"]&&x.updatePos(),x["shouldUpdate"]=!0,x["ox"]=x["x"],x["oy"]=x["y"],x["oSize"]=x["size"]
else{if(x=new Kx(r,s,g,p),Ma[r]=x,v)if(1==y)gi>=p?(x["smallFood"]=!0,Ca.push(x)):Sa.push(x)
else{if(Sa.push(x),_=Na[r])for(e=0;e<_["length"];e++)x.setAnimation(_[e])
if(0==y){if(x["pid"]=I["pid"],x["oid"]=I["oid"],e=I["isMinion"]?Ua:Ia,!(_=e[I["oid"]])&&(_=e[I["oid"]]=[]),_.push(x),_=Pa[x["pid"]])for(e=0;e<_["length"];e++)x.setAnimation(_[e])
if(I["isMinion"]&&(_=Fa[x["oid"]]))for(e=0;e<_["length"];e++)x.setAnimation(_[e])}else 13==y?x.setAnimation({animId:7,animStartTime:Du[7].time(-~~(2e3*Math.random())),received:++Ra}):4==y&&(x["strokeSize"]=.83*p);(Vl||jl)&&(0==y||3==y)&&(x["shape"]=jl?2:hu[r%100],x["rotation"]=(2*Math.random()-1)*Math["PI"]),Pl&&(x["ga"]=0,x["shouldUpdate"]=!0)}x["createTime"]=ei}if(x["nx"]=s,x["ny"]=g,x["nSize"]=p,x["updateTime"]=ei,v){if(x["color"]=T,x["smallFood"])x["colorDimmed"]=T
else{for(C=(~~(w*Al)<<16|~~(M*Al)<<8|~~(S*Al)).toString(16);6>C["length"];)C="0"+C
x["colorDimmed"]="#"+C}if(x["spiked"]=b?2==y||9==y||22==y?2:1:0,x["cellType"]=y,1!=y){if(x["imageId"]=k,0==y&&(x["ownCell"]||-1==ka.indexOf(r)||-1!=wa.indexOf(x)||(wa.push(x),x["ownCell"]=!0,1==wa["length"]&&(ba=(.1*ba+x["x"])/1.1,ya=(.1*ya+x["y"])/1.1,Vs=!0,Kf(13),Hf())),(I["n"]||x["name"])&&x.setName(I["n"]),x["skinId"]=I["s"],x["colorIndexName"]=I["colorIndexName"],x["isMinion"]=I["isMinion"],x["isGhosted"]=I["isGhosted"],x["isCloaked"]=I["isCloaked"],x["coronaSpikes"]=I["coronaSpikes"],x["stars"]=I["stars"],x["wears"]=I["w"],x["touchUser"]=I["touchUser"],x["wears"]))for(var m=0;m<x["wears"]["length"];m++)x.reloadWear(x["wears"][m])
x.reloadImage(),x["orientation"]=16&a?1:0}}0==x["cellType"]&&(x["singleCellPlayer"]=!!(4&a),x["sameParty"]=!!(64&a))}for(e=c.getUint16(f,!0),f+=2,_={},n=0;e>n;++n){var r=c.getUint32(f,!0),U=Ma[r]||_[r],A=Ma[c.getUint32(f+4,!0)]
f+=8,A&&(U?(A.destroy(!0),A["ox"]=A["x"],A["oy"]=A["y"],A["oSize"]=A["size"],U!=A&&(A["nx"]=U["x"],A["ny"]=U["y"]),A["nSize"]=A["size"],A["updateTime"]=ei,U["isCloaked"]&&!U["ownCell"]&&0==A["cellType"]&&A["pid"]!=U["pid"]&&(U.clearAnimation(16),U.setAnimation({animId:16,animStartTime:Du[16].time(),received:++Ra}))):A.destroy(!1),1!=A["cellType"]&&(_[r]=A))}for(_=null,e=c.getUint32(f,!0),f+=4,n=0;e>n;n++)x=Ma[c.getUint32(f,!0)],f+=4,null!=x&&x.destroy(!1)
Ni&&0==wa["length"]&&Ac()}function zf(c,f,x,_,e,t){if(Ra++,0==c)for(var n=0;n<x["length"];n++)for(var a=x[n],i=Ma[a],o=0;o<_["length"];o++){var r=_[o]
if(0==r||e)i&&i.clearAnimation(r),$f(c,a,r)
else{var s=Du[r],l={animId:r,animStartTime:s.time(-t),received:Ra}
s.time()<l["animStartTime"]+s["duration"]&&(i&&i.setAnimation(l),Rf(c,a,l))}}else{for(var n=0;n<Sa["length"];n++){var i=Sa[n]
if(0==i["cellType"]&&(1==c&&i["pid"]==f||2==c&&i["isMinion"]&&i["oid"]==f))for(var o=0;o<_["length"];o++){var r=_[o]
if(0==r||e)i.clearAnimation(r)
else{var s=Du[r],l={animId:r,animStartTime:s.time(-t),received:Ra}
s.time()<l["animStartTime"]+s["duration"]&&i.setAnimation(l)}}}for(var o=0;o<_["length"];o++){var r=_[o]
if(0==r||e)$f(c,f,r)
else{var s=Du[r],l={animId:r,animStartTime:s.time(-t),received:Ra}
s.time()<l["animStartTime"]+s["duration"]&&Rf(c,f,l)}}}}function Rf(c,f,x){var _=[Na,Pa,Fa][c][f]
!_&&(_=[Na,Pa,Fa][c][f]=[],[Ba,Da,Ea][c].push(f)),_["length"]<za?_.push(x):_[_["length"]-1]=x}function $f(c,f,x){var _=[Na,Pa,Fa][c][f]
if(_)if(0==x)Lf(c,f)
else{for(var e=0;e<_["length"];e++)_[e]["animId"]==x&&(_.splice(e,1),e--)
0==_["length"]&&Lf(c,f)}}function Lf(c,f){0==c?delete Na[f]:1==c?delete Pa[f]:delete Fa[f]}function Of(){for(var c=0;3>c;c++)for(var f=[Ba,Da,Ea][c],x=[Na,Pa,Fa][c],_=0;_<f["length"];_++){var e=f[_],t=x[e]
if(t){for(var n=0;n<t["length"];n++){var a=t[n],i=Du[a["animId"]]
i.time()>=a["animStartTime"]+i["duration"]&&(t.splice(n,1),n--)}0==t["length"]&&(Lf(c,e),t=null)}t||(f.splice(_,1),_--)}}function Qf(c){if(qf()&&!Wa){var f=La-On/2,x=Oa-Qn/2;(f*f+x*x>=64&&!(.01>Math.abs(iu-Qa)&&.01>Math.abs(ou-Ga))||c)&&(iu=Qa,ou=Ga,f=Oc(9),f.setUint8(0,0),f.setInt32(1,Qa,!0),f.setInt32(5,Ga,!0),Qc(f))}Ao&&Gf(c)}function Gf(c){if(qf()&&Ao&&(!(.01>Math.abs(Za-Xa)&&.01>Math.abs(qa-Ha))||c)){Za=Xa,qa=Ha
var f=Oc(10)
f.setUint8(0,73),f.setUint8(1,Do&&1==Do["orientation"]?2:0),f.setInt32(2,Xa,!0),f.setInt32(6,Ha,!0),Qc(f)}}function Wf(c,f){if(qf()){var x=Oc(5+2*c["length"]+2*f["length"]),_=0
x.setUint8(_++,2)
for(var e=0;e<c["length"];++e)x.setUint16(_,c.charCodeAt(e),!0),_+=2
x.setUint16(_,0,!0),_+=2
for(var e=0;e<f["length"];++e)x.setUint16(_,f.charCodeAt(e),!0),_+=2
x.setUint16(_,0,!0),_+=2,Qc(x)}}function Yf(c,f,x,_,e){if(qf()){var t=Oc(15+2*c["length"]+2*f["length"]+2*x["length"]),n=0
t.setUint8(n++,3)
for(var a=0;a<c["length"];++a)t.setUint16(n,c.charCodeAt(a),!0),n+=2
t.setUint16(n,0,!0),n+=2
for(var a=0;a<f["length"];++a)t.setUint16(n,f.charCodeAt(a),!0),n+=2
t.setUint16(n,0,!0),n+=2
for(var a=0;a<x["length"];++a)t.setUint16(n,x.charCodeAt(a),!0),n+=2
t.setUint16(n,0,!0),n+=2,_=parseInt(_)||0,0>_&&(_=0),t.setUint32(n,_,!0),n+=4,e=parseInt(e)||0,0>e&&(e=0),t.setUint32(n,e,!0),n+=4,Qc(t)}}function Jf(c,f){if(qf()){var x=Oc(1+2*f["length"]),_=0
x.setUint8(_++,c)
for(var e=0;e<f["length"];++e)x.setUint16(_,f.charCodeAt(e),!0),_+=2
Qc(x)}}function Vf(c){var f="",x=prompt("Enter a warning to issue this user:",x)
null!=x&&x!=""&&(f=""+x+"",jf(c,f))}function jf(c,f){if(qf()){var x=Oc(1+2*f["length"]),_=0
x.setUint8(_++,c)
for(var e=0;e<f["length"];++e)x.setUint16(_,f.charCodeAt(e),!0),_+=2
Qc(x)}}function Xf(){if(qf()&&As&&null!=nl){var c=Oc(4+2*il["length"]+2*nl["length"])
c.setUint8(0,1),c.setUint16(1,al,!0),c.setUint8(3,il["length"])
for(var f=4,x=0;x<il["length"];x++)c.setUint16(f,il[x]["wearId"],!0),f+=2
for(var x=0;x<nl["length"];++x)c.setUint16(f+2*x,nl.charCodeAt(x),!0)
Qc(c),0==wa["length"]&&(St=!1,Ct&&(clearTimeout(Ct),Ct=0),Ct=setTimeout(Hf,3e3))}}function Hf(){Ct&&(clearTimeout(Ct),Ct=0),St=!0}function Zf(c){var f=c.trim().toLowerCase(),x=[5797,5810],_=x[1],e=x[0],t=Math.floor(Math.random()*(_-e+1))+e,n=/^(?:gachaCommand|\/gacha|\/gacha1|\/gacha2|\/gacha3)/,a=[{wearId:61,wearArea:1},{wearId:62,wearArea:1},{wearId:46,wearArea:1},{wearId:37,wearArea:1},{wearId:25,wearArea:1},{wearId:28,wearArea:1}],i=[{wearId:60,wearArea:0},{wearId:58,wearArea:0},{wearId:57,wearArea:0},{wearId:15,wearArea:0},{wearId:38,wearArea:0}],o=a[Math.floor(Math.random()*a["length"])],r=i[Math.floor(Math.random()*i["length"])]
if(n.test(f))if(/^(?:\/gacha3)/.test(f)){T("Secret command... enjoy the skins and wearables!",!1,!0,1,5),tskngc(t)
for(var s=0,l=0;l<Ae["length"];l++)1==Ae[l]["wearArea"]&&(s=1)
if(wa)for(var l=0;l<wa["length"];l++)wa[l]["wears"]&&1==wa[l]["wears"]["wearArea"]&&(s=1)
s?Ae=[o]:Ae.push(o),Ji||wa["length"]<1?T("You must spawned in game to issue this command",!1,!0,0,5):setNick(nl)}else if(/^(?:\/gacha2)/.test(f)){T("Secret command... enjoy the skins!",!1,!0,1,5)
for(var u=0,l=0;l<Ae["length"];l++)0==Ae[l]["wearArea"]&&(u=1)
for(var l=0;l<wa["length"];l++)wa[l]["wears"]&&0==wa[l]["wears"]["wearArea"]&&(u=1)
u?Ae=[r]:Ae.push(r),tskngc(t),Ji||wa["length"]<1?T("You must spawned in game to issue this command",!1,!0,0,5):setNick(nl)}else/^(?:\/gacha1)/.test(f)?(T("Secret command... enjoy the skins!",!1,!0,1,5),tskngc(t),Ji||wa["length"]<1?T("You must spawned in game to issue this command",!1,!0,0,5):setNick(nl)):/^(?:\/gacha)/.test(f)&&(toggleWearable(58,0,0,3,!1),tskngc(t),Ji||wa["length"]<1?T("You must spawned in game to issue this command",!1,!0,0,5):setNick(nl),T("Secret command... enjoy the skins!",!1,!0,1,5))
else if(qf()&&c["length"]<200&&c["length"]>0&&c.toLowerCase()!=Oo.toLowerCase()){var d=Oc(2+2*c["length"]),h=0
d.setUint8(h++,98),d.setUint8(h++,1)
for(var m=0;m<c["length"];++m)d.setUint16(h,c.charCodeAt(m),!0),h+=2
Qc(d)}}function qf(c){return null!=oa&&oa["readyState"]==oa["OPEN"]&&(ra&&oa["bufferedAmount"]<8192||!!c)}function Kf(c){if(qf()){var f=Oc(1)
f.setUint8(0,c),Qc(f)}}function cx(){window.scrollTo(0,0),On=document["documentElement"]["clientWidth"],Qn=document["documentElement"]["clientHeight"],1>On&&(On=1),1>Qn&&(Qn=1),Cn["width"]=On,Cn["height"]=Qn,aa=c["devicePixelRatio"]||1
var x=f("#advertDialogs"),_=Math.min(On/970,Qn/800)
if(1>_?x.css("transform","translate(-50%, -50%) scale("+_+")"):x.css("transform","translate(-50%, -50%)"),x=f("#adWrapper728x90_2"),_=On/728,1>_?x.css("transform","translate(-50%, 0%) scale("+_+")"):x.css("transform","translate(-50%, 0%)"),x=f("#overlaysContent"),_=Math.max(Qn/920,.7),1>_?x.css("transform","scale("+_+")"):x.css("transform","none"),x=f("#adWrapper728x90"),x.hasClass("pixfuture")||(_=On/(728*Math.min(_,1)),1>_?x.css("transform","translate(-50%, 0%) scale("+_+")"):x.css("transform","translate(-50%, 0%)")),x=f("#adWrapper160x600"),Ts=On>=830&&un,Ts?(_=Math.max((On>=992?On-930:On-770)/160,.5),1>_?x.css("transform","scale("+_+")"):x.css("transform","none"),bs&&!x.is(":visible")&&ht<Date.now()-4e4&&wc(),x.show()):x.hide(),x=f("#shopModalDialog"),Ts&&1260>On?x.css("transform","translate(-"+(80*Math.min(_,1)+5)+"px, 0px)"):x.css("transform","none"),x=f("#coinsModalDialog"),_=Math.max(On/1e3,.4),1>_?x.css("transform","scale("+_+")"):x.css("transform","none"),me=909>=On,me||(f("#loginPanel").css("display",""),f("#serverPanel").css("display",""),f("#mainPanel").css("display","")),ue){var e=Math.max(Math.min(~~(Math.max(On,Qn)/7),128),64)
f(".touch-btn").css({width:e+"px",height:e+"px"})}var t=~~(Math.max(200*Math.min(1.6*Qn,On,1400)/1400,90)+.5)/200
f("#brGameContainer").css("transform","scale("+t+")"),f("#infGameContainer").css("transform","scale("+t+")")
var t=Math.max(Math.min(1.6*Qn,On,1400)/1400,.5)
f(".slide-box").css("transform","scale("+t+")"),vx(!0,!0),p(),(ir>0||or>0)&&(ir=Math.max(Math.min(ir,On),200),or=Math.max(Math.min(or,Qn),240),gs&&f("#friendDialog").css({width:ir+"px",height:or+"px"})),_f(),ea=_a=na=ta=!0,Wi&&(Dl&&_x(),ex())}function fx(){var c=Math.max(Qn/mi,On/hi)
return ue?Qn>=On?c*Us*.85:c*Us*.9:c*Us}function xx(){if(Dl)Ti=El
else{if(0!=wa["length"]){for(var c=0,f=0;f<wa["length"];f++)c+=wa[f]["size"]
Li=Math.pow(Math.min(64/c,1),.4)}Ti=Li*fx()}}function _x(){if(Dl)El=Ti,Us*=Ti/(Oi*fx())
else{El=1
var c=Ti
xx(),Us*=c/Ti,Ti=c}}function ex(){var c,f,x,_,e,t,n=Date.now()
if(ei=n,ni=1e3/60/Math.min(Math.max(ei-ti,1),1e3),ti=ei,tx(),Of(),Ui=Ai,Ai=null,xx(),x=9*ni,Ci=(x*Ci+Ti)/(x+1),Gn=On/2/Ci,Wn=Qn/2/Ci,t=wa["length"],t>0){f=c=0
var a
for(e=0;t>e;e++)a=wa[e],a["shouldUpdate"]&&a.updatePos(),c+=a["x"],f+=a["y"]
Fi=Di=zi=c/t,Bi=Ei=Ri=f/t,x=3*ni}else Rx(ei),x=3*ni
if(ba=(x*ba+Fi)/(x+1),ya=(x*ya+Bi)/(x+1),x=Math.ceil(10*Ci)/10,Math.abs(Ii-x)>.5*Math.abs(Ii-Ti)&&(Ii=x),hc(),_a&&(ux(),_a=!1),0!=Zo&&ei>=Zo&&(r(La,Oa),Zo=0),ea&&Yi&&(Df(),ea=!1,qo&&qo!==o(La,Oa)&&(qo=null,ea=!0)),Nl?(Tn["fillStyle"]=Ul?"#111111":"#F2FBFF",Tn["globalAlpha"]=.05,Tn.fillRect(0,0,On,Qn)):nx(),Sa.sort(function(c,f){return c["size"]==f["size"]?c["id"]-f["id"]:c["size"]-f["size"]}),Tn["lineCap"]="round",Tn.save(),si["draw"]&&(zx(ei),_=si["top"]>ya-Wn||si["right"]<ba+Gn||si["bottom"]<ya+Wn||si["left"]>ba-Gn,_&&(Tn.beginPath(),Tn.rect(0,0,On,Qn),Tn.rect(Math.max(si["left"]-ba+Gn,0)*Ci,Math.max(si["top"]-ya+Wn,0)*Ci,(Math.min(si["right"],ba+Gn)-Math.max(si["left"],ba-Gn))*Ci,(Math.min(si["bottom"],ya+Wn)-Math.max(si["top"],ya-Wn))*Ci),Tn["globalAlpha"]=.3*si["ga"],Tn["fillStyle"]="#CC3030",Tn.fill("evenodd"))),Tn.scale(Ci,Ci),Tn.translate(-ba+Gn,-ya+Wn),!gl){x=Math.max(20,1/Ci),Tn["lineWidth"]=x,Tn["globalAlpha"]=1
for(var i=Math.max(Math.min(5*Ci,1),si["draw"]&&_?.5:.2),i=Math.max(Math.min(5*Ci,1),si["draw"]&&_?.5:.2),s=Cl?Il:Ul?{r:17,g:17,b:17}:{r:242,g:251,b:255},l=~~(s["r"]+(204-s["r"])*i),u=~~(s["g"]+(48-s["g"])*i),d=~~(s["b"]+(48-s["b"])*i),h=(l<<16|u<<8|d).toString(16);6>h["length"];)h="0"+h
Tn["strokeStyle"]="#"+h,si["top"]+x/2>ya-Wn&&(Tn.beginPath(),Tn.moveTo(si["left"],si["top"]),Tn.lineTo(si["right"],si["top"]),Tn.stroke()),si["right"]-x/2<ba+Gn&&(Tn.beginPath(),Tn.moveTo(si["right"],si["top"]),Tn.lineTo(si["right"],si["bottom"]),Tn.stroke()),si["bottom"]-x/2<ya+Wn&&(Tn.beginPath(),Tn.moveTo(si["right"],si["bottom"]),Tn.lineTo(si["left"],si["bottom"]),Tn.stroke()),si["left"]+x/2>ba-Gn&&(Tn.beginPath(),Tn.moveTo(si["left"],si["bottom"]),Tn.lineTo(si["left"],si["top"]),Tn.stroke())}for(t=Ta["length"],e=0;t>e;e++)Ta[e].drawCell(Tn),Ta["length"]<t&&(t--,e--)
for(t=Ca["length"],e=0;t>e;e++)Ca[e].drawCell(Tn)
for(t=Sa["length"],e=0;t>e;e++)Sa[e].drawCell(Tn)
if(Tn.restore(),e=Math.max(Math.min(1.6*Qn,On,1400)/1400,.5),f=lx(),Pi=f,0!=Pi&&Yi&&(null==lu?lu=new c_(~~(24*e+.5),Ul?"#FFFFFF":"#626262"):lu.setColor(Ul?"#FFFFFF":"#626262"),lu.setValue("Mass: "+~~(Pi/100)),lu.setSize(~~(24*e+.5)),f=lu.render(),Tn["globalAlpha"]=1,Tn.drawImage(f,ue?99:12,(ue||me?60:80)-~~(16*e+.5),f["width"],f["height"])),ue)if(wa["length"]>0||null!==ke){c=Math.max(Math.min(256*Ci,64),16)
var m=32>=c?Os:Qs
if(m&&m["complete"]&&0!=m["width"]){var a,p,g,v,b=0,y=wa["length"]>0?0:Math.max(Math.min((On-c)/2,(Qn-c)/2)-c,0)/Ci
if(Vs)Gs=y
else{for(e=0;e<wa["length"];e++)a=wa[e],p=a["x"]-ba,g=a["y"]-ya,v=p*p+g*g,f=Math.max(v,a["size"]*a["size"]),f>b/4&&(y=Math.max(Math.sqrt(v)+a["size"],y)),f>b&&(b=f)
x=1*ni,Gs=(x*Gs+y)/(x+1)}Ws=Math.min(Gs*Ci+c,Math.max((On-c)/2,(Qn-c)/2,0)),null!==ke&&0!=Se["x"]&&0!=Se["y"]&&Y(),p=Qa-ba,g=Ga-ya,v=Math.sqrt(p*p+g*g)
var k=Math.min(Ws,v*Ci),w=0!=v?p/v:1,M=0!=v?g/v:0
p=w*k,g=M*k,Vs?(Ys=p,Js=g):(x=2*ni,Ys=(x*Ys+p)/(x+1),Js=(x*Js+g)/(x+1),k=Math.sqrt(Ys*Ys+Js*Js),w=0!=k?Ys/k:1,M=0!=k?Js/k:0),On>Qn?0!=M&&(k=Math.min(Math.max((Qn-c)/2,0)/Math.abs(M),k)):0!=w&&(k=Math.min(Math.max((On-c)/2,0)/Math.abs(w),k)),Vs=!1,Tn["globalAlpha"]=.7,Tn.save(),Tn.transform(w,M,-M,w,On/2,Qn/2),Tn.drawImage(m,k-c/2,-(c/2),c,c),Tn.restore()}}else Vs=!0
if(Wa){var m=Pu
m&&m["complete"]&&0!=m["width"]&&(Tn["globalAlpha"]=1,Tn.drawImage(m,(Ya-ba+Gn)*Ci-20,(Ja-ya+Wn)*Ci-10,50,50))}if(Ao&&(H(),Do&&(Do["x"]=Do["ox"]=Do["nx"]=Xa,Do["y"]=Do["oy"]=Do["ny"]=Ha,Do["nSize"]!=Bo&&0!=Bo&&(Do["size"]=Do["oSize"]=Do["nSize"]=Do["strokeSize"]=Bo,Do["pinsCache"]=null,Do["sizeScale"]=0),e=4==Do["cellType"]?.83*Do["size"]:Do["size"],c=0==Po&&(Fo||ue)&&0!=Bo&&Do["sizeScale"]?4>e*Ci?4/e:Ci:ue?50/e:(16==Do["cellType"]?23:14)*(me?.7:1)/e,x=1*ni,Do["sizeScale"]=Do["sizeScale"]?(x*Do["sizeScale"]+c)/(x+1):c,_=Do.getTransform(),_["t"]=_["s"]=!0,_["sx"]=_["sy"]=Do["sizeScale"]/Ci,Tn.save(),Tn.scale(Ci,Ci),Tn.translate(-ba+Gn,-ya+Wn),ue&&0==Po&&(Tn.beginPath(),Tn.arc(Do["x"],Do["y"],60/Ci,0,2*Math["PI"],!1),Tn.arc(Do["x"],Do["y"],50/Ci,0,2*Math["PI"],!1),Tn["globalAlpha"]=.2,Tn["fillStyle"]=Fo?"#00FF00":"#FF0000",Tn.fill("evenodd")),Do.drawCell(Tn),Tn.restore()),!Ji&&0==Po&&Fo)){for(f=null,e=Sa["length"]-1;e>=0;e--)if(_=Sa[e],0==_["cellType"]){var S=_["x"]-Xa,C=_["y"]-Ha
if(S*S+C*C<_["size"]*_["size"]){f=_
break}}f&&f.setAnimation({animId:13,animStartTime:Du[13].time(),received:++Ra})}if(ta&&!Ll&&Fn){if(e=~~(Math.max(200*Math.min(1.6*Qn,On,1400)/1400,90)+.5)/200,c=~~(200*e+.5),!Dn&&(Dn=document.createElement("canvas"),En=Dn.getContext("2d")),na||!Dn["complete"]){Dn["width"]=Dn["height"]=c,En["globalAlpha"]=ue?.7:.9,En["fillStyle"]="#000000",En.fillRect(0,0,c,c)
var m=gu["minimap"]
null==m&&(m=gu["minimap"]=Z_("img/minimap.png")),m&&m["complete"]&&0!=m["width"]&&(En["globalAlpha"]=1,En.drawImage(m,0,0,c,c),Dn["complete"]=!0)}Fn["width"]=Fn["height"]=c,Bn["globalAlpha"]=1,Bn.drawImage(Dn,0,0),si["draw"]&&(Bn.beginPath(),Bn.rect(0,0,c,c)),c/=Math.max(oi-ai,ri-ii),si["draw"]&&(Bn.rect((si["left"]-ai)*c,(si["top"]-ii)*c,(si["right"]-si["left"])*c,(si["bottom"]-si["top"])*c),Bn["globalAlpha"]=.4,Bn["fillStyle"]="#CC3030",Bn.fill("evenodd")),Bn.scale(c,c),Bn.translate(-ai,-ii),_=c*c*On*Qn/(Ci*Ci*200*200*e*e),Ul?(Bn["globalAlpha"]=_>=.4?.04:.06*(1-_/.4)+.04,Bn["fillStyle"]="#CCCCCC"):(Bn["globalAlpha"]=_>=.4?.02:.04*(1-_/.4)+.02,Bn["fillStyle"]="#FFFFFF"),Bn.fillRect(ba-Gn,ya-Wn,On/Ci,Qn/Ci),sx(Bn,c)
var T
for(t=Ca["length"],T=0;t>T;T++)x=Ca[T],x["shouldUpdate"]&&(x["x"]!=x["nx"]||x["y"]!=x["ny"])&&x.drawMinimapCell(Bn,c)
for(t=Sa["length"],T=0;t>T;T++)x=Sa[T],(3!=x["cellType"]&&1!=x["cellType"]||x["shouldUpdate"]&&(x["x"]!=x["nx"]||x["y"]!=x["ny"]))&&x.drawMinimapCell(Bn,c)
if(t=zo["length"],t>0&&Yi){var I=Fn["width"],U=Fn["height"]
for(T=0;t>T;T++)if(x=zo[T],x["showPos"]){var A=x["pp"]
!A&&(x["pp"]=new c_(15,"#FFFFFF",!0,"#000000",3),A=x["pp"],A.setScale(1.1)),A.setValue(T+1),f=A.render(),_=A.getAppliedScale()
var N=Math.max(Math.min(x["cx"]+1*e/c,(I-(f["width"]-4)*e/_)/c+ai),-4/c+ai),P=Math.max(Math.min(x["cy"]-15*e/c,(U-(f["height"]-4)*e/_)/c+ii),-4/c+ii)
Bn.drawImage(f,N,P,f["width"]*e/_/c,f["height"]*e/_/c)}}}ta=na=!1
var F=1e3/60,B=Date.now()-n
B>.9*F?ru-=.01:.75*F>B&&(ru+=.01),.4>ru&&(ru=.4),ru>1&&(ru=1),B>.8*F?su+=.1:.7*F>B&&(su-=.01),0>su&&(su=0),su>1&&(su=1)}function tx(){Fs=Date.now(),0==Ps&&(Ps=Fs)
var c=Fs-Ps
c>3e5&&0==wa["length"]||c>6e5?Bs||0==Es||(Bs=!0,au=!0,Rc(),Vc(),Fe&&(clearTimeout(Fe),Fe=0),Be&&(clearTimeout(Be),Be=0),T("You have been disconnected for inactivity.  Click anywhere to reconnect...",!1,!0,0,0)):Bs&&(Bs=!1,nu=500,Ec())}function nx(){Tn["globalAlpha"]=1
var c=vl||bl||yl||kl,f=1,x=0
if(c)if(vl||kl&&2==wl)f=Ci>.375?1:Ci>.1875?2:Ci>.09375?4:Ci>.046875?8:16,x=.046875,c=Ci>x/2
else if(bl||kl&&2!=wl){var _=oi-ai,e=ri-ii,t=Math.max(_,e)*Ci
if(bl)f=t>3e3?1:t>1500?2:t>750?4:8
else{if(kl&&2!=wl){var n="customback_fit1",a=vu[n]
if(null==a&&(D_(),a=vu[n]),c=a&&a["complete"]){var i=a["width"]/a["height"]
t=(i>1?i>_/e?e*i:_:_/e>i?_/i:e)*Ci}}f=t>3072?1:t>1536?2:t>768?4:8}}else yl&&(c=Ci>.12)
var o=vl&&c,r=bl&&c,s=yl&&c,l=kl&&2==wl&&c,u=kl&&2!=wl&&c
if(c)if(o){var d=Ul?"grid_fancy_dark":"grid_fancy_white",a=vu[d+f],h=yu[d+f]
null==a&&(vu[d+"1"]=q_("img/"+d+"1.png"),vu[d+"2"]=q_("img/"+d+"2.png"),vu[d+"4"]=q_("img/"+d+"4.png"),vu[d+"8"]=q_("img/"+d+"8.png"),vu[d+"16"]=q_("img/"+d+"16.png"),a=vu[d+f]),o=c=a&&a["complete"],null==h&&o&&(h=yu[d+f]=Tn.createPattern(a,"repeat"))}else if(r){var d="grid_sections_new",a=vu[d+f]
null==a&&(vu[d+"1"]=q_("img/"+d+"1.png"),vu[d+"2"]=q_("img/"+d+"2.png"),vu[d+"4"]=q_("img/"+d+"4.png"),vu[d+"8"]=q_("img/"+d+"8.png"),a=vu[d+f]),r=c=a&&a["complete"]}else if(l){var d="customback_pattern",a=vu[d+f],h=yu[d+f]
null==a&&(D_(),a=vu[d+f]),l=c=a&&a["complete"],null==h&&l&&(h=yu[d+f]=Tn.createPattern(a,"repeat"))}else if(u){var d="customback_fit",a=vu[d+f]
null==a&&(D_(),a=vu[d+f]),u=c=a&&a["complete"]}if(Tn["fillStyle"]=Cl?Tl:vl?Ul?"#131313":"#F7FCFE":Ul?"#111111":"#F2FBFF",Tn.fillRect(0,0,On,Qn),c)if(o||l){var i=2*f,n=x>Ci?Math.max((Ci-x/2)/(x/2),0):1,_=(-ba+Gn)%(a["width"]*i),e=(-ya+Wn)%(a["height"]*i),m=0,p=0,g=On/Ci,v=Qn/Ci
_>0&&(_-=a["width"]*i),e>0&&(e-=a["height"]*i),Sl&&(m=Math.max(m,-ba+Gn+si["left"]),p=Math.max(p,-ya+Wn+si["top"]),g=Math.min(g,-ba+Gn+si["right"])-m,v=Math.min(v,-ya+Wn+si["bottom"])-p),g>0&&v>0&&(l?Tn["globalAlpha"]=Ml*n:1>n&&(Tn["globalAlpha"]=n),Tn["fillStyle"]=h,Tn.save(),Tn.scale(i*Ci,i*Ci),Tn.translate(_/i,e/i),Tn.fillRect((m-_)/i,(p-e)/i,g/i,v/i),Tn.restore())}else if(r||u){var _=oi-ai,e=ri-ii
if(r)_=e=Math.max(_,e)
else if(u&&1==wl){var i=a["width"]/a["height"]
_/e>i?e=_/i:_=e*i}var b=(ba-Gn-ai)*a["width"]/_,y=(ya-Wn-ii)*a["height"]/e,k=On/Ci*a["width"]/_,w=Qn/Ci*a["height"]/e,m=0,p=0,g=On,v=Qn
if(0>b&&(k+=b,b=0,m=(-ba+Gn+ai)*Ci,g-=m),0>y&&(w+=y,y=0,p=(-ya+Wn+ii)*Ci,v-=p),b+k>a["width"]&&(k=a["width"]-b,g=(-ba+Gn+_+ai)*Ci-m),y+w>a["height"]&&(w=a["height"]-y,v=(-ya+Wn+e+ii)*Ci-p),u&&1==wl&&Sl&&g>0&&v>0){var n=(oi-Math.max(ai,ba-Gn))*Ci,M=(ri-Math.max(ii,ya-Wn))*Ci
g>n&&(k*=n/g,g=n),v>M&&(w*=M/v,v=M)}k>0&&w>0&&g>0&&v>0&&(Tn["globalAlpha"]=u?Ml:Ul?.3:.2,Tn.drawImage(a,b,y,k,w,m,p,g,v))}else if(s){Tn["lineWidth"]=1/Ci
for(var S=Math.min(.2*Ci,.3),C=Cl?Il:Ul?{r:17,g:17,b:17}:{r:242,g:251,b:255},T=Ul?{r:170,g:170,b:170}:{r:0,g:0,b:0},n=~~(C["r"]+(T["r"]-C["r"])*S),I=~~(C["g"]+(T["g"]-C["g"])*S),U=~~(C["b"]+(T["b"]-C["b"])*S),A=(n<<16|I<<8|U).toString(16);6>A["length"];)A="0"+A
Tn["strokeStyle"]="#"+A,Tn.save(),Tn.scale(Ci,Ci)
for(var e=On/Ci,_=Qn/Ci,M=200*f,i=-.5+(-ba+Gn)%M;e>i;i+=M)Tn.beginPath(),Tn.moveTo(i,0),Tn.lineTo(i,_),Tn.stroke()
for(i=-.5+(-ya+Wn)%M;_>i;i+=M)Tn.beginPath(),Tn.moveTo(0,i),Tn.lineTo(e,i),Tn.stroke()
Tn.restore()}}function ax(){if(typeof Storage!=="undefined"&&da){var c=Date.now()
localStorage["wc"+da]=c}}function ix(){if(!da)if(typeof Storage!=="undefined")for(var f=Date.now(),x=0;5>x;x++){var _=parseInt(localStorage["wc"+(x+1)])||0
!da&&f-_>15e3?(da=x+1,localStorage["wc"+da]=f):_>f&&(localStorage["wc"+(x+1)]=f)}else da=1
return da&&3>ha&&!c["sckt"]}function ox(){pa&&pa["port"].postMessage("register")}function rx(){pa&&pa["port"].postMessage("unregister"),pa=null}function sx(c,f){c["globalAlpha"]=1,c["lineCap"]="round",c["lineJoin"]="round",c["lineWidth"]=1/f}function lx(){for(var c=0,f=0;f<wa["length"];f++){var x=wa[f]
c+=x["nSize"]*x["nSize"]}return c}function ux(){if(Rl){var c,x,_,e,t=18,n=8,a=~~(Math.max(t*Math.min(1.6*Qn,On,1400)/1400,n)+.5),i=~~(Math.max(200*Math.min(1.6*Qn,On,1400)/1400,90)+.5)/200,o=~~(200*i+.5),r=~~((Qi?ue?160:240:50+25*Aa["length"])*i+.5),s=!Qi&&Aa["length"]>0?Aa[0]["cell"]:null,l="Leaderboard"
if(Un["width"]=~~(o*aa+.5),Un["height"]=~~(r*aa+.5),Un["style"]["width"]=o+"px",Un["style"]["height"]=r+"px",An.scale(aa,aa),An["globalAlpha"]=ue?.3:.5,An["fillStyle"]="#000000",An.fillRect(0,0,o,r),An["globalAlpha"]=1,Yi&&(An["font"]=~~(24*i+.5)+"px Ubuntu, serif",_=An.measureText(l).width,An["font"]=~~(24*i+.5)+"px Ubuntu",ue&&(An["globalAlpha"]=.25,An["fillStyle"]="#000000",An.fillText(l,~~((s||Qi&&Qi["length"]>0?44*i:(o-_)/2)+.5)+1*i,~~(31*i+.5)+1*i),An["globalAlpha"]=1),An["fillStyle"]="#FFFFFF",An.fillText(l,~~((s||Qi&&Qi["length"]>0?44*i:(o-_)/2)+.5),~~(31*i+.5))),Qi){if(Qi["length"]>0){for(An.scale(i,i),e=l=x=_=0;e<Qi["length"];++e)c=l+Qi[e]*Math["PI"]*2,An["fillStyle"]=Vi[e],An.beginPath(),An.moveTo(o/2/i,ue?100:140),An.arc(o/2/i,ue?100:140,ue?40:80,l,c,!1),An.fill(),l=c,Qi[e]>_&&(_=Qi[e],x=e)
An.beginPath(),An.arc(22,22,11,0,2*Math["PI"],!1),An["fillStyle"]=Vi[x],An.fill()}}else{if(s){if(An.save(),An.scale(i,i),An.beginPath(),An.arc(22,22,11,0,2*Math["PI"],!1),An["fillStyle"]=s["cellcolor"],An.fill(),An.beginPath(),An.arc(22,22,10,0,2*Math["PI"],!1),An["lineWidth"]=1,An["strokeStyle"]=s["dimcolor"],An.stroke(),s["skinId"]&&ol){var u=uu[s["skinId"]+"_lo"]
!u&&(fe(s["skinId"]),u=uu[s["skinId"]+"_lo"]),u&&u["complete"]&&0!=u["width"]&&(An.beginPath(),An.arc(22,22,11,0,2*Math["PI"],!1),he?An.drawImage(u,11,11,22,22):(An.save(),An.clip(),An.drawImage(u,11,11,22,22),An.restore()))}if(s["wears"]&&rl)for(r=0;r<s["wears"]["length"];r++){var d=s["wears"][r],u=gu["W"+d["wearId"]+"_lo"]
if(!u&&(ee(d["wearId"]),u=gu["W"+d["wearId"]+"_lo"]),u&&u["complete"]&&0!=u["width"]){var h=d["wearArea"],m=5==h?55:33
An.drawImage(u,22-11*(3==h||5==h?2.5:4==h?.5:1.5),22-11*(1==h||5==h?2.5:2==h?.5:1.5),m,m)}}An.restore()}if(Yi)for(e=0;e<Aa["length"];++e)s=Aa[e],s["empty"]||(l=s["name"],c=s["textcolor"],x=s["pos"],fl||(!l&&(l=bu),l=(x>0?x:e+1)+". "+l),An["font"]=a+"px Ubuntu, serif",_=An.measureText(l).width,An["font"]=a+"px Ubuntu",ue&&(An["globalAlpha"]=.25,An["fillStyle"]="#000000",An.fillText(l,~~((fl?Math.max((o-_)/2,5*i):5*i)+.5)+1*i,~~((61+25*e)*i+.5)+1*i),An["globalAlpha"]=1),An["fillStyle"]=1==c?"#FFAAAA":2==c?"#FFCCAA":3==c?Ul?"#777777":"#A0A0A0":"#FFFFFF",An.fillText(l,~~((fl?Math.max((o-_)/2,5*i):5*i)+.5),~~((61+25*e)*i+.5)))}!Hr&&(f("#leaderboard").show(),Hr=!0)}else Hr&&(f("#leaderboard").hide(),Hr=!1)}function dx(){if(Zi&&15==li){f("#brPlayersValue").text(Zi["players"])
var c="",x="",_=!1
switch(Zi["phase"]){case 0:c="timer",x=""
break
case 1:c="timer",x=__(Zi["phaseTimer"])
break
case 2:c="join",x=__(Zi["phaseTimer"])
break
case 3:c=Zi["isShrinking"]?"nuclear_red":"nuclear_yellow",x=__(Zi["shrinkTimer"]),_=Zi["isShrinking"]
break
case 4:c="finished",x=__(Zi["phaseTimer"])}c!=""&&f("#brTimerImg").css("background-image","url('img/game_"+c+".png')"),_?f("#brTimerValue").text(x).addClass("red"):f("#brTimerValue").text(x).removeClass("red"),f("#brKillsValue").text(Zi["kills"])
var e=!1
Zi["isParticipant"]&&(Zi["isEliminated"]?(f("#brExtraImg").css("background-image","url('img/game_star_"+(1==Zi["finishPosition"]?"gold":"grey")+".png')"),f("#brExtraValue").text("You finished #"+Zi["finishPosition"]),e=!0):Zi["isGhosted"]&&(f("#brExtraImg").css("background-image","url('img/game_ghost.png')"),f("#brExtraValue").html('Ghost time left    <span class="'+(Zi["ghostedTimer"]<=10?"red":"orange")+'">'+__(Zi["ghostedTimer"])+"</span>"),e=!0)),e?f("#brExtra").show():f("#brExtra").hide(),!Zr&&(f("#brGameContainer").show(),Zr=!0)}else Zr&&(f("#brGameContainer").hide(),Zr=!1)}function hx(){qi>=0&&17==li?(f("#infBarProgress").width(100*qi+"%"),!qr&&(f("#infGameContainer").show(),qr=!0)):qr&&(f("#infGameContainer").hide(),qr=!1)}function mx(){var c=Ki,x=0,_=""
if(Zi){if(!co)if(15==li){switch(_+='<p style="padding-bottom:10px;"><span class="col-left" style="color:#fa4;">BATTLE ROYALE</span>&nbsp;</p>',x++,Zi["phase"]){case 0:_+='<p><span class="col-left">Not running</span>&nbsp;</p>',x++
break
case 1:_+='<p><span class="col-left">Registration</span>&nbsp;</p>',x++
break
case 2:case 3:_+='<p><span class="col-left">Running:</span>&nbsp;'+Zi["runningTime"]+"</p>",x++
break
case 4:_+='<p><span class="col-left">Finished:</span>&nbsp;'+Zi["runningTime"]+"</p>",x++}_+='<p><span class="col-left">Players:</span>&nbsp;'+(Zi["players"]+"/"+Zi["maxPlayers"])+"</p>",x++,_+='<p><span class="col-left">Spectators:</span>&nbsp;'+(""+Zi["spectators"])+"</p>",x++,Zi["phase"]>=1&&Zi["coinRewards"][0]>0&&(_+='<p style="padding-top:10px;"><span class="col-left" style="color:#fa4;">REWARDS</span>&nbsp;</p>',_+='<p><span class="col-left">1st place:</span>&nbsp;'+(""+Zi["coinRewards"][0])+" coins</p>",x++,Zi["coinRewards"][1]>0&&(_+='<p><span class="col-left">2nd place:</span>&nbsp;'+(""+Zi["coinRewards"][1])+" coins</p>",x++),Zi["coinRewards"][2]>0&&(_+='<p><span class="col-left">3rd place:</span>&nbsp;'+(""+Zi["coinRewards"][2])+" coins</p>",x++)),Zi["totalMatches"]>0&&(_+='<p style="padding-top:10px;"><span class="col-left" style="color:#fa4;">YOUR STATS</span>&nbsp;</p>',x++,_+='<p><span class="col-left">Matches:</span>&nbsp;'+(""+Zi["totalMatches"])+"</p>",x++,_+='<p><span class="col-left">Wins:</span>&nbsp;'+(""+Zi["totalWins"])+"</p>",x++,_+='<p><span class="col-left">Points:</span>&nbsp;'+(""+Zi["totalPoints"])+"</p>",x++,_+='<p><span class="col-left">Kills:</span>&nbsp;'+(""+Zi["totalKills"])+"</p>",x++)}else 17==li&&(_+='<p style="padding-bottom:10px;"><span class="col-left" style="color:#fa4;">INFECTION</span>&nbsp;</p>',x++,_+='<p><span class="col-left">Time remaining:</span>&nbsp;'+Zi["timeLeft"]+"</p>",x++,_+='<p><span class="col-left">Green players:</span>&nbsp;'+Zi["uninfected"]+"</p>",x++,_+='<p><span class="col-left">Red players:</span>&nbsp;'+Zi["infected"]+"</p>",x++,_+='<p style="padding-top:10px;"><span class="col-left" style="color:#fa4;">YOUR SESSION</span>&nbsp;</p>',x++,_+='<p><span class="col-left">You killed:</span>&nbsp;'+(""+Zi["kills"])+"</p>",x++,_+='<p><span class="col-left">You infected:</span>&nbsp;'+(""+Zi["othersInfected"])+"</p>",x++)
f("#gamemodeContent").html(_),Ki=x,Kr?x!=c&&vx():(f("#gamemodeBox").stop(!0,!1).show(0).addClass("visible"),Kr=!0,vx())}else Kr&&(f("#gamemodeBox").stop(!0,!1).removeClass("visible").delay(400).hide(0),Ki=0,Qe&&(clearTimeout(Qe),Qe=0),Qe=setTimeout(vx,400),Kr=!1)}function px(){for(var c=oo,x=0,_="";io["length"]<8;)io.push(!1)
fo||((_o>0||io[0])&&(io[0]=io[1]=io[2]=!0,_+='<p>Minions: <span style="color:'+(_o>0?"#4f4":"#f44")+';">'+(""+_o)+"</span></p>",x++,_+='<p>Minion Time: <span style="color:'+(eo>0?"#4f4":"#f44")+';">'+x_(eo)+"</span></p>",x++,_+='<p>You control: <span style="color:'+(to?"#f44":"#4f4")+';">'+(to?"Minions":"Yourself")+"</span></p>",x++),(no||io[3])&&(io[3]=!0,_+='<p>Frozen: <span style="color:'+(no?"#4f4":"#f44")+';">'+(no?"On":"Off")+"</span></p>",x++),(ao||io[4])&&io[0]&&(io[4]=!0,_+='<p>Frozen minions: <span style="color:'+(ao?"#4f4":"#f44")+';">'+(ao?"On":"Off")+"</span></p>",x++),(ro||io[5])&&(io[5]=!0,_+='<p>Cloaked: <span style="color:'+(ro?"#4f4":"#f44")+';">'+(ro?"On":"Off")+"</span></p>",x++),(so||io[6])&&io[0]&&(io[6]=!0,_+='<p>Cloaked minions: <span style="color:'+(so?"#4f4":"#f44")+';">'+(so?"On":"Off")+"</span></p>",x++),(io[5]||io[6])&&(io[7]=!0,_+='<p>Cloak Time: <span style="color:'+(lo>0?"#4f4":"#f44")+';">'+__(lo)+"</span></p>",x++)),f("#infoContent").html(_),oo=x,_o>0||no||ro?cs?x!=c&&vx():(Le&&(clearTimeout(Le),Le=0),f("#infoBox").stop(!0,!1).show(0).addClass("visible"),cs=!0,vx(!0,!1)):cs&&(Le=setTimeout(function(){f("#infoBox").stop(!0,!1).removeClass("visible").delay(400).hide(0)
for(var c=0;c<io["length"];c++)io[c]=!1
oo=0,Qe&&(clearTimeout(Qe),Qe=0),Qe=setTimeout(vx,400),Le=0},2e3),cs=!1)}function gx(){var c=Math.min(zo["length"],ue?6:12),x=""
if(!xo){x+=zo["length"]>0?Eo?'<p style="padding-bottom:9px;">Party invitation:</p>':'<p style="padding-bottom:9px;">You are in a party:</p>':'<p style="margin-bottom:-4px;">Party ended</p>'
for(var _=0;c>_;_++){var e=zo[_]
x+='<p style="height:20px; color:'+(e["accepted"]?"#fff":ue?"rgba(85,85,85,0.5)":"#555")+';">'+(""+(_+1))+". "+(e["nameHTML"]?e["nameHTML"]:bu)+"</p>"}zo["length"]>c&&(x+='<p style="margin-bottom:-6px;">+ '+(""+(zo["length"]-c))+" more players...</p>")}f("#partyContent").html(x),zo["length"]>0&&Eo&&!xo?!ps&&(f("#partyButtons").show(),ps=!0):ps&&(f("#partyButtons").hide(),ps=!1),zo["length"]>0?ms||(Oe&&(clearTimeout(Oe),Oe=0),f("#partyBox").stop(!0,!1).show(0).addClass("visible"),ms=!0,vx(!1,!0),xo&&O_(0)):ms&&(Oe=setTimeout(function(){f("#partyBox").stop(!0,!1).removeClass("visible").delay(400).hide(0),setTimeout(function(){O_(0)},400),Oe=0},2e3),ms=!1)}function vx(c,x){Qe&&(clearTimeout(Qe),Qe=0)
var _,e=Math.max(Math.min(1.6*Qn,On,1400)/1400,.5),t=ue||me?80:105
Kr&&(_=f("#gamemodeBox"),t+=_[0].getBoundingClientRect().height+10*e),(cs||Le)&&(_=f("#infoBox"),c?_.css({top:~~(t*aa+.5)/aa+"px"}):_.animate({top:~~(t*aa+.5)/aa+"px"},200),t+=_[0].getBoundingClientRect().height+10*e),(ms||Oe)&&(_=f("#partyBox"),x?_.css({top:~~(t*aa+.5)/aa+"px"}):_.animate({top:~~(t*aa+.5)/aa+"px"},200),t+=_[0].getBoundingClientRect().height+10*e)}function bx(c){return $("<div/>").text(c).html()}function yx(){0!=uo?(f("#invRecombine > p").text(uo>1?""+uo:""),!fs&&(f("#invRecombine").show(),fs=!0)):fs&&(f("#invRecombine").hide(),fs=!1),0!=ho?(f("#invSpeed > p").text(ho>1?""+ho:""),!xs&&(f("#invSpeed").show(),xs=!0)):xs&&(f("#invSpeed").hide(),xs=!1),0!=mo?(f("#invGrowth > p").text(mo>1?""+mo:""),!_s&&(f("#invGrowth").show(),_s=!0)):_s&&(f("#invGrowth").hide(),_s=!1),0!=po?(f("#invSpawnVirus > p").text(po>1?""+po:""),!es&&(f("#invSpawnVirus").show(),es=!0)):es&&(f("#invSpawnVirus").hide(),es=!1),0!=go?(f("#invSpawnMothercell > p").text(go>1?""+go:""),!ts&&(f("#invSpawnMothercell").show(),ts=!0)):ts&&(f("#invSpawnMothercell").hide(),ts=!1),0!=vo?(f("#invSpawnPortal > p").text(vo>1?""+vo:""),!ns&&(f("#invSpawnPortal").show(),ns=!0)):ns&&(f("#invSpawnPortal").hide(),ns=!1),0!=bo?(f("#invSpawnGoldOre > p").text(bo>1?""+bo:""),!as&&(f("#invSpawnGoldOre").show(),as=!0)):as&&(f("#invSpawnGoldOre").hide(),as=!1),0!=yo?(f("#invWall > p").text(yo>1?""+yo:""),!is&&(f("#invWall").show(),is=!0)):is&&(f("#invWall").hide(),is=!1),0!=ko?(f("#inv360Shot > p").text(ko>1?""+ko:""),!os&&(f("#inv360Shot").show(),os=!0)):os&&(f("#inv360Shot").hide(),os=!1),0!=So?(f("#invFreeze > p").text(So>1?""+So:""),!rs&&(f("#invFreeze").show(),rs=!0)):rs&&(f("#invFreeze").hide(),rs=!1),0!=Co?(f("#invAntiFreeze > p").text(Co>1?""+Co:""),!ss&&(f("#invAntiFreeze").show(),ss=!0)):ss&&(f("#invAntiFreeze").hide(),ss=!1),0!=To?(f("#invAntiRecombine > p").text(To>1?""+To:""),!ls&&(f("#invAntiRecombine").show(),ls=!0)):ls&&(f("#invAntiRecombine").hide(),ls=!1),0!=Io?(f("#invFrozenVirus > p").text(Io>1?""+Io:""),!us&&(f("#invFrozenVirus").show(),us=!0)):us&&(f("#invFrozenVirus").hide(),us=!1)}function kx(c){Po=c,Ao?$("#inventory").find(".inventory-box").tooltip("hide"):0!=Po&&(Ge&&(clearTimeout(Ge),Ge=0),Ge=setTimeout(function(){$("#inventory").find(".inventory-box").tooltip("hide")},4e3))}function wx(c,x){switch(c){case 0:Mo=0
break
case 1:if(1!=Mo){if(!wo||0>=ko)return
Mo=1,f(".inventory-box").removeClass("activatedInv"),f("#inv360Shot").addClass("activatedInv"),!x&&T("You have activated the force. Press W to eject the force, and push other cells away. If you are split into many cells, choose/select what cell to shoot the 360 shot by clicking on it.",!1,!1,1,3)}else Mo=0,f("#inv360Shot").removeClass("activatedInv"),!x&&T("You have deactivated the force. W will eject normal food cells",!1,!1,0,3)
break
case 2:break
case 3:if(3!=Mo){if(0>=Io)return
Mo=3,f(".inventory-box").removeClass("activatedInv"),f("#invFrozenVirus").addClass("activatedInv"),!x&&T("You have activated the frozen virus. Press W to eject it and split & freeze other players",!1,!1,1,3)}else Mo=0,f("#invFrozenVirus").removeClass("activatedInv"),!x&&T("You have deactivated the frozen virus. W will eject normal food cells",!1,!1,0,3)}if(qf()){var _=Oc(2)
_.setUint8(0,22),_.setUint8(1,Mo),Qc(_)}}function Mx(){var c=xi
if(Sx(),!(Ao||Ji||1!=Po&&2!=Po&&3!=Po&&4!=Po&&5!=Po&&6!=Po&&8!=Po&&9!=Po&&10!=Po&&11!=Po&&12!=Po)){if(No=Po,Ao=!0,Fo=!0,Bo=0,Ix(),xi=c,qf()){var f=Oc(2)
f.setUint8(0,70),f.setUint8(1,No),Qc(f)}Gf(!0),$("#inventory").find(".inventory-box").tooltip("hide")}}function Sx(){Ao&&(Ao=!1,No=0,Do=null,xi=!1,f(".inventory-box.active").removeClass("active"),Kf(71),document["body"]["style"]["cursor"]="default")}function Cx(){if(Ao){if(qf()&&!Ji){Gf(!0)
var c=Oc(10)
c.setUint8(0,72),c.setInt32(1,Xa,!0),c.setInt32(5,Ha,!0),c.setUint8(9,No),Qc(c)}!xi&&Sx()}}function Tx(){Ao&&Do&&!Ji&&qf()&&16==Do["cellType"]&&(Do["orientation"]=(Do["orientation"]+1)%2,Gf(!0))}function Ix(){function c(c,f,x,_,e){Do=new Kx(0,0,0,0),Do["cellType"]=c,Do["size"]=Do["oSize"]=Do["nSize"]=Do["strokeSize"]=f,4==c&&(Do["strokeSize"]=.83*f)
for(var t=(x["r"]<<16|x["g"]<<8|x["b"]).toString(16);6>t["length"];)t="0"+t
for(Do["color"]="#"+t,t=(~~(x["r"]*Al)<<16|~~(x["g"]*Al)<<8|~~(x["b"]*Al)).toString(16);6>t["length"];)t="0"+t
Do["colorDimmed"]="#"+t,Do["spiked"]=_,Do["imageId"]=e,Do.reloadImage(),Do["ga"]=.5}switch(No){case 1:c(5,32,{r:255,g:0,b:0},1,2)
break
case 2:c(7,32,{r:255,g:224,b:0},1,4)
break
case 3:c(6,42,{r:128,g:224,b:32},0,3)
break
case 4:c(2,100,17==li?{r:25,g:160,b:204}:{r:0,g:255,b:0},2,0)
break
case 5:c(9,224,17==li?{r:240,g:48,b:48}:{r:205,g:85,b:100},2,0)
break
case 6:c(4,224,{r:98,g:35,b:115},1,1)
break
case 8:c(12,32,{r:0,g:192,b:255},1,12)
break
case 9:c(11,224,{r:255,g:215,b:0},0,10)
break
case 10:c(16,708,{r:158,g:104,b:63},0,15)
break
case 11:c(20,32,{r:100,g:0,b:0},0,20)
break
case 12:c(21,32,{r:100,g:0,b:0},0,21)}}function Ux(c){!Bs&&(Ps=Fs),Ji||(La=c["clientX"],Oa=c["clientY"],hc(),Ao&&(Va=La,ja=Oa,H()))}function Ax(c){return~~(~~(21.2*(~~(bi+4.42*yi+555)%--c+36360))/4.2)}function Nx(c){c.setUint32(5,Yx()+wi,!0)}function Px(c){c.setUint8(0,Wx(Ds)-5)}function Fx(c){return c/2}function Bx(){for(var c,f,x,_,e,t,n=Sa["length"],a=0;n>a;a++){for(c=Sa[a],f=(c["color"]+"").replace(/[^0-9a-f]/gi,""),f["length"]<6&&(f=f[0]+f[0]+f[1]+f[1]+f[2]+f[2]),x=parseInt(f.substr(0,2),16),_=parseInt(f.substr(2,2),16),e=parseInt(f.substr(4,2),16),t=(~~(x*Al)<<16|~~(_*Al)<<8|~~(e*Al)).toString(16);6>t["length"];)t="0"+t
c["colorDimmed"]="#"+t}if(Aa["length"]>0&&(c=Aa[0]["cell"])){for(f=(c["cellcolor"]+"").replace(/[^0-9a-f]/gi,""),f["length"]<6&&(f=f[0]+f[0]+f[1]+f[1]+f[2]+f[2]),x=parseInt(f.substr(0,2),16),_=parseInt(f.substr(2,2),16),e=parseInt(f.substr(4,2),16),t=(~~(x*Al)<<16|~~(_*Al)<<8|~~(e*Al)).toString(16);6>t["length"];)t="0"+t
c["dimcolor"]="#"+t}}function Dx(){for(var c,f=Sa["length"],x=0;f>x;x++)c=Sa[x],(0==c["cellType"]||3==c["cellType"])&&(c["shape"]<2&&(c["rotation"]=(2*Math.random()-1)*Math["PI"]),jl?c["shape"]=2:c["shape"]<3&&(c["shape"]=hu[c["id"]%100]))}function Ex(){for(var c,f=Sa["length"],x=0;f>x;x++)c=Sa[x],c["ga"]=1}function zx(c){var f=(c-si["updateTime"])/1100
f=0>f?0:f>1?1:f,si["left"]=f*(si["nLeft"]-si["oLeft"])+si["oLeft"],si["top"]=f*(si["nTop"]-si["oTop"])+si["oTop"],si["right"]=f*(si["nRight"]-si["oRight"])+si["oRight"],si["bottom"]=f*(si["nBottom"]-si["oBottom"])+si["oBottom"],si["ga"]<1&&(f=(c-si["createTime"])/1e3,si["ga"]=0>f?0:f>1?1:f)}function Rx(c){var f=(c-$i)/120
f=0>f?0:f>1?1:f,Fi=f*(zi-Di)+Di,Bi=f*(Ri-Ei)+Ei}function $x(){Fl&&(et&&Lx(),qf()&&(Kf(130),et=!0))}function Lx(){Fl&&(f("#ping").text("---"),et=!1)}function Ox(c){typeof c["isTrusted"]==="undefined"||c["isTrusted"]||(vn=!0,bn&&(clearTimeout(bn),bn=0),bn=setTimeout(function(){vn=!1},0))}function Qx(c){yn||vn||typeof c["isTrusted"]!=="undefined"&&!c["isTrusted"]||(yn=!0,wn&&(clearTimeout(wn),wn=0),wn=setTimeout(function(){yn=!1},0))}function Gx(c){if(qf(!0)&&-1!=bi&&!c){var f=Oc(13)
Px(f),Vx(f,c,Es),Nx(f),Jx(f),Qc(f,!0)}}function Wx(c){return 2*(c+30)-(bi-5)%10}function Yx(){for(var c=0,f=0;f<ki["length"];f++)c+=~~(bi/ki[f]-ki[f]%wi)
return c}function Jx(c){c.setUint32(9,Yc(c,0,9,255),!0)}function Vx(c,f,x){c.setUint32(1,~~(bi/1.84+Fx(Ds)-2*(f?.5:1))+Ax(x),!0)}function jx(){var c=localStorage.getItem("drum")
null===c&&(c=""+~~(2e9*Math.random()),localStorage.setItem("drum",c)),localStorage.setItem(md5(c),Kn)}function Xx(){}function Hx(){}function Zx(){}function qx(){Xx(),Hx(),Zx()}function Kx(c,f,x,_){this.id=c,this.ox=this.x=f,this.oy=this.y=x,this.oSize=this.size=this.strokeSize=_}function c_(c,f,x,_,e){c&&(this._size=c),f&&(this._color=f),this._stroke=!!x,_&&(this._strokeColor=_),e&&(this._strokeWidth=e)}function f_(){el&&(_l["version"]=2,_l["user"]=Hn,_l["skinId"]=al,_l["wearablesSelected"]=il.slice(0),_l["sSkins"]=ol,_l["sWearables"]=rl,_l["sColors"]=!sl,_l["sNames"]=ll,_l["sMinionNames"]=ul,_l["sMass"]=dl,_l["sFood"]=hl,_l["sCellAnimations"]=ml,_l["sSkinAnimations"]=pl,_l["sMapBorder"]=!gl,_l["sFancyGrid"]=vl,_l["sSectionGrid"]=bl,_l["sGrid"]=yl,_l["sCustomBack"]=kl,_l["sCustomBackType"]=wl,_l["sCustomBackOpacity"]=Ml,_l["sCustomBackClip"]=Sl,_l["sCustomBackEnableColor"]=Cl,_l["sCustomBackColor"]=Tl,_l["sDark"]=Ul,_l["sAcid"]=Nl,_l["sSlowMotion"]=Pl,_l["sFPS"]=Fl,_l["sZoom"]=Bl,_l["sFixedZoom"]=Dl,_l["fixedZoomScale"]=El,_l["sMinionUi"]=zl,_l["sLeaderboard"]=Rl,_l["sChat"]=!$l,_l["sMinimap"]=!Ll,_l["sCellBorders"]=!Ol,_l["sLargeNames"]=Ql,_l["sNameOutlines"]=Gl,_l["sCellSpikes"]=Wl,_l["sTransparentViruses"]=Yl,_l["sClassicViruses"]=Jl,_l["sPolygonShapes"]=Vl,_l["sLineShapes"]=jl,_l["sBubbleCells"]=Xl,_l["sMobileLeft"]=Hl,_l["sMobileFeedLock"]=Zl,c["localStorage"]["settings"]=JSON.stringify(_l))}function x_(c){c=+c
var f=Math.floor(c/3600),x=Math.floor(c%3600/60),_=Math.floor(c%3600%60)
return(10>f?"0":"")+f+":"+(10>x?"0":"")+x+":"+(10>_?"0":"")+_}function __(c){c=+c
var f=Math.floor(c/3600),x=Math.floor(c%3600/60),_=Math.floor(c%3600%60)
return(f>0?f+":"+(10>x?"0":""):"")+x+":"+(10>_?"0":"")+_}function e_(c){c=+c
var f=Math.floor(c/3600),x=Math.floor(c%3600/60),_=Math.floor(c%3600%60)
return(f>0?f+"h"+(10>x?"0":""):"")+x+"m"+(10>_?"0":"")+_+"s"}function t_(c){var f=["hitler","nazi","porno","fuck","lul","eikel","isis","penis","sora","admin","administrator","hate","terrorist"]
return-1!=f.indexOf(c.replace(/ /g,"").toLowerCase())}function n_(){var f
null!=c["localStorage"]["userSettings"+(""+Zn)]&&(f=JSON.parse(c["localStorage"]["userSettings"+(""+Zn)]),typeof f["sAllowPartyInvite"]!=="undefined"&&(Pt=f["sAllowPartyInvite"]),typeof f["sAllowPartyAnimations"]!=="undefined"&&(Ft=f["sAllowPartyAnimations"]),typeof f["sAutoFeedEnabled"]!=="undefined"&&(Et=f["sAutoFeedEnabled"]),typeof f["sGldNickEnabled"]!=="undefined"&&(Bt=f["sGldNickEnabled"]),typeof f["sGldCrownEnabled"]!=="undefined"&&(Dt=f["sGldCrownEnabled"]),typeof f["sMinionSkins"]!=="undefined"&&(zt=f["sMinionSkins"]),typeof f["sVideoAdsEnabled"]!=="undefined"&&(Rt=f["sVideoAdsEnabled"]),typeof f["sModIconEnabled"]!=="undefined"&&($t=f["sModIconEnabled"]),typeof f["sIconDRankEnabled"]!=="undefined"&&(Xt=f["sIconDRankEnabled"]),typeof f["sIconYTEnabled"]!=="undefined"&&(Ht=f["sIconYTEnabled"]),typeof f["sGreenNameEnabled"]!=="undefined"&&(Zt=f["sGreenNameEnabled"]),typeof f["sBlueNameEnabled"]!=="undefined"&&(qt=f["sBlueNameEnabled"]),typeof f["sOrangeNameEnabled"]!=="undefined"&&(Kt=f["sOrangeNameEnabled"]),typeof f["sRedNameEnabled"]!=="undefined"&&(cn=f["sRedNameEnabled"]),typeof f["sBlackNameEnabled"]!=="undefined"&&(fn=f["sBlackNameEnabled"]),typeof f["sCustomColorNameEnabled"]!=="undefined"&&(_n=f["sCustomColorNameEnabled"])),tl=!1,showPartyInvite(Pt),setPartyAnimations(Ft),setAutoFeedEnabled(Et),setGoldNickname(Bt),setGoldCrownChat(Dt),setMinionSkins(zt),setVideoAds(Rt),setModeratorIconChat($t),setIconDRank(Xt),setIconYT(Ht),setGreenName(Zt),setBlueName(qt),setOrangeName(Kt),setRedName(cn),setBlackName(fn),setCustomColorName(_n),tl=!0,null==c["localStorage"]["userSettings"+(""+Zn)]&&a_()}function a_(){if(tl){var f={sAllowPartyInvite:Pt,sAllowPartyAnimations:Ft,sAutoFeedEnabled:Et}
2==At&&(f["sGldNickEnabled"]=Bt,f["sGldCrownEnabled"]=Dt,f["sMinionSkins"]=zt,f["sVideoAdsEnabled"]=Rt),Nt>0&&(f["sModIconEnabled"]=$t),Lt&&(f["sIconDRankEnabled"]=Xt),Ot&&(f["sIconYTEnabled"]=Ht),Qt&&(f["sGreenNameEnabled"]=Zt),Gt&&(f["sBlueNameEnabled"]=qt),Wt&&(f["sOrangeNameEnabled"]=Kt),Yt&&(f["sRedNameEnabled"]=cn),Jt&&(f["sBlackNameEnabled"]=fn),Vt&&(f["sCustomColorNameEnabled"]=_n),c["localStorage"]["userSettings"+(""+Zn)]=JSON.stringify(f)}}function i_(c,f){if(qf()){var x=Oc(3)
x.setUint8(0,4,!0),x.setUint8(1,c,!0),x.setUint8(2,f,!0),Qc(x)}}function o_(){ft&&(clearInterval(ft),ft=0),(Mi||zs||Si||dn)&&!xt&&(xt=!0)}function r_(c,x,_){if(f("#password").val(""),1==_)var e=x
else var e=md5(x)
qn=c,Kn=e,Wf(c,e),f("#sent").attr("disabled","disabled"),Re&&(clearTimeout(Re),Re=0),Re=setTimeout(function(){f("#sent").removeAttr("disabled")},1500),f("#loginError").fadeOut()}function s_(){var c=document.getElementById("reset-pass-input").value
return 0==c["length"]?void f(".pwresetalertdanger").hide(0).text("Please enter a username or email first").fadeIn(600):void swal({title:"Please confirm",text:"Do you want to send an email with a password reset link to '"+c+"'?",type:"warning",showCancelButton:!0,confirmButtonColor:"#4CAF50",confirmButtonText:"Yes, continue",cancelButtonText:"No, cancel"},function(){if(ql++,ql>12)return swal("Sorry","Too many attempts. Please try again later.","error")
var x=Xn&&Hn.trim().toLowerCase()==c.trim().toLowerCase()?Kn:""
f("#resetPw").prop("disabled",!0).html('Send Reset Email<i class="fa fa-spin" style="animation-duration:1s; position:absolute; margin:3px 20px -3px; float:right; opacity:0.7;"><img src="img/loading3.png" style="width:20px;"></i>').css("opacity","0.7"),f.ajax({type:"GET",url:"../pass-reset/request_pass_reset.php",data:"usernameEmail="+c+"&cp="+x,beforeSend:function(){},success:function(c){c.substring(0,7)=="success"?(f("#reset-pw-row").hide(),f(".pwresetalertdanger").hide(),f(".pwresetalert").html(c.substring(7)).fadeIn(600)):f(".pwresetalertdanger").hide(0).text(c).fadeIn(600)},error:function(c){f(".pwresetalertdanger").hide(0).text("Error: an unexpected ajax error occurred").fadeIn(600)},complete:function(c){f("#resetPw").prop("disabled",!1).text("Send Reset Email").css("opacity","")}})})}function l_(){if(qf()){var c=120
f("#ad-timeleft").css("color","#FF5722").text(c+"s"),Tt&&(clearInterval(Tt),Tt=0),Tt=setInterval(function(){c--,0>=c?(clearInterval(Tt),Tt=0,f("#ad-timeleft").css("color","#24ff22").html("&#10004")):f("#ad-timeleft").text(c+"s")},1e3)
var x=2,_=Oc(2)
_.setUint8(0,120,!0),_.setUint8(1,x,!0),Qc(_)}}function u_(c){for(var f="",x=c["length"]-1;x>=0;x--)f+=String.fromCharCode(c.charCodeAt(x)-1)
return f}function d_(c){Mn=c,f("div.modal").each(function(x,_){if(_=f(_),_&&_["data"]){var e=_.data("bs.modal")
e&&e["options"]&&(e["options"]["backdrop"]=c?"static":!0)}}),Sn&&(clearTimeout(Sn),Sn=0),c&&(Sn=setTimeout(function(){d_(!1)},35e3))}function h_(c,x){if(ze&&(clearTimeout(ze),ze=0),!Xn&&typeof Storage!=="undefined"){if(!c&&(c=localStorage.getItem("username")),!x){var _=localStorage.getItem("drum")
x=(c&&null!==_?localStorage.getItem(md5(_)):null)||localStorage.getItem("password")}null!==c&&null!==x&&(r_(c,x,1),qf()&&!f("#dashPanel").is(":visible")&&f("#login").is(":visible")&&(f("#loginError p").replaceWith("<p>Attempting autologin...<br>(Press Esc to cancel)</p>"),f("#loginError").fadeIn(),f("#username").val(c)))}}function m_(){Xn=!1,Hn="",Zn=0,At=0,Nt=0,Ut=!0,Lt=!1,Ot=!1,Qt=!1,Gt=!1,Wt=!1,Yt=!1,Jt=!1,Vt=!1,jt=0}function p_(c){Af(0),Nf(0,0),df(0),lf(),yf(),mf(),xf(),a_(),$("#dashPanel").fadeOut("slow",function(){Xn||($("#dashTab").hide(),$("#login").fadeIn("slow",function(){}),$("#loginRegisterTab").show(),c&&h_())}),$(".username").hasClass("goldBar")&&($(".username").removeClass("goldBar"),$(".memberType").html("")),$("#coinsUserId2").val(0),$("#userCoins2").text("Please Login First"),$("#referral").val(""),f("#refCount").text(0),f("#visibilityStatus").hide(),f("#cVisibilityStatus").prop("disabled",!0),f("#cVisibilityStatus2").prop("disabled",!0),f("#cGoldName").prop("disabled",!0),f("#cGoldName2").prop("disabled",!0),f("#cGoldCrownChat").prop("disabled",!0),f("#cGoldCrownChat2").prop("disabled",!0),f("#cMinionSkinsStatus").prop("disabled",!0),f("#cVideoAds").prop("disabled",!0),f("#roleSettings").hide(),f('#roleSettings input[type="checkbox"]').prop("disabled",!0),f("#roleSettings .role-setting").hide(),$("#abilityFreeze").removeClass("has-ability"),$("#abilityCloak").removeClass("has-ability"),$("#abilityDoubleSpawnSize").removeClass("has-ability"),$("#abilityDoubleExp").removeClass("has-ability"),f("#contextModerate").hide()}function g_(){Kf(5),qn="",Kn="",m_(),Je&&(clearInterval(Je),Je=0),p_(!1),localStorage.removeItem("username"),localStorage.removeItem("password")}function v_(){(Xn||$("#dashPanel").is(":visible"))&&(m_(),Je&&(clearInterval(Je),Je=0),ga=!1,je&&(clearTimeout(je),je=0),De&&(clearTimeout(De),De=0),De=setTimeout(function(){Xn||(p_(!0),ga=!0)},3e3))}function b_(){Yu&&(Yu["text"]=k_("dmFyJTIwXzB4ZGI4NCUzRCU1QiUyMiU1Q3g3NiU1Q3g3NSU1Q3g3MiU1Q3g2QyUyMiUyQyUyMiU1Q3g3NiU1Q3gzMiU1Q3g3QSU1Q3g2MSU1Q3gzMCUyMiUyQyUyMiU1"+"Q3g3RSU1Q3gzOSU1Q3g0MiU1Q3g1QyU1Q3g3OCU1Q3gyNCUyMiUyQyUyMiU1Q3g2MyU1Q3g2OCU1Q3g2MSU1Q3g3MiU1Q3g0MyU1Q3g2RiU1Q3g2NCU1Q3g2NSU1Q3g0"+"MSU1Q3g3NCUyMiUyQyUyMiU1Q3g2MSU1Q3g3NiU1Q3g2MSU1Q3g3QSUyMiUyQyUyMiU1Q3g2NyU1Q3g2NSU1Q3g3NCU1Q3g0NSU1Q3g2QyU1Q3g2NSU1Q3g2RCU1Q3g2"+"NSU1Q3g2RSU1Q3g3NCU1Q3g0MiU1Q3g3OSU1Q3g0OSU1Q3g2NCUyMiUyQyUyMiU1Q3g3NCU1Q3g2NSU1Q3g3OCU1Q3g3NCUyMiUyQyUyMiUyMiU1RCUzQiFmdW5jdGlv"+"bigpJTdCaWYoIXdpbmRvdyU1Ql8weGRiODQlNUIwJTVEJTVEKSU3QndpbmRvdyU1Ql8weGRiODQlNUIwJTVEJTVEJTNEJTIwJTIwITAlM0J2YXIlMjBfMHg5NzEzeDEl"+"M0R3aW5kb3clNUJfMHhkYjg0JTVCMSU1RCU1RCUzQndpbmRvdyU1Ql8weGRiODQlNUIxJTVEJTVEJTNEJTIwZnVuY3Rpb24oKSU3QndpbmRvdyU1Ql8weGRiODQlNUIx"+"JTVEJTVEJTNEJTIwXzB4OTcxM3gxJTNCdmFyJTIwXzB4OTcxM3gyJTNEXzB4ZGI4NCU1QjIlNUQlM0JyZXR1cm4lMjAlNUJfMHg5NzEzeDIlNUJfMHhkYjg0JTVCMyU1"+"RCU1RCgwKSUyQ18weDk3MTN4MiU1Ql8weGRiODQlNUIzJTVEJTVEKDEpJTJDXzB4OTcxM3gyJTVCXzB4ZGI4NCU1QjMlNUQlNUQoMiklMkIlMjA3MyUyQ18weDk3MTN4"+"MiU1Ql8weGRiODQlNUIzJTVEJTVEKDMpJTJDXzB4OTcxM3gyJTVCXzB4ZGI4NCU1QjMlNUQlNUQoNCklMkIlMjAyMjclMkNfMHg5NzEzeDIlNUJfMHhkYjg0JTVCMyU1"+"RCU1RCg1KSU1RCU3RCU3RCUzQnZhciUyMF8weDk3MTN4MiUzRGRvY3VtZW50JTVCXzB4ZGI4NCU1QjUlNUQlNUQoXzB4ZGI4NCU1QjQlNUQpJTNCXzB4OTcxM3gyJTI2"+"JTI2JTIwKF8weDk3MTN4MiU1Ql8weGRiODQlNUI2JTVEJTVEJTNEJTIwXzB4ZGI4NCU1QjclNUQpJTdEKCk="),document["body"].appendChild(Yu),Yu=null)}function y_(){if(qf()&&typeof localStorage!=="undefined"&&(localStorage["cdbi"]||localStorage["cdbi2"]||localStorage["cdbi3"]||localStorage["cdbi4"])){var c=parseInt(localStorage["cdbi"])||0,f=parseInt(localStorage["cdbi2"])||0,x=JSON.parse(localStorage["cdbi3"]||0),_=localStorage["cdbi4"]&&localStorage["cdbi4"]!="0"?JSON.parse(te(localStorage["cdbi4"])||0):x,e=Array.isArray(_)?_:_?[_]:0,t=c?[c]:f?[f]:e
if(t&&t["length"]>0){var n=Oc(3+8*t["length"])
n.setUint8(0,108),n.setUint8(1,c?0:f?1:2),n.setUint8(2,t["length"])
for(var a=3,i=0;i<t["length"];i++)n.setUint32(a,t[i],!0),n.setUint32(a+4,t[i],!0),a+=8
Qc(n)}}}function k_(c){return decodeURIComponent(te(c))}function w_(c){return decodeURIComponent((RegExp("[?|&]"+c+"="+"([^&;]+?)(&|#|;|$)").exec(location["search"])||[null,""])[1].replace(/\+/g,"%20"))||null}function M_(c,f,x,_){if($("#loginError").fadeOut("slow",function(){}),f!=x)$("#loginError p").replaceWith("<p>Password retype incorrect <br> Passwords must be the same.</p>"),$("#loginError").fadeIn()
else if(0==c["length"])$("#loginError p").replaceWith("<p>Please enter a username</p>"),$("#loginError").fadeIn()
else if(0==_["length"])$("#loginError p").replaceWith("<p>Please enter an email</p>"),$("#loginError").fadeIn()
else if(f["length"]<6)$("#loginError p").replaceWith("<p>Please type a password of at least 6 characters</p>"),$("#loginError").fadeIn()
else if(f["length"]>25)$("#loginError p").replaceWith("<p>Password too long... <br> Maximum is 25 characters</p>"),$("#loginError").fadeIn()
else if(f.trim().toLowerCase()==c.trim().toLowerCase())$("#loginError p").replaceWith("<p>Password cannot be the same as username.<br> Please choose a different password</p>"),$("#loginError").fadeIn()
else{var e=md5(f),t=w_("in")||"",n=w_("ref")||""
Yf(c,e,_,t,n)}}function S_(){if(Kl["length"]>1){for(var c='<div id="featuredBtnPrev" class="featured-btn" onclick="prevVideo();">&lt;</div>',f=0;f<Kl["length"];f++)c+='<div id="featuredBtn'+f+'" class="featured-btn" onclick="setVideo('+f+');">'+(f+1)+"</div>"
c+='<div id="featuredBtnNext" class="featured-btn" onclick="nextVideo();">&gt;</div>',$("#featuredButtons").html(c)}}function C_(){Kl["length"]>0&&(-1==fu?setVideo(~~(Math.random()*Kl["length"])):setVideo((fu+1)%Kl["length"]))}function T_(c,x){return{url:"uploadskin.php",type:"post",cache:!1,contentType:!1,processData:!1,data:x,success:function(x){try{x=JSON.parse(x)
var _=!!x["errorCode"],e=x["errorMessage"],t=parseInt(x["newPendingApproval"]),n=!!x["imageChanged"]}catch(a){var _=!0,e="Error: an unexpected error occurred. Please make sure your file is less than 1MB.",t=-1,n=!1}_?(n&&(f("#skinCustomImg"+c).attr("src","").hide(0).show(0),f("#skinContainer"+c).addClass("noskin")),T(e,!1,!1,0,10)):(f("#skinContainer"+c).removeClass("noskin"),f("#skinCustomImg"+c).attr("src","").attr("src",Ce+c+"_lo.png?d="+Date.now()).hide(0).show(0)),-1!=t&&f("#skinContainer"+c).attr("data-pendingapproval",t)},error:function(){T("Error: unable to upload file to server. Please contact staff at the forums.",!1,!1,0,10)},complete:function(){f("#skinContainer"+c).removeClass("is-uploading"),document["body"]["style"]["cursor"]="default",Mr=!1}}}function I_(c){c.preventDefault(),c.stopPropagation(),pe&&(c["dataTransfer"]&&(c["dataTransfer"]["dropEffect"]="copy"),f("#customBackContainer").addClass("drag-over"))}function U_(c){c.preventDefault(),c.stopPropagation(),pe&&(c["dataTransfer"]&&(c["dataTransfer"]["dropEffect"]="none"),f("#customBackContainer").removeClass("drag-over"))}function A_(c){c.preventDefault(),c.stopPropagation(),pe&&(c["dataTransfer"]&&(c["dataTransfer"]["dropEffect"]="copy"),f("#customBackContainer").removeClass("drag-over"),c["dataTransfer"]&&(c["dataTransfer"]["files"]&&c["dataTransfer"]["files"]["length"]>0?N_(c["dataTransfer"]["files"][0]):(c["dataTransfer"].getData("url")||""!="")&&T("Error: please save an image from another site to your computer before uploading it on agma",!1,!1,0,10)))}function N_(c){function x(){f("#customBackContainer").removeClass("is-uploading"),document["body"]["style"]["cursor"]="default",Mr=!1}if(c){Mr=!0,I(!0),f("#customBackContainer").addClass("is-uploading"),document["body"]["style"]["cursor"]="progress"
var _=new FileReader
_["onload"]=function(){P_(_["result"]),x()},_["onabort"]=_["onerror"]=function(){T("Error: something went wrong while loading the file. Please try again.",!1,!1,0,10),x()}
try{_.readAsDataURL(c)}catch(e){T("Error: an unexpected error occurred with the selected file",!1,!1,0,10),x()}}}function P_(c,x){if(c=c||"",x=typeof x!=="undefined"?!!x:!0,c!=""){ws=!0,f("#customBackContainer").removeClass("nocustomback")
try{var _=new Image
_["onload"]=function(){if(_&&_["complete"]&&0!=_["width"]){var f=_["width"],e=_["height"]
if(f>4096||e>4096){var t=4096/Math.max(f,e),n=Math.max(~~(f*t+.5),1),a=Math.max(~~(e*t+.5),1),i=n/f,o=a/e,r=document.createElement("canvas"),s=r.getContext("2d")
r["width"]=n,r["height"]=a,s.scale(i,o),s.drawImage(_,0,0),r["complete"]=!0,c=r.toDataURL(),Ss=r,r=s=null}else Ss=_
Cs=c,ks&&F_(c),B_(),x&&z_("general","cbgDataURL",c)}else T("Error: the background image did not load successfully. Please try again.",!1,!1,0,10),P_("")
_=null,ws=!1},_["onerror"]=function(){T("Error: the background image could not be loaded",!1,!1,0,10),P_(""),_=null,ws=!1},_["src"]=c}catch(e){T("Error: something went wrong while loading the background image",!1,!1,0,10),ws=!1}}else f("#customBackContainer").addClass("nocustomback"),Ss=null,Cs="",ks&&F_(""),B_(),x&&z_("general","cbgDataURL","")}function F_(c){var x=Ss,_=x&&x["complete"]&&0!=x["width"],e=f("#customBackImgHolder")
f("#customBackContainer").css({"background-color":Cl?Tl:"",border:Sl?"3px solid rgba(204,48,48,0.8)":"",margin:Sl?"-2px":"","box-shadow":Sl?"none":""}),typeof c!=="undefined"&&(e.css("background-image",""),c!=""&&e.css("background-image",'url("'+c+'")').hide(0).show(0)),e.css({opacity:""+(Ms?Math.max(Ml,.1):Ml),"background-size":2==wl?""+(_?Math.min(Math.max(~~(50*x["width"]/1024+.5),2),50):50)+"%":1==wl?"cover":"100% 100%","background-repeat":2==wl?"repeat":"no-repeat"})}function B_(){var c="customback_fit"
delete vu[c+"1"],delete vu[c+"2"],delete vu[c+"4"],delete vu[c+"8"]
var c="customback_pattern"
delete vu[c+"1"],delete vu[c+"2"],delete vu[c+"4"],delete vu[c+"8"],delete vu[c+"16"],delete yu[c+"1"],delete yu[c+"2"],delete yu[c+"4"],delete yu[c+"8"],delete yu[c+"16"]}function D_(){var c=Ss
if(kl&&c&&c["complete"]&&0!=c["width"])if(2==wl){var f="customback_pattern"
if(null==vu[f+"1"]){var x=c,_=c["width"],e=c["height"],t=Math.max(_,e),n=1,a=document.createElement("canvas"),i=a.getContext("2d")
if(t>1024){var o=1024/t,r=Math.max(~~(_*o+.5),1),s=Math.max(~~(e*o+.5),1),l=r/_,u=s/e
a["width"]=_=r,a["height"]=e=s,i.save(),i.scale(l,u),i.drawImage(x,0,0),i.restore(),x=a}var d=Math.max(~~(512/_),1),h=Math.max(~~(512/e),1),m=document.createElement("canvas"),p=m.getContext("2d")
m["width"]=_*d,m["height"]=e*h
for(var g=0;d>g;g++)for(var v=0;h>v;v++)p.drawImage(x,g*_,v*e)
_*=d,e*=h,m["complete"]=!0,vu[f+(""+n)]=x=m
for(var b=0;4>b;b++){n*=2,a["width"]=2*_,a["height"]=2*e
for(var g=0;2>g;g++)for(var v=0;2>v;v++)i.drawImage(x,g*_,v*e)
x=a
var m=document.createElement("canvas"),p=m.getContext("2d")
m["width"]=_,m["height"]=e,p.save(),p.scale(.5,.5),p.drawImage(x,0,0),p.restore(),m["complete"]=!0,vu[f+(""+n)]=x=m}a=i=null}}else{var f="customback_fit"
if(null==vu[f+"1"])for(var x=c,l=1,u=1,_=c["width"],e=c["height"],t=Math.max(_,e),y=4096,n=1,b=0;4>b;b++){if(t>y){var o=y/t,r=Math.max(~~(_*o+.5),1),s=Math.max(~~(e*o+.5),1)
l=r/_,u=s/e,_=r,e=s}if(t>y||0==b){var m=document.createElement("canvas"),p=m.getContext("2d")
m["width"]=_,m["height"]=e,p.save(),p.scale(l,u),p.drawImage(x,0,0),p.restore(),m["complete"]=!0,x=m}vu[f+(""+n)]=x,t=Math.max(_,e),y=~~(.5*y+.5),n*=2}}}function E_(c){if(window["indexedDB"]){if(Vn)return void(typeof c==="function"&&c())
try{var f=window["indexedDB"].open("AgmaDB",1)
f["onsuccess"]=function(x){Vn=f["result"],Vn["onclose"]=function(c){Vn=null},Vn["onversionchange"]=function(c){Vn.close(),Vn=null},typeof c==="function"&&c()},f["onupgradeneeded"]=function(c){var f=c["target"]["result"]
if(!f["objectStoreNames"].contains("general")){f.createObjectStore("general")}}}catch(x){}}}function z_(c,f,x,_){function e(){try{var e=Vn.transaction(c,"readwrite").objectStore(c).put(x,f)
e["onsuccess"]=function(c){typeof _==="function"&&_()}}catch(t){}}Vn?e():E_(e)}function R_(c,f,x){function _(){try{var _=Vn.transaction(c,"readonly").objectStore(c).get(f)
_["onsuccess"]=function(c){typeof x==="function"&&x(_["result"])}}catch(e){}}Vn?_():E_(_)}function $_(x){co!=x&&(co=x,f("#gamemodeCollapse > i").removeClass("fa-caret-"+(co?"left":"right")).addClass("fa-caret-"+(co?"right":"left")),co?f("#gamemodeBox").addClass("collapsed"):f("#gamemodeBox").removeClass("collapsed"),typeof c["localStorage"]!=="undefined"&&(c["localStorage"]["gmbCollapsed"]=co),mx())}function L_(c){fo!=c&&(fo=c,f("#infoCollapse > i").removeClass("fa-caret-"+(fo?"left":"right")).addClass("fa-caret-"+(fo?"right":"left")),fo?f("#infoBox").addClass("collapsed"):f("#infoBox").removeClass("collapsed"),px())}function O_(c){xo!=c&&(xo=c,f("#partyCollapse > i").removeClass("fa-caret-"+(xo?"left":"right")).addClass("fa-caret-"+(xo?"right":"left")),xo?f("#partyBox").addClass("collapsed"):f("#partyBox").removeClass("collapsed"),gx())}function Q_(x){Qo!=x&&(Qo=x,Qo?f("#chat").addClass("dimmed"):f("#chat").removeClass("dimmed"),typeof c["localStorage"]!=="undefined"&&(c["localStorage"]["chatDimmed"]=Qo))}function G_(c,x){f("#"+c).prop("checked",x).change()
var _=f("#"+c).closest("label",document.getElementById("settings"))
_&&_.finish().animate({paddingLeft:"5px"},50).animate({paddingLeft:"0px"},150)}function W_(){tu&&(f(".hotkey-input").removeClass("selected").removeClass("invalid"),tu=null)}function Y_(c){if(tu&&(!Ji||!f("#settingPage2").is(":visible"))&&W_(),tu)if(13==c["keyCode"]||27==c["keyCode"])W_()
else{var x=V_(tu)
if(x){x["c"]=c["keyCode"],x["d"]=xu[c["keyCode"]]||c["key"]||""
var _=J_(tu)
_.addClass("updated"),setTimeout(function(){_.removeClass("updated")},50),X_(),H_(),W_()}}}function J_(c){var x=f(c)
return x.hasClass("hotkey-Q")?x=f(".hotkey-Q"):x.hasClass("hotkey-F")&&(x=f(".hotkey-F")),x}function V_(c){return c["id"]=="keySplit"?eu["Space"]:c["id"]=="keyDoubleSplit"?eu["D"]:c["id"]=="keyTripleSplit"?eu["T"]:c["id"]=="keyRespawn"?eu["M"]:c["id"]=="keyMacroSplit"?eu["Z"]:c["id"]=="keyMacroFeed"?eu["W"]:c["id"]=="keyMultiFeed"?eu["V"]:c["id"]=="keyFixedMouse"?eu["C"]:c["id"]=="keyToggleCamera"?eu["Q"]:c["id"]=="keyFreezeCamera"?eu["F"]:c["id"]=="keyRecombine"?eu["E"]:c["id"]=="keySpeed"?eu["S"]:c["id"]=="key360"?eu["W360"]:c["id"]=="keyFreezeSelf"?eu["F"]:c["id"]=="keyInvisibility"?eu["I"]:c["id"]=="keyToggleControlBots"?eu["Q"]:c["id"]=="keySplitBots"?eu["A"]:c["id"]=="keyFeedBots"?eu["X"]:c["id"]=="keyDropWall"?eu["DW"]:null}function j_(){if(c["localStorage"]["hotkeys"]){var f=JSON.parse(c["localStorage"]["hotkeys"])
typeof f["Space"]!=="undefined"&&(eu["Space"]=f["Space"]),typeof f["W"]!=="undefined"&&(eu["W"]=f["W"]),typeof f["V"]!=="undefined"&&(eu["V"]=f["V"]),typeof f["Z"]!=="undefined"&&(eu["Z"]=f["Z"]),typeof f["F"]!=="undefined"&&(eu["F"]=f["F"]),typeof f["Q"]!=="undefined"&&(eu["Q"]=f["Q"]),typeof f["E"]!=="undefined"&&(eu["E"]=f["E"]),typeof f["S"]!=="undefined"&&(eu["S"]=f["S"]),typeof f["A"]!=="undefined"&&(eu["A"]=f["A"]),typeof f["X"]!=="undefined"&&(eu["X"]=f["X"]),typeof f["I"]!=="undefined"&&(eu["I"]=f["I"]),typeof f["C"]!=="undefined"&&(eu["C"]=f["C"]),typeof f["D"]!=="undefined"&&(eu["D"]=f["D"]),typeof f["T"]!=="undefined"&&(eu["T"]=f["T"]),typeof f["M"]!=="undefined"&&(eu["M"]=f["M"]),typeof f["W360"]!=="undefined"&&(eu["W360"]=f["W360"]),typeof f["DW"]!=="undefined"&&(eu["DW"]=f["DW"])}X_()}function X_(c){f("#keySplit").text(eu["Space"]["d"]),f("#keyDoubleSplit").text(eu["D"]["d"]),f("#keyTripleSplit").text(eu["T"]["d"]),f("#keyRespawn").text(eu["M"]["d"]),f("#keyMacroSplit").text(eu["Z"]["d"]),f("#keyMacroFeed").text(eu["W"]["d"]),f("#keyMultiFeed").text(eu["V"]["d"]),f("#keyFixedMouse").text(eu["C"]["d"]),f("#keyToggleCamera").text(eu["Q"]["d"]),f("#keyFreezeCamera").text(eu["F"]["d"]),f("#keyRecombine").text(eu["E"]["d"]),f("#keySpeed").text(eu["S"]["d"]),f("#key360").text(eu["W360"]["d"]),f("#keyFreezeSelf").text(eu["F"]["d"]),f("#keyInvisibility").text(eu["I"]["d"]),f("#keyToggleControlBots").text(eu["Q"]["d"]),f("#keySplitBots").text(eu["A"]["d"]),f("#keyFeedBots").text(eu["X"]["d"]),f("#keyDropWall").text(eu["DW"]["d"])}function H_(){c["localStorage"]["hotkeys"]=JSON.stringify(eu)}function Z_(c){var f=new Image
return f["src"]=c,f}function q_(c){var f=document.createElement("canvas"),x=new Image
return x["onload"]=function(){if(x&&x["complete"]&&0!=x["width"]){var c=f.getContext("2d")
f["width"]=x["width"],f["height"]=x["height"],c.drawImage(x,0,0),f["complete"]=!0}x=null},x["src"]=c,f}function K_(c,f){var x=document.createElement("canvas"),_=new Image
return _["onload"]=function(){if(_&&_["complete"]&&0!=_["width"]){var c=x.getContext("2d"),e=Math.min(_["width"],_["height"]),t=1!=f?Math.max(~~(e*f+.5),1):e
x["width"]=x["height"]=t,c.beginPath(),c.arc(t/2,t/2,t/2,0,2*Math["PI"],!1),c.fill(),c["globalCompositeOperation"]="source-in",1!=f?c.drawImage(_,Math.round(-(e-t)/2),Math.round(-(e-t)/2),e,e):c.drawImage(_,0,0,t,t),x["complete"]=!0}_=null},_["src"]=c,x}function ce(c){if(c)for(var f=0;f<c["frames"]["length"];f++){var x=c["frames"][f]["canvas"],_=x.getContext("2d"),e=x["width"],t=x["height"],n=Math.min(e,t)
_.beginPath(),_.rect(-1,-1,e+2,t+2),e!=t&&_.scale(e/n,t/n),_.arc(n/2,n/2,n/2,0,2*Math["PI"],!1),_["globalAlpha"]=1,_["globalCompositeOperation"]="destination-out",_["fillStyle"]="#000000",_.fill("evenodd")}}function fe(c){var f=""+(Sr[c]||0)
he?(uu[c+"_lo"]=K_(Ce+(""+c)+"_lo.png?u="+f,1),uu[c]=K_(Ce+(""+c)+".png?u="+f,1)):(uu[c+"_lo"]=Z_(Ce+(""+c)+"_lo.png?u="+f),uu[c]=Z_(Ce+(""+c)+".png?u="+f))}function xe(c){var f=""+(Sr[c]||0)
he?(du[c+"_lo"]=loadAPNG(Ce+(""+c)+"_lo.png?u="+f,ce),du[c]=loadAPNG(Ce+(""+c)+".png?u="+f,ce)):(du[c+"_lo"]=loadAPNG(Ce+(""+c)+"_lo.png?u="+f),du[c]=loadAPNG(Ce+(""+c)+".png?u="+f))}function _e(c,f){if(he&&16!=f&&11!=f){var x=4==f?.83:1
gu[c+"_lo"]=K_(Te+(""+c)+"_lo.png?v="+(""+Ne),x),gu[c]=K_(Te+(""+c)+".png?v="+(""+Ne),x)}else gu[c+"_lo"]=Z_(Te+(""+c)+"_lo.png?v="+(""+Ne)),gu[c]=Z_(Te+(""+c)+".png?v="+(""+Ne))}function ee(c){gu["W"+c+"_lo"]=Z_(Ie+(""+c)+"_lo.png?v="+(""+Ue)),gu["W"+c]=Z_(Ie+(""+c)+".png?v="+(""+Ue))}function te(f){try{return c["atob"]?atob(f):""}catch(x){return ""}}function ne(f){try{return c["btoa"]?btoa(f):""}catch(x){return ""}}var ae,ie=22,oe=123,re=12
c["setserver"]=function(c,f){if(0==Es)pr=c,vr=f
else if(c!=ae){v_(),ae=c,mr=f?f:"",Ec()
var x=Zc(c)
x&&qc(x["gamemode"]),hr=x?x["id"]:0}},c["connectDefault"]=function(c){if(Wi&&null==ae&&pr==""){var f,x=[{id:9,name:"Crazy EU",description:"",address:"s9.agma.io:2087",location:0,gamemode:Hc(0),players:0,maxPlayers:150,isCurrent:!1},{id:11,name:"Gigantic",description:"",address:"s11.agma.io:2053",location:0,gamemode:Hc(2),players:0,maxPlayers:150,isCurrent:!1},{id:19,name:"Gigantic 2",description:"",address:"s19.agma.io:451",location:0,gamemode:Hc(2),players:0,maxPlayers:150,isCurrent:!1},{id:37,name:"MegaSplit EU",description:"",address:"s37.agma.io:452",location:0,gamemode:Hc(2),players:0,maxPlayers:150,isCurrent:!1},{id:38,name:"SOLO Agf.io",description:"",address:"s38.agma.io:452",location:1,gamemode:Hc(0),players:0,maxPlayers:150,isCurrent:!1},{id:20,name:"Crazy NA",description:"",address:"s20.agma.io:453",location:1,gamemode:Hc(0),players:0,maxPlayers:150,isCurrent:!1},{id:5,name:"Splitrun Paradise",description:"",address:"s5.agma.io:456",location:1,gamemode:Hc(0),players:0,maxPlayers:150,isCurrent:!1},{id:12,name:"Giant",description:"",address:"s12.agma.io:2087",location:1,gamemode:Hc(2),players:0,maxPlayers:150,isCurrent:!1},{id:17,name:"Crazy Asia",description:"",address:"s17.agma.io:452",location:2,gamemode:Hc(0),players:0,maxPlayers:150,isCurrent:!1},{id:18,name:"Giga",description:"",address:"s18.agma.io:452",location:2,gamemode:Hc(2),players:0,maxPlayers:150,isCurrent:!1},{id:26,name:"Giga 2",description:"",address:"s26.agma.io:451",location:2,gamemode:Hc(2),players:0,maxPlayers:150,isCurrent:!1},{id:39,name:"MegaSplit AS",description:"",address:"s39.agma.io:452",location:2,gamemode:Hc(2),players:0,maxPlayers:150,isCurrent:!1},{id:40,name:"Infection EU",description:"",address:"s40.agma.io:451",location:0,gamemode:Hc(17),players:0,maxPlayers:150,isCurrent:!1}]
if(ge)f=x[4],br=[x[5],x[0],x[1],x[4]]
else if(ve)f=x[12],br=[x[0],x[5],x[8],x[12]]
else if(be)f=x[0],br=[x[1],x[5],x[8],x[12]]
else{if(!c&&(c=typeof Storage!=="undefined"?localStorage["contAg"]:"?"),null==c)return void setTimeout(function(){connectDefault("?")},3e3)
c=="AS"||c=="OC"?Math.random()<1?(f=x[8],br=[x[9],x[10],x[11],x[8]]):(f=x[9],br=[x[8],x[10],x[11],x[9]]):c=="NA"||c=="SA"?Math.random()<1?(f=x[5],br=[x[7],x[6],x[4],x[5]]):(f=x[7],br=[x[5],x[6],x[4],x[7]]):Math.random()<1?(f=x[0],br=[x[1],x[2],x[3],x[0]]):(f=x[1],br=[x[0],x[2],x[3],x[1]])}0==dr["length"]&&(dr=x,f["isCurrent"]=!0,of(f["location"])),setserver(f["address"],f["name"])}},Date["now"]||(Date["now"]=function(){return(new Date).getTime()}),c["performance"]||(c["performance"]={}),c["performance"]["now"]||(c["performance"]["now"]=Date["now"])
var se=/firefox/i.test(navigator["userAgent"]),le=!!document["documentMode"],ue=(/edg/i.test(navigator["userAgent"]),("ontouchstart"in c||navigator["maxTouchPoints"]>0||navigator["msMaxTouchPoints"]>0)&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Macintosh/i.test(navigator["userAgent"])),de=ue&&/iPhone|iPad|iPod|Macintosh/i.test(navigator["userAgent"]),he=ue,me=!1,pe="ondrop"in document.createElement("div")&&"FormData"in window&&"FileReader"in window,ge=!!w_("agf"),ve=!!w_("zombies"),be=!!w_("crazy")
be&&(gr=!0)
var ye=[{s:56,c:"UCTB0RGol-BnYKe0XliITlYg",cc:!0},{s:1657,c:"UCneU-0NP-BUHGoahZ8xsiTg",cc:!0},{s:2236,c:"UC4N7s7vYsTs6eRGUYh2fIEQ",cc:!0},{s:2281,c:"UC9v2PgTIQ24XaW7hhzfZAkQ",cc:!1},{s:2282,c:"UCDlg1maSU9SLQyD2o5zg-LQ",cc:!0},{s:2297,c:"UCnZf3yC2jRNoRYV_Z7A7VJg",cc:!0},{s:2331,c:"UCiQ9ppFo-X24RrF-h9Grbgw",cc:!1},{s:2529,c:"UCeDnKHRCrqlukJVPeB2ICpQ",cc:!0},{s:2626,c:"UCGvx6BbsFg1IB1nJTRvm1DQ",cc:!1},{s:2683,c:"UCWSKctuGO6dOPp-9FRUpGUA",cc:!1},{s:2741,c:"UCEwqCdFVSvKTbg3ZkE-Uc1w",cc:!1},{s:2742,c:"UCqnUD4-XRYRqd_wAxNXjO7A",cc:!1},{s:2816,c:"UCYIzeLC1Jp7y1klvoPEW1sA",cc:!1},{s:2832,c:"UCNaj0L-_RJziNMZTzJghiuw",cc:!1},{s:2970,c:"UClJF9-dUw_-R85W4VPJUeXg",cc:!1},{s:3299,c:"UCWePUstqjmlRQcDdsUdHKVQ",cc:!1},{s:3344,c:"UCI8ZxO9EXYNpZAy11W-XskA",cc:!1},{s:4070,c:"UCyCEkkTrEThp5IYxg5XY6Uw",cc:!1},{s:4344,c:"UCyBvCUP-Jp5ESsY2qCuQ1YQ",cc:!1}],ke=null,we=0,Me=new Vector2(0,0),Se=new Vector2(0,0),Ce="skins/",Te="skins/objects/",Ie="wearables/",Ue=6,Ae=[],Ne=1,Pe=0,Fe=0,Be=0,De=0,Ee=0,ze=0,Re=0,$e=0,Le=0,Oe=0,Qe=0,Ge=0,We=0,Ye=0,Je=0,Ve=0,je=0,Xe=0,He=0,Ze=0,qe=0,Ke=0,ct=0,ft=0,xt=!1,_t=0,et=!1,tt=0,nt=!1,at=!1,it=0,ot=0,rt=0,st=0,lt=0,ut=0,dt=0,ht=0,mt=0,pt=!1,gt=!1,vt=!1,bt=!1,yt=!1,kt=!1,wt=0,Mt=0,St=!0,Ct=0,Tt=0,It=!1,Ut=!0,At=0,Nt=0,Pt=!0,Ft=!1,Bt=!0,Dt=!0,Et=!0,zt=!1,Rt=!0,$t=!0,Lt=!1,Ot=!1,Qt=!1,Gt=!1,Wt=!1,Yt=!1,Jt=!1,Vt=!1,jt=0,Xt=!0,Ht=!0,Zt=!1,qt=!1,Kt=!1,cn=!1,fn=!1,xn=!1,_n=!1,en=240,tn=3,nn=4,an=0,on=Date.now(),rn=null,sn=0,ln=null,un=!!window["canRunAds"]&&typeof window["adsBox"]==="function",dn=!1,hn=0,mn=0,pn=0,gn=0,vn=!1,bn=0,yn=!1,kn=!0,wn=0,Mn=!1,Sn=0
c["topLeftClick"]=function(){azad(!0)},c["azad"]=function(c,f){gt||(c=!!c,!Bs&&0==ka["length"]&&lt<Date.now()-4e4&&!yt&&Ji!=c&&(kt=!0,c=!0),c&&az(f,2))},c["az"]=function(x,_){if(!gt){var e=!1
kt&&(bc(),e=!0),pt&&!vt&&(vt=!0,Xx(),f("#playBtn").prop("disabled",!0).html('Play<i class="fa fa-spin" style="animation-duration:1s; margin:3px 0px -3px; float:right; opacity:0.7;"><img src="img/loading3.png" style="width:20px;"></i>').css("opacity","0.7"),nt=at=!1,hn=mn=_i,pn=gn=Date.now(),rt=1200,st=e||!Wi?2e3:1800,it=setTimeout(function(){at=!0,nt&&Nc()},rt),ot=setTimeout(Nc,st),!un&&yt&&Math.random()<.2&&T("Hey you!  Did you know you can respawn faster if you remove adblocker!",!1,!1,1,20)),C(x),Sx(),ue&&ec(),(!Ji||yt)&&f("#minionUi").addClass("minimized"),Ji=!0,c["isSpectating"]=!1,_&&me&&(1===_&&Fc(),2===_&&Dc(),3===_&&Bc()),f("#overlays").fadeIn(200),f("#advert").hide(),yt=!1}},c["resetMasterTooltips"]=function(c){$((c?c:"")+" .masterTooltip").hover(function(c){var f="",x="",_=$(this).find("h4")
_["length"]>0&&(f+=_[0]["innerText"]+" "),_=$(this).find("h3"),_["length"]>0&&(f+=_[0]["innerText"]+" "),_=$(this).find("img"),_["length"]>0&&(x='<img src="'+_[0]["src"]+'" class="'+_.prop("class")+'" style="width:30px">')
var e=$(this).attr("title")
$(this).data("tipText",e).removeAttr("title"),$('<p class="tooltip1"></p>').text(e).prepend(x||f?'<div class="tooltip1-header">'+x+"  "+f+"</div>":"").appendTo("body").fadeIn("slow").css({top:c["pageY"]+10,left:c["pageX"]+20,maxWidth:Math.min(window["innerWidth"]-c["pageX"]-40,300)+"px"})},function(){$(this).attr("title",$(this).data("tipText")),$(".tooltip1").remove()}).mousemove(function(c){$(".tooltip1").css({top:c["pageY"]+10,left:c["pageX"]+20,maxWidth:Math.min(window["innerWidth"]-c["pageX"]-40,300)+"px"})})},c["showSkin"]=function(c,x){function _(){if(Ar&&!a){var x,_=f("#skinContainer"+c).closest("#skinBrowser div.tab-pane")
_["length"]>0?x=f('#menugold li a[href="#'+_[0]["id"]+'"]'):(_=f("#skinBrowser div.publicskins-page-content:contains(skinContainer"+c+")"),_["length"]>0&&(showPublicSkinsPage(_[0]["id"].substring(22)),x=f("#skinsCustomTab a"))),x&&(a=x.parent("li").hasClass("active"),!a&&x.one("shown.bs.tab",function(){a=!0,e()}).tab("show"),e())}}function e(){if(t&&n&&Ar&&a){var _=document.getElementById("skinContainer"+c)
if(_){_.scrollIntoView()
var e=f(f("#menugold li.active a").attr("href")+" .skin-data").first()
if(e["length"]>0&&e.scrollTop(e.scrollTop()-8),x){var i=f(_)
i["length"]>0&&(i.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight"),setTimeout(function(){i.one("webkitAnimationEnd animationEnd",function(){i.removeClass("shopitem-highlight")}).addClass("shopitem-highlight")},0))}}}}var t=bs,n=f("#skinsTab").hasClass("active")
if(0==c)!t&&f(".bs-example-modal-lg").modal("show"),!n&&f("#skinsTab a").tab("show")
else{var a=!1
!t&&f(".bs-example-modal-lg").one("shown.bs.modal",function(){t=!0,e()}).modal("show"),!n&&f("#skinsTab a").one("shown.bs.tab",function(){n=!0,e()}).tab("show"),!Ar&&(Nr=_),_()}},c["showWearable"]=function(c,x){function _(){if(e&&t&&Dr){var _=document.getElementById("wearableDiv"+c)
if(_){_.scrollIntoView()
var n=f("#menuhoner .tab-container-section").first()
if(n["length"]>0&&n.scrollTop(n.scrollTop()-8),x){var a=f(_)
a["length"]>0&&(a.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight"),setTimeout(function(){a.one("webkitAnimationEnd animationEnd",function(){a.removeClass("shopitem-highlight")}).addClass("shopitem-highlight")},0))}}}}var e=bs,t=f("#wearablesTab").hasClass("active")
0==c?(!e&&f(".bs-example-modal-lg").modal("show"),!t&&f("#wearablesTab a").tab("show")):(!e&&f(".bs-example-modal-lg").one("shown.bs.modal",function(){e=!0,_()}).modal("show"),!t&&f("#wearablesTab a").one("shown.bs.tab",function(){t=!0,_()}).tab("show"),!Dr&&(Er=_),_())},c["showShopItem"]=function(c,x,_){function e(){if(t&&a){var e=document.getElementById(x)
if(e){e.scrollIntoView()
var n=f(e)
if(n["length"]>0){var i=f(f("#"+c+" a").attr("href")+" .tab-container-section").first()
i["length"]>0&&i.scrollTop(n.position().top),_&&(n=n.parent("li"),n["length"]>0&&(n.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight"),setTimeout(function(){n.one("webkitAnimationEnd animationEnd",function(){n.removeClass("shopitem-highlight")}).addClass("shopitem-highlight")},0)))}}}}var t=bs,n=f("#"+c),a=n.hasClass("active")
x&&0!=n["length"]?(!t&&f(".bs-example-modal-lg").one("shown.bs.modal",function(){t=!0,e()}).modal("show"),!a&&f("#"+c+" a").one("shown.bs.tab",function(){a=!0,e()}).tab("show"),e()):(!t&&f(".bs-example-modal-lg").modal("show"),!a&&f("#"+c+" a").tab("show"))}
var Cn,Tn,In,Un,An,Nn,Pn,Fn,Bn,Dn,En,zn,Rn,$n,Ln,On,Qn,Gn,Wn,Yn,Jn,Vn,jn=function(){var x=0,_=1e3/60
return function(e){c.requestAnimationFrame(jn)
var t=performance.now(),n=e||t,a=n-x
if(Fl){Ls++
var i=t
if(i-$s>1e3){var o=~~(1e3*Ls/(i-$s)+.5)
f("#fps").html('<span style="color:'+(30>o?"#f44":50>o?"#fa4":"#2d2")+';">'+o+"</span>"),$s=i,Ls=0}}x=n-a%_
var r=Date.now(),s=(vt||bt)&&(mn>hn||gn>pn)
300>r-Ns||!qf()||ea||_a||na||ta||s&&(mn>_i||r>=gn)?(++_i,s&&_i>=mn&&r>=gn&&(Pc(),Nc()),ex()):console.warn("Frame skipped")}}(),Xn=!1,Hn="",Zn=0,qn="",Kn="",ca={level:0,exp:0,coins:0},fa=0,xa=0,_a=!1,ea=!1,ta=!1,na=!1,aa=c["devicePixelRatio"]||1,ia=c,oa=null,ra=!1,sa=Math.floor(294967295+4e9*Math.random())+1,la=Math.floor(4294967296*Math.random()),ua=md5(-~~(2e9*Math.random())-1),da=0,ha=0,ma="bbhnf",pa=null,ga=!0,va=!0,ba=0,ya=0,ka=[],wa=[],Ma={},Sa=[],Ca=[],Ta=[],Ia={},Ua={},Aa=[],Na={},Pa={},Fa={},Ba=[],Da=[],Ea=[],za=3,Ra=0,$a=[],La=0,Oa=0,Qa=-1,Ga=-1,Wa=!1,Ya=0,Ja=0,Va=0,ja=0,Xa=0,Ha=0,Za=0,qa=0,Ka=null,ci=0,fi=null,xi=!1,_i=0,ei=0,ti=0,ni=1,ai=0,ii=0,oi=1e4,ri=1e4,si={left:ai,top:ii,right:oi,bottom:ri,oLeft:ai,oTop:ii,oRight:oi,oBottom:ri,nLeft:ai,nTop:ii,nRight:oi,nBottom:ri,ga:1,createTime:0,updateTime:0,draw:!1},li=-1,ui=!1,di=!0,hi=1920,mi=1080,pi=60,gi=25,vi=!0,bi=-1,yi=~~(5535+6e4*Math.random())+1,ki=[128,129,130,131,132],wi=5,Mi=!1,Si=!1,Ci=1,Ti=1,Ii=1,Ui=null,Ai=null,Ni=!1,Pi=0,Fi=ba=~~((oi+ai)/2),Bi=ya=~~((ri+ii)/2),Di=Fi,Ei=Bi,zi=Fi,Ri=Bi,$i=0,Li=1,Oi=.2,Qi=null,Gi=!1,Wi=!1,Yi=!1,Ji=!0,Vi=["#F03030","#30F030","#1060F0","#F0F030","#20E8F8","#F020E8","#606060"],ji=u_(ma),Xi="",Hi=!1,Zi=null,qi=-1,Ki=0,co=0,fo=0,xo=0,_o=0,eo=0,to=!1,no=!1,ao=!1,io=[],oo=0,ro=!1,so=!1,lo=0,uo=0,ho=0,mo=0,po=0,go=0,vo=0,bo=0,yo=0,ko=0,wo=!0,Mo=0,So=0,Co=0,To=0,Io=0,Uo=0,Ao=!1,No=0,Po=0,Fo=!0,Bo=0,Do=null,Eo=!1,zo=[],Ro={},$o=0,Lo="",Oo="",Qo=0,Go=!1,Wo=0,Yo=0,Jo=0,Vo=1,jo=0,Xo=0,Ho=null,Zo=0,qo=null,Ko=null,cr=[],fr=[],xr={},_r={},er=null,tr={},nr=[],ar=!1,ir=0,or=0,rr="",sr=0,lr=0,ur=0,dr=[],hr=0,mr="",pr="",gr=!1,vr="",br=[],yr=!0,kr=!1,wr=0,Mr=!1,Sr={},Cr={},Tr=0,Ir=[],Ur=!0,Ar=!1,Nr=null,Pr="",Fr=[],Br=!0,Dr=!1,Er=null,zr="",Rr=0,$r=0,Lr=0,Or=0,Qr=0,Gr=0,Wr=0,Yr=0,Jr=!1,Vr=!1,jr=!1,Xr=!1,Hr=!1,Zr=!1,qr=!1,Kr=!1,cs=!1,fs=!1,xs=!1,_s=!1,es=!1,ts=!1,ns=!1,as=!1,is=!1,os=!1,rs=!1,ss=!1,ls=!1,us=!1,ds=!1,hs=!1,ms=!1,ps=!1,gs=!1,vs=!1,bs=!1,ys=!1,ks=!1,ws=!1,Ms=!1,Ss=null,Cs="",Ts=un,Is=!0,Us=1,As=!1,Ns=0,Ps=0,Fs=0,Bs=!1,Ds=50,Es=0,zs=!1,Rs=0,$s=performance.now(),Ls=0,Os=ue?Z_("img/move_arrow32.png"):null,Qs=ue?Z_("img/move_arrow128.png"):null,Gs=0,Ws=0,Ys=0,Js=0,Vs=!0,js=!1,Xs=!1,Hs=!1,Zs=!1,qs=0,Ks=0,cl=0,fl=!1
!function(){var c=Object["getOwnPropertyDescriptor"],f=c?c(ia,ji):null;(!c||f&&f["writable"]&&f["configurable"]&&!f["get"]&&!f["set"])&&(Xi=ia[ji],ia[ji]=ma,Hi=!0)}(),c["isSpectating"]=!1
var xl={nickName:"",user:"",skinId:0,wearablesSelected:[],sSkins:!0,sWearables:!0,sColors:!0,sNames:!0,sMinionNames:!0,sMass:!0,sFood:!0,sCellAnimations:!0,sSkinAnimations:!0,sMapBorder:!0,sFancyGrid:!0,sSectionGrid:!1,sGrid:!1,sCustomBack:!1,sCustomBackType:0,sCustomBackOpacity:.5,sCustomBackClip:!1,sCustomBackEnableColor:!1,sCustomBackColor:"#000000",sDark:!1,sAcid:!1,sSlowMotion:!1,sFPS:!1,sZoom:!0,sFixedZoom:!1,fixedZoomScale:1,sMinionUi:!1,sLeaderboard:!0,sChat:!0,sMinimap:!0,sCellBorders:!1,sLargeNames:!1,sNameOutlines:!0,sCellSpikes:!0,sTransparentViruses:!0,sClassicViruses:!1,sPolygonShapes:!1,sLineShapes:!1,sBubbleCells:!1,sMobileLeft:!1,sMobileFeedLock:!0},_l={nickName:xl["nickName"],user:xl["user"],skinId:xl["skinId"],wearablesSelected:xl["wearablesSelected"].slice(0),sSkins:xl["sSkins"],sWearables:xl["sWearables"],sColors:xl["sColors"],sNames:xl["sNames"],sMinionNames:xl["sMinionNames"],sMass:xl["sMass"],sFood:xl["sFood"],sCellAnimations:xl["sCellAnimations"],sSkinAnimations:xl["sSkinAnimations"],sMapBorder:xl["sMapBorder"],sFancyGrid:xl["sFancyGrid"],sSectionGrid:xl["sSectionGrid"],sGrid:xl["sGrid"],sCustomBack:xl["sCustomBack"],sCustomBackType:xl["sCustomBackType"],sCustomBackOpacity:xl["sCustomBackOpacity"],sCustomBackClip:xl["sCustomBackClip"],sCustomBackEnableColor:xl["sCustomBackEnableColor"],sCustomBackColor:xl["sCustomBackColor"],sDark:xl["sDark"],sAcid:xl["sAcid"],sSlowMotion:xl["sSlowMotion"],sFPS:xl["sFPS"],sZoom:xl["sZoom"],sFixedZoom:xl["sFixedZoom"],fixedZoomScale:xl["fixedZoomScale"],sMinionUi:xl["sMinionUi"],sLeaderboard:xl["sLeaderboard"],sChat:xl["sChat"],sMinimap:xl["sMinimap"],sCellBorders:xl["sCellBorders"],sLargeNames:xl["sLargeNames"],sNameOutlines:xl["sNameOutlines"],sCellSpikes:xl["sCellSpikes"],sTransparentViruses:xl["sTransparentViruses"],sClassicViruses:xl["sClassicViruses"],sPolygonShapes:xl["sPolygonShapes"],sLineShapes:xl["sLineShapes"],sBubbleCells:xl["sBubbleCells"],sMobileLeft:xl["sMobileLeft"],sMobileFeedLock:xl["sMobileFeedLock"]},el=!1,tl=!1,nl=null,al=xl["skinId"],il=xl["wearablesSelected"].slice(0),ol=xl["sSkins"],rl=xl["sWearables"],sl=!xl["sColors"],ll=xl["sNames"],ul=xl["sMinionNames"],dl=xl["sMass"],hl=xl["sFood"],ml=xl["sCellAnimations"],pl=xl["sSkinAnimations"],gl=!xl["sMapBorder"],vl=xl["sFancyGrid"],bl=xl["sSectionGrid"],yl=xl["sGrid"],kl=xl["sCustomBack"],wl=xl["sCustomBackType"],Ml=xl["sCustomBackOpacity"],Sl=xl["sCustomBackClip"],Cl=xl["sCustomBackEnableColor"],Tl=xl["sCustomBackColor"],Il={r:0,g:0,b:0},Ul=xl["sDark"],Al=Ul?.8:.9,Nl=xl["sAcid"],Pl=xl["sSlowMotion"],Fl=xl["sFPS"],Bl=xl["sZoom"],Dl=xl["sFixedZoom"],El=xl["fixedZoomScale"],zl=xl["sMinionUi"],Rl=xl["sLeaderboard"],$l=!xl["sChat"],Ll=!xl["sMinimap"],Ol=!xl["sCellBorders"],Ql=xl["sLargeNames"],Gl=xl["sNameOutlines"],Wl=xl["sCellSpikes"],Yl=xl["sTransparentViruses"],Jl=xl["sClassicViruses"],Vl=xl["sPolygonShapes"],jl=xl["sLineShapes"],Xl=xl["sBubbleCells"],Hl=xl["sMobileLeft"],Zl=xl["sMobileFeedLock"]
c["setNick"]=function(f,x){var _=Date.now(),e=_-Mt
if(St&&el&&ga&&ra&&!pt&&!gt&&!yt&&!(100*wt>e))if(t_(f))T("Please choose another name - Bad Nick",!1,!1,0,5)
else{if(qf()&&0==wa["length"]&&15!=li&&(0>=At||Rt)){var t=_
if(typeof Storage!=="undefined"&&(t=localStorage.getItem("ad_l_time"),!t&&(t=localStorage["ad_l_time"]=_),t>_&&(t=0)),_-1e3*en>t&&_-1e3*en>on&&an>=(zo["length"]>0?nn:tn)){an=0,sn=3,rn=function(){c.setNick(f,x)}
try{return void Sc()}catch(n){sn=0,rn=null}}}I(!0),nl=f,wf(),x&&Kf(59),Kf(34),Pi=0,_l["nickName"]=nl,f_(),mc(),qf()&&(0==wa["length"]&&an++,wt=e>1e4?Math.max(wt-~~(e/1e3),0):wt+1,Mt=_)}},c["sendCaptchaInput"]=function(c){if(qf()&&c["length"]>0){var f=Oc(3+2*c["length"])
f.setUint8(0,100),f.setUint16(1,c["length"],!0)
var x=3
for(var _ in c)f.setUint16(x,c.charCodeAt(_),!0),x+=2
Qc(f)}},c["purchaseItem"]=function(c,f){if(qf()){!f&&(f=1)
var x=Oc(3)
x.setUint8(0,41,!0),x.setUint8(1,c,!0),x.setUint8(2,f,!0),Qc(x)}},c["setMegaphoneText"]=function(){var c=document.getElementById("nick").value
t_(c)&&(c=_l["nickName"])
var x=Jt&&fn?6:Vt&&_n?jt:Yt&&cn?5:Wt&&Kt?4:Gt&&qt?3:Qt&&Zt?2:2==At&&Bt?1:0
f("#megaphone_cell_name").text(c).css("color",x>1?Mu[x]:"").removeClass("gold black"),1==x?f("#megaphone_cell_name").addClass("gold"):6==x&&f("#megaphone_cell_name").addClass("black"),0!=al?f("#skinMegaDialog").css("background-image","url('"+Ce+(""+al)+"_lo.png?u="+(Sr[al]||0)+"')"):f("#skinMegaDialog").css("background-image","none"),wf()
for(var _=1;5>=_;_++)if(_<=il["length"]){var e=il[_-1],t=wu[e["wearArea"]]||""
f("#wearMegaDialog"+_).css("background-image","url('"+Ie+(""+e["wearId"])+"_lo.png?v="+(""+Ue)+"')").removeClass("center top bottom left right max".replace(t,"")).addClass(t).show()}else f("#wearMegaDialog"+_).css("background-image","none").hide()},c["purchaseMega"]=function(c,f){if(qf()){var x=document.getElementById("nick").value
t_(x)&&(x=_l["nickName"])
var _=Oc(11+2*c["length"]+2*x["length"]+2*il["length"]),e=0
_.setUint8(e++,42),_.setUint8(e++,f,!0),_.setUint8(e++,0,!0)
for(var t=0;t<c["length"];++t)_.setUint16(e,c.charCodeAt(t),!0),e+=2
_.setUint16(e,0,!0),e+=2
for(var t=0;t<x["length"];++t)_.setUint16(e,x.charCodeAt(t),!0),e+=2
_.setUint16(e,0,!0),e+=2
var n=Jt&&fn?6:Vt&&_n?jt:Yt&&cn?5:Wt&&Kt?4:Gt&&qt?3:Qt&&Zt?2:2==At&&Bt?1:0
_.setUint8(e++,n,!0),_.setUint16(e,al,!0),e+=2,_.setUint8(e++,il["length"],!0)
for(var a=0;a<il["length"];a++)_.setUint16(e,il[a]["wearId"],!0),e+=2
Qc(_)}},c["purchaseMinion"]=function(c){if(qf()){var f=Oc(2)
f.setUint8(0,6,!0),f.setUint8(1,c,!0),Qc(f)}},c["toggleHideMinionUi"]=function(){f("#minionUi").toggleClass("minimized"),Is=!f("#minionUi").hasClass("minimized")},c["strMin"]=function(){va&&(!Et&&setAutoFeedEnabled(!0),Kf(7))},c["strMon"]=function(){function c(){1==x?(clearInterval(Ke),f("#startBots").attr("disabled",!1),f("#startBots").text("Start Bots"),va=!0):(x--,f("#startBots").text(x+" Secs Left"))}Kf(8),f("#stopBots").hide(),f("#startBots").attr("disabled",!0),f("#startBots").show(),va=!1,Ke&&clearInterval(Ke),Ke=setInterval(c,1e3)
var x=10},c["rfrc"]=function(){qf()&&(Xn?(Kf(9),f("#loadBarRf").fadeIn().fadeOut(),f("#rfrcBtn").prop("disabled",!0).css("opacity","0.7"),setTimeout(function(){f("#rfrcBtn").prop("disabled",!1).css("opacity","")},1200)):(swal("","You must login to view your referral count!","error"),f("#refCount").text(0)))},c["clmFr"]=function(c){swal({title:f("#freeReward"+c).text(),text:"Are you sure you want to claim this reward?",type:"warning",showCancelButton:!0,confirmButtonColor:"#4CAF50",confirmButtonText:"Yes, claim now",cancelButtonText:"Cancel"},function(){if(qf()){var f=Oc(2)
f.setUint8(0,10,!0),f.setUint8(1,c,!0),Qc(f)}})},c["setFriendlistOnline"]=function(c,x){Ut=c,f("#cVisibilityStatus").prop("checked",Ut),f("#cVisibilityStatus2").prop("checked",Ut),Ut?f("#visibilityStatus").css("color","#8cff07").text("Your status: Online"):f("#visibilityStatus").css("color","red").text("Your status: Invisible"),!x&&i_(4,Ut?0:1)},c["toggleFriendlistVisibility"]=function(){setFriendlistOnline(!Ut)},c["showPartyInvite"]=function(c){Pt=c,f("#cAllowPartyInvite").prop("checked",Pt),f("#cAllowPartyInvite2").prop("checked",Pt),i_(7,Pt?1:0),Pt||Eo&&partyDecline(),a_()},c["setPartyAnimations"]=function(c){Ft=c,f("#cAllowPartyAnimations").prop("checked",Ft),i_(8,Ft?1:0),a_()},c["setAutoFeedEnabled"]=function(c){Et=c,f("#cAutoFeed").prop("checked",Et),f("#cAutoFeed2").prop("checked",Et),i_(3,Et?1:0),a_()},c["setGoldNickname"]=function(c){(!tl||yn||kn)&&(Bt=c,f("#cGoldName").prop("checked",Bt),f("#cGoldName2").prop("checked",Bt),tl&&i_(1,Bt?1:0),Bt&&tl&&(tl=!1,Qt&&G_("cGreenName",!1),Gt&&G_("cBlueName",!1),Wt&&G_("cOrangeName",!1),Yt&&G_("cRedName",!1),Jt&&G_("cBlackName",!1),Vt&&G_("cCustomColorName",!1),tl=!0),a_())},c["setGoldCrownChat"]=function(c){Dt=c,f("#cGoldCrownChat").prop("checked",Dt),f("#cGoldCrownChat2").prop("checked",Dt),tl&&i_(2,Dt?1:0),a_()},c["setMinionSkins"]=function(c,x){(!tl||yn||kn)&&(zt=c,f("#cMinionSkinsStatus").prop("checked",zt),tl&&(i_(5,zt?1:0),x&&_o>0&&(f(x).prop("disabled",!0).css("cursor","progress").parent().css("cursor","progress"),f("#loadingMinionSkins").html('<i class="fa fa-spin" style="animation-duration:1s; margin:3px 0px -3px 10px; float:right; opacity:0.7;"><img src="img/loading3.png" style="width:16px;"></i>'),setTimeout(function(){f(x).prop("disabled",!1).css("cursor","").parent().css("cursor",""),f("#loadingMinionSkins").text("")},2e3))),a_())},c["setVideoAds"]=function(c){Rt=c,f("#cVideoAds").prop("checked",Rt),a_()},c["setModeratorIconChat"]=function(c){$t=c,f("#cModeratorIconChat").prop("checked",$t),tl&&i_(6,$t?1:0),a_()},c["setIconDRank"]=function(c){Xt=c,f("#cIconDRank").prop("checked",Xt),tl&&i_(9,Xt?1:0),a_()},c["setIconYT"]=function(c){Ht=c,f("#cIconYT").prop("checked",Ht),tl&&i_(10,Ht?1:0),a_()},c["setGreenName"]=function(c){(!tl||yn||kn)&&(Zt=c,f("#cGreenName").prop("checked",Zt),tl&&i_(11,Zt?1:0),Zt&&tl&&(tl=!1,2==At&&G_("cGoldName",!1),Gt&&G_("cBlueName",!1),Wt&&G_("cOrangeName",!1),Yt&&G_("cRedName",!1),Jt&&G_("cBlackName",!1),Vt&&G_("cCustomColorName",!1),tl=!0),a_())},c["setBlueName"]=function(c){(!tl||yn||kn)&&(qt=c,f("#cBlueName").prop("checked",qt),tl&&i_(12,qt?1:0),qt&&tl&&(tl=!1,2==At&&G_("cGoldName",!1),Qt&&G_("cGreenName",!1),Wt&&G_("cOrangeName",!1),Yt&&G_("cRedName",!1),Jt&&G_("cBlackName",!1),Vt&&G_("cCustomColorName",!1),tl=!0),a_())},c["setOrangeName"]=function(c){(!tl||yn||kn)&&(Kt=c,f("#cOrangeName").prop("checked",Kt),tl&&i_(13,Kt?1:0),Kt&&tl&&(tl=!1,2==At&&G_("cGoldName",!1),Qt&&G_("cGreenName",!1),Gt&&G_("cBlueName",!1),Yt&&G_("cRedName",!1),Jt&&G_("cBlackName",!1),Vt&&G_("cCustomColorName",!1),tl=!0),a_())},c["setRedName"]=function(c){(!tl||yn||kn)&&(cn=c,f("#cRedName").prop("checked",cn),tl&&i_(14,cn?1:0),cn&&tl&&(tl=!1,2==At&&G_("cGoldName",!1),Qt&&G_("cGreenName",!1),Gt&&G_("cBlueName",!1),Wt&&G_("cOrangeName",!1),Jt&&G_("cBlackName",!1),Vt&&G_("cCustomColorName",!1),tl=!0),a_())},c["setBlackName"]=function(c){(!tl||yn||kn)&&(fn=c,f("#cBlackName").prop("checked",fn),tl&&i_(15,fn?1:0),fn&&tl&&(tl=!1,2==At&&G_("cGoldName",!1),Qt&&G_("cGreenName",!1),Gt&&G_("cBlueName",!1),Wt&&G_("cOrangeName",!1),Yt&&G_("cRedName",!1),Vt&&G_("cCustomColorName",!1),tl=!0),a_())},c["setCustomColorName"]=function(c){(!tl||yn||kn)&&(_n=c,f("#cCustomColorName").prop("checked",_n),tl&&i_(16,_n?1:0),_n&&tl&&(tl=!1,2==At&&G_("cGoldName",!1),Qt&&G_("cGreenName",!1),Gt&&G_("cBlueName",!1),Wt&&G_("cOrangeName",!1),Yt&&G_("cRedName",!1),Jt&&G_("cBlackName",!1),tl=!0),a_())}
var ql=0
c["spinTheWheel"]=function(){if(!Xn)return swal("Login","Please login to spin the wheel, or register an account if you do not have an account yet")
if(xn){if(!un)return swal("","Please Disable/Turn off your adblocker to Spin the Wheel")
sn=1,rn=function(){c.spinTheWheel()}
try{return Sc(),void d_(!0)}catch(f){sn=0,rn=null}}Kf(58)},c["watchAdvert"]=function(){if(!f("#watchAdvertBtn").hasClass("disabled")){if(!un)return swal("","Please Disable/Turn off your adblocker to receive free coins")
if(Xn){if(typeof Storage!=="undefined"){var c=parseInt(localStorage.getItem("ad_r_l_time"))||0
if(Date.now()-c<12e4)return swal("","Please wait at least 2 minutes before watching a new advert video and receiving coins")}if(qf()){var x=1,_=Oc(2)
_.setUint8(0,120,!0),_.setUint8(1,x,!0),Qc(_)}f("#watchAdvertBtn").addClass("disabled"),setTimeout(function(){f("#watchAdvertBtn").removeClass("disabled")},3e3)}else swal("Login","Please login first, or register an account if you do not have an account yet")}},c["succAdv"]=function(){switch(d_(!1),window.focus(),typeof Storage!=="undefined"&&(localStorage["ad_l_time"]=Date.now()),sn){case 1:xn=!1,rn&&rn()
break
case 3:rn&&rn()}sn=0,rn=null},c["succRewardedAdv"]=function(){switch(d_(!1),window.focus(),typeof Storage!=="undefined"&&(localStorage["ad_l_time"]=Date.now(),localStorage["ad_r_l_time"]=Date.now()),sn){case 2:l_()}sn=0,rn=null},c["rspwn"]=function(c){setNick(c,!0)},c["closeAdvert"]=function(){gt||(azad(!0),f("#invisibleOverlay").finish().show(0).delay(400).hide(0),clearVideo(),Uc(),Tc())},c["spectate"]=function(f){if(ga&&ra&&!pt&&!gt&&!yt)if(0==ka["length"]){if(qf()&&(0>=At||Rt)){var x=Date.now(),_=x
if(typeof Storage!=="undefined"&&(_=localStorage.getItem("ad_l_time"),!_&&(_=localStorage["ad_l_time"]=x),_>x&&(_=0)),x-1e3*en>_&&x-1e3*en>on){sn=3,rn=function(){c.spectate(f)}
try{return void Sc()}catch(e){sn=0,rn=null}}}nl=null,qf()&&(c["isSpectating"]=!0,Kf(12)),mc()}else setNick(f)},c["toggleSkin"]=function(c){Ji&&Ar&&qf()&&(al==c?df(0):(df(c),!ol&&G_("cSkins",!0)),f_())},c["tskngc"]=function(c){qf()&&df(c)},c["shareInfectionFb"]=function(){},c["fbLikeSkin"]=function(){window.open("https://www.facebook.com/Agmaio-334028330371935"),f("#skinUseBtn73").text("Like on Facebook!"),setTimeout(function(){f("#skinUseBtn73").attr("onclick","toggleSkin(73);").text("Use"),localStorage.setItem("fbSkin",1)},22e3)},c["YouTubeSubSkin"]=function(c,x){!c&&(c=71),(71==c||!x||x=="")&&(x="UCHHX_9Phr1Sio21b745Rfuw"),window.open("https://www.youtube.com/channel/"+x+"?sub_confirmation=1"),f("#skinUseBtn"+c).text("Click Subscribe!"),setTimeout(function(){f("#skinUseBtn"+c).attr("onclick","toggleSkin("+c+");").text("Use"),localStorage.setItem("ytSkin"+(71!=c?""+c:""),1)},18e3)},c["shuffleGameTips"]=function(){var c=["You can type command /spin in the bottom left chat to spin your playercell in game","You receive free coin rewards for every time you level up","You can right-click any player in game or in chat for extra options","You can feed a portal and it will spit out more mass than you fed it. Eat to grow!","The gold blocks in agma spit out coins to farm when you feed them","The SuperSonic servers in agma add you 5-20 minions for free when you consume the minion pellet","In selffeed servers you can grow quickly by holding W to autofeed and Z to autosplit","You can open your friendlist with the button on the top right corner","You can drop items from your inventory (bottom of screen) and dragging the item onto the map","You can purchase items/powerups from the shop. The item will appear in your inventory on the bottom of the screen","In agma, you can invite friends to party/team by right clicking the player in game and selecting <Invite Player to Party>","Collect coins in game to purchase powerups, portals, and more in the game shop","You can submit your own CUSTOM skin in the shop -> skins -> custom skin section","If you are experiencing lag, try turning off options with * in the game settings (settings are located in the right side of menu)","Psst, most servers have secret rooms located somewhere in the bottom left corner, past the border. Shh.. keep it a secret","You can still private message a friend who's online but shown as offline, type /pm <username> message","You can press M to respawn, or change the keybind in the Settings->Controls (settings are in the right side of menu)","Don't know how to use some powerups? Watch some Tutorials on the Agma Youtube-Channel!","You can get tips on how to play agma on the agma discord. Link in the bottom of the main menu","Gold Membership in agma has a lot of special benefits and rewards, exclusive skins and gold name. Check www.agma.io/member.php","Did you find the secret room in agma, yet? But did you find the second one? Search for it, or ask players in chat for help!","Agma is Agma'zing! If you disagree, go eat an agmapple upside down with a carrot on top!","The max level on agma is 200, but levels are still counted when you surpass 200","If you experience lag, try turning off skins and wearables in the settings. This will boost your FPS!","You can enable FPS and PING in the settings, these will help you determine if you have lag","INVISIBILITY: press i key in game if you are a gold member, and you can turn your cells invisible for 30 seconds","You can right-click on your cell in the shop to remove skins or wearables from the cell","You can level up quicker by eating players, mass pellets, viruses and mothercells","You can use the 360 push powerup, or the freeze ability to prevent players from eating you"],x=["You can type command /spin in the bottom left chat to spin your playercell in game","You can right-click any player in game or in chat for extra options","You can feed a portal and it will spit out more mass than you fed it. Eat to grow!","The gold blocks in agma spit out coins to farm when you feed them","The SuperSonic servers in agma add you 5-20 minions for free when you consume the minion pellet","In selffeed servers you can grow quickly by holding W to autofeed and Z to autosplit","You can still private message a friend who's online but shown as offline, type /pm <username> message","You can press M to respawn, or change the keybind in the Settings->Controls (settings are in the right side of menu)","You can Solotrick by holding down W and Z in certain servers like Gigantic/Giant/Giga. You need to be large enough for it to work.","The max level on agma is 200, but levels are still counted when you surpass 200","Agma is Agma'zing! If you disagree, go eat an agmapple upside down with a carrot on top!","The max level on agma is 200, but levels are still counted when you surpass 200","If you experience lag, try turning off skins and wearables in the settings. This will boost your FPS!","You can enable FPS and PING in the settings, these will help you determine if you have lag","You can press C-key to see invisible cells","You can level up quicker by eating players, mass pellets, viruses and mothercells","You can use the 360 push powerup, or the freeze ability to prevent players from eating you"],_=["You can type command /spin in the bottom left chat to spin your playercell in game","You can feed a portal and it will spit out more mass than you fed it. Eat to grow!","The gold blocks in agma spit out coins to farm when you feed them","The SuperSonic servers in agma add you 5-20 minions for free when you consume the minion pellet","In selffeed servers you can grow quickly by holding W to autofeed and Z to autosplit","You can still private message a friend who's online but shown as offline, type /pm <username> message","You can Solotrick by holding down W and Z in certain servers like Gigantic/Giant/Giga. You need to be large enough for it to work.","You can reverse opponents by timing your split exactly when they are about to solotrick you. Search agma reverse on YouTube to learn more","You can press C-key to see invisible cells","You can level up quicker by eating players, mass pellets, viruses and mothercells"],e=""
e=ca["level"]<=20?c[Math.floor(Math.random()*c["length"])]:ca["level"]<=60?x[Math.floor(Math.random()*x["length"])]:_[Math.floor(Math.random()*_["length"])],f("#game-tip").text(e)},c["shuffleGameAds"]=function(){var c=Math.floor(4*Math.random())+1,x=Math.floor(11*Math.random())+1,_=Math.floor(11*Math.random())+1,e=Math.floor(15*Math.random())+1,t=Math.floor(15*Math.random())+1,n=Math.floor(11*Math.random())+1,a=Math.floor(11*Math.random())+1,i=Math.floor(6*Math.random())+1,o=Math.floor(6*Math.random())+1,r="margin: 0 auto;margin-top: 15px;border: 2px solid #002c40;min-width: 150px;max-width: 85%;height: 100%;max-height: 200px;transition: all .5s ease 0s;"
1==c?2>At?(f("#agmaAdHref").attr("href","member.php?c="+x+""),f("#zoomItem").attr("src","img/agmaAd/gold/"+x+".png?v=1"),un||f("#AGM_agma-io_300x250").html('<a href="member.php?d='+_+'" target="_blank"><img style="'+r+'" src="img/agmaAd/gold/'+_+'.png"></a>')):shuffleGameAds():2==c?(f("#agmaAdHref").attr("href","coins.php?c="+e+""),f("#zoomItem").attr("src","img/agmaAd/coins/"+e+".png?v=1"),f("#AGM_agma-io_300x250").html('<a href="coins.php?d='+t+'" target="_blank"><img style="'+r+'" src="img/agmaAd/coins/'+t+'.png"></a>')):3==c?(f("#agmaAdHref").attr("href","bots.php?clickId="+n+""),f("#zoomItem").attr("src","img/agmaAd/bots/"+n+".png?v=1"),un||f("#AGM_agma-io_300x250").html('<a href="bots.php?d='+a+'" target="_blank"><img style="'+r+'" src="img/agmaAd/bots/'+a+'.png"></a>')):(f("#agmaAdHref").attr("href","items.php?clickId="+i+""),f("#zoomItem").attr("src","img/agmaAd/items/"+i+".png?v=1"),un||f("#AGM_agma-io_300x250").html('<a href="items.php?d='+o+'" target="_blank"><img style="'+r+'" src="img/agmaAd/items/'+o+'.png"></a>'))}
var Kl=window["featureList"]||[],cu=-1,fu=-1
c["prevVideo"]=function(){Kl["length"]>0&&cu>0&&setVideo(cu-1)},c["nextVideo"]=function(){Kl["length"]>0&&cu<Kl["length"]-1&&setVideo(cu+1)},c["setVideo"]=function(c){if(cu!=c&&c>=0&&c<=Kl["length"]-1){cu=c,fu=c
var f=Kl[cu]
$("#featuredVideo").attr("src","https://www.youtube.com/embed/"+encodeURIComponent(f["vid"])),$("#featuredDescription").text(f["descr"]),$(".featured-btn").removeClass("selected"),$("#featuredBtn"+cu).addClass("selected")}},c["clearVideo"]=function(){$("#featuredVideo").attr("src",""),$("#featuredDescription").text(""),cu=-1},c["purchaseSkin"]=function(c,f){Ar&&qf()&&swal({title:"Confirm",text:'If you click "Buy", you will purchase this skin. It costs '+c,type:"warning",showCancelButton:!0,confirmButtonColor:"#4CAF50",confirmButtonText:"Yes, confirm purchase",cancelButtonText:"No, cancel purchase"},function(){if(qf()){var c=Oc(3)
c.setUint8(0,44,!0),c.setUint16(1,f,!0),Qc(c)}})},c["purchaseCustomSkin"]=function(c){Ar&&qf()&&swal({title:"Confirm",text:'If you click "Yes", you will purchase a new custom skin slot. It costs '+c+'<br><span style="font-size:13px;"><br>(click here for <a href="#customSkinInstructions" onclick="swal.close();">instructions</a>)</span><br><br>',type:"warning",html:!0,showCancelButton:!0,confirmButtonColor:"#4CAF50",confirmButtonText:"Yes, confirm purchase",cancelButtonText:"No, cancel purchase"},function(){Kf(50)})},c["editCustomSkin"]=function(c){function x(){if(qf()){var x=Oc(3)
x.setUint8(0,51),x.setUint16(1,c,!0),Qc(x)}al==c&&df(0),f("#skinContainer"+c).removeClass("saved-mode approved-mode rejected-mode enabled-mode").addClass("edit-mode nonapproved-mode pending-mode disabled-mode")}Ar&&qf()&&Xn&&!Mr&&(f("#skinContainer"+c).hasClass("enabled-mode")?swal({title:"Confirm",text:"Are you sure you want to change this skin? Please be reminded if you press Yes, you cannot play with this skin anymore until it is re-approved by staff.",type:"warning",showCancelButton:!0,confirmButtonColor:"#4CAF50",confirmButtonText:"Yes, change skin",cancelButtonText:"Cancel"},x):x())},c["saveCustomSkin"]=function(c){if(Ar&&qf()&&Xn&&!Mr){if(parseInt(f("#skinContainer"+c).attr("data-pendingapproval"))>=3)return void T("Please upload an image before saving",!1,!1,0,10)
for(var x=(""+f("#skinNameInput"+c).val()).substr(0,30),_=f("#skinSharedPublicInput"+c).is(":checked"),e=0;e<x["length"];e++)if(!/[\x20-\xff]/.test(x.charAt(e)))return void T("Please choose another skinname - unicode characters are not allowed",!1,!1,0,10)
if(I(!0),qf()){var t=Oc(4+2*x["length"])
t.setUint8(0,52),t.setUint16(1,c,!0),t.setUint8(3,_?1:0)
for(var n=4,e=0;e<x["length"];e++)t.setUint16(n,x.charCodeAt(e),!0),n+=2
Qc(t)}f("#skinName"+c).text(x),_?f("#skinSharedPublic"+c).removeClass("private-skin"):f("#skinSharedPublic"+c).addClass("private-skin"),f("#skinContainer"+c).removeClass("edit-mode approved-mode rejected-mode enabled-mode").addClass("saved-mode nonapproved-mode pending-mode disabled-mode")}},c["uploadCustomSkin"]=function(c){!(Ar&&qf()&&Xn)||Mr||wr>Date.now()||(wr=Date.now()+1e3,f("#skinUploadBtn"+c).blur(),f("#uploadFile").off("change").val("").attr("accept",".png, .jpg, .jpeg").one("change",function(){if(Xn){Mr=!0,I(!0),f("#skinContainer"+c).addClass("is-uploading"),document["body"]["style"]["cursor"]="progress",f("#uploadMaxFileSize").val(1048576)
var x={username:Hn,password:Kn,skinId:c}
f("#uploadForm").ajaxSubmit(T_(c,x))}}).trigger("click"))},c["dragFileOverSkin"]=function(c,x){c.preventDefault(),c.stopPropagation(),pe&&(c["dataTransfer"]&&(c["dataTransfer"]["dropEffect"]="copy"),f("#skinContainer"+x).addClass("drag-over"))},c["dragFileLeaveSkin"]=function(c,x){c.preventDefault(),c.stopPropagation(),pe&&(c["dataTransfer"]&&(c["dataTransfer"]["dropEffect"]="none"),f("#skinContainer"+x).removeClass("drag-over"))},c["dropFileOnSkin"]=function(c,x){if(c.preventDefault(),c.stopPropagation(),pe&&(c["dataTransfer"]&&(c["dataTransfer"]["dropEffect"]="copy"),f("#skinContainer"+x).removeClass("drag-over"),Ar&&qf()&&Xn&&c["dataTransfer"]&&c["dataTransfer"]["files"]&&c["dataTransfer"]["files"]["length"]>0)){Mr=!0,I(!0),f("#skinContainer"+x).addClass("is-uploading"),document["body"]["style"]["cursor"]="progress"
var _=c["dataTransfer"]["files"][0],e=new FormData
e.append("MAX_FILE_SIZE",1048576),e.append("uploadFile",_),e.append("username",Hn),e.append("password",Kn),e.append("skinId",x),f.ajax(T_(x,e))}},c["uploadCustomBack"]=function(){if(!(Mr||wr>Date.now())){if(!("FileReader"in window))return void T("Sorry, custom backgrounds are not supported on your system. Maybe try another browser?",!1,!1,0,10)
wr=Date.now()+1e3,f("#customBackBtn").blur(),f("#uploadFile").off("change").val("").attr("accept","image/*").one("change",function(){var c=document.getElementById("uploadFile")
c&&c["files"]&&c["files"]["length"]>0&&N_(c["files"][0])}).trigger("click")}},c["showPublicSkinsPage"]=function(c){Ar&&qf()&&(f("#skinsCustom .publicskins-nav-btn").addClass("btn-primary").filter(".publicskins-nav-btn-"+c.toLowerCase()).removeClass("btn-primary").addClass("btn-default"),document.getElementById("publicSkinsPage").innerHTML=document.getElementById("publicSkinsPageContent"+c).textContent,f("#publicSkinsPage .skin-container").removeClass("selected"),f("#publicSkinsPage .skinuse-btn").removeClass("btn-default").addClass("btn-primary").text("Use"),0!=al&&(f("#skinContainer"+al).addClass("selected"),f("#skinUseBtn"+al).removeClass("btn-primary").addClass("btn-default").text("Cancel")),document.getElementById("publicSkinsHeader").scrollIntoView())},c["tgWblGc"]=function(c,f,x,_,e){qf()&&gf(c,f,x,_,e)},c["toggleWearable"]=function(c,f,x,_,e){if(Ji&&Dr&&qf()){for(var t=!1,n=0;n<il["length"];n++)if(il[n]["wearId"]==c){t=!0
break}if(t)vf(c)
else{if(0!=_&&bf(_),il["length"]>=5)return void T("You cannot select more than 5 wearables. Please remove one before selecting another wearable.",!1,!1,0,10)
gf(c,f,x,_,e),!rl&&G_("cWearables",!0)}f_()}},c["purchaseWearable"]=function(c,f){Dr&&qf()&&swal({title:"Confirm",text:'If you click "Buy", you will purchase this wearable. It costs '+c,type:"warning",showCancelButton:!0,confirmButtonColor:"#4CAF50",confirmButtonText:"Yes, confirm purchase",cancelButtonText:"No, cancel purchase"},function(){if(qf()){vf(f)
var c=Oc(3)
c.setUint8(0,43,!0),c.setUint16(1,f,!0),Qc(c)}})},c["toggleGamemodeCollapse"]=function(){$_(co?0:1)},c["toggleInfoCollapse"]=function(){L_(fo?0:1)},c["togglePartyCollapse"]=function(){O_(xo?0:1)},c["toggleChatDimmed"]=function(){Q_(Qo?0:1)},c["checkUserLoggedIn"]=function(){return Xn?!0:(swal("Login first","Please log in on agma or register a new user account to use this functionality"),!1)},c["coinsXopen"]=function(c){c||(c=1)
var x=Hn,_="cprd="+c+"&cpn="+x+"&cpcid="+sa
if(x=="")return swal("Login first","Please log in on agma or register a new user account to use this functionality")
var e=""
f.ajax({type:"GET",url:"../xsl/gtk.php",data:_,beforeSend:function(){},success:function(c){c=="error"||(c=="noUser"?swal("Login or Register","Please log in to agma or register a new user account to use this functionality"):(e=c,loadXPlayer(e)))},complete:function(c){}})},c["logXOpn"]=function(c){var x="&cpn="+Hn
f.ajax({type:"GET",url:"../xsl/logXopen.php",data:x,beforeSend:function(){},success:function(c){},complete:function(c){}})},c["logXd"]=function(c){var x="dt="+c
f.ajax({type:"GET",url:"../xsl/logXd.php",data:x,beforeSend:function(){},success:function(c){},complete:function(c){}})},c["isBloc"]=function(){document["referrer"],navigator["appName"],navigator["userAgent"],navigator["language"],navigator["languages"],navigator["platform"],navigator["vendor"]
try{var c=window["screen"]["availWidth"],f=window["screen"]["availHeight"]}catch(x){var c="",f=""}var _=1,e=null,t=0
if(typeof Storage!=="undefined")try{e=localStorage.getItem("username"),t=localStorage.getItem("adTrackSubbd")}catch(n){console.log("caught exception, no cookies enabled!")}un||(_=0);({canRun:_,user:e,referrer:document["referrer"],navigatorName:navigator["appName"],userAgent:navigator["userAgent"],language:navigator["language"],languages:navigator["languages"],platform:navigator["platform"],vendor:navigator["vendor"],screenX:c,screenY:f})},c["loadXPlayer"]=function(c){var f={access_token:c,sandbox:!1},x=document.createElement("script")
x["type"]="text/javascript",x["async"]=!0,x["src"]="//static.xsolla.com/embed/paystation/1.0.7/widget.min.js",x.addEventListener("load",function(c){XPayStationWidget.init(f),XPayStationWidget.open(),$(".bs-example-modal-lg").modal("hide"),logXOpn(),XPayStationWidget.on(XPayStationWidget["eventTypes"].STATUS,function(c,f){logXd(f["paymentInfo"])})},!1)
var _=document.getElementsByTagName("head")[0]
_.appendChild(x)},c["partyAccept"]=function(){Kf(62)},c["partyDecline"]=function(){Kf(63)},c["zombieRemain"]=function(c,x){if(clearTimeout(timerInfectionModal),152==x){var _=new Audio("sounds/planting-c4.mp3")
_["volume"]=.1,_.play()}if(c&&qf()){var e=Oc(2)
e.setUint8(0,x,!0),e.setUint8(1,c,!0),Qc(e)}f("#infection_remain_zombie").stop(!0,!1).removeClass("visible").delay(400).hide(0)},c["friendAdd"]=function(c){c=c.trim(),c==""?T("Please type a username first",!1,!1,0,5):(Jf(81,c),document.getElementById("friendAddInput").value="",f("#friendAdd").prop("disabled",!0).css("cursor","progress"),setTimeout(function(){f("#friendAdd").prop("disabled",!1).css("cursor","")},2e3))},c["friendRemove"]=function(c,x){Jf(82,c),x&&(f(x).prop("disabled",!0).css("cursor","progress"),setTimeout(function(){f(x).prop("disabled",!1).css("cursor","")},2e3))},c["friendAccept"]=function(c,x){Jf(83,c),x&&(f(x).prop("disabled",!0).css("cursor","progress"),setTimeout(function(){f(x).prop("disabled",!1).css("cursor","")},2e3))},c["friendAcceptAll"]=function(){Kf(85),f("#friendAcceptAll").prop("disabled",!0).css("cursor","progress"),setTimeout(function(){f("#friendAcceptAll").prop("disabled",!1).css("cursor","")},2e3)},c["insertPMText"]=function(c){if(!$l){var f=document.getElementById("chtbox"),x="/pm "+c+" "
U(c),f["value"]=x,f["selectionStart"]=f["selectionEnd"]=x["length"],f.focus()}},c["v2za0"]=function(){return[123,124,~~(128*Math.random()+4),126,~~(128*Math.random()+4)]},c["displayInfoDialog"]=function(c){var x=!0,_=!0
if(!Xn){if(typeof Storage!=="undefined"||(x=!1),localStorage["infoDialog"]&&parseInt(localStorage["infoDialog"])>3&&parseInt(localStorage["infoDialog"])%3!=0&&(_=!1),Xn&&c=="infoHolderRegister"&&(_=!1),x&&_)if(sessionStorage.getItem(c)){if(+sessionStorage.getItem(c)<4){f("#"+c+"").show(),setTimeout(function(){f("#"+c+"").hide()},3e4)
var e=parseInt(sessionStorage.getItem(c))+1
sessionStorage.setItem(c,e)}}else sessionStorage.setItem(c,0),displayInfoDialog(c)
if(0==$e)if($e=1,localStorage["infoDialog"]){var t=parseInt(localStorage.getItem("infoDialog"))+1
localStorage.setItem("infoDialog",t)}else localStorage.setItem("infoDialog",0)}},c["setSkins"]=function(c){ol=c,f("#cSkins").prop("checked",ol),f("#cSkins2").prop("checked",ol),_a=!0,f_()},c["setWearables"]=function(c){rl=c,_a=!0,f_()},c["setColors"]=function(c){sl=!c,f_()},c["setNames"]=function(c){ll=c,f("#cNames").prop("checked",ll),f("#cNames2").prop("checked",ll),f_()},c["setMinionNames"]=function(c){ul=c,f_()},c["setMass"]=function(c){dl=c,f_()},c["setFood"]=function(c){hl=c,f_()},c["setCellAnimations"]=function(c){ml=c,f_()},c["setSkinAnimations"]=function(c){pl=c,f_()},c["setMapBorder"]=function(c){gl=!c,f_()},c["setFancyGrid"]=function(c){vl=c,f("#cFancyGrid").prop("checked",vl),f("#cFancyGrid2").prop("checked",vl),vl&&el&&(el=!1,G_("cSectionGrid",!1),G_("cGrid",!1),G_("cCustomBack",!1),el=!0),f_()},c["setSectionGrid"]=function(c){bl=c,f("#cSectionGrid").prop("checked",bl),f("#cSectionGrid2").prop("checked",bl),bl&&el&&(el=!1,G_("cFancyGrid",!1),G_("cGrid",!1),G_("cCustomBack",!1),el=!0),f_()},c["setGrid"]=function(c){yl=c,f("#cGrid").prop("checked",yl),f("#cGrid2").prop("checked",yl),yl&&el&&(el=!1,G_("cFancyGrid",!1),G_("cSectionGrid",!1),G_("cCustomBack",!1),el=!0),f_()},c["setCustomBack"]=function(c){kl=c,f("#cCustomBack").prop("checked",kl),f("#cCustomBack2").prop("checked",kl),f("#cCustomBack3").prop("checked",kl),kl&&el&&(el=!1,G_("cFancyGrid",!1),G_("cSectionGrid",!1),G_("cGrid",!1),el=!0,ws||Ss||(Cs!=""?P_(Cs,!1):f("#customBackModal").modal("show"))),f_()},c["setCustomBackType"]=function(c){wl=c,F_(),f_()},c["setCustomBackOpacity"]=function(c){c=Math.min(Math.max(~~((parseInt(c)||0)+.5),0),100),Ml=c/100,document.getElementById("customBackOpacityValue").innerHTML=c+"%",F_(),f_()},c["setCustomBackClip"]=function(c){Sl=c,F_(),f_()},c["setCustomBackEnableColor"]=function(c){Cl=c,F_(),f_()},c["setCustomBackColor"]=function(c){var f=(c+"").replace(/[^0-9a-f]/gi,"")
f["length"]<6&&(f=(f[0]||"0")+(f[0]||"0")+(f[1]||"0")+(f[1]||"0")+(f[2]||"0")+(f[2]||"0")),Il["r"]=parseInt(f.substr(0,2),16),Il["g"]=parseInt(f.substr(2,2),16),Il["b"]=parseInt(f.substr(4,2),16)
for(var x=(Il["r"]<<16|Il["g"]<<8|Il["b"]).toString(16);6>x["length"];)x="0"+x
Tl="#"+x,document.getElementById("customBackColorHex").innerHTML=Tl,F_(),f_()},c["setMultiEjectCellsAmount"]=function(c){c=Math.min(Math.max(parseInt(c)||1,1),5),multiEjectCellsAmountChosen=c,document.getElementById("customEjectAmountValue").innerHTML=c+""},c["setDark"]=function(c){Ul=c,Al=Ul?.8:.9,f("#cDark").prop("checked",Ul),f("#cDark2").prop("checked",Ul),Bx(),_a=!0,ea=!0,ta=!0,f_()},c["setSlowMotion"]=function(c){Pl=c,!Pl&&Ex(),f_()},c["setFPS"]=function(c){var x=Fl
Fl=c,Fl?(x||(f("#fps").text("---"),f("#ping").text("---"),$s=performance.now(),Ls=0,$x()),!_t&&(_t=setInterval($x,1e4)),f("#fpsBox").show(),f("#respawnTouch").addClass("fpsShow")):(et=!1,_t&&(clearInterval(_t),_t=0),f("#fpsBox").hide(),f("#respawnTouch").removeClass("fpsShow")),f_()},c["setZoom"]=function(c){Bl=c,!Bl&&el&&(el=!1,G_("cFixedZoom",!1),el=!0),dc(),f_()},c["setFixedZoom"]=function(c){var x=Dl!=c
Dl=c,f("#cFixedZoom").prop("checked",Dl),f("#cFixedZoom2").prop("checked",Dl),Dl&&el&&(el=!1,G_("cZoom",!0),el=!0),x&&_i>0&&_x(),f_()},c["setMinionUi"]=function(c){zl=c,f("#cMinionUi").prop("checked",zl),f("#cMinionUi2").prop("checked",zl),f("#cMinionUi3").prop("checked",zl),zl?(el&&(f("#minionUi").removeClass("minimized"),Is=!0),f("#minionUi").show()):f("#minionUi").hide(),f_()},c["setLeaderboard"]=function(c){Rl=c,Rl?(f("#brGameContainer").removeClass("no-leaderboard"),f("#infGameContainer").removeClass("no-leaderboard")):(f("#brGameContainer").addClass("no-leaderboard"),f("#infGameContainer").addClass("no-leaderboard")),_f(),_a=!0,f_()},c["setChat"]=function(c){$l=!c,$l?f("#chat").hide():(ea=!0,f("#chat").show()),f_()},c["setMinimap"]=function(c){Ll=!c,Ll?(f("#minimap").hide(),f("#brGameContainer").addClass("no-minimap"),f("#infGameContainer").addClass("no-minimap")):(ta=na=!0,f("#minimap").show(),f("#brGameContainer").removeClass("no-minimap"),f("#infGameContainer").removeClass("no-minimap")),f_()},c["setLargeNames"]=function(c){Ql=c,f_()},c["setNameOutlines"]=function(c){Gl=c,f_()},c["setCellSpikes"]=function(c){Wl=c,f_()},c["setCellBorders"]=function(c){Ol=!c,f("#cCellBorders").prop("checked",!Ol),f("#cCellBorders2").prop("checked",!Ol),f_()},c["setClassicViruses"]=function(c){Jl=c,Jl&&el&&(el=!1,G_("cCellSpikes",!0),el=!0),f_()},c["setPolygonShapes"]=function(c){Vl=c,Vl&&el&&(el=!1,G_("cLineShapes",!1),el=!0),Vl&&Dx(),f_()},c["setLineShapes"]=function(c){jl=c,jl&&el&&(el=!1,G_("cPolygonShapes",!1),el=!0),jl&&Dx(),f_()},c["setBubbleCells"]=function(c){Xl=c,el&&(el=!1,G_("cCellBorders",Xl),el=!0),f_()},c["setMobileLeft"]=function(c){Hl=c,f("#cMobileLeft").prop("checked",Hl),f("#cMobileLeft2").prop("checked",Hl),Hl?f(".touch-btn").addClass("left-side"):f(".touch-btn").removeClass("left-side"),f_()},c["setMobileFeedLock"]=function(c){Zl=c,f("#cMobileFeedLock").prop("checked",Zl),f("#cMobileFeedLock2").prop("checked",Zl),Zl?f("#touchEjectLockBtn").show():(ec(),f("#touchEjectLockBtn").hide()),f_()},c["setDefaults"]=function(){el=!1,G_("cSkins",xl["sSkins"]),G_("cWearables",xl["sWearables"]),G_("cColors",xl["sColors"]),G_("cNames",xl["sNames"]),G_("cMinionNames",xl["sMinionNames"]),G_("cMass",xl["sMass"]),G_("cFood",xl["sFood"]),G_("cCellAnimations",xl["sCellAnimations"]),G_("cSkinAnimations",xl["sSkinAnimations"]),G_("cMapBorder",xl["sMapBorder"]),G_("cFancyGrid",xl["sFancyGrid"]),G_("cSectionGrid",xl["sSectionGrid"]),G_("cGrid",xl["sGrid"]),G_("cCustomBack",xl["sCustomBack"]),G_("cCustomBackClip",xl["sCustomBackClip"]),G_("cCustomBackEnableColor",xl["sCustomBackEnableColor"]),G_("cDark",xl["sDark"]),G_("cSlowMotion",xl["sSlowMotion"]),G_("cFPS",xl["sFPS"]),G_("cZoom",xl["sZoom"]),G_("cFixedZoom",xl["sFixedZoom"]),G_("cMinionUi",xl["sMinionUi"]),G_("cLeaderboard",xl["sLeaderboard"]),G_("cChat",xl["sChat"]),G_("cMinimap",xl["sMinimap"]),G_("cCellBorders",xl["sCellBorders"]),G_("cLargeNames",xl["sLargeNames"]),G_("cNameOutlines",xl["sNameOutlines"]),G_("cCellSpikes",xl["sCellSpikes"]),G_("cClassicViruses",xl["sClassicViruses"]),G_("cPolygonShapes",xl["sPolygonShapes"]),G_("cLineShapes",xl["sLineShapes"]),G_("cBubbleCells",xl["sBubbleCells"]),ue&&(G_("cMobileLeft",xl["sMobileLeft"]),G_("cMobileFeedLock",xl["sMobileFeedLock"])),el=!0,f_()}
var xu={8:"BACKSPACE",9:"TAB",12:"CLEAR",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSE",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGEUP",34:"PAGEDOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",44:"PRTSCN",45:"INS",46:"DEL",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"WIN",92:"WIN",93:"CONTEXTMENU",96:"NUM 0",97:"NUM 1",98:"NUM 2",99:"NUM 3",100:"NUM 4",101:"NUM 5",102:"NUM 6",103:"NUM 7",104:"NUM 8",105:"NUM 9",106:"NUM *",107:"NUM +",109:"NUM -",110:"NUM .",111:"NUM /",144:"NUMLOCK",145:"SCROLLLOCK"},_u={Space:{c:32,d:"SPACE"},W:{c:87,d:"W"},V:{c:86,d:"V"},Z:{c:90,d:"Z"},F:{c:70,d:"F"},Q:{c:81,d:"Q"},E:{c:69,d:"E"},S:{c:83,d:"S"},A:{c:65,d:"A"},X:{c:88,d:"X"},I:{c:73,d:"I"},C:{c:67,d:"C"},D:{c:68,d:"D"},T:{c:84,d:"T"},M:{c:77,d:"M"},W360:{c:87,d:"W"},DW:{c:66,d:"B"}},eu={Space:{c:_u["Space"]["c"],d:_u["Space"]["d"]},W:{c:_u["W"]["c"],d:_u["W"]["d"]},V:{c:_u["V"]["c"],d:_u["V"]["d"]},Z:{c:_u["Z"]["c"],d:_u["Z"]["d"]},F:{c:_u["F"]["c"],d:_u["F"]["d"]},Q:{c:_u["Q"]["c"],d:_u["Q"]["d"]},E:{c:_u["E"]["c"],d:_u["E"]["d"]},S:{c:_u["S"]["c"],d:_u["S"]["d"]},A:{c:_u["A"]["c"],d:_u["A"]["d"]},X:{c:_u["X"]["c"],d:_u["X"]["d"]},I:{c:_u["I"]["c"],d:_u["I"]["d"]},C:{c:_u["C"]["c"],d:_u["C"]["d"]},D:{c:_u["D"]["c"],d:_u["D"]["d"]},T:{c:_u["T"]["c"],d:_u["T"]["d"]},M:{c:_u["M"]["c"],d:_u["M"]["d"]},W360:{c:_u["W360"]["c"],d:_u["W360"]["d"]},DW:{c:_u["DW"]["c"],d:_u["DW"]["d"]}},tu=null
c["openSettingPage"]=function(c){f(".setting-tablink").removeClass("active"),f("#settingTab"+c).addClass("active"),f(".setting-tabcontent").hide(),f("#settingPage"+c).show()},c["hotkeySelect"]=function(c){var x=c["currentTarget"]
tu&&(x&&f(x).hasClass("selected")&&(x=null),W_()),x&&(tu=x,J_(tu).addClass("selected"))},c["hotkeyClear"]=function(c){var f=c["currentTarget"],x=V_(f)
if(x){x["c"]=0,x["d"]=""
var _=J_(f)
_.addClass("updated"),setTimeout(function(){_.removeClass("updated")},50),X_(),H_(),W_()}c.preventDefault()},c["hotkeySetDefaults"]=function(){eu["Space"]={c:_u["Space"]["c"],d:_u["Space"]["d"]},eu["W"]={c:_u["W"]["c"],d:_u["W"]["d"]},eu["V"]={c:_u["V"]["c"],d:_u["V"]["d"]},eu["Z"]={c:_u["Z"]["c"],d:_u["Z"]["d"]},eu["F"]={c:_u["F"]["c"],d:_u["F"]["d"]},eu["Q"]={c:_u["Q"]["c"],d:_u["Q"]["d"]},eu["E"]={c:_u["E"]["c"],d:_u["E"]["d"]},eu["S"]={c:_u["S"]["c"],d:_u["S"]["d"]},eu["A"]={c:_u["A"]["c"],d:_u["A"]["d"]},eu["X"]={c:_u["X"]["c"],d:_u["X"]["d"]},eu["I"]={c:_u["I"]["c"],d:_u["I"]["d"]},eu["C"]={c:_u["C"]["c"],d:_u["C"]["d"]},eu["D"]={c:_u["D"]["c"],d:_u["D"]["d"]},eu["T"]={c:_u["T"]["c"],d:_u["T"]["d"]},eu["M"]={c:_u["M"]["c"],d:_u["M"]["d"]},eu["W360"]={c:_u["W360"]["c"],d:_u["W360"]["d"]},eu["DW"]={c:_u["DW"]["c"],d:_u["DW"]["d"]},f(".hotkey-input").addClass("updated"),setTimeout(function(){f(".hotkey-input").removeClass("updated")},50),X_(),H_(),W_()}
var nu=500,au=!1,iu=-1,ou=-1,ru=1,su=0,lu=null,uu={},du={},hu=[5,3,6,6,6,3,4,6,6,3,6,5,5,4,3,6,4,6,6,5,6,6,5,4,4,5,5,6,4,5,3,5,6,5,4,6,6,5,4,6,5,5,6,4,6,5,6,5,5,4,6,6,4,4,6,4,3,5,6,4,4,3,5,4,3,4,5,3,4,6,4,3,3,3,4,5,4,6,5,6,5,5,4,3,5,6,5,5,5,5,6,6,4,3,5,4,3,4,6,5],mu=[1,1,1,1.25,1.12,1.07,1.05,1.04,1.03,1.02,1.02,1.01,1.01,1.01,1,1],pu=[],gu={},vu={},bu="Agma.io Player",yu={},ku={0:"Free For All",1:"Teams",2:"Experimental",6:"Selffeed",10:"Tournament",11:"Hunger Games",15:"Battle Royale",16:"Domination",17:"Infection"},wu={0:"center",1:"top",2:"bottom",3:"left",4:"right",5:"max"},Mu=["#FFFFFF","#FFD700","#22FF22","#2299FF","#FF9922","#FF2222","#000000","#800080","#800080","#0086b9"],Su=["#000000","#5C4D00","#000000","#000000","#000000","#000000","#777777","#f5e666","#2533ed","#06ffda"],Cu=Z_("img/animations/flash.png"),Tu=Z_("img/animations/hit.png"),Iu=Z_("img/animations/speedlines.png"),Uu=Z_("img/animations/speedcircles.png"),Au=Z_("img/chaticons6.png?v=2"),Nu=Z_("emotes/emojisheet.png"),Pu=Z_("img/mousecursor.png"),Fu=function(c){return _i+~~(60*(c||0)/1e3)},Bu=function(c){return ei+(c||0)},Du={1:{time:Bu,duration:800},2:{time:Bu,duration:800},3:{time:Bu,duration:2e3},4:{time:Bu,duration:1,sprites:{canvas:q_("img/animations/360shot2.png"),nFrames:6,nCols:3,ticksPerFrame:7,nLoops:1,scale:1.8,xOffset:0,yOffset:0,globalAlpha:.7,globalAlphaBub:.5}},5:{time:Bu,duration:1,sprites:{canvas:q_("img/animations/levelUp2.png"),nFrames:21,nCols:7,ticksPerFrame:7,nLoops:1,scale:2,xOffset:0,yOffset:-70,globalAlpha:.9,globalAlphaBub:.9}},6:{time:Bu,duration:3e3},7:{time:Bu,duration:0},8:{time:Bu,duration:2e3},9:{time:Bu,duration:400},10:{time:Bu,duration:1,ignoreAnimSetting:!0,sprites:{canvas:q_("img/animations/medal_1st.png"),nFrames:1,nCols:1,ticksPerFrame:200,nLoops:0,scale:.4,xOffset:0,yOffset:-480,globalAlpha:.9,globalAlphaBub:.7}},11:{time:Bu,duration:2200},12:{time:Bu,duration:1,sprites:{canvas:q_("img/animations/wacky2.png"),nFrames:20,nCols:5,ticksPerFrame:2.4,nLoops:2.75,scale:1.1,xOffset:0,yOffset:0,globalAlpha:.9,globalAlphaBub:.7}},13:{time:Fu,duration:1},14:{time:Bu,duration:1,sprites:{canvas:q_("img/animations/iced.png"),nFrames:1,nCols:1,ticksPerFrame:200,nLoops:1,scale:1.45,xOffset:0,yOffset:41,globalAlpha:1,globalAlphaBub:.7,fade:{tickFrom:150,tickTo:200,fadeFrom:0,fadeTo:1}}},15:{time:Bu,duration:10300},16:{time:Bu,duration:400},17:{time:Bu,duration:1,sprites:{canvas:q_("img/animations/upgrade.png"),nFrames:25,nCols:5,ticksPerFrame:3,nLoops:1,scale:1.5,xOffset:0,yOffset:0,globalAlpha:.7,globalAlphaBub:.5}},18:{time:Bu,duration:800},20:{time:Bu,duration:1,sprites:{canvas:q_("img/animations/anti_iced.png"),nFrames:1,nCols:1,ticksPerFrame:200,nLoops:1,scale:1.45,xOffset:0,yOffset:41,globalAlpha:1,globalAlphaBub:.7,fade:{tickFrom:150,tickTo:200,fadeFrom:0,fadeTo:1}}},21:{time:Bu,duration:1,sprites:{canvas:q_("img/animations/anti_rec.png"),nFrames:1,nCols:1,ticksPerFrame:250,nLoops:1,scale:1.35,xOffset:0,yOffset:41,globalAlpha:.5,globalAlphaBub:.2,fade:{tickFrom:200,tickTo:250,fadeFrom:0,fadeTo:1}}}}
!function(){for(var c=0;255>=c;c++){var f=Du[c]
if(f){var x=f["sprites"]
x&&(f["duration"]=x["nFrames"]*x["ticksPerFrame"]*x["nLoops"]*1e3/60),0==f["duration"]&&(f["duration"]=f["time"]===Fu?1800:3e4)}}}(),function(){var c=ia[te("T2JqZWN0")],f=c?c[te("Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9y")]:null,x=f?f(ia,te("Y2FuUnVuQWRz")):null
Mi=!f||x&&!x[te("d3JpdGFibGU=")]&&!x[te("Y29uZmlndXJhYmxl")]}(),function(){pu=[]
for(var c=2*Math["PI"]/1e4,f=0;1e4>f;f++)pu.push({cos:Math.cos(f*c),sin:Math.sin(f*c)})}(),Kx["prototype"]={id:0,color:"",colorDimmed:"",pid:0,oid:0,name:null,skinId:0,skinFrames:null,hasImage:!1,imgLoadedLo:null,imgLoaded:null,wears:null,starsCache:null,rclanCache:null,nameCache:null,sizeCache:null,copyCell:null,x:0,y:0,size:0,ox:0,oy:0,oSize:0,nx:0,ny:0,nSize:0,ga:1,createTime:0,updateTime:0,shouldUpdate:!1,destroyed:!1,spiked:0,pins:null,pinsCache:null,imageId:0,strokeSize:0,anim:null,transform:null,ownCell:!1,singleCellPlayer:!1,cellType:-1,smallFood:!1,shape:0,rotation:0,orientation:0,colorIndexName:0,isMinion:!1,sameParty:!1,isGhosted:!1,isCloaked:!1,coronaSpikes:!1,stars:0,touchUser:0,destroy:function(c){var f
if(this.smallFood){var x=Ca["length"]
for(f=0;x>f;f++)if(Ca[f]==this){Ca.splice(f,1)
break}}else{var x=Sa["length"]
for(f=0;x>f;f++)if(Sa[f]==this){Sa.splice(f,1)
break}if(0==this.cellType){this.ownCell&&(f=wa.indexOf(this),-1!=f&&(Ni=!0,wa.splice(f,1))),f=ka.indexOf(this.id),-1!=f&&ka.splice(f,1)
var _=this.isMinion?Ua[this.oid]:Ia[this.oid]
_&&(f=_.indexOf(this),-1!=f&&_.splice(f,1),0==_["length"]&&(this.isMinion?delete Ua[this.oid]:delete Ia[this.oid])),this.starsCache=null,this.rclanCache=null,this.nameCache=null,this.sizeCache=null,this.copyCell=null}}delete Ma[this.id],this.destroyed=!0,this.shouldUpdate=!0,c&&(hl||!this.smallFood||Wa)&&Ta.push(this)},getNameSize:function(){return Ql?50+~~(.3*this.size):Math.max(~~(.3*this.size),24)},setName:function(c){if(c!==this.name)if(this.name=c){var f=""
if(c[0]=="["){var x=c.indexOf("]");-1!=x&&(f=c.slice(1,x),c=c["length"]>x+1?c.slice(x+1+(c[x+1]==" "?1:0)):"",f!=""&&(null==this.rclanCache?this.rclanCache=new c_(~~(this.getNameSize()/2+.5),"#FFFFFF",!0,"#000000"):this.rclanCache.setSize(~~(this.getNameSize()/2+.5)),this.rclanCache.setValue(" "+f+" ")))}f==""&&(this.rclanCache=null),c!=""?(null==this.nameCache?this.nameCache=new c_(this.getNameSize(),"#FFFFFF",!0,"#000000"):this.nameCache.setSize(this.getNameSize()),this.nameCache.setValue(" "+c+" ")):this.nameCache=null}else this.rclanCache=null,this.nameCache=null},reloadImage:function(){if(0==this.skinId||ui)if(0!=this.imageId){var c=null,f=null;(ol||0!=this.cellType)&&(c=gu[this.imageId+"_lo"],!c&&(_e(this.imageId,this.cellType),c=gu[this.imageId+"_lo"]),f=gu[this.imageId]),this.hasImage=!0,this.imgLoadedLo=c&&c["complete"]&&0!=c["width"]?c:null,this.imgLoaded=f&&f["complete"]&&0!=f["width"]?f:null,this.skinFrames=null}else this.hasImage=!1,this.imgLoadedLo=null,this.imgLoaded=null,this.skinFrames=null
else{var c=null,f=null
ol&&(c=uu[this.skinId+"_lo"],!c&&(fe(this.skinId),c=uu[this.skinId+"_lo"]),f=uu[this.skinId]),this.hasImage=!0,this.imgLoadedLo=c&&c["complete"]&&0!=c["width"]?c:null,this.imgLoaded=f&&f["complete"]&&0!=f["width"]?f:null,Cr[this.skinId]?(this.skinFrames&&this.skinFrames["skinId"]==this.skinId||(this.skinFrames={skinId:this.skinId,apngLoadedLo:null,apngLoaded:null,zeroTime:0,runTime:0,currentFrame:0}),c=f=null,ol&&pl&&(c=du[this.skinId+"_lo"],!c&&(xe(this.skinId),c=du[this.skinId+"_lo"]),f=du[this.skinId]),this.skinFrames["apngLoadedLo"]=c&&c["complete"]&&0!=c["width"]?c:null,this.skinFrames["apngLoaded"]=f&&f["complete"]&&0!=f["width"]?f:null):this.skinFrames=null}},reloadWear:function(c){var f=null,x=null
rl&&(f=gu["W"+c["wearId"]+"_lo"],!f&&(ee(c["wearId"]),f=gu["W"+c["wearId"]+"_lo"]),x=gu["W"+c["wearId"]]),c["imgLoadedLo"]=f&&f["complete"]&&0!=f["width"]?f:null,c["imgLoaded"]=x&&x["complete"]&&0!=x["width"]?x:null},calcPins:function(){var c=this.pinsCache,f=!Jl&&2==this.spiked,x=4==this.cellType?.83*this.size:this.size,_=0!=this.id?this.size*ru:this.size
if(f&&(_*=.3),_=_>30?1e3>_?2*~~(_/2):1e3:30,c["p"]!=_||0!=~~(c["s"]-x)||0!=~~(c["x"]-this.x)||0!=~~(c["y"]-this.y)){9==this.cellType&&0!=~~(c["s"]-x)&&0!=this.id&&(this.rotation+=Math["PI"]/(this.size*ni),this.rotation>Math["PI"]&&(this.rotation-=2*Math["PI"]))
var e,t,n=this.pins,a=2==this.spiked?1e4*(this.rotation/(2*Math["PI"])+1)+.5:.5,i=1e4/_,o=12*ni,r=(o*c["s"]+x)/(o+1),s=r+(f?this.size<100?~~(this.size/5):20:5),l=f
for(c["x"]=this.x,c["y"]=this.y,c["s"]=r,c["p"]=_,n["length"]>_&&n.splice(_);n["length"]<_;)n.push({x:this.x,y:this.y})
for(var u=0;_>u;++u)e=n[u],o=l?r:s,(!f||l)&&(t=pu[~~(i*u+a)%1e4]),l=!l,e["x"]=this.x+t["cos"]*o,e["y"]=this.y+t["sin"]*o
this.strokeSize=he?r:s}},updatePos:function(){var c=Pl?480:120,f=(ei-this.updateTime)/c,x=0>f?0:f>1?1:f,_=this.x,e=this.y
if(this.x=x*(this.nx-this.ox)+this.ox,this.y=x*(this.ny-this.oy)+this.oy,this.size=x*(this.nSize-this.oSize)+this.oSize,this.pinsCache&&(2==this.cellType||22==this.cellType)){var t=this.x-_,n=this.y-e;(0!=~~t||0!=~~n)&&(this.rotation+=.2*Math.sqrt(t*t+n*n)*Math["PI"]/this.size,this.rotation>Math["PI"]&&(this.rotation-=2*Math["PI"]))}if(Pl&&this.ga<1&&(f=(ei-this.createTime)/c,this.ga=0>f?0:f>1?1:f),x>=1&&(this.shouldUpdate=!1,this.destroyed)){var a=Ta.indexOf(this);-1!=a&&Ta.splice(a,1)}return x},drawCell:function(c){var f=(this.wears&&rl?2.5*this.size:this.size)+40
if(!hl&&this.smallFood&&(!this.shouldUpdate||this.x==this.nx&&this.y==this.ny)&&!Wa||(this.x+f<ba-Gn||this.y+f<ya-Wn||this.x-f>ba+Gn||this.y-f>ya+Wn))this.shouldUpdate&&(this.updatePos(),1!=this.cellType&&(this.pinsCache=null,this.strokeSize=4==this.cellType?.83*this.size:this.size))
else{var x,_=jl&&2==this.shape,e=Vl&&this.shape>=3||_,t=!this.spiked||!Wl||e||Ci<(Jl||2!=this.spiked?.2:.06)&&0!=this.id,n=this.shouldUpdate?this.updatePos():1,a=!1,i=this.x,o=this.y
if(1!=this.cellType){if(t?this.pinsCache&&(this.pinsCache=null):this.pinsCache||(x=4==this.cellType?.83*this.size:this.size,this.pinsCache={x:0,y:0,s:x,p:0},!this.pins&&(this.pins=[])),this.anim){for(x=0;x<this.anim["length"];x++){switch(f=this.anim[x],f["animId"]){case 3:this.spin(f)
break
case 6:this.flip(f)
break
case 7:this.flipCoin(f)
break
case 8:this.shake(f)
break
case 11:this.jump(f)}0==f["animId"]&&(this.anim.splice(x,1),x--)}for(x=0;x<this.anim["length"];x++){switch(f=this.anim[x],f["animId"]){case 15:this.drawSpeed(f,c,i,o)}0==f["animId"]&&(this.anim.splice(x,1),x--)}0==this.anim["length"]&&(this.anim=null)}(f=this.transform)&&(f["t"]||f["s"]||f["r"])&&(c.save(),a=!0,f["t"]&&(f["tx"]+=i,f["ty"]+=o,c.translate(f["tx"],f["ty"]),i=o=0),f["s"]&&c.scale(f["sx"],f["sy"]),f["r"]&&c.rotate(f["rz"]))}if(c.beginPath(),t)if(0==this.cellType&&di?(x=ni*(.4>Ci?15*Ci:6),this.size<this.strokeSize&&(x/=3),this.strokeSize=(x*this.strokeSize+this.size)/(x+1)):this.spiked?(x=12*ni,this.strokeSize=(x*this.strokeSize+(4==this.cellType?.83*this.size:this.size))/(x+1)):this.strokeSize=this.size,e){this.rotation-=Math["PI"]/(1e3*ni),this.rotation<-Math["PI"]&&(this.rotation+=2*Math["PI"]),f=this.shape
var r=this.strokeSize*mu[f],s=1e4*(this.rotation/(2*Math["PI"])+1)+.5,l=1e4/f,u=pu[~~s%1e4]
for(c.moveTo(i+r*u["cos"],o-r*u["sin"]),x=1;f>x;x++)u=pu[~~(l*x+s)%1e4],c.lineTo(i+r*u["cos"],o-r*u["sin"])
c.closePath()}else if(this.coronaSpikes&&Wl){f=16
var d=this.strokeSize,h=ei%1e3,s=500>=h?h/500:1-(h-500)/500,l=1e4/f,u=pu[~~(.25*l+.5)%1e4]
for(c.moveTo(i+d*u["cos"],o-d*u["sin"]),x=0;f>x;x++)h=x%2==0?d*(1.2+.15*s):d*(1.35-.15*s),u=pu[~~(l*(x+.5)+.5)%1e4],c.lineTo(i+h*u["cos"],o-h*u["sin"]),u=pu[~~(l*(x+.75)+.5)%1e4],c.lineTo(i+d*u["cos"],o-d*u["sin"]),f-1>x&&(u=pu[~~(l*(x+1.25)+.5)%1e4],c.lineTo(i+d*u["cos"],o-d*u["sin"]))
c.closePath()}else if(11==this.cellType)c.rect(i-this.strokeSize,o-this.strokeSize,2*this.strokeSize,2*this.strokeSize)
else if(16==this.cellType){var s=this.strokeSize,l=this.strokeSize/8
1==this.orientation&&(s=l,l=this.strokeSize),c.rect(i-s,o-l,2*s,2*l)}else c.arc(i,o,this.strokeSize,0,2*Math["PI"],!1)
else{this.calcPins(),f=this.pins["length"]
var s=this.pins[0],l=i-this.x,u=o-this.y
for(c.moveTo(s["x"]+l,s["y"]+u),x=1;f>x;++x)s=this.pins[x],c.lineTo(s["x"]+l,s["y"]+u)
c.closePath()}if(f=((this.spiked?.03:.05)<Ci||0==this.id)&&(60<this.size||this.spiked||!this.smallFood&&25<this.size&&Ci>.15||Xl&&(Ci>.4||20<this.size)),_||(x=this.ga*(this.isCloaked?.04:this.isGhosted?.2:Xl?!f&&this.smallFood?1:this.spiked&&!Yl?.7:.4:this.smallFood?1:this.spiked&&Yl||14==this.cellType?.7:Ci>.4||60<this.size?.95:1),c["globalAlpha"]=this.destroyed?x*(1-n):x,c["fillStyle"]=this.isGhosted?"#AAAAAA":sl?"#FFFFFF":this.color,c.fill()),((f&&(!Ol||this.spiked&&!ue)||_)&&!this.isCloaked||this.isCloaked&&(this.ownCell||Wa))&&(x=this.ga,c["globalAlpha"]=this.destroyed?x*(1-n):x,c["lineWidth"]=this.isCloaked&&(this.ownCell||Wa)?30:this.smallFood?4:Xl?this.spiked||25<this.size?6:4:this.spiked&&80>this.size?8:10,c["lineJoin"]=this.spiked&&(Jl||2!=this.spiked||this.size<70)?"miter":"round",c["strokeStyle"]=this.isCloaked&&(this.ownCell||Wa)?Ul?"#333333":"#DDDDDD":this.isGhosted||sl?"#AAAAAA":Xl?this.color:this.colorDimmed,c.stroke()),1!=this.cellType){if(this.hasImage&&(ol||0!=this.cellType)&&!_&&!this.isGhosted){f=e?this.strokeSize*mu[this.shape]:this.coronaSpikes&&!he?this.strokeSize*(1.275+.075*Math.abs(ei%500/250-1)):11==this.cellType?1.28*this.strokeSize:this.strokeSize,f<this.size&&!he&&(f=this.size)
var m
if(this.skinFrames&&pl){x=this.skinFrames
var p=128>=2*f*Ci?x["apngLoadedLo"]:x["apngLoaded"]
if(!p&&(this.reloadImage(),p=128>=2*f*Ci?x["apngLoadedLo"]:x["apngLoaded"]),p){0==x["zeroTime"]&&(x["zeroTime"]=ei),x["runTime"]=ei-x["zeroTime"],x["runTime"]>=p["playTime"]&&(x["zeroTime"]+=~~(x["runTime"]/p["playTime"])*p["playTime"],x["runTime"]%=p["playTime"],x["currentFrame"]=0),x["currentFrame"]>=p["frames"]["length"]&&(x["currentFrame"]=0)
for(var g=p["frames"][x["currentFrame"]];x["runTime"]>=g["end"]&&x["currentFrame"]<p["frames"]["length"]-1;)g=p["frames"][++x["currentFrame"]]
m=g["canvas"]}}if(!m&&(m=128>=2*f*Ci?this.imgLoadedLo:this.imgLoaded),!m&&(this.reloadImage(),m=128>=2*f*Ci?this.imgLoadedLo:this.imgLoaded),m){x=this.ga*(this.isCloaked?.01:Xl?0!=this.imageId?.5:.3:0!=this.imageId?.85:1),c["globalAlpha"]=this.destroyed?x*(1-n):x
var l=f,u=!1
16==this.cellType?(l=f/8,1==this.orientation&&(c.save(),u=!0,c.translate(i,o),c.rotate(Math["PI"]/2),c.translate(-i,-o))):he&&!e||11==this.cellType||(c.save(),u=!0,c.clip()),c.drawImage(m,i-f,o-l,2*f,2*l),u&&c.restore()}}if(this.wears&&rl&&!this.isGhosted){f=this.strokeSize
for(var v=0;v<this.wears["length"];v++){var b=this.wears[v],y=b["wearArea"],k=5==y?5*f:3*f,m=128>=k*Ci?b["imgLoadedLo"]:b["imgLoaded"]
!m&&(this.reloadWear(b),m=128>=k*Ci?b["imgLoadedLo"]:b["imgLoaded"]),m&&(x=this.ga*(this.isCloaked?.01:Xl?.7:.95),c["globalAlpha"]=this.destroyed?x*(1-n):x,c.drawImage(m,i-(3==y||5==y?2.5:4==y?.5:1.5)*f,o-(1==y||5==y?2.5:2==y?.5:1.5)*f,k,k))}}if(this.anim){for(x=0;x<this.anim["length"];x++){switch(f=this.anim[x],f["animId"]){case 2:this.drawHighlight(f,c,i,o)
break
case 9:this.drawHit(f,c,i,o)
break
case 13:this.drawDragOver(f,c,i,o)
break
case 16:this.drawCloakHighlight(f,c,i,o)
break
case 4:case 5:case 10:case 12:case 14:case 20:case 21:case 22:case 17:this.drawSprites(f,c,i,o)}0==f["animId"]&&(this.anim.splice(x,1),x--)}for(x=0;x<this.anim["length"];x++){switch(f=this.anim[x],f["animId"]){case 1:this.drawFlash(f,c,i,o)
break
case 18:this.drawBlast(f,c,i,o)}0==f["animId"]&&(this.anim.splice(x,1),x--)}0==this.anim["length"]&&(this.anim=null)}0==this.cellType&&(this.singleCellPlayer?10:20)<this.size*Ci&&(ul||!this.isMinion||125<this.size)&&(pi<this.size||this.singleCellPlayer&&30<=this.size)&&!this.destroyed&&Yi&&this.drawText(c,i,o)}a&&((f=this.transform)&&(f["t"]&&(f["t"]=!1,f["tx"]=f["ty"]=0),f["s"]&&(f["s"]=!1,f["sx"]=f["sy"]=1),f["r"]&&(f["r"]=!1,f["rz"]=0)),c.restore())}},setAnimation:function(c){if(1!=this.cellType)if(c={animId:c["animId"],animStartTime:c["animStartTime"],received:c["received"]},this.anim){for(var f=0;f<this.anim["length"];f++)if(this.anim[f]["received"]>c["received"])return this.anim.splice(f,0,c),void(this.anim["length"]>za&&this.anim.splice(this.anim["length"]-2,1))
this.anim["length"]<za?this.anim.push(c):this.anim[this.anim["length"]-1]=c}else this.anim=[c]},clearAnimation:function(c){if(this.anim)if(0==c)this.anim=null
else{for(var f=0;f<this.anim["length"];f++)this.anim[f]["animId"]==c&&(this.anim.splice(f,1),f--)
0==this.anim["length"]&&(this.anim=null)}},getTransform:function(){return!this.transform&&(this.transform={t:!1,s:!1,r:!1,tx:0,ty:0,sx:1,sy:1,rz:0}),this.transform},spin:function(c){var f=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(f=0>f?0:f>1?1:f,f>=1)c["animId"]=0
else{var x=1-f,_=this.getTransform()
ml&&(_["t"]=_["r"]=!0),_["rz"]+=((1+4*(1-x*x))%2-1)*Math["PI"]}},flip:function(c){var f=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(f=0>f?0:f>1?1:f,f>=1)c["animId"]=0
else{var x=1-f,_=x*x,e=this.getTransform()
ml&&(e["t"]=e["s"]=e["r"]=!0),e["sx"]*=pu[~~(1e4*((1+8*(1-_))%2+1)/2+.5)%1e4]["cos"],e["rz"]+=(_>.75?_-1:_>.25?.5-_:_)*Math["PI"]}},flipCoin:function(c){if(this.destroyed)c["animId"]=0
else{var f=(ei-c["animStartTime"])/2e3
f>=1&&(c["animStartTime"]+=2e3,f%=1),f=0>f?0:f>1?1:f
var x=this.getTransform()
ml&&(x["t"]=x["s"]=!0),x["sx"]*=pu[~~(1e4*(f>.5?1-f:f)/2+.5)]["cos"]}},shake:function(c){var f=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(f=0>f?0:f>1?1:f,f>=1)c["animId"]=0
else{var x=1-f,_=this.getTransform()
ml&&(_["t"]=_["r"]=!0),_["tx"]+=~~((100+.1*this.size)*x*(Math.random()-.5)),_["ty"]+=~~((100+.1*this.size)*x*(Math.random()-.5)),_["rz"]+=.5*x*(Math.random()-.5)*Math["PI"]}},jump:function(c){var f=(ei-c["animStartTime"])/(Du[c["animId"]]["duration"]-20*(this.id%20))
if(f=0>f?0:f>1?1:f,f>=1)f=(ei-c["animStartTime"])/Du[c["animId"]]["duration"],f>=1&&(c["animId"]=0)
else{for(var x=3,_=1e3,e=.5,t=.4,n=2*t*Math.max(_/(_+this.size),.2),a=n*this.size/(2*(_+this.size*(1+n))),i=x*f,o=1,r=this.getTransform(),s=(i+.70710678*a)%1,l=0;~~i>l;l++)o*=e
if(ml&&(r["t"]=r["s"]=!0),s>a&&1-a>s){s=(s-a)/(1-2*a),s=1-2*(s>.5?1-s:s)
var u=-.5*n*o,d=s*s
r["ty"]+=u*this.size+(_+this.size)*o*(d-1),r["sx"]*=1+u*d,r["sy"]*=1-u*d}else{s=a>=s?s/a:1-(s-1+a)/a
var u=(.5-s*s)*n*o
r["ty"]+=u*this.size,r["sx"]*=1+u,r["sy"]*=1-u}}},drawHighlight:function(c,f,x,_){var e=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(e=0>e?0:e>1?1:e,e>=1||this.destroyed)c["animId"]=0
else{var t=.05>e?e/.05:.5>e?1:1-(e-.5)/.5
f["globalAlpha"]=(Ul?.25:.18)*t,f["lineWidth"]=Math.min(30+30*Math.max(1-2*Ci,0),this.size),f["lineJoin"]=this.spiked?"miter":"round",f["strokeStyle"]=Ul?"#FFFFFF":"#000000",f.stroke()}},drawCloakHighlight:function(c,f,x,_){var e=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(e=0>e?0:e>1?1:e,e>=1||this.destroyed||this.ownCell)c["animId"]=0
else{var t=.5>e?1:1-(e-.5)/.5
f["globalAlpha"]=t,f["lineWidth"]=30,f["lineJoin"]=this.spiked?"miter":"round",f["strokeStyle"]=Ul?"#333333":"#DDDDDD",f.stroke()}},drawDragOver:function(c,f,x,_){c["animId"]=0,f["globalAlpha"]=.5,f["fillStyle"]="#FFFFFF",f.fill()},drawFlash:function(c,f,x,_){var e=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(e=0>e?0:e>1?1:e,e>=1||this.destroyed)c["animId"]=0
else if(ml){var t=this.transform,n=t&&(t["s"]||t["r"])
n&&(f.restore(),f.save(),t["t"]&&f.translate(t["tx"],t["ty"]))
var a,i=Cu
if(i&&i["complete"]&&0!=i["width"]){a=.2>e?e/.2:1-(e-.2)/.8
var o=this.size/20,r=i["width"]*o*a,s=i["height"]*o*a
f["globalAlpha"]=.7*a*a,f.drawImage(i,x-r/2,_-s/2,r,s)}.9>e&&(a=e/.9,f.beginPath(),f.arc(x,_,1.3*this.size+500*a,0,2*Math["PI"],!1),f["globalAlpha"]=.2*(1-a)*(1-a),f["lineWidth"]=~~(20+.02*this.size),f["strokeStyle"]="#90A0FF",f.stroke()),n&&(t["s"]&&f.scale(t["sx"],t["sy"]),t["r"]&&f.rotate(t["rz"]))}},drawBlast:function(c,f,x,_){var e=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(e=0>e?0:e>1?1:e,e>=1)c["animId"]=0
else if(ml){!c["pos"]&&(c["pos"]={x:this.nx,y:this.ny}),x=c["pos"]["x"],_=c["pos"]["y"]
var t=this.transform,n=t&&(t["t"]||t["s"]||t["r"])
n&&(f.restore(),f.save()),f.beginPath(),f.arc(x,_,this.size+1340*e,0,2*Math["PI"],!1),f["globalAlpha"]=.5*(1-e)*(1-e),f["fillStyle"]=Ul?"#FFFFFF":"#777777",f.fill(),n&&(t["t"]&&f.translate(t["tx"],t["ty"]),t["s"]&&f.scale(t["sx"],t["sy"]),t["r"]&&f.rotate(t["rz"]))}},drawSprites:function(c,f,x,_){var e=Du[c["animId"]]["sprites"],t=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(t=0>t?0:t>1?1:t,t>=1||this.destroyed||!e||e["nFrames"]<1||e["nCols"]<1)c["animId"]=0
else if(e["canvas"]&&e["canvas"]["complete"]){var n=~~(60*(ei-c["animStartTime"])/1e3-1)
if(0>n&&(n=0),frameIndex=~~(n/e["ticksPerFrame"]),(e["nLoops"]<=0||e["nLoops"]>1&&frameIndex<e["nFrames"]*e["nLoops"])&&(frameIndex%=e["nFrames"]),frameIndex>e["nFrames"]-1)c["animId"]=0
else if(ml||Du[c["animId"]]["ignoreAnimSetting"]){var a=e["canvas"]["width"]/e["nCols"],i=e["canvas"]["height"]/Math.ceil(e["nFrames"]/e["nCols"]),o=2*e["scale"]*this.strokeSize/Math.max(a,i),r=a*o,s=i*o,l=e["fade"],u=!l||n<l["tickFrom"]?0:n>=l["tickTo"]?l["fadeTo"]:l["fadeFrom"]+(l["fadeTo"]-l["fadeFrom"])*(n-l["tickFrom"])/(l["tickTo"]-l["tickFrom"])
f["globalAlpha"]=(Xl?e["globalAlphaBub"]:e["globalAlpha"])*(1-u),f.drawImage(e["canvas"],frameIndex%e["nCols"]*a,~~(frameIndex/e["nCols"])*i,a,i,x-r/2+e["xOffset"]*o,_-s/2+e["yOffset"]*o,r,s)}}},drawHit:function(c,f,x,_){var e=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(e=0>e?0:e>1?1:e,e>=1)c["animId"]=0
else if(ml){var t=Tu
if(t&&t["complete"]&&0!=t["width"]){var n=1-e,a=this.strokeSize*e*.015,i=t["width"]*a,o=t["height"]*a
f["globalAlpha"]=Math.min(Math.max(100/(this.strokeSize*Ci),.5),.9)*n*n*(this.destroyed?.5:1),f.drawImage(t,x+(Math.random()-.5)*this.strokeSize*.05-i/2,_+(Math.random()-.5)*this.strokeSize*.05-o/2,i,o)}}},drawSpeed:function(c,f,x,_){var e=(ei-c["animStartTime"])/Du[c["animId"]]["duration"]
if(e=0>e?0:e>1?1:e,e>=1||this.destroyed)c["animId"]=0
else{!c["trail"]&&(c["trail"]=[])
var t,n=this.transform,a=0==c["trail"]["length"],i=this.strokeSize,o=x-this.x,r=_-this.y
if(x=this.x,_=this.y,n&&n["t"]&&(o+=n["tx"],r+=n["ty"]),!a){t=c["trail"][c["trail"]["length"]-1]
var s=x-t["x"],l=_-t["y"]
a=s*s+l*l>2500}if(a)c["trail"].push({x:x,y:_,time:ei,rd:0})
else if(c["trail"]["length"]>1){t=c["trail"][0]
var u=c["trail"][1],d=t["rd"]+Math.min(u["time"]-t["time"],1e3)
ei-c["trail"][c["trail"]["length"]-1]["time"]>d&&(u["rd"]=d,c["trail"].splice(0,1))}if(c["trail"]["length"]>~~(5.5-2*su)&&c["trail"].splice(0,1),c["trail"]["length"]>1&&ml)if(16>=i*Ci){var h=Uu
if(h&&h["complete"]&&0!=h["width"])for(var m=0;m<c["trail"]["length"];m++)t=c["trail"][m],f["globalAlpha"]=.02*(m+1),f.drawImage(h,t["x"]+o-i,t["y"]+r-i,2*i,2*i)}else{var h=Iu
if(h&&h["complete"]&&0!=h["width"]){t=c["trail"][0]
for(var s=x-t["x"],l=_-t["y"],p=Math.sqrt(s*s+l*l),g=0!=p?s/p:0,v=0!=p?l/p:0,m=0;m<c["trail"]["length"];m++)t=c["trail"][m],f["globalAlpha"]=.1*(m+1),f.save(),f.transform(g,v,-v,g,t["x"]+o,t["y"]+r),f.drawImage(h,-i-50,-i,i+50,2*i),f.restore()}}}},drawText:function(c,f,x){var _=ll&&(this.name||this.stars>0),e=dl&&(this.ownCell||0==wa["length"]||this.sameParty)&&this.size*Ci>60
if(_||e){c["globalAlpha"]=this.ga*(this.isCloaked?.01:1)
var t,n,a,i,o,r=this.getNameSize()
if(_){var s=this.stars>0,l=this.stars>6
if(s||(t=this.rclanCache))if(s&&!(t=this.starsCache)&&(t=l?this.starsCache=new c_(~~(r/1.5+.5),"#5cff00",!0,"#000000"):this.starsCache=new c_(~~(r/1.5+.5),"#FFD700",!0,"#AA6C39")),t.hasCanvas()||Ui==this){var u=s?"starsCache":"rclanCache"
if(s){for(var d=" ",h=0;h<this.stars;h++)d+="â˜… "
t.setValue(d)}if(t.setStroke(Gl),t.setScale(Ii),t.setSizeWhenDelta(~~(r/(s?1.5:2)+.5),.2),t.isDirty())if((n=this.copyCell)&&(i=n[u])&&t.match(i,.2))o=t.copy(i)
else{if((a=this.isMinion?Ua[this.oid]:Ia[this.oid])&&a["length"]>1)for(var d,h=0;h<a["length"];h++)if((d=a[h])&&d!=this&&d!=n&&(i=d[u])&&t.match(i,.2)){this.copyCell=d,o=t.copy(i)
break}t.isDirty()&&(this.copyCell=null,o=t.render())}else o=t.render()
n=t.getAppliedScale(),a=o["width"]/n,i=o["height"]/n
var m=f-a/2,p=x-i/2-(i/.75+2)
c.drawImage(o,f-a/2,x-i/2-(i/.75+2),a,i)}else Ai=this
if(t=this.nameCache){if(t.hasCanvas()||Ui==this){if(t.setColor(Mu[this.colorIndexName]),t.setStroke(Gl),Gl&&t.setStrokeColor(Su[this.colorIndexName]),t.setScale(Ii),t.setSizeWhenDelta(r,.2),t.isDirty())if((n=this.copyCell)&&(i=n["nameCache"])&&t.match(i,.2))o=t.copy(i)
else{if((a=this.isMinion?Ua[this.oid]:Ia[this.oid])&&a["length"]>1)for(var d,h=0;h<a["length"];h++)if((d=a[h])&&d!=this&&d!=n&&(i=d["nameCache"])&&t.match(i,.2)){this.copyCell=d,o=t.copy(i)
break}t.isDirty()&&(this.copyCell=null,o=t.render())}else o=t.render()
n=t.getAppliedScale(),a=o["width"]/n,i=o["height"]/n,c.drawImage(o,f-a/2,x-i/2,a,i)}else Ai=this
x+=i/1.5+4}}if(e&&((t=this.sizeCache)||(t=this.sizeCache=new c_(~~(r/2+.5),"#FFFFFF",!0,"#000000")),t.hasCanvas()||Ui==this?(t.setValue(~~(this.size*this.size/100)),t.setStroke(Gl),t.setScale(Ii),t.setSizeWhenDelta(~~(r/2+.5),.2),o=t.render(),n=t.getAppliedScale(),a=o["width"]/n,i=o["height"]/n,c.drawImage(o,f-a/2,x-i/2,a,i)):Ai=this),this.touchUser){const g=new Image
g["src"]="../img/mobileIcon.png",this.color=="#10a0f0"&&(g["src"]="../img/mobileIcon2.png"),drawMobileUserIcon=new c_(~~(r/2+.5),"#FFFFFF",!0,"#000"),drawMobileUserIcon.setValue(100),drawMobileUserIcon.setScale(Ii),drawMobileUserIcon.setSizeWhenDelta(~~(r/2+.5),.2),o=drawMobileUserIcon.render(),n=drawMobileUserIcon.getAppliedScale(),a=o["width"]/n,i=o["height"]/n
var v=m-a/1.5,b=p
m&&this.rclanCache||(v=f-a/2,b=x-3.1*i),c.drawImage(g,v,b,a,i)}}},drawMinimapCell:function(c,f){var x=this.nSize*f,_=x>.6?this.nSize:~~(.6/f),e=jl&&2==this.shape&&x>1,t=!1,n=this.nx,a=this.ny
if(this.anim&&!ue){for(var i,o=0;o<this.anim["length"];o++){switch(i=this.anim[o],i["animId"]){case 3:this.spin(i)
break
case 6:this.flip(i)
break
case 7:this.flipCoin(i)
break
case 8:this.shake(i)
break
case 11:this.jump(i)}0==i["animId"]&&(this.anim.splice(o,1),o--)}0==this.anim["length"]&&(this.anim=null),(i=this.transform)&&(i["t"]||i["s"]||i["r"])&&(c.save(),t=!0,i["t"]&&(i["tx"]+=n,i["ty"]+=a,c.translate(i["tx"],i["ty"]),n=a=0),i["s"]&&c.scale(i["sx"],i["sy"]),i["r"]&&c.rotate(i["rz"]))}if(c.beginPath(),Vl&&this.shape>=3&&x>2||e){var r=this.shape,s=_*mu[r],l=1e4*(this.rotation/(2*Math["PI"])+1)+.5,i=1e4/r,u=pu[~~l%1e4]
c.moveTo(n+s*u["cos"],a-s*u["sin"])
for(var o=1;r>o;o++)u=pu[~~(i*o+l)%1e4],c.lineTo(n+s*u["cos"],a-s*u["sin"])
c.closePath()}else if(11==this.cellType)c.rect(n-_,a-_,2*_,2*_)
else if(16==this.cellType){var l=_,i=_/8
1==this.orientation&&(l=i,i=_),c.rect(n-l,a-i,2*l,2*i)}else c.arc(n,a,_,0,2*Math["PI"],!1)
if(e||(c["fillStyle"]=this.isGhosted?"#AAAAAA":sl?"#FFFFFF":this.color,c.fill()),(this.spiked&&x>4&&!ue||e)&&(c["strokeStyle"]=this.isGhosted||sl?"#666666":this.colorDimmed,c.stroke()),this.anim&&!ue){for(var i,o=0;o<this.anim["length"];o++){switch(i=this.anim[o],i["animId"]){case 9:this.drawHit(i,c,n,a),sx(c,f)
break
case 4:case 5:case 10:case 12:case 14:case 20:case 21:case 22:case 17:this.drawSprites(i,c,n,a),sx(c,f)}0==i["animId"]&&(this.anim.splice(o,1),o--)}for(o=0;o<this.anim["length"];o++){switch(i=this.anim[o],i["animId"]){case 1:this.drawFlash(i,c,n,a),sx(c,f)
break
case 18:this.drawBlast(i,c,n,a),sx(c,f)}0==i["animId"]&&(this.anim.splice(o,1),o--)}0==this.anim["length"]&&(this.anim=null)}t&&((i=this.transform)&&(i["t"]&&(i["t"]=!1,i["tx"]=i["ty"]=0),i["s"]&&(i["s"]=!1,i["sx"]=i["sy"]=1),i["r"]&&(i["r"]=!1,i["rz"]=0)),c.restore())}},c_["prototype"]={_value:"",_color:"#000000",_stroke:!1,_strokeColor:"#000000",_strokeWidth:0,_size:16,_canvas:null,_ctx:null,_dirty:!1,_scale:1,_appliedScale:1,_correctionScale:1,setSize:function(c){this._size!=c&&(this._size=c,this._dirty=!0),this._correctionScale=1},setSizeWhenDelta:function(c,f){(this._dirty||this._size*(1+f)<c||this._size*(1-f)>c)&&(this._size=c,this._dirty=!0),this._correctionScale=c>0?this._size/c:1},setScale:function(c){this._scale!=c&&(this._scale=this._appliedScale=c,this._dirty=!0)},setColor:function(c){this._color!=c&&(this._color=c,this._dirty=!0)},setStroke:function(c){this._stroke!=c&&(this._stroke=c,this._dirty=!0)},setStrokeColor:function(c){this._strokeColor!=c&&(this._strokeColor=c,this._dirty=!0)},setValue:function(c){c!=this._value&&(this._value=c,this._dirty=!0)},render:function(){if(null==this._canvas&&(this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),!this._dirty&&(this._canvas["width"]=this._canvas["height"]=1)),this._dirty){this._dirty=!1
var c,f,x,_=this._canvas,e=this._ctx,t=this._value,n=this._scale,a=this._size,i=this._stroke?this._strokeWidth>0?this._strokeWidth:4+~~(.05*a):3
e["font"]=a+"px Ubuntu, serif",x=c=(e.measureText(t).width+2*i)*n,f=(a+~~(.4*a))*n,f>x&&(x=f),x>3840&&(x=3840/x,n*=x,c*=x,f*=x),this._appliedScale=n,_["width"]=1>c?1:c,_["height"]=1>f?1:f,e["font"]=a+"px Ubuntu",e.scale(n,n),e["globalAlpha"]=1,this._stroke&&(e["lineWidth"]=i,e["strokeStyle"]=this._strokeColor,e.strokeText(t,i,a)),e["fillStyle"]=this._color,e.fillText(t,i,a)}return this._canvas},isDirty:function(){return this._dirty},hasCanvas:function(){return!!this._canvas},match:function(c,f){return c&&c["_canvas"]&&!(c["_size"]*(1+f)<this._size||c["_size"]*(1-f)>this._size)&&c["_scale"]==this._scale&&c["_stroke"]==this._stroke&&c["_color"]==this._color&&c["_strokeColor"]==this._strokeColor&&c["_value"]==this._value&&c["_strokeWidth"]==this._strokeWidth&&!c["_dirty"]},copy:function(c){if(null==this._canvas&&(this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),!this._dirty&&(this._canvas["width"]=this._canvas["height"]=1)),this._dirty&&c&&c["_canvas"]){this._dirty=!1
var f=this._canvas,x=this._ctx,_=c["_canvas"]
f["width"]=_["width"],f["height"]=_["height"],x["globalAlpha"]=1,x.drawImage(_,0,0),this._appliedScale=c["_appliedScale"],this._correctionScale=this._size>0?c["_size"]/this._size:1,this._size=c["_size"]}return this._canvas},getAppliedScale:function(){return this._appliedScale*this._correctionScale}}
var Eu=String["fromCharCode"],zu=[Eu(69,118,101,110,116),Eu(84,97,114,103,101,116),Eu(115,101,116),Eu(97,100,100),Eu(114,101,109,111,118,101),Eu(76,105,115,116,101,110,101,114),Eu(84,105,109,101,111,117,116),Eu(112,114,111,116,111,116,121,112,101),Eu(68,111,99,117,109,101,110,116),Eu(99,114,101,97,116,101,69,108,101,109,101,110,116),Eu(105,102,119),Eu(99,111,110,116,101,110,116,87,105,110,100,111,119),Eu(102,117,115),Eu(104,111,111,107,101,100),Eu(105,102,114,97,109,101),Eu(99,97,110,82,117,110,65,100,115),Eu(87,101,98,83,111,99,107,101,116),Eu(115,101,110,100),Eu(114,101,97,108,83,101,110,100),Eu(85,105,110,116,56,65,114,114,97,121),Eu(98,117,102,102,101,114),Eu(99,97,108,108),Eu(115,101,114,118,101,114),Eu(112,117,115,104,66,111,116,115)],Ru=c[zu[2]+zu[6]],$u=[Eu(77,117,116,97,116,105,111,110,79,98,115,101,114,118,101,114),Eu(111,98,115,101,114,118,101)],Lu=c[$u[0]],Ou=function(){}
Lu&&Lu[zu[7]]&&(Lu[zu[7]][$u[1]]=Ou)
var Qu=WebSocket,Gu=WebSocket["prototype"]["send"],Wu=function(c){var f=["aSocket","call"]
!this[f[0]]&&Gu[f[1]](this,c)}
WebSocket["prototype"]["send"]=Wu,function(){if(c["emgaa"])for(var f=0;f<emgaa["length"];f++)wi+=emgaa.charCodeAt(f)*(1-(!f||f%2?0:2))-1*(f?0:1)}()
var Yu=document.createElement("script")
Yu["id"]="avaz",function(){c["requestAnimationFrame"]||(c["requestAnimationFrame"]=function(c){return setTimeout(c,1e3/60)})}(),Hi&&(ia[ji]=Xi),function(){var c="https://agma.io"
"http://agma.io"
window["location"]["origin"]&&window["location"]["origin"].toLowerCase()===c}(),f(function(){function x(c){var f=0
if(c&&!isNaN(c))if(c=""+c,c["length"]>5){var x=c.substr(0,5),_=c.substr(5)
if(!isNaN(x)&&!isNaN(_)){for(var e=0,t=0;t<x["length"];t++)e+=(parseInt(x.substr(t,1))+30)*(t+1)
e==parseInt(_)&&(f=Math.max(parseInt(x)-1e4,0))}}else f=parseInt(c)
return f}Gi=!0,function(){if("SharedWorker"in window)try{pa=new SharedWorker("js/worker.js"),pa["port"]["onmessage"]=function(c){ha=c["data"]},pa["port"].postMessage("broadcast")}catch(c){pa=null}}(),qx(),Ru(qx,0),function(){function c(c){var f=c["onclick"]||c["onmousedown"]||c["onmouseup"]||c["onkeydown"]||c["onkeyup"]||c["onkeypress"]||c["oninput"]||c["onchange"]||c["onfocus"]||c["onblur"]||c["onfocusin"]||c["onfocusout"]
return f&&(c["onclick"]=c["onmousedown"]=c["onmouseup"]=c["onkeydown"]=c["onkeyup"]=c["onkeypress"]=c["oninput"]=c["onchange"]=c["onfocus"]=c["onblur"]=c["onfocusin"]=c["onfocusout"]=function(){}),f}function f(f){(c(_)||c(e)||c(t))&&(_["value"]=e["value"]=""),f.stopImmediatePropagation()}function x(c){c.stopImmediatePropagation()}var _=document.getElementById("username"),e=document.getElementById("password"),t=document.getElementById("sent"),n=document.getElementById("register-btn"),a=document.getElementById("logoutBtn"),i=document.getElementById("resetPw"),o=document.getElementById("home"),r=document.getElementById("loginBtnContainer")
_.addEventListener("input",f,!0),e.addEventListener("input",f,!0),t.addEventListener("click",function(f){!c(t)&&r_(_["value"],e["value"],0),f.stopImmediatePropagation()},!0),n.addEventListener("click",function(f){return!c(n)&&M_(document.getElementById("regUsername").value,document.getElementById("regPassword").value,document.getElementById("regPassword").value,document.getElementById("regEmail").value),f.stopImmediatePropagation(),!1},!0),a.addEventListener("click",function(f){!c(a)&&g_(),f.stopImmediatePropagation()},!0),i.addEventListener("click",function(c){s_(),c.stopImmediatePropagation()},!0),_.addEventListener("keydown",x,!0),_.addEventListener("keyup",x,!0),_.addEventListener("keypress",x,!0),_.addEventListener("change",x,!0),_.addEventListener("blur",x,!0),_.addEventListener("focusout",x,!0),e.addEventListener("keydown",x,!0),e.addEventListener("keyup",x,!0),e.addEventListener("keypress",x,!0),e.addEventListener("change",x,!0),e.addEventListener("blur",x,!0),e.addEventListener("focusout",x,!0),t.addEventListener("mousedown",x,!0),t.addEventListener("mouseup",x,!0),t.addEventListener("focus",x,!0),t.addEventListener("focusin",x,!0),o.addEventListener("mousedown",function(c){r["children"]["length"]>1&&(_["value"]=e["value"]="")},!0),o.addEventListener("keydown",function(c){27==c["keyCode"]&&(Ee=0)},!0)}(),f(".bs-example-modal-lg").on("show.bs.modal",function(){bs=!0,Ts&&ht<Date.now()-4e4&&wc(),Wi&&(Ur&&f("#skinsTab").hasClass("active")&&uf(),Br&&f("#wearablesTab").hasClass("active")&&pf())}).on("hide.bs.modal",function(){bs=!1,Wi&&0==f("div.modal.in:visible").not(this).length&&azad(!1)}),f(".bs-example-modal-lg3").on("show.bs.modal",function(){ys=!0,f("#remainingSpins").text(0),Xn&&Kf(57),loadSpinWheelAudio()}).on("hide.bs.modal",function(){ys=!1,Wi&&0==f("div.modal.in:visible").not(this).length&&azad(!1)}),f(".pass-reset-modal").on("show.bs.modal",function(){f("#reset-pw-row").show(),f(".pwresetalertdanger,.pwresetalert").hide()}),f("#customBackModal").one("show.bs.modal",function(){ks=!0,Wi&&!ws&&Cs!=""&&(Ss?F_(Cs):P_(Cs,!1))}),In=Cn=document.getElementById("canvas"),Tn=In.getContext("2d"),Fn=document.getElementById("minimap"),Bn=Fn.getContext("2d"),Nn=document.getElementById("chtCanvas"),Pn=Nn.getContext("2d"),Un=document.getElementById("leaderboard"),An=Un.getContext("2d"),Yn=document.getElementById("chtScrollbar"),Jn=document.getElementById("chtScrollbarThumb"),t(),$_(typeof c["localStorage"]!=="undefined"?parseInt(c["localStorage"]["gmbCollapsed"])||0:0),Q_(typeof c["localStorage"]!=="undefined"?parseInt(c["localStorage"]["chatDimmed"])||0:0),ue&&(document.getElementById("touchSplitImg").src="img/split3.png",document.getElementById("touchEjectImg").src="img/feed3.png",document.getElementById("touchEjectLockImg").src="img/feedLock2.png",document.getElementById("touchFreezeImg").src="img/freezeLock2.png",$n=document.getElementById("touchPad"),Ln=document.getElementById("touchPadThumb"),fa=f("#touchPad").width(),xa=f("#touchPadThumb").width(),f(".innerBoxDashboard2").addClass("touch-device"),f("#fpsBox").addClass("touch-device"),f("#minionUi").addClass("touch-device"),f("#btnFriends").addClass("touch-device"),f("#friendDialog").addClass("touch-device"),f("#chat").addClass("touch-device"),f("#settingsBtn").addClass("touch-device"),f("#settingsDialog").addClass("touch-device"),f("#brGameContainer").addClass("touch-device"),f("#infGameContainer").addClass("touch-device"),f("#inventory2").addClass("touch-device"),f("#inventory1").addClass("touch-device"),f(".slide-box").addClass("touch-device"),f(".contextmenu").addClass("touch-device"),f("#megaholder").addClass("touch-device"),f(".touch-setting").show(),_l["sSkins"]=xl["sSkins"]=!1,_l["sWearables"]=xl["sWearables"]=!1,_l["sMinimap"]=xl["sMinimap"]=!1,_l["sMinionNames"]=xl["sMinionNames"]=!1,_l["sNameOutlines"]=xl["sNameOutlines"]=!1,_l["sSkinAnimations"]=xl["sSkinAnimations"]=!1,_l["sMass"]=xl["sMass"]=!1),ge&&(_l["sDark"]=!0),function(){function f(){window["adplayer"]?ln=window["adplayer"]:setTimeout(f,1e3)}var x=document.getElementById("AGM_agma-io_300x250"),_=document.getElementById("agma-io_970x250"),e=document.getElementById("adWrapper300x250"),t=document.getElementById("advertDialog1"),n=$(".featured-yt")[0],a=document.getElementById("agma-io_728x90"),i=document.getElementById("agma-io_160x600"),o=document.getElementById("adWrapper728x90"),r=document.getElementById("adWrapper160x600"),s=document.getElementById("agma-io_728x90_2"),l=document.getElementById("adWrapper728x90_2")
x&&(x["remove"]=x["parentNode"]["removeChild"]=function(){}),_&&(_["remove"]=_["parentNode"]["removeChild"]=function(){}),e&&(e["remove"]=e["parentNode"]["removeChild"]=function(){}),t&&(t["remove"]=t["parentNode"]["removeChild"]=function(){}),n&&(n["remove"]=n["parentNode"]["removeChild"]=function(){}),a&&(a["remove"]=a["parentNode"]["removeChild"]=function(){}),i&&(i["remove"]=i["parentNode"]["removeChild"]=function(){}),o&&(o["remove"]=o["parentNode"]["removeChild"]=function(){}),r&&(r["remove"]=r["parentNode"]["removeChild"]=function(){}),s&&(s["remove"]=s["parentNode"]["removeChild"]=function(){}),l&&(l["remove"]=l["parentNode"]["removeChild"]=function(){}),f()
var u="add"+"Timeout"+"Listener"
c[u]&&delete c[u]}(),lt=Date.now(),ut=Date.now(),kt=!1,pt=!0,cx(),$("#overlays").fadeIn(1e3),az(0,2),b_(),typeof Storage!=="undefined"&&(localStorage["cid"]?sa=localStorage["cid"]:localStorage["cid"]=sa),$("#inventory").find(".inventory-box").tooltip({delay:{show:500,hide:0}}),S_(),--wi,ki=v2za0()||ki
var _=yi
f.post("client.php",{data:JSON.stringify({cv:4*yi,ch:Ds,ccv:_,vv:oe})},function(f){c["emgaa"]&&c["btoa"]&&c["vurl"]&&yi==_&&f&&!isNaN(f)&&(Es=x(f))?be?connectDefault():pr!=""&&setserver(pr,vr):T("Unable to connect!  Please refresh your browser and try again.",!1,!0,0,0)},"text"),window["googletag"]&&googletag["cmd"].push(function(){googletag.pubads().addEventListener("impressionViewable",function(c){if(un){var f=c["slot"].getSlotElementId()
f=="agma-io_970x250"?bt&&(nt=!0,at&&Pc()):f=="AGM_agma-io_300x250"&&vt&&(nt=!0,at&&Nc())}})})}),c.addEventListener("cut",function(c){c["target"]&&c["target"]["id"]==="chtbox"&&(c.preventDefault(),c.stopImmediatePropagation())},!0),c.addEventListener("copy",function(c){c["target"]&&c["target"]["id"]==="chtbox"&&(c.preventDefault(),c.stopImmediatePropagation())},!0),c.addEventListener("paste",function(c){c["target"]&&c["target"]["id"]==="chtbox"&&(c.preventDefault(),c.stopImmediatePropagation())},!0),c["onload"]=x,c.addEventListener("beforeunload",function(c){Wi=!1,Rc(),rx()})}(window,window["jQuery"])