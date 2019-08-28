app.factory('webservice', function ($http) {

    var obj = {};

    obj.getTopNews = function (lang) {
        return $http.get('https://newsapi.org/v2/top-headlines?country='+lang+'&apiKey=2d06f2393cc341ccb78192d99fd7412f');
    }

    obj.getCategory = function (lang,cat) {
        return $http.get('https://newsapi.org/v2/top-headlines?country='+lang+'&category='+cat+'&apiKey=2d06f2393cc341ccb78192d99fd7412f');
    }
    
    return obj;

});

app.factory('dataShare',function($rootScope){
    var service = {};
    service.data = 'gb';
    service.sendData = function(data){
        this.data = data;
        $rootScope.$broadcast('data_shared');
    };
    service.getData = function(){
      return this.data;
    };
    return service;
});

app.filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace !== -1) {
              //Also remove . and , so its gives a cleaner result.
              if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                lastspace = lastspace - 1;
              }
              value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});