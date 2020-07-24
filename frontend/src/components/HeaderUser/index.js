import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../images/logo.png';
import menuImg from '../../images/menu.svg';
import userImg from '../../images/user.svg';
import cartImg from '../../images/cart.svg';

export default function Logon() {
    const history = useHistory();

    return (
        <header class="user">
            <div class="main">
                <Link to="/"><img src={logoImg} alt="Logo" class="logo" /></Link>
                <nav class="desktop">
                    <ul class="nav__links">
                        <li><Link to="/products">Nossos produtos</Link></li>
                        <li><Link to="/services">Nossos serviços</Link></li>
                        <li><a href="../perfil/pets.html">Seus pets</a></li>
                        <li><Link to="/about">Sobre nós</Link></li>
                    </ul>
                </nav>
                <nav class="mobile">
                    <img src={menuImg} alt="menu" id="menu" />
                    
                </nav>
                <nav class="user-area">
                    <a href="../perfil/perfil.html">
                        <p>User Name</p>
                        <img src={userImg} alt="user" />
                    </a>
                    <a href="../perfil/carrinho.html">
                        <img src={cartImg} alt="carrinho" />
                    </a>
                </nav> 
            </div>
            <div class="second" id="secondBar">
                <ul class="nav__links ul-mobile">
                    <li><a href="../product/products.html">Nossos produtos</a></li>
                    <li><a href="../service/services.html">Nossos serviços</a></li>
                    <li><a href="../perfil/pets.html">Seus pets</a></li>
                    <li><Link to="/about">Sobre nós</Link></li>
                </ul>
            </div>
        </header>
    );
}