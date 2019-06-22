import React, { Component } from 'react'
import Form from '../components/Form'
import MetaTags from 'react-meta-tags';

class Sobre extends Component {
    render() {
        return (
            <section>
                <MetaTags>
                    <title>Sobre</title>
                    <meta id="meta-description" name="description" content="Conheça um pouco sobre a Vida no Asfalto" />
                    <meta id="og-title" property="og:title" content="Sobre" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="article" />
                    <meta property="og:site_name" content="Vida no Asfalto" />
                    <meta property="article:publisher" content="https://www.facebook.com/vidanoasfalto" />

                </MetaTags>
                <Form></Form>
            </section>
        )
    }
}

export default Sobre