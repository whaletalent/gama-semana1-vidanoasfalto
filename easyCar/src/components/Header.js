import React from 'react';
import '../styles/Header.scss'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'rbx'
import logo from '../assets/logo.svg'


export default function Header() {
    return (
        <Navbar className="menu">
        <Navbar.Brand>
        <Link to="/">
            <Navbar.Item>
            <img className="header-logo"
                src={logo}
                alt="Logo vida no asfalto"
                role="presentation"
                width="112"
                height="28"
            />
            </Navbar.Item>
        </Link>
            <Navbar.Burger className="menu-item"/>
            
        </Navbar.Brand>
        <Navbar.Menu>
            <Navbar.Segment align="start">
            <Link to="/">
                <Navbar.Item className="menu-item">Home</Navbar.Item>
            </Link>
            <Link to="/artigos">
                <Navbar.Item className="menu-item">Artigos</Navbar.Item>
            </Link>            
            <Link to="/sobre">
                <Navbar.Item className="menu-item">Sobre</Navbar.Item>
            </Link>
            <Link to="/contato">
                <Navbar.Item className="menu-item">Contato</Navbar.Item>
            </Link>
                
            </Navbar.Segment>
        </Navbar.Menu>
        </Navbar>
    );
}

