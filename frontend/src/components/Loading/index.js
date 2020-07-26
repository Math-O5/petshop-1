import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import ActivityIndicator from "../../images/loading.gif";

export default function Logon() {
    const history = useHistory();

    return (
        <div
            style={{
                height: 250,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <img height={50} src={ActivityIndicator} />
        </div>
    );
}