/**
 * Copyright reelyActive 2016-2023
 * We believe in an open Internet of Things
 */


// Constant definitions
const DEFAULT_URL = 'https://reelyactive.github.io/cormorant/';
const HTTP_STATUS_OK = 200;


// DOM elements
let storyUrl = document.querySelector('#storyUrl');
let storyJson = document.querySelector('#storyJson');
let storyStatus = document.querySelector('#storyStatus');


storyUrl.value = DEFAULT_URL;


// Handle story button click
storyButton.addEventListener('click', () => {
  storyJson.textContent = '';
  if(storyUrl.value && (storyUrl.value.indexOf('http') === 0)) {
    cormorant.retrieveStory(storyUrl.value, (story, status) => {
      storyJson.textContent = JSON.stringify(story, null, 2);
      storyStatus.textContent = status;
      if(status === HTTP_STATUS_OK) {
        storyStatus.setAttribute('class', 'text-success');
      }
      else {
        storyStatus.setAttribute('class', 'text-danger');
      }
    });
  }
  else {
    storyUrl.value = null;
    storyUrl.setAttribute('placeholder', 'Enter a valid URL');
  }
});
