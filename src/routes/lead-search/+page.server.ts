import { GOOGLEMAPSAPIKEY } from '$env/static/private';


export function load(){
    const googleMapsApiKey = GOOGLEMAPSAPIKEY
    return {
        googleMapsApiKey: googleMapsApiKey
    };
}