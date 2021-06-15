import React from "react";
import styles from "./Content.module.css"
import Main from "../Main/Main";
import Gallery from "../Gallery/Gallery";
import Contacts from "../Contacts/Contacts";
import Projects from "../Projects/Projects"
import { Route } from "react-router-dom";
import Post from "../Projects/Posts/Post/Post";


const Content = () => {
    return (
        <div className={styles.content}>
            <Route component={Main} path="/main"/>
            <Route component={Gallery} path="/gallery"/>
            <Route component={Contacts} path="/contacts"/>
            <Route component={Projects} exact path="/projects"/>
            <Route component={Post} path="/projects/post/"/>
        </div>
    )
};

export default Content;