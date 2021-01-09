import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderPlato({plato}){
    return(
        <Card>
            <CardImg width="100%" src = {plato.image} alt= {plato.name}/>
            <CardBody>
                <CardTitle className="titulo1">{plato.name}</CardTitle>
                <CardText>{plato.description}</CardText>
            </CardBody>
        </Card>
    );
}

 function RenderComentario({plato}){
    const comentarios = plato.comments.map((comentario) => {
        return(
        <div key = {comentario.id}>
            <h6>{comentario.author}:</h6>
            
            <p>{comentario.comment}</p>
            <p><i><b>Rating:</b> {comentario.rating}</i></p>
            <s>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comentario.date)))}</s>
            <hr></hr>
        </div>
        );
    });
    return(
        <div className="col-12 col-md-5 m-1">
            <h4>COMENTARIOS</h4>
            {comentarios}
        </div>
    );
}


    const PlatoSeleccionado = (props) => {
        let plato = null;
        if(props.PlatoSeleccionado != null || props.PlatoSeleccionado !== undefined){
            plato = props.PlatoSeleccionado;
            
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderPlato plato={plato}/>
                    </div>
                    <RenderComentario plato={plato}/>
                </div>
                );
        }else{
            return(<div></div>);
        }
    }

    export default PlatoSeleccionado;