import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';


// componentes
import ServiceItem from '../../components/ServiceItem';
import Loading from '../../components/Loading';


export default function Logon() {
    const history = useHistory();

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/service");
                setServices(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    return (
        <div class="container">
            <div class="container-header" id="services">
                <div class="background-header"></div>
                <h1><a href="services.html">SERVIÇOS</a></h1>
            </div>
            <div class="content-services">
                <div class="row-services">
                    <input id="serch-services" type="" action="" placeholder=" Pesquisar"></input>
                    <div>
                        <p>Filtrar: </p>
                        <select id="filtro-services" name="services-filter">
                            <option value="name">Serviço</option>
                            <option value="saab">Animal</option>
                        </select>
                    </div>
                </div>
                {loading && (<Loading />)}
                {services.slice(0,Math.min(services.length, 5)).map(service => (
                    <ServiceItem data={service} />
                ))}
            </div>
        </div>
    );
}