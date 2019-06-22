import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import MetaTags from 'react-meta-tags';


class Contato extends Component {
    render() {
        return (
            <section>
                <MetaTags>
                    <title>Contato</title>
                    <meta id="meta-description" name="description" content="Qualquer dúvida ou sugestão entre em contato conosco" />
                    <meta id="og-title" property="og:title" content="Contato" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="article" />
                    <meta property="og:site_name" content="Vida no Asfalto" />
                    <meta property="article:publisher" content="https://www.facebook.com/vidanoasfalto" />

                </MetaTags>


                <ContactForm></ContactForm>
            </section>
        )
    }
}

export default Contato