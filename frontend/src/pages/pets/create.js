import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import Template from '../../template';
import Paginate from '../../common/components/paginate';

import api from '../../utils/api';
import { FaEye } from 'react-icons/fa';

const Create = () => {

    return (
        <Template>
            <div className="container">

                <div className="header" style={{ marginBottom: 20, textAlign: "center" }}>
                    <h1>Localizar animais</h1>
                </div>

                <div className="card">
                    <form className="card" >

                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Senha"/>

                        <button className="primary-gradient"> Entrar </button>
                    </form>
                </div>
            </div>
            <Paginate />
        </Template>
    )
}

export default Create;