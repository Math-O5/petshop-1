import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import petImg from '../../images/pet.png';

export default function Logon() {
    const history = useHistory();

    return (
        <div class="pet">
            <img src={petImg} alt="Produto" />
            <div class="pet-description">
                <h2>Lessie</h2>
                <p>IDADE: 8 anos</p>
                <p>Raça: virtual</p>
                <div>
                    <button>editar</button>
                    <button>excluir</button>
                </div>
            </div>
        </div>
    );
}