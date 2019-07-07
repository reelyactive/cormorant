/**
 * Copyright reelyActive 2016-2019
 * We believe in an open Internet of Things
 */


// Constant definitions
const DEFAULT_SERVER_URL = 'http://localhost:3001/';


// DOM elements
let storyUrl = document.querySelector('#storyUrl');
let serverUrl = document.querySelector('#serverUrl');
let deviceId = document.querySelector('#deviceId');
let identifierHeader = document.querySelector('#identifierHeader');
let associationsTable = document.querySelector('#associationsTable');
let url = document.querySelector('#url');
let tags = document.querySelector('#tags');
let directory = document.querySelector('#directory');
let position = document.querySelector('#position');
let storyJson = document.querySelector('#storyJson');


// Variables
let associationsServerUrl = DEFAULT_SERVER_URL;


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


// Handle server button click
serverButton.addEventListener('click', function() {
  if(serverUrl.value && (serverUrl.value.indexOf('http') === 0)) {
    associationsServerUrl = serverUrl.value;
  }
  else {
    serverUrl.value = null;
    serverUrl.setAttribute('placeholder', 'Enter a valid URL');
  }
});


// Handle device button click
deviceButton.addEventListener('click', function() {
  identifierHeader.textContent = deviceId.value;
  identifierHeader.hidden = false;
  associationsTable.hidden = true;

  cormorant.retrieveAssociations(deviceId.value, false, function(associations) {
    if(associations) {
      url.textContent = associations.url || '';
      tags.textContent = associations.tags || '';
      directory.textContent = associations.directory || '';
      position.textContent = associations.position || '';
      associationsTable.hidden = false;

      if(associations.hasOwnProperty('url')) {
        cormorant.retrieveStory(associations.url, function(story) {
          storyJson.textContent = JSON.stringify(story, null, 2);
        });
      }
    }
    else {
      // TODO: no associations found
    }
  });
});
