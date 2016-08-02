cormorant
=========

Fetch JSON from a URL, regardless if the GET returns JSON or HTML.  In the case of the latter, [JSON-LD](http://json-ld.org/) will be extracted, if present.  We believe in an open Internet of Things.


In the scheme of Things (pun intended)
--------------------------------------

The [beaver.js](https://github.com/reelyactive/beaver), __cormorant.js__ and [cuttlefish.js](https://github.com/reelyactive/cuttlefish) modules work together as a unit.  See our [dashboard-template-angular](https://github.com/reelyactive/dashboard-template-angular) for a minimal implementation.


![cormorant logo](http://reelyactive.github.io/cormorant/images/cormorant-bubble.png)


What's in a name?
-----------------

Cormorants are a family of aquatic birds well adapted for diving to catch fish in their long, slender bill which is hooked in an _Angular_ kind of way.  In its client-side habitat, cormorant.js will commonly dive into pools created by [beaver.js](https://github.com/reelyactive/cormorant) in search of linked data, adeptly swimming from URL to URL, to collect its prey: JSON-LD.

Cormorants are also known as shags.  If you’ve read our other mascot stories, at this point you may be surprised that we didn’t play on the shag & beaver theme.  We could have, but it seems rather tame once you discover the mechanics of how that goes down for our other mascot, the [cuttlefish](https://github.com/reelyactive/cuttlefish)!


Hello cormorant
---------------

```javascript
angular.module('appName', [ 'reelyactive.cormorant' ])

  .controller('LinkedDataCtrl', function($scope, cormorant) {

    $scope.stories = cormorant.getStories();

    cormorant.getStory('http://reelyactive.com', function(story) {
      console.log(story);
    });
  });
```

Include the above in a .js file, and then source both that file and cormorant.js in an HTML file.  Upon running the HTML file, the JSON-LD embedded in reelyactive.com will be output to the console.


What's next?
------------

In future, cormorant will recursively fetch JSON from URLs contained in the preceding fetch.  If you're developing with cormorant, check out:
- our [angular-style-guide](https://github.com/reelyactive/angular-style-guide) for development


License
-------

MIT License

Copyright (c) 2016 reelyActive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

