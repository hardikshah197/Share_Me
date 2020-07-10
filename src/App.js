import React from 'react';
import logo from './logo.svg';
import Main from './Component/mainComponent';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color ="primary">
        <div className="container">
          <NavbarBrand href="/">Sharo Transfeto</NavbarBrand>
        </div>
      </Navbar>
      <Main />
    </div>
  );
}

export default App;
