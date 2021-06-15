import React, {useState} from "react"
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    const [width, updateWidth] = useState(window.innerWidth);
    const [showNav, updateNav] = useState(false);
    window.addEventListener("resize", () => {
        updateWidth(window.innerWidth);
    })

    if (width >= 768){
        return (
            <nav className={styles.navbar}>
                <ul className={styles.navbar_nav}>
                    {props.children}
                </ul>
            </nav>
        )
    }
    else{
        return (
            <div>
                <nav className={styles.navbar}>
                    <button onClick={() => {
                        const navbar = document.getElementById("nav");
                        if(!showNav){
                            navbar.style.transform = "translateX(0) translateY(80px)"
                            updateNav(!showNav);
                        }
                        else{
                            navbar.style.transform = "translateX(-100vw) translateY(80px)"
                            updateNav(!showNav);
                        }
                    }} className={styles.burger_button}>V</button>
                    <ul id="nav" className={styles.burger}>
                        {props.children}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;