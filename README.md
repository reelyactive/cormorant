cormorant
=========

Fetch JSON from a URL, regardless if the GET returns JSON or HTML.  In the case of the latter, JSON-LD will be extracted, if present.  We believe in an open Internet of Things.


Hello cormorant
---------------

```javascript
angular.module('appName', [ 'reelyactive.cormorant' ])

  .controller('LinkedDataCtrl', function($scope, cormorant) {
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

