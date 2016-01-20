angular.module('buttonClicks', []);

angular.module('buttonClicks')
    .controller('buttonClicksController', ['$scope', 
        function($scope){ 
            $scope.displayMessage = function(){
                $scope.Message = 'Thanks for clicking!';
                console.log($scope.Message);
        }
            
            $scope.displayUL = function() {
                $scope.li1 = 'here';
                $scope.li2 = 'is';
                $scope.li3 = 'u list';
        }
    }]);