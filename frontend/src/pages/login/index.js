import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import Template from '../../template';

import api from '../../utils/api';
import CREDENTIALS from '../../utils/credentials';
import '../../assets/css/register.css';

const Dashboard = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [finishLogin, setFinishLogin] = useState(false);

    useEffect(() => {
        const validateToken = () => {
            const token = localStorage.getItem("token")
            if (token) {
                setFinishLogin(true);
            }
        }

        validateToken();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            username,
            password,
            grant_type: CREDENTIALS.grant_type,
            client_id: CREDENTIALS.client_id,
            client_secret: CREDENTIALS.client_secret
        }
        try {
            const response = await api.post('oauth/token', data);
            localStorage.setItem('token', response.data.access_token);
            toast.success("Login realizado com sucesso");
            setFinishLogin(true);
        } catch (e) {
            alert("erro");
            toast.error('Erro ao realizar o cadastro, tente novamente', 'Alerta')
        }
    }

    if (finishLogin) {
        return <Redirect to="/pets" />;
    }

    return (
        <Template>
            <div className="container-register">

                <div className="header" style={{ marginBottom: 20, textAlign: "center" }}>
                    <h1>Realize o Login</h1>
                </div>

                <form className="card" onSubmit={handleSubmit}>

                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className="primary-gradient"> Entrar </button>
                </form>
            </div>
        </Template>
    )
}

export default Dashboard;