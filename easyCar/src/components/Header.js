import React from 'react';
import '../styles/Header.scss'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'rbx'


export default function Header() {
    return (
        <Navbar className="menu">
        <Navbar.Brand>
            <Navbar.Item href="#">
            <img
                src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/012013/cars-logo_0.png?itok=DfBpHAUz"
                alt=""
                role="presentation"
                width="112"
                height="28"
            />
            </Navbar.Item>
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
            <Link to="/quizz">
                <Navbar.Item className="menu-item">Quizz</Navbar.Item>
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

