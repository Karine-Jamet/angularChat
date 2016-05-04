var app = angular.module('app', []);
//
// var chatFunction = function($scope, $rootScope){
//   if (!$scope.messageToPrint) {
//     $scope.messageToPrint = [];
//   }
//   if (!$rootScope.message) {
//     $rootScope.message = "";
//   }
//
//   $scope.connexion = false;
//   $scope.toConnect = function(e) {
//     $scope.connexion = true;
//     $scope.userName = e;
//   }
//   $scope.sendMessage = function(f) {
//     $rootScope.message = {
//       "user": $scope.userName,
//       "text": f
//     };
//     $scope.chatPhrase = "";
//
//   }
//
//   $rootScope.$watch('message', function(newValue) {
//     if (newValue.text.startsWith("@")) {
//       if (newValue.text.startsWith("@" + $scope.userName)) {
//         $scope.messageToPrint.push(newValue.user + " - " + newValue.text);
//       }
//     } else {
//       $scope.messageToPrint.push(newValue.user + " - " + newValue.text);
//     }
//   });
//
// };
//
// app.controller('chatGaucheCtrl', chatFunction);
// app.controller('chatMilieuCtrl', chatFunction);
// app.controller('chatDroiteCtrl', chatFunction);


app.directive("chatBlock", function() {
  return {
    restrict: "E",
     scope: true,
    controller: ['$scope', '$rootScope', function($scope, $rootScope) {
      if (!$scope.messageToPrint) {
        $scope.messageToPrint = [];
      }
      if (!$rootScope.message) {
        $rootScope.message = "";
      }

      $scope.connexion = false;
      $scope.toConnect = function(e) {
        $scope.connexion = true;
        $scope.userName = e;
      }
      $scope.sendMessage = function(f) {
        $rootScope.message = {
          "user": $scope.userName,
          "text": f
        };
        $scope.chatPhrase = "";

      }

      $rootScope.$watch('message', function(newValue) {
        if (newValue.text.startsWith("@")) {
          if (newValue.text.startsWith("@" + $scope.userName)) {
            $scope.messageToPrint.push(newValue.user + " - " + newValue.text);
          }
        } else {
          $scope.messageToPrint.push(newValue.user + " - " + newValue.text);
        }
      });
    }],
    templateUrl: "chatTemplate.html"
  };
});
