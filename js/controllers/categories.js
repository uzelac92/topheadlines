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

        $scope.showEndGen = true;
        $scope.showStartGen = false;

        $scope.showEndHel = true;
        $scope.showStartHel = false;

        $scope.showEndTech = true;
        $scope.showStartTech = false;

        $scope.showEndSport = true;
        $scope.showStartSport = false;

        webservice.getCategory(dataShare.getData(),'entertainment').then(function (response) {
            if (response.data.status == "ok") {      
                $scope.arcs = response.data.articles;          
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
                $scope.scies = response.data.articles;
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

        webservice.getCategory(dataShare.getData(),'general').then(function (response) {
            if (response.data.status == "ok") {
                $scope.gens = response.data.articles;
                var data = response.data.articles;
                $scope.generals = [];
                $scope.dumpGen = [];
                for(var i=0;i<data.length;i++) {
                    $scope.generals.push(data[i]);
                }
            } else {
                alert('Nema komentara za prikaz!')
            }
        });

        webservice.getCategory(dataShare.getData(),'health').then(function (response) {
            if (response.data.status == "ok") {
                $scope.hels = response.data.articles;
                var data = response.data.articles;
                $scope.health = [];
                $scope.dumpHel = [];
                for(var i=0;i<data.length;i++) {
                    $scope.health.push(data[i]);
                }
            } else {
                alert('Nema komentara za prikaz!')
            }
        });

        webservice.getCategory(dataShare.getData(),'technology').then(function (response) {
            if (response.data.status == "ok") {
                $scope.techs = response.data.articles;
                var data = response.data.articles;
                $scope.technology = [];
                $scope.dumpTech = [];
                for(var i=0;i<data.length;i++) {
                    $scope.technology.push(data[i]);
                }
            } else {
                alert('Nema komentara za prikaz!')
            }
        });

        webservice.getCategory(dataShare.getData(),'sport').then(function (response) {
            if (response.data.status == "ok") {
                $scope.spos = response.data.articles;
                var data = response.data.articles;
                $scope.sport = [];
                $scope.dumpSport = [];
                for(var i=0;i<data.length;i++) {
                    $scope.sport.push(data[i]);
                }
            } else {
                alert('Nema komentara za prikaz!')
            }
        });

    }

    $scope.nextEnt = function() {
        $scope.recycle.unshift($scope.articles[0]);
        $scope.articles.shift();

        if($scope.recycle.slice().length > 0) {
            $scope.showStart = true;
        }
        if( $scope.articles.slice().length == 1) {
            $scope.showEnd = false;
        }
        
    }
    $scope.prevEnt = function() {

        $scope.articles.unshift($scope.recycle[0]);
        $scope.recycle.shift();

        if($scope.recycle.slice().length == 0) {
            $scope.showStart = false;
        }
        if( $scope.articles.slice().length == 1) {
            $scope.showEnd = true;
        }
    }

    $scope.nextScn = function() {
        $scope.dump.unshift($scope.sciences[0]);
        $scope.sciences.shift();

        if($scope.dump.slice().length > 0) {
            $scope.showStartScn = true;
        }
        if( $scope.sciences.slice().length == 1) {
            $scope.showEndScn = false;
        }
        
    }
    $scope.prevScn = function() {

        $scope.sciences.unshift($scope.dump[0]);
        $scope.dump.shift();
        if($scope.dump.slice().length == 0) {
            $scope.showStartScn = false;
        }
        if( $scope.sciences.slice().length == 1) {
            $scope.showEndScn = true;
        }
    }

    $scope.nextGen = function() {
        $scope.dumpGen.unshift($scope.generals[0]);
        $scope.generals.shift();

        if($scope.dumpGen.slice().length == 0) {
            $scope.showStartGen = true;
        }
        if( $scope.generals.slice().length == 1) {
            $scope.showEndGen = false;
        }
        
    }
    $scope.prevGen = function() {

        $scope.generals.unshift($scope.dumpGen[0]);
        $scope.dumpGen.shift();
        if($scope.dumpGen.slice().length == 0) {
            $scope.showStartGen = false;
        }
        if( $scope.generals.slice().length == 1) {
            $scope.showEndGen = true;
        }
    }

    $scope.nextHel = function() {
        $scope.dumpHel.unshift($scope.health[0]);
        $scope.health.shift();

        if($scope.dumpHel.slice().length == 0) {
            $scope.showStartHel = true;
        }
        if( $scope.health.slice().length ==1) {
            $scope.showEndHel = false;
        }
        
    }
    $scope.prevHel = function() {

        $scope.health.unshift($scope.dumpHel[0]);
        $scope.dumpHel.shift();
        if($scope.dumpHel.slice().length == 0) {
            $scope.showStartHel = false;
        }
        if( $scope.health.slice().length ==1) {
            $scope.showEndHel = true;
        }
    }

    $scope.nextTech = function() {
        $scope.dumpTech.unshift($scope.technology[0]);
        $scope.technology.shift();

        if($scope.dumpTech.slice().length == 0) {
            $scope.showStartTech = true;
        }
        if( $scope.technology.slice().length ==1) {
            $scope.showEndTech = false;
        }
        
    }
    $scope.prevTech = function() {

        $scope.technology.unshift($scope.dumpTech[0]);
        $scope.dumpTech.shift();
        if($scope.dumpTech.slice().length == 0) {
            $scope.showStartTech = false;
        }
        if( $scope.technology.slice().length ==1) {
            $scope.showEndTech = true;
        }
    }

    $scope.nextSport = function() {
        $scope.dumpSport.unshift($scope.sport[0]);
        $scope.sport.shift();
        if($scope.dumpSport.slice().length == 0) {
            $scope.showStartSport = true;
        }
        if( $scope.sport.slice().length == 1) {
            $scope.showEndSport = false;
        }
        
    }
    $scope.prevSport = function() {

        $scope.sport.unshift($scope.dumpSport[0]);
        $scope.dumpSport.shift();
        if($scope.dumpSport.slice().length == 0) {
            $scope.showStartSport = false;
        }
        if( $scope.sport.slice().length == 1) {
            $scope.showEndSport = true;
        }
    }
});