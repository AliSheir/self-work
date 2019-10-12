import React, {Component  } from "react";
import './App.css';
import {BrowserRouter , Route } from "react-router-dom";

import Header from './components/Header/Header';
import SubHeader from "./components/Sub-Header/Sub-Header";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ThanksBox from "./components/ThanksBox/ThanksBox";
import MapBox from "./components/MapBox/MapBox";
import Footer from "./components/Footer/Footer";
import GentsBrand from './components/GentsBrand/GentsBrand';
import LadiesBrand from './components/LadiesBrand/LadiesBrand';
import ChildsBrand from './components/ChildsBrand/ChildsBrand';
import SignIn from './components/SignInBox/SignIn';


export default class App extends Component{
  render(){
    return(
<BrowserRouter>


        <Header />
        <br/>
        <SubHeader /> 
        <Route path="/SignIn" component={SignIn} /> 

        <Route path="/App" src={App} /> 
        <Route path="/GentsBrand" component={GentsBrand} /> 
        <Route path="/LadiesBrand" component={LadiesBrand} /> 
        <Route path="/ChildsBrand" component={ChildsBrand} /> 

        <ImageSlider />
        <ThanksBox />
        <MapBox />
        <Footer />
        </BrowserRouter>

    )
  }
}