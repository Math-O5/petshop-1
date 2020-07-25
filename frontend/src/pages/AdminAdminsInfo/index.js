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
                <h1>Administradores</h1>
                <a href="admin_admins.html"><button class="button">Voltar</button></a>
            </div>
            <div class="info">
                <div class="row">
                    <p>Nome:</p>
                    <p>Pessoa Pessoa</p>
                </div>
                <div class="row">
                    <p>Telefone:</p>
                    <p>xx xxxxx-xxxx</p>
                </div>
                <div class="row">
                    <p>Endereço:</p>
                    <p>Rua Wwwwwwww</p>
                </div>
                <div class="row">
                    <p>Data de nascimento:</p>
                    <p>31/01/1960</p>
                </div>
            </div>

            <div class="row options">
                <a href="admin_admins_edit.html"><button class="button edit">Editar</button></a>
                <a href="admin_admins.html"><button class="button delete">Deletar</button></a>
            </div>

        </main>
    );
}