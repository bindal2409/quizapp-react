import { useEffect, useState } from "react";

export default function useGeolocation(){
    const [latitude, setlatitude]= useState(null);
    const [longitude,setLongitude]= useState(null);

    function handleLocationSettings(coordinates){
        setlatitude(coordinates.coords.latitude);
        setLongitude(coordinates.coords.longitude);
        console.log(coordinates);
    }

    // when the component loads at that time we want to  access the users lat and long

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(handleLocationSettings);
        }
    },[navigator]);

    return [latitide,longitude];
}