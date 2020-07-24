import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../images/logo.png';
import menuImg from '../../images/menu.svg';

export default function Logon() {
    const history = useHistory();

    return (
        <header class="geral">
            <div class="main">
                <img src={logoImg} alt="Logo" class="logo" />
                <nav class="mobile">
                    <img src={menuImg} alt="menu" id="menu" />
                    
                </nav>
                <div class="right">
                    <nav class="desktop">
                        <ul class="nav__links">
                            <ul class="nav__links">
                                <li><Link to="/about">Sobre nós</Link></li>
                                <li><Link to="/products">Nossos produtos</Link></li>
                                <li><a href="../service/services.html">Nossos serviços</a></li>
                            </ul>
                        </ul>
                    </nav>
                    

                    <a class="enter" href="perfil/singup.html"><button>ENTRAR</button></a>
                </div>
            </div>
            <div class="second" id="secondBar">
                <ul class="nav__links ul-mobile">
                    <li><a href="../product/products.html">Nossos produtos</a></li>
                    <li><a href="../service/services.html">Nossos serviços</a></li>
                    <li><a href="../home/about.html">Sobre nós</a></li>
                </ul>
            </div>

        </header>
    );
}