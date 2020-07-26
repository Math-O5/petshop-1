import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';


// componentes
import productImg from '../../images/product.jpg';
import Loading from '../../components/Loading';

export default function Logon(props) {
    const history = useHistory();
    
    const productId = props.match.params.id;

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/product/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    return (
        <div class="container">
            <div class="container-header">
                <div class="background-header"></div>
                <h1> <a href="/product/products.html">PRODUTOS</a></h1>
            </div>

            <a href="products.html" rel="noopener noreferrer"><button>&lt Voltar</button></a>
            <main class="content-container">
                <div class="img-container">
                    <img src={productImg} alt="Imagem do produto" />
                </div>
                <div class="content-container">
                    <h2>{product.title}</h2>
                    {loading && (<Loading />)}
                    <p>{product.description}</p>
                </div>
                <div class="buy-container">
                    <p>DISPONÍVEL NO ESTOQUE</p>
                    <p class="price">R${product.price}</p>
                    <p>ou 3 vezes no cartão.</p>
                    <button>ADICIONAR AO CARRINHO</button>
                </div>
                <div class="details-container">
                    <h2>
                        Detalhes
                    </h2>
                    <ul>
                        <li>ANIMAL: cachorro ADD NO MODEL</li>
                        <li>MARCA: premier ADD NO MODEL</li>
                        <li>ID: {product._id}</li>
                    </ul>
                </div>
                <br/>

            </main>
            
        </div>
    );
}