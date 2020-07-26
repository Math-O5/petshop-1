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
        <main class="products" id="admin">
            <div class="title">
                <h1>Produtos</h1>
                <Link to="/products"><button class="button">Voltar</button></Link>
            </div>
            <div class="info row">
            {loading && (<Loading />)}                
            {!loading && (<>
                <div class="img-container">
                    <img src={productImg} alt="Imagem do produto" />
                </div>
                <div>
                    <div class="row">
                        <p>Nome:</p>
                        <p>{product.title}</p>
                    </div>
                    <div class="row">
                        <p>Descrição:</p>
                        <p>{product.description}</p>
                    </div>
                    <div class="row">
                        <p>Marca:</p>
                        <p>food dog ADD MODEL</p>
                    </div>
                    <div class="row">
                        <p>preço de venda:</p>
                        <p>{product.title}</p>
                    </div>
                    <div class="row">
                        <p>Preço de compra:</p>
                        <p>R$ 20.00 ADD MODEL</p>
                    </div>
                    <div class="row">
                        <p>Quant. estoque:</p>
                        <p>22 ADD MODEL</p>
                    </div>
                    <div class="row">
                        <p>Quant. vendida:</p>
                        <p>4 ADD MODEL</p>
                    </div>
                    <div class="row">
                        <p>Lucro:</p>
                        <p>R$ 80.00</p>
                    </div>
                </div>
            </>)}
            </div>

            <div class="row options">
                <a href="admin_products_edit.html"><button class="button edit">Editar</button></a>
                <a href="admin_products.html"><button class="button delete">Deletar</button></a>
            </div>

        </main>
    );
}