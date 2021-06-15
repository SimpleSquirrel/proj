import React from "react";
import styles from "./Footer.module.css"
import facebook from "../../Assets/Images/facebook-logo.svg"
import instagram from "../../Assets/Images/inst-logo.svg"
import twitter from "../../Assets/Images/twit-logo.svg"
import patreon from "../../Assets/Images/patreon-logo.svg"

const Footer = () =>{
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <div className={styles.icons}>
                    <a href="https://youtu.be/rjvImL06_1k?t=128"><img className={styles.icon} src={facebook} alt=""/></a>
                    <a href="https://youtu.be/rjvImL06_1k?t=128"><img className={styles.icon} src={instagram} alt=""/></a>
                    <a href="https://youtu.be/rjvImL06_1k?t=128"><img className={styles.icon} src={twitter} alt=""/></a>
                    <a href="https://youtu.be/rjvImL06_1k?t=128"><img className={styles.icon} src={patreon} alt=""/></a>
                </div>
                <h6 className={styles.creator}>Created by SimpleSquirrel</h6>
            </div>
        </div>
    )
};

export default Footer;