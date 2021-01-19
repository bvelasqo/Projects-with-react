import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import  PlatoSeleccionado from "./PlatoSeleccionadoComponent"
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    platos: state.platos,
    comentarios: state.comentarios,
    lideres: state.lideres,
    promociones: state.promociones
  }
}

class Main extends Component{
    render(){
      const DishWithId = ({match}) => {
        return(
            <PlatoSeleccionado PlatoSeleccionado={this.props.platos.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.props.comentarios.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
      const HomePage = () => {
        return(
            <Home
            platos={this.props.platos.filter((dish) => dish.destacado)[0]}
            promociones={this.props.promociones.filter((promo) => promo.destacado)[0]}
            lideres={this.props.lideres.filter((leader) => leader.destacado)[0]}
            />
        );
      }

      const AboutPage = () => {
        return(
          <About leaders = {this.props.lideres}/>
        );
      }

      return (
        <div className="App">
          <Header/>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/menu' component={() => <Menu platos={this.props.platos} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/about' component={AboutPage}/>
              <Redirect to="/home" />
          </Switch>
          <Footer/>
        </div>
      );
    }
}

export default withRouter(connect(mapStateToProps)(Main));