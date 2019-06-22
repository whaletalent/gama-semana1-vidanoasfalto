import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import MetaTags from 'react-meta-tags';


class Contato extends Component {
    render() {
        return (
            <section>
                <MetaTags>
                    <title>Contato | Vida no Asfalto</title>
                    <meta name="description" content="Entre em contato com a equipe do Vida no Asfalto. Será um prazer atender-lhe!" />
                    

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