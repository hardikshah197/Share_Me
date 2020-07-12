import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Nav, NavItem, NavLink,
    CardTitle , Button, Modal ,ModalBody, ModalHeader} from 'reactstrap';

class Home extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
 

    render() {
                
        return(
            <div className="container">
                <h4>Home</h4>
                <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                    <div class="container">
                    <Card>
                        <CardImg src='./shared/me.jpg'/>
                        <CardBody>
                        <CardTitle>Try Me</CardTitle>
                        <CardText>Wanna Fast Sharing....Then Try me!!!</CardText>
                        </CardBody>
                    </Card><br /><br/>
                    <p>Click on the "Choose File" button to upload a file:</p><br />
                    <input type="file" class="form-control-file border"></input><br/><br/>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Share</Button>
                    </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Share it!</ModalHeader>
                <ModalBody>

                </ModalBody>
            </Modal>
            </div>
        )
    }
}

export default Home;
