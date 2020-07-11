import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


 function RenderFile({file}) {
      return(
        <div className="row">
          <Card>
            <div class="ml-5 bg-warning">
              <CardImg src={file.image} alt={file.name} />
            </div>
          </Card>
          <Card>
            <CardBody>
                <CardTitle heading>{file.name}</CardTitle>
                <CardText>{file.description}</CardText>
              </CardBody>
          </Card>
        </div>
      )
    }

  const FileDetail = (props) => {
    if(props.file == null) {
      return (<div></div>)
    }
    return (
      <div class='container'>
        <div className='row'>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/history">History</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.file.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
              <h3>{props.file.name}</h3>
              <hr />
            </div>
          </div>
        <div className='row'>
          <RenderFile file={props.file} />
        </div>
      </div>
    )
  }

export default FileDetail;