app.controller('mainCtrl', function($scope,$routeParams,webservice,dataShare){

    $scope.postDate = $routeParams.post;

    $scope.$on('data_shared',function(){
        $scope.initNews();
    });

    $scope.initNews = function() {
        webservice.getTopNews(dataShare.getData()).then(function (response) {
            var data = response.data.articles;
            
            if (response.data.status == "ok") {
                for(var i=0; i<data.length; i++) {
                    if(data[i].publishedAt == $scope.postDate) {
                        $scope.post=data[i];
                        console.log(data[i]);
                        break;
                    }
                }
            } else {
                alert('Nema komentara za prikaz!')
            }
        });
    }
});