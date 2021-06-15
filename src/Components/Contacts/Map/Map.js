import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const Map = () =>{
    return (
        <GoogleMap defaultZoom={15} defaultCenter={{lat: 50.50889749031096, lng: 30.493913206795867}}>
            <Marker key={0} position={{lat: 50.50889749031096, lng: 30.493913206795867}}/>
        </GoogleMap>
        )
}


export default withScriptjs(withGoogleMap(Map))