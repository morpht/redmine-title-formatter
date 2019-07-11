// ==UserScript==
// @name         Redmine title formatter
// @namespace    https://morpht.com
// @version      0.4
// @description  Generates better task name (ideal for Toggl) instead of "{Type} #{number}"
// @author       Originally developed by @radimklaska, now adopted by Morpht.com
// @match        https://redmine.morpht.com/issues/*
// @downloadURL  https://github.com/morpht/redmine-title-formatter/raw/master/redmine_title_formatter.user.js
// @updateURL    https://github.com/morpht/redmine-title-formatter/raw/master/redmine_title_formatter.user.js
// @grant        none
// ==/UserScript==

var s       = document.createElement('script');
s.type      = 'text/javascript';
s.textContent =  '(' + function() {
    var title = document.querySelector('#main #content .subject h3').innerHTML;
    var issue = document.querySelector('#main #content > h2');
    var type = issue.innerHTML.split('#')[0].trim();
    var text = '#' + issue.innerHTML.split('#')[1] + ' ' + title + ' (' + type+ ')';
    // Chnage the main header on Issue page.
    document.body.querySelector('#main #content > h2').innerHTML = text;
    // Change window title.
    // Works great with https://chrome.google.com/webstore/detail/copy-all-urls/djdmadneanknadilpjiknlnanaolmbfk
    document.title = text;
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
