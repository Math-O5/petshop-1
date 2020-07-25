import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


// componentes
import ProductItem from '../../components/ProductItem';


export default function Logon() {
    const history = useHistory();

    const selectRow = () => {
        history.push('/products/info');
    }

    return (
        <main class="products" id="admin">
            <div class="title">
                <h1>Produtos</h1>
                <a href="admin_clients_add.html"><button class="button">Adicionar</button></a>
            </div>

            <div class="filter">
                <input type="text" name="search" id="search" />
                <select name="Ordenar por" id="sort-products">
                    <option value="" selected></option>
                    <option value="Preço">Preço</option>
                    <option value="Nome">Nome</option>
                    <option value="Marca">Marca</option>
                </select>
            </div>

            <table>
                <thead>
                    <td>nome</td>
                    <td>preço de venda</td>
                    <td>preço de compra</td>
                    <td>quant. estoque</td>
                    <td>quant. vendida</td>
                    <td>lucro</td>
                </thead>
                <tbody>
                    <tr onClick={() => selectRow()} >
                        <td>Ração food dog</td>
                        <td>R$ 40.00</td>
                        <td>R$ 20.00</td>
                        <td>22</td>
                        <td>4</td>
                        <td>R$ 80.00</td>
                    </tr>
                    <tr>
                        <td>Ração food dog</td>
                        <td>R$ 40.00</td>
                        <td>R$ 20.00</td>
                        <td>22</td>
                        <td>4</td>
                        <td>R$ 80.00</td>
                    </tr>
                </tbody>
            </table>

        </main>
    );
}