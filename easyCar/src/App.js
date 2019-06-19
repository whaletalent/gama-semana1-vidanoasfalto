import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'
import  CardImage  from './components/CardImage'
import  Footer  from './components/SecFooter'
import Popup from './components/Popup'
import BannerHome from './assets/BannerHome.png'
import './global.scss'


function App() {
  return (
    <BrowserRouter>
      <Popup/>
      <Header/>     
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
