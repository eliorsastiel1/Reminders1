'use strict';

angular.module('myApp.Reminders', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Reminders', {
      templateUrl: 'Reminders/Reminders.html',
        controller: 'RemindersCtrl as vm' 
  });
}])

        .controller('RemindersCtrl', ['$scope', function ($scope) {

            $scope.check = false;
            $scope.Title = "Title";
            $scope.Description = "Description";
            $scope.Date = new Date();
            $scope.Reminder = [];

            $scope.addReminder = function () {
                if ($scope.Title == null || $scope.Description == null || $scope.Date==null)
                    return;

               $scope.Reminder.push({ 'title': $scope.Title, 'Description': $scope.Description, 'Date': $scope.Date })
            }

            $scope.edit = function () {
                if ($scope.check == false) {
                    $scope.check = true;
                }
                else $scope.check = false;

            }
            $scope.deleteReminder = function (title) {
                console.log(title);

            }
           
            $scope.del = function(i){
                $scope.Reminder.splice(i, 1);
            }
               
                
                
}]);