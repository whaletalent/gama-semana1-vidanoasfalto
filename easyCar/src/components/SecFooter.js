import React, { Component, Fragment } from 'react'
import { Footer, Content } from "rbx";
import '../styles/secFooter.scss'
import { Link } from 'react-router-dom'

class SecFooter extends Component {
    render() {
        return (
            <Fragment>
                <Footer className="main-footer">
                    <Content textAlign="centered" className="nsei">
                        <div className="footer-logo">
                            <img src="" alt="Logo vida no asfalto" />
                        </div>
                        <div className="footer-content">
                            <Link to='/'>
                                <span className="link">Home</span>
                            </Link>
                            <Link to='/'>
                                <span className="link">Artigos</span>
                            </Link>
                            <Link to='/quizz'>
                                <span className="link">Quizz</span>
                            </Link>
                            <Link to='/sobre'>
                                <span className="link">Sobre</span>
                            </Link>
                            <Link to='/contato'>
                                <span className="link">Contato</span>
                            </Link>
                        </div>
                        <div className="copyright">
                            <span>copyrighted content blablabla ©</span>

                        </div>
                    </Content>
                </Footer>
            </Fragment>
        )
    }
}

export default SecFooter