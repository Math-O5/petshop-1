import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


export default function Logon() {
    const history = useHistory();

    return (
        <div class="container">
            <div class="container-header">
                <div class="background-header"></div>
                <h1> <a href="perfil.html">INFORMAÇÕES</a></h1>
            </div>
            <div class="container-perfil">
                
                <div class="perfil-info">
                    
                    <img src="/perfil/assets/img/avatar.svg" alt="Foto de perfil" />
                    <div class="details-container">
                        <h1>Pessoa</h1>
                        <h2>Info</h2>
        
                        <table>
                            <tr>
                                <th>
                                    Telefone: 
                                </th>
                                <td>
                                    (99) 99999-9999
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Email: 
                                </th>
                                <td>
                                    nome@dominio.com
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Endereço:
                                </th>
                                <td>
                                    Rua Lorem, 00. Bairro Ipsum - São Carlos
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Nascimento
                                </th>
                                <td>
                                    DD/MM/AAAA
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="pagamento-info">
                    <h2>Cartão de Crédito</h2>
                    <table>
                        <tr>
                            <th>
                                Número: 
                            </th>
                            <td>
                                XXXX **** **** XXXX
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Titular:
                            </th>
                            <td>
                                Nome Sobrenome
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Vencimento
                            </th>
                            <td>
                                MM/AA
                            </td>
                        </tr>
                        <tr>
                            <th>
                                CPF:
                            </th>
                            <td>
                                000.000.000-00
                            </td>
                        </tr>
                        <tr>
                            <th>
                                CVV:
                            </th>
                            <td>
                                000
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="button-container">
                    <button>EDITAR INFORMAÇOES</button>
                </div>
            </div>
            
        </div>
    );
}