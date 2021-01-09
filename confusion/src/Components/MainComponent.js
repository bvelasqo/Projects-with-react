import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import  PlatoSeleccionado from "./PlatoSeleccionadoComponent"
import { PLATOS } from "../shared/platos";
import { LIDERES } from "../shared/lideres";
import { PROMOCIONES } from "../shared/promociones";
import { COMENTARIOS } from "../shared/comentarios";
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    constructor(props) {
      super(props);
        this.state = {
          platos: PLATOS,
          comentarios: COMENTARIOS,
          lideres: LIDERES,
          promociones: PROMOCIONES
        };
    }

    

    render(){
      const DishWithId = ({match}) => {
        return(
            <PlatoSeleccionado PlatoSeleccionado={this.state.platos.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comentarios.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
      const HomePage = () => {
        return(
            <Home
            platos={this.state.platos.filter((dish) => dish.destacado)[0]}
            promociones={this.state.promociones.filter((promo) => promo.destacado)[0]}
            lideres={this.state.lideres.filter((leader) => leader.destacado)[0]}
            />
        );
      }

      const AboutPage = () => {
        return(
          <About leaders = {this.state.lideres}/>
        );
      }

      return (
        <div className="App">
          <Header/>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/menu' component={() => <Menu platos={this.state.platos} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/about' component={AboutPage}/>
              <Redirect to="/home" />
          </Switch>
          <Footer/>
        </div>
      );
    }
}

export default Main;