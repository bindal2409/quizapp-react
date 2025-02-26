import useGeolocation from "../hooks/useGeolocation";

export default function GeolocationNewUi(){

    const [latitude,longitude]=useGeolocation();

    return (
        <div>
            <h1>Geolocation:</h1>
            <h1>Latitude: {latitude}</h1>
            <h1>Longitude:{longitude}</h1>
        </div>
    )
}

// -> Presentation Layer (ui), ->Container Layer(logic)