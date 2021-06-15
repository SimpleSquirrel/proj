import React from "react";
import styles from "./Main.module.css"
import Carousel from "./Carousel/Carousel";
import About from "./About/About";
import Team from "./Team/Team";

const Main = () =>{
    return (
        <div>
            <div className={styles.carousel_wrapper}>
                <Carousel/>
            </div>
            <About/>
            <Team/>
        </div>
    )
};

export default Main