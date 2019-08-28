var app = angular.module('topnews', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when("/",
            {
                title: 'Top News',
                templateUrl: "/pages/topnews.html",
                controller: 'topnewsCtrl'
                
            })
        .when("/categories",
            {
                title: 'Categories',
                templateUrl: "/pages/categories.html",
                controller: 'categoriesCtrl'
                
            })
        .when("/search",
            {
                title: 'Search',
                templateUrl: "/pages/search.html",
                controller: 'searchCtrl'
            })
        .otherwise({
            redirectTo: '/'
        });
}]);