# tl;dr
* New format: {#Issue number} {Issue title} ({Issue type})
* Chrome: https://www.google.cz/search?q=tampermonkey+chrome
* Firefox: https://www.google.cz/search?q=greasemonkey#q=greasemonkey+firefox
* IE: http://stackoverflow.com/questions/11876852/how-to-run-a-modern-userscript-on-internet-explorer
* https://github.com/morpht/redmine-title-formatter/raw/master/redmine_title_formatter.user.js

# What it does
* It alters the HTML on Redmine site to get more descriptive task descriptions in Toggle
* Same format is used for window title. ( Works great with https://chrome.google.com/webstore/detail/copy-all-urls/djdmadneanknadilpjiknlnanaolmbfk )
* It's compatible with Toggle button ( https://github.com/toggl/toggl-button )
* Default Toggle button format: {Issue type} {#Issue number} {Issue title}
* New format with this extension: {#Issue number} {Issue title} ({Issue type})
* Toggle tasks starting #Number are usually compatible with or required by other Redmine plugins connecting back to Toggl.

# Installation
* It's small script running in your browser.
* You need something like Greasemonkey for FireFox ("Allows you to customize the way a web page displays or behaves, by using small bits of JavaScript.") to run the script. https://addons.mozilla.org/cs/firefox/addon/greasemonkey/
* There is Chrome alternative, Tampermonkey: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
* After installing the browser extension, install the script: http://wiki.greasespot.net/Greasemonkey_Manual:Installing_Scripts / http://tampermonkey.net/faq.php?ext=dhdg#Q102
* The script you need is here: https://github.com/morpht/redmine-title-formatter/raw/master/redmine_title_formatter.user.js Just Copy&Paste or whatever the manual says. :)
