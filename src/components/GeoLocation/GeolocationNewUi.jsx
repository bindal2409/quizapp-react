export default function GeolocationNewUi({latitude,longitude}){
    return (
        <div>
            <h1>Geolocation:</h1>
            <h1>Latitude: {latitude}</h1>
            <h1>Longitude:{longitude}</h1>
        </div>
    )
}

// -> Presentation Layer (ui), ->Container Layer(logic)