import React from 'react';
import "./css/MenuComponent.css";
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderMenuItem ({plato, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${plato.id}`} >
                <CardImg width="100%" src={plato.imagen} alt={plato.nombre} />
                <CardImgOverlay>
                    <CardTitle>{plato.nombre}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu= props.platos.map((plato) => {
        return(<div key={plato.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem plato={plato} onClick={props.onClick}/> 
        </div>);
    });
    return (
        <div className="container" >
             <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row" >
                {menu}
            </div >
        </div>
    );
}
        

export default Menu;