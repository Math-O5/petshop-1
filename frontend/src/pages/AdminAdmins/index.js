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

    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/admin");
                setAdmins(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);


    const selectRow = () => {
        history.push('/admins/info');
    }

    return (
        <main class="products" id="admin">
            <div class="title">
                <h1>Administradores</h1>
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
                    <td>email</td>
                    <td>telefone</td>
                    <td>endereço</td>
                </thead>
                <tbody>
                {loading && (<Loading />)}
                {admins.map(admin => (
                    <tr key={admin._id} onClick={() => selectRow(admin._id)} >
                        <td>{admin.username}</td>
                        <td>{admin.email}</td>
                        <td>{admin.tel}</td>
                        <td>{admin.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </main>
    );
}