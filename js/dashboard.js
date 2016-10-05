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
.controller('DashCtrl', function($scope, $window, cormorant) {

  // Variables accessible in the HTML scope
  $scope.stories = cormorant.getStories();
  $scope.fetchedStory = 'Enter a URL from which to fetch';
  $scope.url = null;

  // Fetch the story
  $scope.fetchStory = function(url) {
    cormorant.getStory(url, function(story, url) {
      if(story) {
        $scope.fetchedStory = JSON.stringify(story, null, "  ");
      }
      else {
        $scope.fetchedStory = 'No JSON-LD found at ' + url;
      }
    });
  }

  // Fetch the combined story
  $scope.fetchCombinedStory = function(url1, url2) {
    cormorant.getCombinedStory(url1, url2, function(story, url) {
      if(story) {
        $scope.fetchedStory = JSON.stringify(story, null, "  ");
      }
      else {
        $scope.fetchedStory = 'No JSON-LD found at ' + url;
      }
    });
  }

  // Extract the query URL from the location, if applicable
  var url = $window.location.search.split("url=").pop().split('&').shift();
  var hasUrl = $window.location.search.indexOf("url=") != -1;
  if(hasUrl) {
    $scope.url = url;
    $scope.fetchStory(url);
  }

});
