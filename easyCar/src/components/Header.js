import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to='/'>
                    <img src="" alt="Logo vida no asfalto" />
                </Link>
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
        </header>
    );
}

