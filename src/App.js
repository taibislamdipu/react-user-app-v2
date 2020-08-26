import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import User from './Components/User/User';

function App() {


  return (
    <div className="App">
      <Header></Header>
      {/* <User user={users}></User> */}
      <User></User>
    </div>
  );
}

export default App;
