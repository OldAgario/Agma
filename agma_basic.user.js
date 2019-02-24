// ==UserScript==
// @name         Agma.io BASIC GH
// @namespace    http://agma.io/
// @version      4.0
// @description  Fast mass, fast splits, fast respawn, cell and chat commands, anti-spam
// @author       Heisenberg-(TheOldOne)
// @homepage     http://agma.io/
// @match        agma.io
// @icon         https://www.google.com/s2/favicons?domain=agma.io
// @require      https://github.com/OldAgario/Agma/raw/master/agma.min.js
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
	- open the script and read the instructions in the head of the script
	- customize your controls
	- to change messages, simply replace text between "..."
4 - Copy the customizable part and save it as *.TXT
5 - When script gets update all your settings are reset to their defaults!!!
6 - Restore your settings - copy all data from previously saved *.TXT file
----------------------------
If you want to customize your control settings - go to the link below,
To change any button for any function, simply click a desired button in the input on that site and see it's code,
For example, you want to change T (84) Respawn to something else,
You click P and see it's code - 80,
and you change your "var resp = 84; // T (Respawn)" to "var resp = 80; // P (Respawn)",

https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

//EDIT KEYBINDS: IF YOU WANT TO TURN THE FUNCTION OFF - set = 0
var food = 87; // W - 87 (Macro Feed)
var singleFood = 81; // Q - 81 (Single Feed)
var resp = 84; // T (Respawn)
var dubl = 68; // D (Double Split)
var tripl = 65; // A (Triple Split)
var mxsplt = 16; // SHIFT (Max Split)
//CHAT
var chat1 = 49; // Key 1 (Chat 1)
var chat2 = 50; // Key 2 (Chat 2)
var chat3 = 51; // Key 3 (Chat 3)
var chat4 = 52; // Key 4 (Chat 4)
var chat5 = 53; // Key 5 (Chat 5)
var chat6 = 54; // Key 5 (Chat 5)
//ANIMATION&INFO
var shake = 66; // B (Shake)
var spin = 78; // N (Spin)
var flip = 77; // M (Flip)
var hrs = 74; // J (Show Hours)
var lvl = 75; // K (Show Level)
var rnk = 76; // L (Show Rank)
//END EDIT KEYBINDS

//EDIT MESSAGES - Replace text between "..."
var msg1 = "FEED!";
var msg2 = "Give me mass!";
var msg3 = "Where are you?";
var msg4 = "Shoot virus!";
var msg5 = "Remove viruses!";
var msg6 = "No problem!";
//END EDIT MESSAGES
