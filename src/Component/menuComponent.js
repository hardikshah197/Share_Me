import React, { Component } from 'react';
import Home from './HomeComponent'
import { Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        
      }
    


    // renderFile = (file) => {
    //   if(file != null) {
    //     return(
    //       <FileDetail file={file}></FileDetail>
    //     )
    //   }
    //   else{
    //     return(<div></div>)
    //   }
    // }    

    render() { 
      const filo = this.props.files.map((fil) => {
        return (
            <div key={fil.id} className="col-12 col-md-2 m-3" margin-left="40px">
              <Card onClick={() => this.props.onClick(fil.id)}>                    
                    <CardImg src={fil.image} alt={fil.name} width="100px" />
                  <CardImgOverlay>
                  <CardTitle heading>{fil.name}</CardTitle>
                  
                  </CardImgOverlay>
              </Card><br />
            </div>
          );
    });
        return (
            <div >
              
              <div className="container">
            <h4>Shared History</h4>
                </div>
              <div className="row">
                  {filo}              
              </div>
              {/* <div className="row">
                {this.renderFile(this.state.selectedFile)}
              </div> */}
            
              
            </div>
          );
    }
}

export default Menu;