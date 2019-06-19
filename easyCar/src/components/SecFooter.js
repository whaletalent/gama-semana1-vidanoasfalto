import React, { Component, Fragment } from 'react'
import { Footer, Content } from "rbx";
import '../styles/secFooter.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

class SecFooter extends Component {
    render() {
        return (
            <Fragment>
                <Footer className="main-footer">
                    <Content textAlign="centered" className="nsei">
                        <div className="footer-logo">
                            <img src={logo} alt="Logo vida no asfalto" />
                        </div>
                        <div className="footer-div">
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
                            <div className="social-media">
                                <a className="social-logo"target="_blank" href="https://facebook.com.br/vidanoasfalto">
                                    <img src={facebook} />
                                </a>
                                <a className="social-logo" target="_blank" href="https://instagram.com/vidanoasfalto_">
                                    <img src={instagram} />
                                </a>
                            </div>
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