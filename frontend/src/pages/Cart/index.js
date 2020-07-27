import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaPlus, FaMinus } from 'react-icons/fa'

import axios from 'axios';

import './styles.css';

import Loading from '../../components/Loading';
import addImg from '../../images/add.png';
import minusImg from '../../images/minus.png';


export default function Logon() {
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);

    const loadData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/cart/buy");
            setOrders(response.data.products);

            if(response.data == undefined || response.data.products)
                setOrders([]);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        let aux = 0;
        orders.map(order => {
            aux += order.price * order.quantity; 
        });
        setTotal(aux);
    }, [orders]);

    const handleAdd = async (id, qtn) => {
        setLoading(true);
        try {
            const data = {
                productId: id,
                quantity: qtn+1
            }
            
            const response = await axios.post("/cart", data);
            loadData();
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const handleMinus = async (id, qtn) => {
        setLoading(true);
        try {
            const data = {
                productId: id,
                quantity: qtn-1
            }
            
            const response = await axios.post("/cart", data);
            loadData();
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }


    return (
        <div class="container">
            <div class="container-carrinho">
                <h1>CARRINHO</h1>
                <div class="carrinho-content">
                    
                    <div class="items">
                        <table>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                            </tr>
                            {orders.map(order => (
                                <tr>
                                    <td>{order.title}</td>
                                    <td>R${order.price.toFixed(2)}</td>
                                    <td style={{ textAlign: "center" }}>
                                        <FaMinus style={{ margin: "0 20px"}} onClick={() => handleMinus(order.productId, order.quantity)} />
                                        {order.quantity}
                                        <FaPlus style={{ margin: "0 20px"}} onClick={() => handleAdd(order.productId, order.quantity)} />
                                    </td>
                                    <td>R${(order.quantity * order.price).toFixed(2)}</td>
                                </tr>
                            ))}
                        </table>
                        {loading && (<Loading />)}
                    </div>
                    
                    <div class="resumo">
                        <h2>Resumo</h2>
                        <table>
                            <tr>
                                <th>Produtos</th>
                                <td>R${total.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <th>Frete</th>
                                <td>R$ 0,00</td>
                            </tr>
                        </table>
                        <table class="total">
                            <tr>
                                <th>
                                    Total
                                </th>
                                <td>
                                    R${total.toFixed(2)}
                                </td>
                            </tr>
                        </table>

                        <form action="#">
                            <button type="submit">PROSSEGUIR COM COMPRA</button>
                        </form>
                    </div>
                    
                </div>
                <form action="#" class="frete">
                    <label for="cep-frete">Calcule o frete:</label>
                    <input type="text" name="cep-frete" id="cep-frete" placeholder="00000-000" />

                    <button type="submit">Calcular</button>
                </form>
            </div>
            
        </div>
    );
}