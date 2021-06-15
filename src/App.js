import React from 'react';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

console.log(typeof undefined);

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Redirect to="/main"/>
            </Route>
                <Header/>
                <Content/>
                <Footer/>
        </BrowserRouter>
    );
}

export default App;
