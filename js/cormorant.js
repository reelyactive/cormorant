/**
 * Copyright reelyActive 2016-2019
 * We believe in an open Internet of Things
 */


let cormorant = (function() {

  // Internal constants
  const SIGNATURE_SEPARATOR = '/';

  // Internal variables
  let associations = {};
  let stories = {};

  // Get the associations for the given device identifier
  function retrieveAssociations(deviceId, isStoryToBeRetrieved, callback) {
    // TODO: GET
    return callback({});
  }

  // Get the associations for the given device identifier
  function retrieveStory(storyUrl, callback) {
    // TODO: GET
    return callback({});
  }

  // Expose the following functions and variables
  return {
    retrieveAssociations: retrieveAssociations,
    retrieveStory: retrieveStory,
    associations: associations,
    stories: stories
  }

}());
