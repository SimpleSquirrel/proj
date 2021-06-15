import React from "react";
import Form from "./Form/Form";
import styles from "./Contacts.module.css"
import Info from "./Info/Info";
import Map from "./Map/Map";

const Contacts = () =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.contacts}>
                <Form />
                <Info/>
            </div>
            <h1 className={styles.title}>Our base located here:</h1>
            <div className={styles.map}>
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        </div>
    )
}

export default Contacts;