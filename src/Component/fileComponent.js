import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class FileDetail extends Component {

 renderFile(file) {
    if(file != null) {
      return(
        <div className="row">
          <Card>
          <div class="ml-5 bg-warning">
              <CardImg  src={file.image} alt={file.name}  />
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
    else{
      return(
        <div></div>
      )
    }
  }

  render() {
    const file = this.props.file
    if(file == null) {
      return (<div></div>)
    }
    const fileItem = this.renderFile(file)
    return (
      <div className='row'>
        {fileItem}
      </div>
    )
  }
}

export default FileDetail;