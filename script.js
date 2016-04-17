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

var SPOILER_CLASS = 'spoiler';
var NOT_SPOILER_CLASS = 'poiler';

jQuery('#qinfo').append(
	'<tr>' + 
		'<td>' + 
			'<p class="label-key">show spoilers</p>' + 
		'</td>' +
		'<td style="padding: 0px 0px 0px 10px;">' + 
			'<p class="label-key"><input type="checkbox" id="show-spoilers"></p>' +
		'</td>' + 
	'</tr>'
);
jQuery('#show-spoilers').change(function(){
    var lookupClass = this.checked ? SPOILER_CLASS : NOT_SPOILER_CLASS;
    var replaceClass = this.checked ? NOT_SPOILER_CLASS : SPOILER_CLASS;
    jQuery('.' + lookupClass).addClass(replaceClass).removeClass(lookupClass);
});