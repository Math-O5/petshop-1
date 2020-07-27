import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';


// componentes
import ProductItem from '../../components/ProductItem';
import Loading from '../../components/Loading';


export default function Logon() {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/user");
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    const selectRow = (id) => {
        history.push(`/clients/${id}`);
    }

    return (
        <main class="products" id="admin">
            <div class="title">
                <h1>Clientes</h1>
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
                    <td>email</td>
                    <td>telefone</td>
                    <td>endereço</td>
                </thead>
                <tbody>
                {loading && (<Loading />)}
                {users.map(user => (
                    <tr key={user._id} onClick={() => selectRow(user._id)} >
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.tel}</td>
                        <td>{user.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </main>
    );
}