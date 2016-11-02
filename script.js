// ==UserScript==
// @name         StackExchange Toggle all spoilers on a question
// @version      1.2.0
// @description  Adds a checkbox to StackExchange questions to show/hide all spoilers on the current question
// @author       Jason Baker
// @match       *://*.askubuntu.com/questions/*
// @match       *://*.mathoverflow.net/questions/*
// @match       *://*.serverfault.com/questions/*
// @match       *://*.stackapps.com/questions/*
// @match       *://*.stackexchange.com/questions/*
// @match       *://*.stackoverflow.com/questions/*
// @match       *://*.superuser.com/questions/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
(function(){
	'use strict';

	var SPOILER_CLASS = 'spoiler';
	var NOT_SPOILER_CLASS = 'poiler';

	var isChecked = false;
	var spoilerToggleRow = document.getElementById('qinfo').insertRow();
	var labelCell = spoilerToggleRow.insertCell();
	var toggleCell = spoilerToggleRow.insertCell();

	var label = document.createTextNode('show spoilers');
	var labelElem = document.createElement('p');
	labelElem.className += ' label-key';
	labelElem.appendChild(label);
	labelCell.appendChild(labelElem);

	toggleCell.style.padding = '0 0 0 10px';
	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.id = 'show-spoilers';
	checkbox.checked = isChecked;
	var checkboxElem = document.createElement('p');
	checkboxElem.className += ' label-key';
	checkboxElem.appendChild(checkbox);
	toggleCell.appendChild(checkboxElem);

	checkbox.onchange = function(){
		var lookupClass = this.checked ? SPOILER_CLASS : NOT_SPOILER_CLASS;
		var replaceClass = this.checked ? NOT_SPOILER_CLASS : SPOILER_CLASS;

		var classExtractRegex = new RegExp('(?:^|\s)' + lookupClass + '(?!\S)', 'g');

		var spoilerBlocks = document.getElementsByClassName(lookupClass);

		while(spoilerBlocks.length > 0){
			spoilerBlocks[0].className =replaceClass;
		}
	};
})();
Ns
