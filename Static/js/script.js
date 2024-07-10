var app = angular.module('RhythmRangerApp', []);

app.service('authService', function($http, $window) {
  var clientId = 'YOUR_CLIENT_ID';
  var redirectUri = 'YOUR_REDIRECT_URI';

  this.login = function() {
    var authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-read-private user-read-email`;
    $window.location.href = authUrl;
  };

  this.getToken = function(code) {
    return $http.post('/api/token', { code: code });
  };
});

app.controller('authController', function($scope, authService, $location) {
  var code = $location.search().code;

  if (code) {
    authService.getToken(code).then(function(response) {
      $scope.accessToken = response.data.access_token;
    });
  }

  $scope.login =

     

