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

    $scope.hash = function(s) {
        var a = 1, c = 0, h, o;
        if (s) {
            a = 0;
            for (h = s.length - 1; h >= 0; h--) {
                o = s.charCodeAt(h);
                a = (a<<6&268435455) + o + (o<<14);
                c = a & 266338304;
                a = c!==0?a^c>>21:a;
            }
        }
        return String(a);
    };


});