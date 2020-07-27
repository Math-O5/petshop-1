import React, { useEffect, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';

import axios from 'axios';

import './styles.css';

import Auth from '../../services/auth';

import bannerMainImg from '../../images/banner_main.png';
import dogBannerImg from '../../images/dog_banner.png';
import arrowImg from '../../images/arrow.png';

// componentes
import ProductItem from '../../components/ProductItem';
import ServiceItemHome from '../../components/ServiceItemHome';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

export default function Logon() {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const [isLogged, setIsLogged] = useState(false);

    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telefone, setTelefone] = useState('');
    const [born, setBorn] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const responseProducts = await axios.get("/product");
                setProducts(responseProducts.data);
                
                const responseServices = await axios.get("/service");
                setServices(responseServices.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
    

        const handleLogin = async () => {
            setLoading(true);

            try {
                const data = {
                    username: name,
                    email,
                    password,
                    cpassword: password,
                    tel: telefone,
                    born,
                    address,
                    filepath: "workinprogress"
                }
                
                const res = await axios.post("/user/new/register", data);
    
                const response = await Auth.logIn(email, password);
                
                if (!response)
                    alert('Email e/ou senha incorretos');

                setIsLogged(response); // seta variável logado e redireciona pra /home
            } catch (error) {
                console.log(error);
            }
            
            setLoading(false);
            setShowModal(false);

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
                        Cadastro
                    </h4>
                    <div className="modal-body">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                            <label for="name">Nome: </label>
                            <input
                            value={name}
                            name="title"
                            className="form-control"
                            type="name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            
                            />
                        </div>
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
                            <label for="name">Telefone: </label>
                            <input
                            value={telefone}
                            name="title"
                            className="form-control"
                            type="telephone"
                            onChange={(e) => {
                                setTelefone(e.target.value);
                            }}
                            
                            />
                        </div>
                        <div className="row">
                            <label for="name">Endereço: </label>
                            <input
                            value={address}
                            name="title"
                            className="form-control"
                            type="address"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            
                            />
                        </div>
                        <div className="row">
                            <label for="name">Data de Nascimento: </label>
                            <input
                            value={born}
                            name="title"
                            className="form-control"
                            type="birth"
                            onChange={(e) => {
                                setBorn(e.target.value);
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
                        <button type="submit" className="btn">Cadastrar</button>
                        <button type="button" className="btn close" 
                            onClick={() => setShowModal(false)}>Fechar</button>
                        {loading && <Loading />}
                    </form>
                    </div>
                </div>
            </Modal>
            <main>
                <section className="banner">
                    <div className="banner_left">
                        <img src={bannerMainImg} alt="Dog smiling" className="banner_left_one" />

                        <div className="content">
                            <h1>Cadastre-se</h1> 
                            <p>Vero nisi doloremque, at accusantium iure, error architecto dolor aperiam aspernatur modi corrupti minus in obcaecati qui.</p>

                            <button className="button" onClick={() => setShowModal(true)}>CADASTRE-SE</button>
                        </div>
                    </div>
                    <img src={dogBannerImg} alt="Dog smiling" className="banner_right" />
                </section>

                <section className="products">
                    <div className="text">
                        <h2>Nossos produtos</h2>
                        <Link to="/products">
                            <p>Ver mais</p>
                        </Link>
                        <Link to="/products"><img src={arrowImg} alt="enter" /></Link>
                    </div>
                    <div className="preview">
                        {loading && (<Loading />)}
                        {products.slice(0,Math.min(products.length, 4)).map(product => (
                            <ProductItem data={product}/>
                        ))}
                    </div>
                </section>

                
                <section className="products">
                    <div className="text">
                        <h2>Nossos serviços</h2>
                        <Link to="/services">
                            <p>Ver mais</p>
                            <img src={arrowImg} alt="enter" />
                        </Link>
                    </div>
                    <div className="preview">
                        {loading && (<Loading />)}
                        {services.slice(0,Math.min(services.length, 4)).map(product => (
                            <ServiceItemHome data={product}/>
                        ))}
                    </div>
                </section>


            </main>
        </>
    );
}