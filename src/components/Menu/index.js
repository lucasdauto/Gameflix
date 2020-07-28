import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Logo gameflix" className="Logo" />
            </a>
            <Button as="a" href="/" className="ButtonLink"> 
                Novo vídeo 
            </Button>
        </nav>
    );
}

export default Menu;