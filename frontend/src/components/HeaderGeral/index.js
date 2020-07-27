import React, { useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';

import './styles.css';

import Auth from '../../services/auth';

import logoImg from '../../images/logo.png';
import menuImg from '../../images/menu.svg';

// components
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

export default function Logon() {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);

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

    async function handleSubmit(e) {
        e.preventDefault();
    
        const handleLogin = async () => {
            setLoading(true);
            const response = await Auth.logIn(email, password);
            setLoading(false);
        
            setIsLogged(response); // seta variável logado e redireciona pra /home
        
            if (!response)
                alert('Email e/ou senha incorretos');

        };
        handleLogin();
        return 0;
      }

    return (
        <>
            {isLogged && <Redirect to="/" />}
            <Modal show={showModal} handleClose={() => setShowModal(false)}>
                <div className="modal-content">
                    <h4 className="modal-title text-light">
                        Login
                    </h4>
                    <div className="modal-body">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                            <label for="name">email: </label>
                            <input
                            value={email}
                            name="title"
                            className="form-control"
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            
                            />
                        </div>
                        <div className="row">
                            <label for="name">Senha: </label>
                            <input
                            value={password}
                            name="slug"
                            className="form-control"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            
                            />
                        </div>
                        <button type="submit" className="btn">Logar</button>
                        <button type="button" className="btn close" 
                            onClick={() => setShowModal(false)}>Fechar</button>
                        {loading && <Loading />}
                    </form>
                    </div>
                </div>
            </Modal>
        
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
                        

                        <button onClick={() => setShowModal(true)}>ENTRAR</button>
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
        </>
    );
}