import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Template from '../../template';
import Paginate from '../../common/components/paginate';

import api from '../../utils/api';

const Found = props => {

    const [pet, setPet] = useState({});
    const [notValidate, setNotValidate] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if(!token) {
            setNotValidate(true);
        }

        const getPet = async () => {
            if (!props.match.params.id) {
                setNotValidate(true);
            }
            const id = props.match.params.id;
            const response = await api.get(`api/pets/${id}`);

            setPet(response.data);
        }

        getPet();

    }, []);

    if (notValidate) {
        return <Redirect to="" />
    }

    return (
        <Template>
            <div className="container">

                <div className="header" style={{ marginBottom: 20, textAlign: "center" }}>
                    <h1>Informações do Animal</h1>
                </div>

                <form className="card">

                    <div className="card-image">
                        <img src={pet.photo} />
                        <p><strong>Nome</strong>: {pet.name}</p>
                        <p><strong>Idade</strong>: {pet.age}</p>
                        <p><strong>Cidade/Estado</strong>: {pet.city}/{pet.state}</p>
                        <p><strong>Informações</strong>: {pet.informations}</p>
                    </div>

                    <hr/>
                    <h2 className="h2">Comunicados</h2>
                    <div className="card-grid card-grid-start">
                        {pet.communiques ? pet.communiques.map(item => (
                            <div key={item.id} className="card">
                                <div className="card-content" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                                    <div className="card-description-grid">
                                        <div>
                                            <strong>Nome</strong>
                                            <p>{item.name}</p>
                                        </div>

                                        <div>
                                            <strong>Telefone</strong>
                                            <p>{item.phone}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                            : <></>}
                    </div>

                    <div className="card-button card-button-full">
                        <Link to="/pets" className="primary-gradient"> Voltar </Link>
                    </div>
                </form>
            </div>
            <Paginate />
        </Template>
    )
}

export default Found;