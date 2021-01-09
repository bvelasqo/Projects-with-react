import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderPlato({plato}){
    return(
        <Card>
            <CardImg width="100%" src = {plato.imagen} alt= {plato.nombre}/>
            <CardBody>
                <CardTitle className="titulo1">{plato.nombre}</CardTitle>
                <CardText>{plato.descripción}</CardText>
            </CardBody>
        </Card>
    );
}

 function RenderComentario({comments}){
    const comentarios = comments.map((comentario) => {
        return(
        <div key = {comentario.id}>
            <h6>{comentario.autor}:</h6>
            
            <p>{comentario.comentario}</p>
            <p><i><b>Rating:</b> {comentario.calificación}</i></p>
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
                <div className="container">
                 <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.PlatoSeleccionado.nombre}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.PlatoSeleccionado.nombre}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderPlato plato={plato}/>
                    </div>
                    <RenderComentario comments = {props.comments}/>
                </div>   
                </div>
                
                );
        }else{
            return(<div>NO PAPI</div>);
        }
    }

    export default PlatoSeleccionado;