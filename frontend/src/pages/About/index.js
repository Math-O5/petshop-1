import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

export default function Logon() {
    const history = useHistory();

    return (
        <div className="">
            <div class="container-header">
                <div class="background-header"></div>
                <h1><a href="about.html">Sobre nós</a></h1>
            </div>
            <div >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias vel doloremque quas neque porro, blanditiis, repellendus rerum perspiciatis magni asperiores laborum illum delectus eaque quaerat quis facilis. Labore, maxime veritatis?
            </div>
        </div>
    );
}