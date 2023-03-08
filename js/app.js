/**
 * Copyright reelyActive 2016-2023
 * We believe in an open Internet of Things
 */


// Constant definitions
const DEFAULT_URL = 'https://reelyactive.github.io/cormorant/';


// DOM elements
let storyUrl = document.querySelector('#storyUrl');
let storyJson = document.querySelector('#storyJson');
let storyStatus = document.querySelector('#storyStatus');


storyUrl.value = DEFAULT_URL;


// Handle story button click
storyButton.addEventListener('click', () => {
  storyJson.textContent = '';
  if(storyUrl.value && (storyUrl.value.indexOf('http') === 0)) {
    cormorant.retrieveStory(storyUrl.value, {},
                            (story, isRetrievedFromMemory) => {
      storyJson.textContent = JSON.stringify(story, null, 2);

      if(story) {
        if(isRetrievedFromMemory) {
          storyStatus.textContent = 'Retrieved from memory';
          storyStatus.setAttribute('class', 'text-dark');
        }
        else {
          storyStatus.textContent = 'Fetched';
          storyStatus.setAttribute('class', 'text-success');
        }
      }
      else {
        storyStatus.textContent = 'Fetch error';
        storyStatus.setAttribute('class', 'text-danger');
      }
    });
  }
  else {
    storyUrl.value = null;
    storyUrl.setAttribute('placeholder', 'Enter a valid URL');
  }
});
