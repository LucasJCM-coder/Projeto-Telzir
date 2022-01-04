import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../../assets/images/logo.png';

import './styles.css'

function PageHeader() {
    return (
        <header>
            <Link to="/">
            <img id="logoImg" src={Logo} alt="Logo da empresa" />
            </Link>
        </header>
    );
}

export default PageHeader;