    
    
    
    
    var galleryPrefix = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/'
    var keyJson = '?key=xvBxNCX5&format=json&';
    
    // List of all availible galleries.  To add a new gallery, take the URL of the page and copy everything from 
    
    // The URLs for for calls to the API are urlPrefix + 'optionalObjectNumber' + keyJson + 'searchTerms'
    var galleryIndex = {
        "rembrandt": "artists/rembrandt-harmensz-van-rijn",
        "vanGogh": "artists/vincent-van-gogh",
        "vermeer": "artists/johannes-vermeer",
        "paper": "works-of-art/masterpieces-on-paper"
    }

    
    
    
    
    // This function is passed a collection name, makes an API call to the corresponding gallery, and extracts the array of art object ids.
    // For each art object id (string), it makes an API call for the work, then passes the raw JSON data into convertToCanvas to return a 
    // new canvas object.  The returned object is placed into an array, allowing us to pass the array back to the page filled with artwork links and gallery details .
    function getGallery(galleryName){
        var queryURL = galleryPrefix + galleryIndex[galleryName] + keyJson;
        console.log(queryURL);
        // var digiGallery = {}
        // $http({
        //     method: 'GET',
        //     url: queryURL
        // }).then(function successCallback(response) {
        //     // this callback will be called asynchronously
        //     // when the response is available
        //     console.log(response);
        // }, function errorCallback(response) {
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        //     digiGallery.blurb = "Sorry, this wing is closed. Try a different gallery!"
        // });
    }

    getGallery('paper');