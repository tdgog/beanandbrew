import React from 'react'

import {
    GoogleMap,
    useLoadScript,
    // Marker,
    // InfoWindow
} from "@react-google-maps/api"

const mapContainerStyle = {
    width: '700px',
    height: '400px'
}
const center = {
    lat: 43.653225,
    lng: -79.383186
}

export default function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Currently loading maps";

    return <div className='flex justify-center pt-5'>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
        ></GoogleMap>
    </div>
}

