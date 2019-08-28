app.controller('categoriesCtrl', function($scope,webservice,dataShare){

    $scope.country = 'gb';
    $scope.$on('data_shared',function(){
        $scope.country = dataShare.getData();
        $scope.initNews();
    });

    $scope.initNews = function() {
        $scope.showEnd = true;
        $scope.showStart = false;

        $scope.showEndScn = true;
        $scope.showStartScn = false;

        webservice.getCategory(dataShare.getData(),'entertainment').then(function (response) {
            if (response.data.status == "ok") {                
                var data = response.data.articles;
                $scope.articles = [];
                $scope.recycle = [];
                for(var i=0;i<data.length;i++) {
                    $scope.articles.push(data[i]);
                }
            } else {
                alert('Nema komentara za prikaz!')
            }
        });

        webservice.getCategory(dataShare.getData(),'science').then(function (response) {
            if (response.data.status == "ok") {
                var data = response.data.articles;
                $scope.sciences = [];
                $scope.dump = [];
                for(var i=0;i<data.length;i++) {
                    $scope.sciences.push(data[i]);
                }
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

    $scope.nextEnt = function() {
        $scope.end = $scope.articles.slice().length < 3 ? $scope.articles.slice().length : 3;
        for(var i = 0; i< $scope.end; i++) {
            $scope.recycle.unshift($scope.articles[i]);
        }
        for(var i = 0; i< $scope.end; i++) {
            $scope.articles.shift();
        }

        if($scope.recycle.slice().length > 0) {
            $scope.showStart = true;
        }
        var size  = $scope.recycle.slice().length - $scope.articles.slice().length;
        if( $scope.articles.slice().length <= 3) {
            $scope.showEnd = false;
        }
        
    }
    $scope.prevEnt = function() {

        $scope.end = $scope.recycle.slice().length < 3 ? $scope.recycle.slice().length : 3;
        for(var i = 0; i< $scope.end; i++) {
            $scope.articles.unshift($scope.recycle[i]);
        }
        for(var i = 0; i< $scope.end; i++) {
            $scope.recycle.shift();
        }
        if($scope.recycle.slice().length <= 0) {
            $scope.showStart = false;
        }
        if( $scope.articles.slice().length > 3) {
            $scope.showEnd = true;
        }
    }

    $scope.nextScn = function() {
        $scope.end = $scope.sciences.slice().length < 3 ? $scope.sciences.slice().length : 3;
        for(var i = 0; i< $scope.end; i++) {
            $scope.dump.unshift($scope.sciences[i]);
        }
        for(var i = 0; i< $scope.end; i++) {
            $scope.sciences.shift();
        }

        if($scope.dump.slice().length > 0) {
            $scope.showStartScn = true;
        }
        var size  = $scope.dump.slice().length - $scope.sciences.slice().length;
        if( $scope.sciences.slice().length <= 3) {
            $scope.showEndScn = false;
        }
        
    }
    $scope.prevScn = function() {

        $scope.end = $scope.dump.slice().length < 3 ? $scope.dump.slice().length : 3;
        for(var i = 0; i< $scope.end; i++) {
            $scope.sciences.unshift($scope.dump[i]);
        }
        for(var i = 0; i< $scope.end; i++) {
            $scope.dump.shift();
        }
        if($scope.dump.slice().length <= 0) {
            $scope.showStartScn = false;
        }
        if( $scope.sciences.slice().length > 3) {
            $scope.showEndScn = true;
        }
    }



});