import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


// componentes
import ServiceItem from '../../components/ServiceItem';


export default function Logon() {
    const history = useHistory();

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
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
            </div>
        </div>
    );
}