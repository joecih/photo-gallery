var myApp = angular.module('mainApp', []);
console.log(myApp);

myApp.controller('galleryController', function($scope) {
    $scope.images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg'
    ];
    
    $scope.updateBackground = function(image) {
        $scope.previewImage = image;
    }
    
    // $scope._url = "https://api.nasa.gov/planetary/apod?api_key=fF8zan35Bpw4IrhiCPnKKXbtEuwfuBOrenmXGnqb";
    
    // $scope.items = [];  
    //  $scope.search = function() {        
    //         // $http({method: 'JSONP', url: "http://something.com/lol?callback=JSON_CALLBACK&query="+ $scope.searchString}).
    //         $http({method: 'GET', url: _url}).
    //           success(function(data, status) {
    //             $scope.items = data.entries;
    //           }).
    //           error(function(data, status) {
    //             console.log(data || "Request failed");
    //         });     
    //  };
     
    //  console.log($scope.items.length);
});