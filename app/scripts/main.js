/* global $, googleMapService, ko, _ */

'use strict';
//Model
var model = {
    universities: []
};

/**
* @name getInstaPics
* @description make an API call to Instagram API to get pics by tags
* @param count number of pictures to return
* @param hashtag keyword to search pictures with
*/
function getInstaPics(count, hashtag) {
      var clientId = '85a5b3cd341344cebeea9a990a80b3ed';
			return new Promise(function(resolve, reject){
        $.getJSON(`https://api.instagram.com/v1/tags/${hashtag}/media/recent?callback=?&client_id=${clientId}&count=${count}`).then(function(response){
          if(response.meta.code !== 200){
            reject(response.status);
            console.log('Could not get images from Instagram API.');
          }else{
            resolve(response.data);
          }
        });
      });
}

/**
* @name filterUniversities
* @description filters universities in the view model based on the searchText value
* @param universities view model universities
* @param searchText input searchText
*/

function filterUniversities(universities, searchText) {
    if(searchText === ''){
      return model.universities;
    }
    return _.filter(universities,
       function(uni){
         return (uni.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
       });
}

/**
* @name initializeMarkers
* @description It draws map markers based on the viewmodel universities
*/
function initializeMarkers(vm) {
  googleMapService.clearMarkers();
  for(var i = 0; i < vm.universities().length; i++){
    googleMapService.getMarkers().push(googleMapService.createMarker(vm.universities()[i], vm));
  }
}

// App initialization
$(function() {

    googleMapService.initializeMap();
    googleMapService.fitBounds();
    googleMapService.getData().then(function(data){
        //faltting the location object
        _.each(data, function(uni){
            uni.location = {'lat': uni.geometry.location.H, 'long': uni.geometry.location.L};
        });
        //assign data to model.universities
        model.universities = data;

        //creating the viewModel object
        var viewmodel = ko.viewmodel.fromModel(model, {
            extend: {
                '{root}.universities[i]': function(uni, root){
                    uni.showInfoWindow = function(){
                        googleMapService.openInfoWindow(uni, viewmodel);
                    };
                },
                '{root}': function(root){
                  //hide and show images div
                  root.showPics = ko.observable(false);
                  //searchText used to search for universities
                  root.searchText = ko.observable('');
                  //Error message
                  root.errors = ko.observable('');
                  //clears the searchText in the input
                  root.clearSearchText = function() {
                    root.searchText('');
                  };
                  //reset the map center and zoom
                  root.resetMap = function() { googleMapService.setCenter(); };
                  //observableArray to store instagram pictures
                  root.instagramPictures = ko.observableArray([
                    { link: ko.observable(''),
                      txt: ko.observable('')
                    }
                  ]);
                  //Loads instagram pictures by univerity name
                  root.loadPics = function(name){
                    //make the university name compatible for instagram API
                    var instaName, words = name.split(/[\s,.]+/);
                    if(words.length < 3){
                        instaName = name.replace(/[\s]+/g, '').toLowerCase();
                    }else{
                        instaName = (words[0] + ' ' + words[1] + ' ' + words[2]).replace(/\s+/g, '').toLowerCase();
                    }
                    //get images from instagram
                    getInstaPics(10, instaName).then(function(response){

                      //If we already loaded pictures in our observable array, removed all of them
                      if(root.instagramPictures().length >= 1){
                        root.instagramPictures.removeAll();
                      }

                      //map the url and caption of the response to our view model observable array
                      _.map(response, function(x) {
                          x.picUrl = ko.observable(x.images.thumbnail.url);
                          x.txt = ko.observable(x.caption.text);
                          root.instagramPictures.push(x);
                      });
                      //make the visibility of the div true
                      root.showPics(true);

                    })
                    .catch(function(reason){
                        root.errors('Cannot load pictures!');
                    });
                  };
                }
            }
        });

        //Subscribe to search text change
        viewmodel.searchText.subscribe(function(value) {
           var updatedModel = { universities: filterUniversities(model.universities, value)};
           ko.viewmodel.updateFromModel(viewmodel, updatedModel);
           initializeMarkers(viewmodel);
       });

       initializeMarkers(viewmodel);
       ko.applyBindings(viewmodel);
       googleMapService.initializeInfoWindow();
    })
    .catch(function(reason){
        console.log(reason);
        $('.google-map').hide();
        $('body').prepend('<div class="error-dialog"><p class="error-message">' +
                    'There was an error loading Google Maps. Please check ' +
                    'your internet connection or try again later.</p></div>');
    });
});