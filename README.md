# user-agent
Minimalist experiment to display client-side (JavaScript) [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent) browser identification

Many better-developed sites exist for breaking down what a user agent string means, and they usually do not require JavaScript to be enabled.  The experiment here performs client-side analysis of the string, which will break the ability to run the test on browsers not supporting JavaScript but at least not require any network communications.

Note that the user agent field of the `navigator` object has been deprecated not too long ago but only in favor of probing the feature sets of what does and does not succeed in a browser's environment (i.e., only testing for standards compliance) instead of actually caring what the browser or system is, which is a separate question anyway.  That being said, this kind of deprecation is not relevant to the better interests in unrelated experiments such as this.

More detailed and/or portable test sites:

* http://whichbrowser.net/
* https://www.whatismybrowser.com/developers/tools/user-agent-parser/
* https://udger.com/resources/online-parser
* http://quirktools.com/retro/
* http://www.whatsmyua.com/
* https://www.whatismyip.com/user-agent-info/
* http://tools.tracemyip.org/user-agent-string-decoder/
* https://useragentapi.com/

More information also at:

* http://www.useragentstring.com/pages/useragentstring.php
* http://faisalman.github.io/ua-parser-js/ (requires a graphical, drawing web browser)
* https://www.eff.org/deeplinks/2010/01/tracking-by-user-agent
* http://www.user-agents.org/
* https://www.nczonline.net/blog/2010/01/12/history-of-the-user-agent-string/
* http://www.zytrax.com/tech/web/browser_ids.htm
* https://udger.com/resources/ua-list
