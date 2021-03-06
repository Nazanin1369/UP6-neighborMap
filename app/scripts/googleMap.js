
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
        markers.forEach(function(marker, index) {
            if (marker) {
                marker.setMap(null);
            }
        });
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
      vm.loadPics(university.name());
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

    self.reset = function(){
      map.setCenter(new google.maps.LatLng(37.618473, -122.486603));
      map.setZoom(10);
      googleMapService.getInfoWindow().close();
    };

    /**
    * Map initialization.
    * @param  {DOMElement} mapCanvasId Canvas that will contain the map.
    */
   self.initializeMap = function(mapCanvasId) {
       var sanFranciscoBayArea = new google.maps.LatLng(37.618473, -122.486603);
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
                          <button class="mdl-button mdl-button--icon mdl-js-button" data-bind="click: closeInfoWndow, event: { touchend: closeInfoWndow }">
                            <i class="material-icons">clear</i>
                          </button>
                        </div></div>`;

        return content;
    };

});
