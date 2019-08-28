app.controller('topnewsCtrl', function($scope,webservice,dataShare){

    $scope.$on('data_shared',function(){
        $scope.initNews();
    });

    $scope.initNews = function() {

        webservice.getTopNews(dataShare.getData()).then(function (response) {
            var data = response.data;
            
            if (data.status == "ok") {
                $scope.articles = data.articles;
            } else {
                alert('Nema komentara za prikaz!')
            }
        });
    }

});