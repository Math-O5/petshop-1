import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';


// componentes
import serviceImg from '../../images/dog.png';
import Loading from '../../components/Loading';

export default function Logon(props) {
    const history = useHistory();

    const serviceId = props.match.params.id;

    const [service, setService] = useState({});
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/service/${serviceId}`);
                setService(response.data);
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
                <h1>SERVIÇOS</h1>
            </div>
            <a href="services.html" rel="noopener noreferrer"><button>&lt Voltar</button></a>
            <div class="content-detail-services">
                    <div class="perfil-detail-services">
                        <img src={serviceImg} />

                    </div>
                    <div class="text-services-detail">
                        <h2>{service.title}</h2>
                        {loading && (<Loading />)}
                        <p>{service.description}</p>
                    </div>
                    <div class="schedule-services">
                        <p>AGENDE SOMENTE POR:</p>
                        <h2 id="price">R$ {service.price}</h2>
                        <p>Apenas à vista</p>
                        <label>Data: 
                            <input id="data" type="date"></input>
                        </label>
                        <label>Hora: 
                            <select id="hora" name="hora">
                                {service.hours && service.hours.map((hour, index) => (
                                    <option value={index}>{hour}:00</option>
                                ))}
                            </select>  
                        </label>
                        
                        <a href="#">
                            <button>AGENDAR SERVIÇO</button>
                        </a>
                    </div>
            </div>
            <div class="details-container">
                <h2>Detalhes</h2>
                <br/>
                <p>Duração: 2 horas ADD NO MODEL</p>
                <p>Descrição: {service.description}</p>
                <br/>
            </div>
        </div>
    );
}