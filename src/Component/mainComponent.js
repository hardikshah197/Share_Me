import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files :[
                {
                  id: 0,
                  name:'File 1',
                  image:'assert/image/logo.png',
                  description:'file 1 description' 
                },
                {
                    id: 1,
                  name:'File 2',
                  image:'assert/image/logo.png',
                  description:'file 2 description'
                }
            ]
        }
    }

    render() { 
        const file = this.state.files.map((file) => {
            return (
                <div key={file.id} className="col-12 mt-5">
                  <Media tag="li">
                    <Media left middle>
                        <Media object src={file.image} alt={file.name} width="100px" />
                    </Media>
                    <Media body className="ml-5"><br />
                      <Media heading>{file.name}</Media>
                      <p>{file.description}</p>
                    </Media>
                  </Media>
                </div>
              );
        });
        return (
            <div className="container"><br />
              <Media heading>Shared Files</Media>
              <div className="row">
                <Media list>
                    {file}
                </Media>
              </div>
            </div>
          );
    }
}

export default Main;