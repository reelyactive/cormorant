/**
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */


/**
 * dashboard Module
 * All of the JavaScript specific to the dashboard is contained inside this
 * angular module.  The only external dependencies are:
 * - cormorant (reelyActive)
 */
angular.module('dashboard', ['reelyactive.cormorant'])


/**
 * DashCtrl Controller
 * Handles the manipulation of all variables accessed by the HTML view.
 */
.controller('DashCtrl', function($scope, cormorant) {

  // Variables accessible in the HTML scope
  $scope.stories = cormorant.getStories();
  $scope.fetchedStory = 'Enter a URL from which to fetch';

  // Fetch the story
  $scope.fetchStory = function(url) {
    cormorant.getStory(url, function(story) {
      if(story) {
        $scope.fetchedStory = JSON.stringify(story, null, "  ");
      }
      else {
        $scope.fetchedStory = 'No JSON-LD found at the fetched URL';
      }
    });
  }
});
