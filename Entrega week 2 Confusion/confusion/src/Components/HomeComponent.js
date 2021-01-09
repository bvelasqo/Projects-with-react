import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.imagen} alt={item.nombre} />
            <CardBody>
            <CardTitle>{item.nombre}</CardTitle>
            {item.designación ? <CardSubtitle>{item.designación}</CardSubtitle> : null }
            <CardText>{item.descripción}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.platos} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promociones} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.lideres} />
                </div>
            </div>
        </div>
    );
}

export default Home;