import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'
import  CardImage  from './components/CardImage'
import  Footer  from './components/SecFooter'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <CardImage></CardImage>
      <Routes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
