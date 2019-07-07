/**
 * Copyright reelyActive 2016-2019
 * We believe in an open Internet of Things
 */


// Constant definitions
const DEFAULT_SERVER_URL = 'http://localhost:3001/';


// DOM elements
let storyUrl = document.querySelector('#storyUrl');
let storyJson = document.querySelector('#storyJson');


// Handle story button click
storyButton.addEventListener('click', function() {
  if(storyUrl.value && (storyUrl.value.indexOf('http') === 0)) {
    cormorant.retrieveStory(storyUrl.value, function(story) {
      storyJson.textContent = JSON.stringify(story, null, 2);
    });
  }
  else {
    storyUrl.value = null;
    storyUrl.setAttribute('placeholder', 'Enter a valid URL');
  }
});
