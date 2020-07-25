import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


// componentes
import PetItem from '../../components/PetItem';


export default function Logon() {
    const history = useHistory();

    return (
        <div class="container">
            <div class="container-header">
                <div class="background-header"></div>
                <a href="../perfil/pets.html"><h1>SEUS PETS</h1></a>
            </div>
            <div class="content-container">
                
                <main class="pets-container">
                    <a class="button-container">
                        <button>
                            CADASTRAR PET
                        </button>
                    </a>
                    <div class="pets">
                        <PetItem />
                        <PetItem />
                        <PetItem />
                        <PetItem />
                        <PetItem />
                    </div>

                </main>
            </div>
        </div>
    );
}