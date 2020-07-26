import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';


// componentes
import ProductItem from '../../components/ProductItem';
import Loading from '../../components/Loading';


export default function Logon() {
    const history = useHistory();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/service");
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    const selectRow = (id) => {
        history.push(`/services/${id}`);
    }

    return (
        <main class="products" id="admin">
            <div class="title">
                <h1>Serviços</h1>
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
                {loading && (<Loading />)}
                {products.map(product => (
                    <tr key={product._id} onClick={() => selectRow(product._id)} >
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.price}</td>
                        <td>22</td>
                        <td>4</td>
                        <td>R$ 80.00</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </main>
    );
}