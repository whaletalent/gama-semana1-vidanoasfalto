import React, { Component } from 'react'
import PostCards from '../components/PostCards'
import MetaTags from 'react-meta-tags';


class Artigos extends Component {
    render() {
        return (
            <section>
                <MetaTags>
                    <title>Artigos | Vida no Asfalto</title>
                    <meta name="description" content="Confira nossa seção completa de artigos do Blog Vida no Asfalto com dicas, novidades e muito mais para o seu carro!" />
                    <link rel="canonical" href="https://www.vidanoasfalto.com.br/artigos" />
                </MetaTags>
                <PostCards />
            </section>

        )
    }
}

export default Artigos