import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={ Logo } alt="Logo gameflix" className="Logo" />
            </Link>
            <Button as={ Link } to="/cadastro/video" className="ButtonLink"> 
                Novo vídeo 
            </Button>
        </nav>
    );
}

export default Menu;