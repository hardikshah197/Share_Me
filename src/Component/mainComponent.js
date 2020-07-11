import React, { Component } from 'react';
import Menu from './menuComponent';
import FileDetail from './fileComponent';
import { FILES } from '../shared/files';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, BrowserRouter, Router} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      files:FILES,
      selectedFile: null
    }
  }

  
  onFileSelect(fileId) {
    this.setState({selectedFile: fileId});
  }

  render(){
    const HomePage = () => {
      return(
        <Home />
      )
    }
      return (
          <BrowserRouter>
            <div>
            <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/history" component={() => <Menu files={this.state.files} />} />
              <Redirect  to="/home" />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        );
      }
}

export default Main;
