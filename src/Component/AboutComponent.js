import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

function About(props) {
    return(
        <div className="container">
            <div className="row ">
            <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                  </Breadcrumb>
                <div className="col-12">
                <h3>Introduction</h3><br /><br />
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121,Khatra Mahal<br />
                        Shamshan ke Samne, Andheri galli<br />
                        BhootLok<br />
                        <i className="fa fa-phone"></i>: +91 8630 877372<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@Sharo.net">hardyshah.hs@gmail.net</a>
                        </address><br /><br />
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Profile</h5>
                    <img src="../assert/image/img1.png" />
                </div><br /><br />
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@Sharo.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div><br /><br /><br /><br />
            </div>
        </div>
    );
}

export default About;