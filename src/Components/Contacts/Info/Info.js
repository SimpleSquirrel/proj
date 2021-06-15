import React from "react";
import styles from "./Info.module.css"

const Info = () =>{
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Ochen' like nash site?</h1>
            <p>You can ask any of nashih professionalov o tom, kak stat' same krutoy company as we are. There is nash super innvovazionniy email:<a className={styles.email} href="mailto: supermail@godlike.com">supermail@godlike.com</a>.</p>
            <h1 className={styles.title}>JOIN NASHA TEAM</h1>
            <p>If you want rabotat' with this zamechatelnaya comand na ver popular projects. Just let u znat', you can use email above or contact nas useing info below.</p>
            <h5>MOON PRISM</h5>
            <ul>
                <li>Address: Planeta Zemlya</li>
                <li>Zip code: 77777</li>
                <li>City: Kyiv</li>
                <li>Country: Ukraine</li>
                <li>Email: <a className={styles.email} href="mailto: supermail@godlike.com">supermail@godlike.com</a></li>
                <li>Phone: 777-77-77</li>
            </ul>
        </div>
    )
}

export default Info
