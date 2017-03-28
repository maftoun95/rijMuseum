console.log('Canvas Factory');

rijMuse.factory('canvasFactory', ['$http', function($http) {

    // This function takes the JSON data from an API call for a *SINGLE SPECIFIC* image and 'converts' it into a canvas object.
    function convertToCanvas(id){
        var prefix = 'https://www.rijksmuseum.nl/api/nl/collection/';
        var suffix = '?key=xvBxNCX5&format=json&';
        var queryUrl = prefix + id + suffix;
        console.log(queryURL);
        $http({
            method: 'GET',
            url: queryUrl
        }).then(function successCallback(jsonData) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            var newCanvas = {};
            newCanvas.id = jsonData.artObject.id;
            // Dimension data should be in cm. If you have trouble rendering, check dimensions[i].unit.
            newCanvas.height = jsonData.artObject.dimensions[0].value;
            newCanvas.width =jsonData.artObject.dimensions[1].value;
            newCanvas.url = jsonData.artObject.webimage.url;
            newCanvas.title = jsonData.artObject.label.title;
            newCanvas.maker = jsonData.artObject.label.makerLine;
            //Sets the description field, checking several spots for the appropriate data.
            if (jsonData.artObject.plaqueDescriptionEnglish){
                newCanvas.text = jsonData.artObject.plaqueDescriptionEnglish
            } else if (jsonData.artObject.label.description){
                newCanvas.text = jsonData.artObject.label.description;
            }
            // Returns the canvas object.
            return newCanvas;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
}])