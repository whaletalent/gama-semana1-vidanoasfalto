import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'
import CardImage from './components/CardImage'
import Footer from './components/SecFooter'
import BanneMiddle from './components/BannerMiddle'
import './global.scss'


function App() {
  return (
    <BrowserRouter>
      <BanneMiddle/>
      
      <Header />
      <CardImage title="Minha Vida no Asfalto" subtitle="Clube Exclusivo" imageURL='./assets/BannerHome.png' description='Quer ser um dos primeiros a participar do "Minha vida no asfalto", nosso clube de conteúdo exclusivo? Os primeiros convites são limitados e o cadastro encerra em X dias. Acelere e garanta já o seu lugar!"' />
      <section className="page-content">
        <Routes />
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
