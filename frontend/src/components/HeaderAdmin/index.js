import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../images/logo.png';
import menuImg from '../../images/menu.svg';
import userImg from '../../images/user.svg';
import logoutImg from '../../images/logout.svg';

export default function Logon() {
    const history = useHistory();

    let mobileMenuVisible = false;

    const load = () => {
        // menu show / hide
        var secondBar = document.getElementById("secondBar");

        if(mobileMenuVisible) {
            mobileMenuVisible = false;
            secondBar.style.display = "none";
        }
        else {
            mobileMenuVisible = true;
            secondBar.style.display = "block";
        }
    }

    return (
        <header class="user">
            <div class="main">
            <Link to="/"><img src={logoImg} alt="Logo" class="logo" /></Link>
                <nav class="desktop">
                    <ul class="nav__links">
                        <li><Link to="/clients">Clientes</Link></li>
                        <li><Link to="/products">Produtos</Link></li>
                        <li><Link to="/services">Serviços</Link></li>
                        <li><Link to="/admins">Administradores</Link></li>
                        <li><Link to="/profit">Lucro</Link></li>
                    </ul>
                </nav>
                <nav class="mobile">
                    <img src={menuImg} alt="menu" id="menu" onClick={() => load()} />
                    
                </nav>
                <nav class="user-area">
                    <a href="#">
                        <p>User Name</p>
                        <img src={userImg} alt="user" />
                    </a>
                    <a href="#  ">
                        <img src={logoutImg} alt="logout" />
                    </a>
                </nav> 
            </div>
            <div class="second" id="secondBar">
                <ul class="nav__links ul-mobile">
                    <li><Link to="/clients">Clientes</Link></li>
                    <li><Link to="/products">Produtos</Link></li>
                    <li><Link to="/services">Serviços</Link></li>
                    <li><Link to="/admins">Administradores</Link></li>
                    <li><Link to="/profit">Lucro</Link></li>
                </ul>
            </div>
        </header>
    );
}