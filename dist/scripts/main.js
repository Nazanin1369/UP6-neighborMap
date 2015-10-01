-//v2.0.3 - C 2013, Dave Herren, License: MIT 
(function(){function y(b,g){var e=b?b[g.full]||b[g.parent]||b[g.name]||{}:{};p&&p(g,e,b);return e}function r(b){return null===b||void 0===b}function u(b){return null===b||void 0===b||b.constructor===String||b.constructor===Number||b.constructor===Boolean||b instanceof Date}function n(b,g,e,c){var f,a,d,h,k,l,m;c=c||y(g,e);if(f=c.custom)l=!0,"function"===typeof f?(a=f(b),r(a)||(a.___$mapCustom=f)):(a=f.map(b),r(a)||(a.___$mapCustom=f.map,f.unmap&&(a.___$unmapCustom=f.unmap)));else if(c.append)l=!0,
a=b;else{if(c.exclude)return l=!0,v;if(u(b))a=e.parentIsArray?b:B(b);else if(b instanceof Array){a=[];d=0;for(f=b.length;d<f;d++)a[d]=n(b[d],g,{name:"[i]",parent:e.name+"[i]",full:e.full+"[i]",parentIsArray:!0});if(!e.parentIsArray||z){h={name:"[i]",parent:e.name+"[i]",full:e.full+"[i]",parentIsArray:!0};a=C(a);if(b=c.arrayChildId)a.___$childIdName=b;a.pushFromModel=function(b){b=n(b,g,h);a.push(b)};a.unshiftFromModel=function(b){b=n(b,g,h);a.unshift(b)};a.popToModel=function(b){b=a.pop();return s(b,
h)};a.shiftToModel=function(b){b=a.shift();return s(b,h)}}}else if(b.constructor===Object)for(d in a={},b)h={name:d,parent:("[i]"===e.name?e.parent:e.name)+"."+d,full:e.full+"."+d},m=b[d],(f=u(m)?y(g,h):void 0)&&f.custom?(a.___$customChildren=a.___$customChildren||{},a.___$customChildren[d]=f.custom,a[d]="function"===typeof f.custom?f.custom(b[d]):f.custom.map(b[d])):(f=n(m,g,h,f),f!==v&&(a[d]=f))}if(!l&&(k=c.extend))"function"===typeof k?a=k(a)||a:k.constructor===Object&&("function"===typeof k.map&&
(a=k.map(a)||a),"function"===typeof k.unmap&&(a.___$unmapExtend=k.unmap));return a}function s(b,g){var e,c,f,a=q(b),d;d=b!==a;p&&p(g);if(!d&&b&&b.constructor===Function)return v;if(b&&b.___$unmapCustom)e=b.___$unmapCustom(b);else if(d&&u(a)||r(a))e=a;else if(a instanceof Array){e=[];c=0;for(f=a.length;c<f;c++)e[c]=s(a[c],{name:"[i]",parent:g.name+"[i]",full:g.full+"[i]"})}else if(a.constructor===Object)for(c in e={},a){if("___$"!==c.substr(0,4))if(b.___$customChildren&&b.___$customChildren[c]&&b.___$customChildren[c].unmap)e[c]=
b.___$customChildren[c].unmap(a[c]);else if(d=a[c],!ko.isComputed(d)&&!((f=q(d))&&f.constructor===Function))d=s(d,{name:c,parent:("[i]"===g.name?g.parent:g.name)+"."+c,full:g.full+"."+c}),d!==v&&(e[c]=d)}else!d&&"function"!==typeof a&&(e=a);b&&b.___$unmapExtend&&(e=b.___$unmapExtend(e,b));return e}function t(b,g,e,c,f){var a,d,h,k,l,m,n,j=q(g);d=g!==j;p&&p(e);if(d&&r(j)^r(b))g(b);else if(b&&j&&j.constructor==Object&&b.constructor===Object)for(a in b)g.___$customChildren&&g.___$customChildren[a]?(c=
g.___$customChildren[a].map||g.___$customChildren[a],j[a]=c(b[a])):(c=j[a],!d&&j.hasOwnProperty(a)&&(u(c)||c&&c.constructor===Array)?j[a]=b[a]:c&&"function"===typeof c.___$mapCustom?A(c)?(h=c.___$mapCustom(b[a],c),h=q(h),c(h)):j[a]=c.___$mapCustom(b[a],c):r(b[a])&&j[a]&&j[a].constructor===Object?j[a]=b[a]:f?(c=function(a,b,c){return function(){t(a[c],j[c],{name:c,parent:("[i]"===e.name?e.parent:e.name)+"."+c,full:e.full+"."+c},j,f);f(f()-1)}}(b,g,a),f(f()+1),setTimeout(c,0)):t(b[a],j[a],{name:a,parent:("[i]"===
e.name?e.parent:e.name)+"."+a,full:e.full+"."+a}));else if(j&&j instanceof Array)if(n=g.___$childIdName){h=[];k=[];for(a=b.length-1;0<=a;a--){l=b[a][n];for(d=j.length-1;0<=d;d--)if(c=j[d],m=q(c),m=q(m[n]),m===l){c.___$mapCustom?ko.isObservable(c)?(l=c.___$mapCustom(b[a],c),A(l)&&l!=c&&c(q(l))):j[d]=c.___$mapCustom(b[a],c):f?(c=function(a,b,c,d){return function(){t(a[c],j[d],{name:"[i]",parent:e.name+"[i]",full:e.full+"[i]"},void 0,f);f(f()-1)}}(b,g,a,d),f(f()+1),setTimeout(c,0)):t(b[a],j[d],{name:"[i]",
parent:e.name+"[i]",full:e.full+"[i]"});k[d]=!0;h[a]=!0;break}}for(d=j.length-1;0<=d;d--)k[d]||g.splice(d,1);for(a=b.length-1;0<=a;a--)h[a]||g.pushFromModel(b[a])}else if(h=[],d=g.___$mapCustom,"function"===typeof d){a=0;for(c=b.length;a<c;a++)h[a]=b[a];g(d(h))}else{g(h);a=0;for(c=b?b.length:0;a<c;a++)g.pushFromModel(b[a])}else d&&g(b);if("{root}"===e.name&&f)return{onComplete:function(a){a&&"function"==typeof a&&(f?ko.computed(function(){a&&0===f()&&(a(),a=void 0)}).extend({throttle:50}):a())}}}
function w(b,g){z=b.makeChildArraysObservable;window.console&&b.logging?(console.log(g),p=function(b,c,f){console.log("- "+(c&&c.settingType?c.settingType+" "+b.full+" (matched: '"+((f[b.full]?b.full:"")||(f[b.parent]?b.parent:"")||b.name)+"')":"default "+b.full))}):p=void 0}var q=ko.utils.unwrapObservable,A=ko.isObservable,B=ko.observable,C=ko.observableArray,x={name:"{root}",parent:"{root}",full:"{root}"},p,z,v=function(){};ko.viewmodel={options:{makeChildArraysObservable:!0,logging:!1},fromModel:function(b,
g){var e={},c=g?g.shared||{}:{},f,a,d,h,k,l,m;for(k in g)if(f=g[k]||{},"shared"!==k)if(f instanceof Array){a=0;for(h=f.length;a<h;a++)d=f[a],e[d]=e[d]||{},e[d][k]=!0,e[d].settingType=e[d].settingType?"multiple":k}else if(f.constructor===Object)for(d in f){e[d]=e[d]||{};a=f[d];if((a="arrayChildId"!==k&&a&&a.constructor===String&&c[a]?c[a]:a)&&a.constructor===Object)for(l in a)if((m=a[l])&&m.constructor==String&&c[m])a[l]=c[m];e[d][k]=a;e[d].settingType=e[d].settingType?"multiple":k}w(this.options,
"Mapping From Model");return n(b,e,x)},toModel:function(b){w(this.options,"Mapping To Model");return s(b,x)},updateFromModel:function(b,g,e){e=e?ko.observable(0):void 0;w(this.options,"Update From Model");return t(g,b,x,void 0,e)}}})();
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


/* eslint multistr: true */
/* global $, google, ko */
/* exported googleMapService */

/**
 * Service that manages all operations with the map.
 * @return googleMapService instance
 */
var googleMapService = new (function() {
    'use strict';

    var self = this;

    var map, infoWindow;
    var markers = [];
    var apiEngine;


    self.getMap = function() {
        return map;
    };

    self.getInfoWindow = function() {
        return infoWindow;
    };

    self.getMarkers = function() {
        return markers;
    };

    /**
     * It removes all markers in the map.
     */
    self.clearMarkers = function() {
        markers.forEach(function(marker) {
            if (marker) {
                marker.setMap(null);
            }
        });
        markers = [];
    };

    /**
     * It added a marker in the map.
     * @param  {Event} Event linked to the marker.
     */
    self.createMarker = function(university, vm) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(university.location.lat(), university.location.long()),
            animation: google.maps.Animation.DROP,
            icon: 'images/uni.png'
        });

        marker.setMap(map);

        function openMarker() {
            self.bounceOnce(this);
            infoWindow.setContent(self.createInfoWindowContent(university));
            vm.loadPics(university.name());
            infoWindow.open(map, this);
            ko.applyBindings(vm, $('.info-popup')[0]);
        }

        google.maps.event.addListener(marker, 'click', openMarker);

        google.maps.event.addListener(marker, 'mousedown', openMarker);

        return marker;
    };

    self.openInfoWindow = function(university, vm){
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(university.location.lat(), university.location.long()),
          animation: google.maps.Animation.DROP,
          icon: 'images/uni.png'
      });

      marker.setMap(map);

      self.bounceOnce(marker);
      infoWindow.setContent(self.createInfoWindowContent(university));
      infoWindow.open(map, marker);
      ko.applyBindings(vm, $('.info-popup')[0]);

      return marker;
    };

    /**
     * It fits the map bounds to the markers in the map.
     */
    self.fitBounds = function() {
        var bounds = new google.maps.LatLngBounds();

        if (markers.length > 0) {
            for (var i = 0; i < markers.length; i++) {
                if (markers[i].getVisible()) {
                    bounds.extend(markers[i].getPosition());
                }
            }
            map.fitBounds(bounds);
        }
    };


    /**
     * It adds a bounce-twice effect to a marker.
     * @param  {google.maps.Marker} Marker.
     */
    self.bounceOnce = function(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 1400);
    };



    /**
     * It simulates a click on a marker.
     * @param  {[type]} markerIndex [description]
     * @param  {[type]} engine      [description]
     */
    self.selectMarker = function(markerIndex, engine) {
        apiEngine = engine;
        google.maps.event.trigger(markers[markerIndex], 'click');
    };

    self.setCenter = function(){
      map.setCenter(new google.maps.LatLng(37.6292, -122.1381));
    };

    /**
    * Map initialization.
    * @param  {DOMElement} mapCanvasId Canvas that will contain the map.
    */
   self.initializeMap = function(mapCanvasId) {
       var sanFranciscoBayArea = new google.maps.LatLng(37.6292, -122.1381);
       var mapOptions = {
           center: sanFranciscoBayArea,
           zoom: 10,
           disableDefaultUI: true,
           zoomControl: true,
           styles: [{
               featureType: 'poi',
               elementType: 'labels',
               stylers: [{
                   visibility: 'off'
               }]
           }]
       };

       map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
   };

   /**
   * @name getData
   * @description get map locations data
   * @return {Array|Object}
   */
   self.getData = function(){
     var request = {
          location: {lat: 37.4292, lng: -122.1381},
          radius: 40000,
          types: ['university']
     };
     return new Promise(function(resolve, reject){
       function myCallBack(results, status) {
           if (status === google.maps.places.PlacesServiceStatus.OK) {
             resolve(results);
           }
           reject(status);
       }
       new google.maps.places.PlacesService(map).nearbySearch(request, myCallBack);
      });
   };


   /**
    * @name initializeInfoWindow
    * @description InfoWindow initialization.
    */
   self.initializeInfoWindow = function() {
       // Initialize the InfoWindow
       infoWindow = new google.maps.InfoWindow();

       google.maps.event.addListener(infoWindow, 'domready', function() {
           var iwOuter = $('.gm-style-iw');

           var iwBackground = iwOuter.prev();

           iwBackground.children(':nth-child(2)').css({
               'display': 'none'
           });
           iwBackground.children(':nth-child(4)').css({
               'display': 'none'
           });

           iwBackground.children(':nth-child(1)').attr('style', function(i, s) {
               return s + 'left: 76px !important;';
           });

           iwBackground.children(':nth-child(3)').attr('style', function(i, s) {
               return s + 'left: 76px !important;';
           });

           iwBackground.children(':nth-child(3)').find('div').children().css({
               'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px',
               'z-index': '1'
           });

           iwBackground.children(':nth-child(3)').attr('style', function(i, s) {
               return s + 'margin: 0px; padding: 0px;';
           });

           var iwCloseBtn = iwOuter.next();
           iwCloseBtn.css({
               'display': 'none'
           });
       });
   };


  /**
   * @name createInfoWindowContent
   * @description creates google map infoWindow content.
   * @param {Object} university object
   */
   self.createInfoWindowContent = function(university) {
        var uniRating;
        if(typeof university.rating === 'undefined'){
            uniRating = 'no rating';
        } else {
            uniRating = university.rating();
        }
        var content = `<div class="info-card-wide mdl-card mdl-shadow--2dp info-popup">
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">${university.name()}</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                          <strong>Rating: ${uniRating}</strong>
                          <br/>
                          <span>${university.vicinity()}</span>
                          <br/>
                          <span class="pull-right">
                              <img src="../images/insta.png" class="insta-icon"/>
                          </span>
                        </div>
                        <div class="mdl-card__actions mdl-card--border" data-bind="visible: showPics" style="height:350px; overflow-y:scroll;overflow-x: hidden;">
                          <div class="row infoPics" data-bind="foreach: instagramPictures">
                            <div class="col-xs-6 col-md-3" style="width: 50%; height: 300px;">
                              <a data-bind="attr: {href: $data.link}" target="_blank" class="thumbnail">
                                <img data-bind="attr: {src: $data.picUrl, href: $data.link}">
                                <div class="caption">
                                   <p data-bind="text: txt"></p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="mdl-card__actions mdl-card--border" data-bind="visible: errors().length > 0">
                            <p data-bind="text: errors"></p>
                        </div>

                        <div class="mdl-card__menu">
                          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" onclick="googleMapService.getInfoWindow().close()">
                            <i class="material-icons">clear</i>
                          </button>
                        </div></div>`;

        return content;
    };

});
