// Generated by CoffeeScript 1.4.0

jQuery(function() {
  var map, mapOptions;
  console.log('Initializing maps.');
  mapOptions = {
    center: new google.maps.LatLng(51.517099, -0.146084),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  console.log(document.getElementById('map_canvas'));
  console.log($('#map_canvas'));
  map = new google.maps.Map($('#map_canvas')[0], mapOptions);
  console.log('Maps initalized.');
});
