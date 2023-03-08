// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 52.519548, lng: 13.406849 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}



window.initMap = initMap;