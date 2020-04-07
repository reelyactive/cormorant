cormorant
=========

Client-side library to fetch associations from [chickadee](https://github.com/reelyactive/chickadee) and to fetch JSON from a URL, regardless if the GET returns JSON or HTML.  __cormorant.js__ will collect all structured, linked data about _who/what is where/how_, making this real-time information available to the web application.


Installation
------------

__cormorant.js__ is written in vanilla JavaScript and the file can simply be included among the scripts in an HTML file.  For example:

```html
<html>
  <head></head>
  <body>
    <script src="js/cormorant.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```


Hello cormorant
---------------

Include in your _js/app.js_ the following code to retrieve the associations for the device identifier _001bc50940810000/1_ from a [chickadee](https://github.com/reelyactive/chickadee) server or [hlc-server](https://github.com/reelyactive/hlc-server) at _localhost:3001_:

```javascript
let associationsServerUrl = 'http://localhost:3001';
let deviceId = '001bc50940810000/1';
let isStoryToBeRetrieved = false;
cormorant.retrieveAssociations(associationsServerUrl, deviceId,
                               isStoryToBeRetrieved, function(associations) {
  console.log(associations);
  console.log(cormorant.associations[deviceId]); // Same as above
});
```

Include in your _js/app.js_ the following code to retrieve the JSON-LD story embedded at _sniffypedia.org/Product/reelyActive_RA-R436/_:

```javascript
let storyUrl = 'https://sniffypedia.org/Product/reelyActive_RA-R436/';
cormorant.retrieveStory(storyUrl, function(story) {
  console.log(story);
  console.log(cormorant.stories[storyUrl]); // Same as above
});
```


![cormorant logo](https://reelyactive.github.io/cormorant/images/cormorant-bubble.png)


What's in a name?
-----------------

Cormorants are a family of aquatic birds well adapted for diving to catch fish in their long, slender bill which is hooked in an _Angular_ kind of way.  In its client-side habitat, cormorant.js will commonly dive into pools created by [beaver.js](https://github.com/reelyactive/cormorant) in search of linked data, adeptly swimming from URL to URL, to collect its prey: JSON-LD.

Cormorants are also known as shags.  If you’ve read our other mascot stories, at this point you may be surprised that we didn’t play on the shag & beaver theme.  We could have, but it seems rather tame once you discover the mechanics of how that goes down for our other mascot, the [cuttlefish](https://github.com/reelyactive/cuttlefish)!


What's next?
------------

__cormorant.js__ v1.0.0 was released in July 2019, superseding all earlier versions, the latest of which remains available in the [release-0.2 branch](https://github.com/reelyactive/cormorant/tree/release-0.2).


License
-------

MIT License

Copyright (c) 2016-2020 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


