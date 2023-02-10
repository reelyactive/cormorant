cormorant.js
============

__cormorant__ fetches digital twins in the form of JSON-LD & Schema.org from any given URL.

__cormorant__ is lightweight client-side JavaScript that runs in the browser.  See a live demo using the code in this repository at: [reelyactive.github.io/cormorant](https://reelyactive.github.io/cormorant)


Hello cormorant!
----------------

Include in an _index.html_ file the __cormorant.js__ script:

```html
<html>
  <head></head>
  <body>
    <script src="js/cormorant.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

Include in a _js/app.js_ the code to fetch the story from a given URL:

```javascript
let url = 'https://reelyactive.github.io/cormorant/';

cormorant.retrieveStory(url, (story) => {
  console.log(story); // Do something useful with the JSON-LD & Schema.org
});
```

Open the _index.html_ file in a web browser for __cormorant__ to retrieve the story from the URL, and observe the output in the browser's console.


Supported functions
-------------------

`cormorant.retrieveStory(url, callback);`

`cormorant.retrieveAssociations(url, deviceId, isStoryToBeRetrieved, callback);`


Supported variables
-------------------

`cormorant.stories`

`cormorant.associations`


![cormorant logo](https://reelyactive.github.io/cormorant/images/cormorant-bubble.png)


What's in a name?
-----------------

Cormorants are a family of aquatic birds well adapted for diving to catch fish in their long, slender bill which is hooked in an _Angular_[^1] kind of way.  In its client-side habitat, cormorant.js will commonly dive into pools created by [beaver.js](https://github.com/reelyactive/beaver) in search of linked data, adeptly swimming from URL to URL, to collect its prey: JSON-LD.

Cormorants are also known as shags.  If you’ve read our other mascot stories, at this point you may be surprised that we didn’t play on the shag & beaver theme.  We could have, but it seems rather tame once you discover the mechanics of how that goes down for our other mascot, the [cuttlefish](https://github.com/reelyactive/cuttlefish)!

[^1]: v0.x used Angular.js


Project History
---------------

__cormorant__ v2.0.0 was released in February 2023.

__cormorant.js__ v1.0.0 was released in July 2019, superseding all earlier versions, the latest of which remains available in the [release-0.2 branch](https://github.com/reelyactive/cormorant/tree/release-0.2).


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.

[![Known Vulnerabilities](https://snyk.io/test/github/reelyactive/cormorant/badge.svg)](https://snyk.io/test/github/reelyactive/cormorant)


License
-------

MIT License

Copyright (c) 2016-2023 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
