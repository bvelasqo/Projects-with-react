import React, { Component } from 'react';
import "./MenuComponent.css";
import  PlatoSeleccionado from "./PlatoSeleccionadoComponent"
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelected(plato){
        this.setState({selectedDish: plato});
    }

    renderDish(plato){
        if(plato != null){
            return(
                <PlatoSeleccionado PlatoSeleccionado = {plato}/>
            );
        }else{
            return(<div></div>);
        }
    }

    render() {
        const menu= this.props.platos.map((plato) => {
            return(<div key={plato.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelected(plato)}>
                    <CardImg width="100%" src = {plato.image} alt= {plato.name}/>
                    <CardImgOverlay>
                        <CardTitle className="titulo1">{plato.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>);
        });
        return (
            <div className="container" >
                <div className="row" >
                    {menu}
                </div >
                <hr></hr>
                <div>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;