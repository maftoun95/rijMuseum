

rijMuse.factory('canvasFactory', [
    '$http', 
    function canvasFactory($http) {
        return function(canvasID, callback){
            var newCanvas = {};
            var prefix = 'https://www.rijksmuseum.nl/api/en/collection/';
            var suffix = '?key=xvBxNCX5&format=json&';
            var queryUrl = prefix + canvasID + suffix;
            console.log(queryUrl);
            $http({
                method: 'GET',
                url: queryUrl
            }).then(function successCallback(jsonData) {
                // this callback will be called asynchronously
                // when the response is available
                console.log("Canvas JSON Data: " + JSON.stringify(jsonData))
                newCanvas.id = jsonData.data.artObject.id;
                // Dimension data should be in cm. If you have trouble rendering, check dimensions[i].unit.
                if(jsonData.data.artObject.webImage != null){
                    newCanvas.height = jsonData.data.artObject.webImage.height;
                    newCanvas.width =jsonData.data.artObject.webImage.width;
                }else{
                    newCanvas.height = jsonData.data.artObject.dimensions[0].value;
                    newCanvas.width =jsonData.data.artObject.dimensions[1].value;
                }
                
                newCanvas.url = jsonData.data.artObject.webImage.url;
                newCanvas.title = jsonData.data.artObject.label.title;
                newCanvas.maker = jsonData.data.artObject.label.makerLine;
                //Sets the description field, checking several spots for the appropriate data.
                if (jsonData.data.artObject.plaqueDescriptionEnglish){
                    newCanvas.text = jsonData.data.artObject.plaqueDescriptionEnglish
                } else if (jsonData.data.artObject.label.description){
                    newCanvas.text = jsonData.data.artObject.label.description;
                }
                console.log('-------------------------------------------------------------');
                // console.log('New Canvas: ' + JSON.stringify(newCanvas))
                console.log('-------------------------------------------------------------');
                // Returns the canvas object.
                callback(newCanvas);
                return newCanvas;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('-------------------------------------------------------------');
                console.log('Error Response: ' + JSON.stringify(response))
                console.log('-------------------------------------------------------------');
                
                return response;
            });
        }
}])
























// -------------------------------------------------------------------------------
//     console.log('Canvas Factory');
//     var newCanvas = {}
//     // This function takes the JSON data from an API call for a *SINGLE SPECIFIC* image and 'converts' it into a canvas object.
//     function convertToCanvas(id){
//         var prefix = 'https://www.rijksmuseum.nl/api/nl/collection/';
//         var suffix = '?key=xvBxNCX5&format=json&';
//         var queryUrl = prefix + id + suffix;
//         console.log(queryURL);
//         $http({
//             method: 'GET',
//             url: queryUrl
//         }).then(function successCallback(jsonData) {
//             // this callback will be called asynchronously
//             // when the response is available
//             console.log(response);
//             newCanvas.id = jsonData.artObject.id;
//             // Dimension data should be in cm. If you have trouble rendering, check dimensions[i].unit.
//             newCanvas.height = jsonData.artObject.dimensions[0].value;
//             newCanvas.width =jsonData.artObject.dimensions[1].value;
//             newCanvas.url = jsonData.artObject.webimage.url;
//             newCanvas.title = jsonData.artObject.label.title;
//             newCanvas.maker = jsonData.artObject.label.makerLine;
//             //Sets the description field, checking several spots for the appropriate data.
//             if (jsonData.artObject.plaqueDescriptionEnglish){
//                 newCanvas.text = jsonData.artObject.plaqueDescriptionEnglish
//             } else if (jsonData.artObject.label.description){
//                 newCanvas.text = jsonData.artObject.label.description;
//             }
//             // Returns the canvas object.
//         }, function errorCallback(response) {
//             // called asynchronously if an error occurs
//             // or server returns response with an error status.
//         });
//     }
//             return newCanvas;
// }])