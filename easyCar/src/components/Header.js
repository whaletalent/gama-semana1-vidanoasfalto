import React from 'react';
import './Header.scss'
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
                <Navbar.Item className="menu-item">Home</Navbar.Item>
                <Navbar.Item className="menu-item">Artigos</Navbar.Item>
                <Navbar.Item className="menu-item">Quizz</Navbar.Item>
                <Navbar.Item className="menu-item">Sobre</Navbar.Item>
                <Navbar.Item className="menu-item">Contato</Navbar.Item>
                
            </Navbar.Segment>
        </Navbar.Menu>
        </Navbar>
    );
}

