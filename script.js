// ==UserScript==
// @name         SFF.SE Toggle all spoilers on a question
// @version      1.1.1
// @description  Adds a checkbox to SFF.SE questions to show/hide all spoilers on the current question
// @author       Jason Baker
// @match         *://scifi.stackexchange.com/questions/*
// @match         *://meta.scifi.stackexchange.com/questions/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var onCheckboxChanged = function(){
    var lookupClass = this.checked ? 'spoiler' : 'poiler';
    var replaceClass = this.checked ? 'poiler' : 'spoiler';
    jQuery('.' + lookupClass).addClass(replaceClass).removeClass(lookupClass);
};

var row = document.getElementById('qinfo').insertRow();
var labelCell = row.insertCell(0);
var label = document.createTextNode('show spoilers');
var labelElem = document.createElement('p');
labelElem.className += ' label-key';
labelElem.appendChild(label);
labelCell.appendChild(labelElem);

var checkboxCell = row.insertCell(1);
checkboxCell.style.padding = '0 0 0 10px';
var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'show-spoilers';
checkbox.checked = false;
checkbox.onchange = onCheckboxChanged;
var checkboxElem = document.createElement('p');
checkboxElem.className += ' label-key';
checkboxElem.appendChild(checkbox);
checkboxCell.appendChild(checkboxElem);
