import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Landing } from './Landing/Landing';
import { LogoPage } from './LogoPage/LogoPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="preconnect"
      href="https://fonts.googleapis.com"
      crossOrigin />
      <link rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,900,600&display=swap" />
      <link rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,900,600&display=swap"
      />

      <link rel="preconnect"
      href="https://cdnjs.cloudflare.com"
      crossorigin />
      <link rel="preload"
      as="style"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      </header>
      <body >
        <Navbar></Navbar>
        <Landing></Landing>
        <LogoPage></LogoPage>
      </body>
    </div>
  );
}

export default App;
