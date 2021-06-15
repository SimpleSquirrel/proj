import React from "react";
import styles from "./NavItem.module.css";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className={props.width >= 768 ? styles.item : styles.responsive_item}>
            <NavLink activeClassName={styles.active} to={props.path}>
                {props.title}
            </NavLink>
        </li>
    )
}



export default NavItem;