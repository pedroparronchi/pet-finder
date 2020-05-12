import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import Template from '../../template';
import Paginate from '../../common/components/paginate';

import api from '../../utils/api';
import { FaEye } from 'react-icons/fa';

const Profile = () => {

    const [pets, setPets] = useState([]);
    const [paginate, setPaginate] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [notValidate, setNotValidate] = useState(false);

    useEffect(() => {

        const getPets = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) {
                    setNotValidate(true);
                }
                const response = await api.get('api/owners/pets', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setPets(response.data);
                setPaginate({
                    currentPage: response.current_page,
                    lastPage: '',
                    totalPage: '',

                });
                setCurrentPage(currentPage + 1);
            } catch (e) {
                alert("Deu erro");
            }
        }

        getPets();
    }, []);

    if (notValidate) {
        return <Redirect to="admin" />
    }

    return (
        <Template>
            <div className="container">

                <div className="header" style={{marginBottom: 20, textAlign: "center"}}>
                    <h1>Localizar animais</h1>
                </div>

                <div className="card">
                    <table style={{ width: "100%", height: "100%" }}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Cidade / Estado</th>
                                <th>Situação</th>
                                <th>Informações</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city} / {item.state}</td>
                                    <td>{item.status}</td>
                                    <td>{item.informations}</td>
                                    <td>
                                        <button className="primary-gradient btn-table" >
                                            <FaEye color="#fff" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Paginate />
        </Template>
    )
}

export default Profile;