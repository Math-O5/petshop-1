import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


// componentes
import productImg from '../../images/product.jpg';


export default function Logon() {
    const history = useHistory();

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
                    <h2>
                        Ração Premier Golden Special Cães Adultos Frango e Carne
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa odit possimus magni natus iste ipsum beatae qui ad consectetur deserunt necessitatibus, libero, accusantium esse eum accusamus eius architecto a?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, omnis excepturi quisquam, ducimus atque eligendi molestiae animi pariatur corrupti, tempora dicta perspiciatis nihil ea. Ullam molestias inventore magni corrupti.
                    </p>
                </div>
                <div class="buy-container">
                    <p>
                        DISPONÍVEL NO ESTOQUE
                    </p>
                    <p class="price">
                        R$15,00
                    </p>
                    <p>
                        ou 3 vezes no cartão.
                    </p>
                    <button>
                        ADICIONAR AO CARRINHO
                    </button>
                </div>
                <div class="details-container">
                    <h2>
                        Detalhes
                    </h2>
                    <ul>
                        <li>
                            ANIMAL: cachorro
                        </li>
                        <li>
                            MARCA: premier
                        </li>
                        <li>
                            ID: XXXXXXX
                        </li>
                    </ul>
                </div>

            </main>
            
        </div>
    );
}