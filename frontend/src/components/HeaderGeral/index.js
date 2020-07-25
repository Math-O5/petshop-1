import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../images/logo.png';
import menuImg from '../../images/menu.svg';

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
        <header class="geral">
            <div class="main">
                <Link to="/"><img src={logoImg} alt="Logo" class="logo" /></Link>
                <nav class="mobile">
                    <img src={menuImg} alt="menu" id="menu" onClick={() => load()} />
                    
                </nav>
                <div class="right">
                    <nav class="desktop">
                        <ul class="nav__links">
                            <ul class="nav__links">
                                <li><Link to="/about">Sobre nós</Link></li>
                                <li><Link to="/products">Nossos produtos</Link></li>
                                <li><Link to="/services">Nossos serviços</Link></li>
                            </ul>
                        </ul>
                    </nav>
                    

                    <a class="enter" href="perfil/singup.html"><button>ENTRAR</button></a>
                </div>
            </div>
            <div class="second" id="secondBar">
                <ul class="nav__links ul-mobile">
                    <li><Link to="/products">Nossos produtos</Link></li>
                    <li><Link to="/services">Nossos serviços</Link></li>
                    <li><Link to="about">Sobre nós</Link></li>
                </ul>
            </div>

        </header>
    );
}