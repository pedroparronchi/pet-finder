import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications'
import swal from 'sweetalert';
import RingLoader from "react-spinners/RingLoader";

import Template from '../../template';

import api from '../../utils/api';
import CREDENTIALS from '../../utils/credentials';
import '../../assets/css/register.css';

const Dashboard = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [finishLogin, setFinishLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { addToast } = useToasts();


    useEffect(() => {
        const validateToken = () => {
            const token = localStorage.getItem("token")
            if (token) {
                addToast('Login realizado com sucesso', { appearance: 'success', autoDismiss: true })
                setFinishLogin(true);
            }
        }

        validateToken();
    }, [addToast]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            swal({
                title: "Alerta",
                text: "Preencha todos os campos para continuar!",
                icon: "warning",
            });
            return false;
        }

        setIsLoading(true);
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
            // addToast('Login realizado com sucesso', { appearance: 'success' })
            setFinishLogin(true);
        } catch (e) {
            alert("erro");
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

                <form className="card" style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>

                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <span style={{ marginTop: 20, fontSize: 20 }}>Não tem um login? <Link to="register">Registre-se</Link></span>
                    {!isLoading ?
                        <button className="primary-gradient"> Entrar </button> :
                        <div className="div-loading">
                            <RingLoader size={60} color={"#7840a3"} />
                        </div>
                    }

                </form>
            </div>
        </Template>
    )
}

export default Dashboard;