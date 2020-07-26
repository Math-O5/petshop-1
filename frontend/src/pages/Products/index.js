import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';


// componentes
import ProductItem from '../../components/ProductItem';
import Loading from '../../components/Loading';


export default function Logon() {
    const history = useHistory();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const responseProducts = await axios.get("/product");
                setProducts(responseProducts.data);
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
                <h1> <a href="../product/products.html">PRODUTOS</a></h1>
            </div>
            <div class="conteiner-box"></div>
            <div class="content-container">
                <div class="categories-container">
                    <div class="category">
                        <h2>Animais</h2>
                        <ul>
                            <li><a href="#">Cachorros</a></li>
                            <li><a href="#">Gatos</a></li>
                            <li><a href="#">Pássaros</a></li>
                            <li><a href="#">Outros</a></li>
                        </ul>
                    </div>
                    <div class="category">
                        <h2>Tipos de Produtos</h2>
                        <ul>
                            <li><a href="#">Alimento</a></li>
                            <li><a href="#">Roupas e acessórios</a></li>
                            <li><a href="#">Medicamentos</a></li>
                            <li><a href="#">Higiene</a></li>
                            <li><a href="#">Brinquedo</a></li>
                            <li><a href="#">Outros</a></li>
                        </ul>
                    </div>
                    <div class="category">
                        <h2>Marcas</h2>
                        <ul>
                            <li><a href="#">Whykas</a></li>
                            <li><a href="#">Pet food</a></li>
                            <li><a href="#">Pet food ultra</a></li>
                            <li><a href="#">Pet food fit</a></li>
                            <li><a href="#">Outros</a></li>
                        </ul>
                    </div>
                    <div class="category">
                        <h2>Preço</h2>
                        <ul>
                            <li><a href="#">até R$15,00</a></li>
                            <li><a href="#">R$15,00 a R$30,00</a></li>
                            <li><a href="#">R$30 a R$ R$50,00</a></li>
                            <li><a href="#">R$50 a R$100,00</a></li>
                        </ul>
                    </div>
                </div>
                <main class="products-container">
                    <div class="search-bar">
                        <div class="input-container">
                            <input type="text" 
                                id="search-product"
                                name="search-product"
                                placeholder="Pesquisar produto"
                            />
                        </div>
                        <div class="input-container">
                            <label for="sort-products">Ordenar por</label>
                            <select name="Ordenar por" 
                                    id="sort-products"
                            >
                                <option value="" selected></option>
                                <option value="Preço">Preço</option>
                                <option value="Nome">Nome</option>
                                <option value="Marca">Marca</option>
                            </select>
                        </div>
                    </div> 
                    <div class="productsList">
                        {loading && (<Loading />)}
                        {products.slice(0,Math.min(products.length, 13)).map(product => (
                            <ProductItem data={product}/>
                        ))}
                    </div>

                </main>
            </div>
        </div>
    );
}