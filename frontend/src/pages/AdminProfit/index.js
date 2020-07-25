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
                <h1>Clientes</h1>
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

            <a href="admin_clients_id.html">
            <table>
                <thead>
                    <td>nome</td>
                    <td>telefone</td>
                    <td>endereço</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Pessoa Pessoa</td>
                        <td>xx xxxxx-xxxx</td>
                        <td>Rua Wwwwwwww</td>
                    </tr>
                    <tr>
                        <td>Pessoa Pessoa</td>
                        <td>xx xxxxx-xxxx</td>
                        <td>Rua Wwwwwwww</td>
                    </tr>
                </tbody>
            </table>
            </a>

        </main>
    );
}