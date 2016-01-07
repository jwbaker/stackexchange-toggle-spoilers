// ==UserScript==
// @name         SFF.SE Toggle all spoilers on a question
// @version      1.0
// @description  Adds a checkbox to SFF.SE questions to show/hide all spoilers on the current question
// @author       Jason Baker
// @match         *://scifi.stackexchange.com/questions/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var onCheckboxChanged = function(){
    var newColor = '#fff9e3';
    if(this.checked) newColor = '#333';
    var spoilers = document.getElementsByClassName('spoiler');
    for(var i = 0; i < spoilers.length; i++){
        spoilers[i].style.color = newColor;
    }
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
var checkbox = document.createElement('input')
checkbox.type = 'checkbox';
checkbox.id = 'show-spoilers';
checkbox.checked = false;
checkbox.onchange = onCheckboxChanged;
var checkboxElem = document.createElement('p');
checkboxElem.className += ' label-key';
checkboxElem.appendChild(checkbox);
checkboxCell.appendChild(checkboxElem);
