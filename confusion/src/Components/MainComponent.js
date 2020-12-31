import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import  PlatoSeleccionado from "./PlatoSeleccionadoComponent"
import { PLATOS } from "../shared/platos";

class Main extends Component{
    constructor(props) {
      super(props);
        this.state = {
          platos: PLATOS,
          selectedDish: null
        };
    }

    
    onDishSelected(platoId){
        this.setState({selectedDish: platoId});
    }


    render(){
      return (
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">
                Confusion Comidas rápidas
              </NavbarBrand>
            </div>
          </Navbar>
          <Menu platos={this.state.platos} onClick={(platoId) => this.onDishSelected(platoId)}/>
          <PlatoSeleccionado PlatoSeleccionado = {this.state.platos.find((plato) => plato.id === this.state.selectedDish)}/>
        </div>
      );
    }
}

export default Main;