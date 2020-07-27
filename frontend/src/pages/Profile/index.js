import React, { useEffect, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';

import axios from 'axios';

import './styles.css';

import profileImg from '../../images/profile.png';

import Auth from '../../services/auth';

export default function Logon() {
    const history = useHistory();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const userId = JSON.parse(localStorage.getItem('userData'));
            console.log(userId);

            try {
                const response = await axios.get(`/user/${userId.id}`);
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    async function handleLogout() {
        Auth.logOut()
        history.push('/');
    }

    return (
        <div class="container">
            <div class="container-header">
                <div class="background-header"></div>
                <h1> <a href="perfil.html">INFORMAÇÕES</a></h1>
            </div>
            <div class="container-perfil">
                
                <div class="perfil-info">
                    
                    <img src={profileImg} alt="Foto de perfil" />
                    <div class="details-container">
                        <h1>{user.username}</h1>
                        <h2>Info</h2>
        
                        <table>
                            <tr>
                                <th>
                                    Telefone: 
                                </th>
                                <td>
                                    {user.tel}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Email: 
                                </th>
                                <td>
                                    {user.email}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Endereço:
                                </th>
                                <td>
                                    {user.address}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Nascimento
                                </th>
                                <td>
                                    {user.born}
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
                <div class="button-container">
                    <button onClick={() => handleLogout()}>SAIR</button>
                </div>
            </div>
            
        </div>
    );
}