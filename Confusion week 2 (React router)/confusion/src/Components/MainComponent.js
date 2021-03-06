import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import  PlatoSeleccionado from "./PlatoSeleccionadoComponent"
import { PLATOS } from "../shared/platos";
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    constructor(props) {
      super(props);
        this.state = {
          platos: PLATOS
        };
    }

    

    render(){
      const HomePage = () => {
        return(
            <Home />
        );
      }
      return (
        <div className="App">
          <Header/>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu platos={this.state.platos} />} />
              <Redirect to="/home" />
          </Switch>
          <Footer/>
        </div>
      );
    }
}

export default Main;