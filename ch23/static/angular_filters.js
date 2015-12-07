angular.module("myApp", [])
  .controller("myController", function( $scope ) {
    $scope.JSONObj = {title:"myTitle"};
    $scope.word = "SuperCalifragalisticexpedialidocious";
    $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  });
