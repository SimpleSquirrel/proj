import React, {useState} from "react";
import styles from "./Header.module.css"
import {ReactComponent as LogoIcon} from "../../Assets/Images/logo.svg"
import Navbar from "./Navbar/Navbar";
import NavItem from "./Navbar/NavItem/NavItem";
import { NavLink } from "react-router-dom";


const Header = () => {

    const [scrolled, setScrolled] = useState(true);
    const [width, updateWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        updateWidth(window.innerWidth);
    });
    window.addEventListener("scroll", () => {
        const isTop = window.scrollY < 100;
        if (isTop){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    })

    return (
        <header className={scrolled ? styles.header : `${styles.header} ${styles.scrolled}`}>
            <div className={styles.wrapper}>
                <NavLink to="/main">            
                    <LogoIcon className={styles.logo}/>
                </NavLink>
                <Navbar>
                    <NavItem width={width} path="/main" title="Main"/>
                    <NavItem width={width} path="/gallery" title="Gallery"/>
                    <NavItem width={width} path="/projects" title="Projects"/>
                    <NavItem width={width} path="/contacts" title="Contacts"/>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;