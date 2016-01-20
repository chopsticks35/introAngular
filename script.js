angular.module('buttonClicks', []);

angular.module('buttonClicks')
    .controller('buttonClicksController', ['$scope', 
        function($scope){ 
            $scope.displayMessage = function(){
                $scope.displayMessage = 'Thanks for clicking!'  
        }
    }]);