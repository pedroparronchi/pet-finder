import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';

import Template from '../../template';
import Paginate from '../../common/components/paginate';

import api from '../../utils/api';
import swal from 'sweetalert';

const Create = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [photo, setPhoto] = useState('');
    const [informations, setInformations] = useState('');
    const [finish, setFinish] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");

        if (!name || !age || !city || !state || !informations) {
            swal({ title: "Alerta", icon: "warning", text: "Erro ao cadastrar animal, preencha todos campos e tente novamente" });
            return false;
        }

        const data = new FormData()
        data.append('photo', photo);
        data.append('name', name);
        data.append('age', age);
        data.append('city', city);
        data.append('state', state);
        data.append('informations', informations);


        try {
            await api.post('api/pets', data, {
                headers: { Authorization: `Bearer ${token}` }
            });

            await swal({ title: "Sucesso", icon: "success", text: "Animal cadastrado com sucesso" });
            setFinish(true);
        } catch (e) {
            swal({ title: "Alerta", icon: "warning", text: "Erro ao cadastrar animal, tente novamente mais tarde" });
        }
    }

    const handleChangeImage = event => {
        console.log(event.target.files[0]);
        setPhoto(event.target.files[0]);
    }

    if(finish) {
        return <Redirect to="/pets" />
    }

    return (
        <Template>
            <div className="container">

                <div className="header" style={{ marginBottom: 20, textAlign: "center" }}>
                    <h1>Adicionar animal</h1>
                </div>

                <div className="card">
                    <form className="card" onSubmit={handleSubmit}>

                        <div className="div-group">
                            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="number" className="input-sm" min={0} placeholder="Idade" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className="div-group">
                            <input type="text" placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)} />
                            <input type="text" className="input-sm" maxLength={2} placeholder="UF" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>

                        <input type="file" placeholder="Foto" onChange={handleChangeImage} />
                        <br />
                        <span className="text-alert"><FaExclamationTriangle color="tomato" /> Para uma melhor experiência, insira imagens 270x180px</span>
                        {/* <img src={this.state.file}/> */}

                        <input type="text" placeholder="Informações" value={informations} onChange={(e) => setInformations(e.target.value)} />

                        <button className="primary-gradient"> Salvar </button>
                    </form>
                </div>
            </div>
            <Paginate />
        </Template>
    )
}

export default Create;