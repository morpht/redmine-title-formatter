// ==UserScript==
// @name         Redmine Toggl task name
// @namespace    http://klaska.net
// @version      0.1
// @description  Generates task name for Toggl instead of "{Type} #{number}"
// @author       Radim Klaška
// @match        https://redmine.morpht.com/issues/*
// @grant        none
// ==/UserScript==

var s       = document.createElement('script');
s.type      = 'text/javascript';
s.textContent =  '(' + function() {    
    var title = document.querySelector('#main #content .subject h3').innerHTML;
    var issue = document.querySelector('#main #content > h2');
    var text = '#' + issue.innerHTML.split('#')[1] + ' ' + title;
    document.body.querySelector('#main #content > h2').innerHTML = text;
 } + ')();';

// Inject Script. Can't use jQuery yet, because the page is not
// accessible from Tampermonkey
document.getElementsByTagName("head")[0].appendChild(s);
