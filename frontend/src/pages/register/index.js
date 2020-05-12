import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications'
import swal from 'sweetalert';

import Template from '../../template';

import api from '../../utils/api';
import '../../assets/css/register.css';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [finishRegister, setFinishRegister] = useState(false);
    const { addToast } = useToasts();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name,
            email,
            phone,
            password,
            password_confirmation: confirmedPassword
        }
        try {
            await api.post('api/owners', data);
            await swal("Sucesso!", "Agora realize o login com suas credenciais", "success");
            setFinishRegister(true);
        } catch (e) {
            addToast("Erro ao realizar registro, preencha todos os campos e tente novamente", { appearance: 'warning', autoDismiss: true })
        }
    }

    if (finishRegister) {
        return <Redirect to="/login" />;
    }

    return (
        <Template>
            <div className="container-register">

                <div className="header" style={{ marginBottom: 20, textAlign: "center" }}>
                    <h1>Registre-se</h1>
                </div>

                <form className="card" onSubmit={handleSubmit}>
                    <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />

                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirme sua senha" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />

                    <button className="primary-gradient"> Registre-se </button>
                </form>
            </div>
        </Template>
    )
}

export default Register;