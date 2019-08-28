app.controller('locationCtrl', function($scope,dataShare){

    $scope.changeLoc = function(loc) {
        dataShare.sendData(loc);
    }

});