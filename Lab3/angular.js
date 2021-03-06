var app = angular.module('app', []);

app.controller('mainCtrl', mainCtrl);
app.directive('avatar', avatarDirective);

function mainCtrl ($scope) {
  $scope.users = [{
    name: 'Spencer Browning',
    avatarUrl: 'http://images7.alphacoders.com/294/294430.jpg'
  }];
  $scope.addNew = function (user) {
    $scope.users.push({
      name: user.name,
      avatarUrl: user.url
    });
    user.name = '';
    user.url = '';
  };
}


function avatarDirective () {
  return {
    scope: {
      user: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
      '</div>'
    ),
    link: link
  };
  
  function link (scope) {
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'http://thealmanac.org/assets/img/default_avatar.png';
    }
  }

}