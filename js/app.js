/**
 * Copyright reelyActive 2016-2023
 * We believe in an open Internet of Things
 */


// Constant definitions
const DEFAULT_URL = 'https://reelyactive.github.io/cormorant/';


// DOM elements
let storyUrl = document.querySelector('#storyUrl');
let storyJson = document.querySelector('#storyJson');


storyUrl.value = DEFAULT_URL;


// Handle story button click
storyButton.addEventListener('click', () => {
  storyJson.textContent = '';
  if(storyUrl.value && (storyUrl.value.indexOf('http') === 0)) {
    cormorant.retrieveStory(storyUrl.value, (story) => {
      storyJson.textContent = JSON.stringify(story, null, 2);
    });
  }
  else {
    storyUrl.value = null;
    storyUrl.setAttribute('placeholder', 'Enter a valid URL');
  }
});
