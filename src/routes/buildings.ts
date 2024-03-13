
function buildBboxFromBounds(bounds: google.maps.LatLngBounds) {
    const sw = bounds.getSouthWest(); // Southwest corner
    const ne = bounds.getNorthEast(); // Northeast corner
    const bbox = `${sw.lat()},${sw.lng()},${ne.lat()},${ne.lng()}`;
    return bbox;
}

export async function searchBuildings(bounds: google.maps.LatLngBounds) {
    let bbox = buildBboxFromBounds(bounds)
    // Construct the Overpass QL query
    const query = `[out:json];
    (
        way[building][~"^addr:"~"."](${bbox});
    );
    out body;
`;
  
    // Send the query to the Overpass API endpoint
    const overpassEndpoint = 'https://overpass-api.de/api/interpreter';
    const response = await fetch(overpassEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `data=${encodeURIComponent(query)}`
    });
  
    // Parse the JSON response
    const data = await response.json();
    console.log(data)
    
    const nodeIds = data.elements.flatMap(element => element.nodes[0]);
    console.log(nodeIds)

    // // Query OSM to get coordinates for each node
    const nodeCoordinates = await Promise.all(nodeIds.map(async nodeId => {
        const response = await fetch(`https://api.openstreetmap.org/api/0.6/node/${nodeId}`);
        const xmlText = await response.text();

        // Parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
        // Extract latitude and longitude from the XML
        const lat = xmlDoc.getElementsByTagName('node')[0].getAttribute('lat');
        const lon = xmlDoc.getElementsByTagName('node')[0].getAttribute('lon');
        return { 
            latitude: lat,
            longitude: lon
        };
    }));
    return [nodeCoordinates, data.elements]
  }

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