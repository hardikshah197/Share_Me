import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
 
class Menu extends Component {
    constructor(props) {
        super(props);
        
      }
    

    render() { 
      const filo = this.props.files.map((fil) => {
        return (
            <div key={fil.id} className="col-12 col-md-2 m-3" margin-left="40px">
              <Card >
                <Link to={`/menu/${fil.id}`}>
                    <CardImg src={fil.image} alt={fil.name} width="100px" />
                  <CardImgOverlay>
                  <CardTitle heading>{fil.name}</CardTitle>
                  
                  </CardImgOverlay>
                  </Link>                    
              </Card><br />
            </div>
          );
    });
        return (
            <div className="container">
              
              
                <div className='row'>
                  <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>History</BreadcrumbItem>
                  </Breadcrumb>
                  <div className='col-12'>
                    <h3>Shared History</h3>
                    <hr />
                  </div>
                </div>
              <div className="row">
                  {filo}              
              </div>
              
              
            </div>
          );
    }
}

export default Menu;