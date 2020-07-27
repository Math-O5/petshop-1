import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';


// componentes
import Loading from '../../components/Loading';

import profileImg from '../../images/profile.png';

export default function Logon(props) {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const userId = props.match.params.id;

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/user/${userId}`);
                setUser(response.data);
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
                <h1>Clientes</h1>
                <a href="admin_clients.html"><button class="button">Voltar</button></a>
            </div>
            <div class="info row">
            {loading && (<Loading />)}                
            {!loading && (<>
                <div class="img-container">
                    <img src={profileImg} alt="Imagem do produto" />
                </div>
                <div>
                    <div class="row">
                        <p>Nome:</p>
                        <p>{user.username}</p>
                    </div>
                    <div class="row">
                        <p>Email:</p>
                        <p>{user.email}</p>
                    </div>
                    <div class="row">
                        <p>Telefone:</p>
                        <p>{user.tel}</p>
                    </div>
                    <div class="row">
                        <p>Endereço:</p>
                        <p>{user.address}</p>
                    </div>
                    <div class="row">
                        <p>Data de nascimento:</p>
                        <p>{user.born}</p>
                    </div>
                </div>
            </>)}
            </div>

            <div class="row options">
                <a href="admin_clients.edit.html"><button class="button edit">Editar</button></a>
                <a href="admin_clients.html"><button class="button delete">Deletar</button></a>
            </div>

        </main>
    );
}