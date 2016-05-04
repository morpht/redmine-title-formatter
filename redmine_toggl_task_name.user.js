// ==UserScript==
// @name         Redmine Toggl task name
// @namespace    http://klaska.net
// @version      0.1
// @description  Generates task name for Toggl instead of "{Type} #{number}"
// @author       Radim Klaška
// @match        https://redmine.morpht.com/issues/*
// @downloadURL  https://raw.githubusercontent.com/radimklaska/redmine-toggle-formatter/master/redmine_toggl_task_name.user.js
// @updateURL    https://raw.githubusercontent.com/radimklaska/redmine-toggle-formatter/master/redmine_toggl_task_name.user.js
// @grant        none
// ==/UserScript==

var s       = document.createElement('script');
s.type      = 'text/javascript';
s.textContent =  '(' + function() {
    var title = document.querySelector('#main #content .subject h3').innerHTML;
    var issue = document.querySelector('#main #content > h2');
    var text = '#' + issue.innerHTML.split('#')[1] + ' ' + title;
    var type = issue.innerHTML.split('#')[0].trim();
    document.body.querySelector('#main #content > h2').innerHTML = text;
    // Prevent duplicate title in Toggle button
    document.body.querySelector('#main #content .subject h3').innerHTML = '(' + type + ')';
    // Add one-click text selection
    issue.onclick = function() {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(this);
        selection.removeAllRanges();
        selection.addRange(range);
    };
 } + ')();';

// Inject Script. Can't use jQuery yet, because the page is not
// accessible from Tampermonkey
document.getElementsByTagName("head")[0].appendChild(s);
