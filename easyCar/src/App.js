import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'
import  CardImage  from './components/CardImage'
import  Footer  from './components/SecFooter'
import Popup from './components/Popup'


function App() {
  return (
    <BrowserRouter>
      <Popup></Popup>
      <Header/>
      <CardImage title="Titulo do Site" description="Descricao do site"></CardImage>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
