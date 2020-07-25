import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


// componentes
import ProductItem from '../../components/ProductItem';


export default function Logon() {
    const history = useHistory();

    return (
        <main class="products" id="admin">
            <div class="title">
                <h1>Serviços</h1>
                <a href="admin_services.html"><button class="button">Voltar</button></a>
            </div>
            <div class="info">
                <div class="row">
                    <p>Nome:</p>
                    <p>Serviço tosa</p>
                </div>
                <div class="row">
                    <p>Marca:</p>
                    <p>food dog</p>
                </div>
                <div class="row">
                    <p>preço de venda:</p>
                    <p>R$ 40.00</p>
                </div>
                <div class="row">
                    <p>Preço de compra:</p>
                    <p>R$ 20.00</p>
                </div>
                <div class="row">
                    <p>Quant. estoque:</p>
                    <p>22</p>
                </div>
                <div class="row">
                    <p>Quant. vendida:</p>
                    <p>4</p>
                </div>
                <div class="row">
                    <p>Lucro:</p>
                    <p>R$ 80.00</p>
                </div>
            </div>

            <div class="row options">
                <a href="admin_services_edit.html"><button class="button edit">Editar</button></a>
                <a href="admin_services.html"><button class="button delete">Deletar</button></a>
            </div>

        </main>
    );
}