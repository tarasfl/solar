
export async function fetchBusinessesWithinBounds (bounds: google.maps.LatLngBounds, apiKey: string)  {
    // Calculate the center of the bounds
    const center = bounds.getCenter();
  
    // Calculate the radius based on the diagonal distance of the bounds
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const radius = google.maps.geometry.spherical.computeDistanceBetween(ne, sw) / 2;
  
    // Call the Google Places API nearbysearch endpoint
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.lat()},${center.lng()}&radius=${radius}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  };