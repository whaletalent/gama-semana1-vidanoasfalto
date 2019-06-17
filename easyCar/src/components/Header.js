import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to='/'>
                    <span>Vida No Asfalto</span>
                </Link>
                <Link to='/register'>
                    <span>Registre-se</span>
                </Link>
            </div>
        </header>
    );
}
