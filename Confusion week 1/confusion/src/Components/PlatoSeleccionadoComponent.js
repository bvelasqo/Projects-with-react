import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
class PlatoSeleccionado extends Component {

    render(){
        const plato = this.props.PlatoSeleccionado;
        const comentarios = plato.comments.map((comentario) => {
            return(
            <div key = {comentario.id}>
                <h6>{comentario.author}:</h6>
                <p>{comentario.comment}</p>
                <p><i><b>Rating:</b> {comentario.rating}</i></p>
                <s>{comentario.date}</s>
                <hr></hr>
            </div>
            );
        });
        return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src = {plato.image} alt= {plato.name}/>
                        <CardBody>
                            <CardTitle className="titulo1">{plato.name}</CardTitle>
                            <CardText>{plato.description}</CardText>
                        </CardBody>
                    </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>COMENTARIOS</h4>
                {comentarios}
            </div>
        </div>
        );
    }
}
export default PlatoSeleccionado;