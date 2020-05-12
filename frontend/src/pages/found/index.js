import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Template from '../../template';
import Paginate from '../../common/components/paginate';

import api from '../../utils/api';
import swal from 'sweetalert';

const Found = props => {

    const [pet, setPet] = useState({});
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [finish, setFinish] = useState(false);

    useEffect(() => {

        const getPet = async () => {
            if (!props.match.params.id) {
                setFinish(true);
            }
            const id = props.match.params.id;
            const response = await api.get(`api/pets/${id}`);

            setPet(response.data);
        }

        getPet();

    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !phone) {
            swal({ title: "Alerta", icon: "warning", text: "Erro ao cadastrar aviso, preencha todos campos e tente novamente" });
            return false;
        }

        const data = {
            name,
            phone
        }

        try {
            await api.post(`api/communiques/${pet.id}`, data);

            await swal({ title: "Sucesso", icon: "success", text: "Aviso cadastrado com sucesso" });
            setFinish(true);
        } catch (e) {
            swal({ title: "Alerta", icon: "warning", text: "Erro ao aviso, tente novamente mais tarde" });
        }
    }

    if (finish) {
        return <Redirect to="/" />
    }

    return (
        <Template>
            <div className="container">

                <div className="header" style={{ marginBottom: 20, textAlign: "center" }}>
                    <h1>Informar encontro do Animal</h1>
                </div>

                <div className="card">
                    <form className="card" onSubmit={handleSubmit}>

                        <div>
                            <img style={{ width: "270px", height: "170px" }} src={pet.photo} />
                            <p>Nome: {pet.name}</p>
                            <p>Idade: {pet.age}</p>
                            <p>Cidade/Estado: {pet.city}/{pet.state}</p>
                            <p>Informações: {pet.informations}</p>
                        </div>

                        <div className="div-group">
                            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <button className="primary-gradient"> Informar </button>
                    </form>
                </div>
            </div>
            <Paginate />
        </Template>
    )
}

export default Found;