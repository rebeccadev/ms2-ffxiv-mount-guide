// Initialize and add the map
function initMap() {
  // The location of Uluru
  const flagship = { lat: 51.515, lng: -0.127 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center
  });
  // The marker, positioned at flagship
  const marker = new google.maps.Marker({
    position: flagship,
    map: map,
  });
}