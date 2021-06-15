import React from "react";
import styles from "./About.module.css";
import about_img from "../../../Assets/Images/About.gif"

const About = () =>{
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <img className={styles.about_img} src={about_img} alt="bestWorker"/>
                <div className={styles.about_block}>
                    <h1 className={styles.title}>Who we are?</h1>
                    <p className={styles.text}>Our group sostoit iz very productivnih people, that working ne pokladaya hands on klaviatura. Your project is going to be samim popular in the mir. Only in our companii vozmozhno find concentration of specialists na kvadratniy meter.</p>
                </div>
            </div>
        </div>
    )
};

export default About;