import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


// componentes
import serviceImg from '../../images/dog.png';


export default function Logon() {
    const history = useHistory();

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
                        <h2>Tosa</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa odit possimus magni natus iste ipsum beatae qui ad consectetur deserunt necessitatibus, libero, accusantium esse eum accusamus eius architecto a?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, omnis excepturi quisquam, ducimus atque eligendi molestiae animi pariatur corrupti, tempora dicta perspiciatis nihil ea. Ullam molestias inventore magni corrupti.
                        </p>
                    </div>
                    <div class="schedule-services">
                        <p>AGENDE SOMENTE POR:</p>
                        <h2 id="price">R$ 15.00</h2>
                        <p>Apenas à vista</p>
                        <label>Data: 
                            <input id="data" type="date"></input>
                        </label>
                        <label>Hora: 
                            <select id="hora" name="hora">
                                <option value="1">12:00</option>
                                <option value="2">13:00</option>
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
                <p>Duração: 2 horas</p>
                <p>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos qui delectus eaque architecto laboriosam quod quidem magni, voluptates nemo distinctio veritatis consequatur sequi exercitationem dolores libero, fugit fuga cupiditate.</p>
                <br/>
            </div>
        </div>
    );
}