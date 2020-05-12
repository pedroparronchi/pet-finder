import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";
import swal from 'sweetalert';

import Template from '../../template';
import Paginate from '../../common/components/paginate';

import api from '../../utils/api';
import { FaEye, FaPlusCircle } from 'react-icons/fa';
import { useToasts } from 'react-toast-notifications'

const Profile = () => {

    const [pets, setPets] = useState([]);
    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [notValidate, setNotValidate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { addToast } = useToasts();

    useEffect(() => {

        const getPets = async () => {
            try {
                search()
            } catch (e) {
                setIsLoading(false);
                swal({ title: "Alerta", icon: "warning", text: "Erro ao localizar animais" })
            }
        }

        getPets();
    }, []);

    const search = async (page) => {
        const token = localStorage.getItem("token");

        if (!token) {
            setNotValidate(true);
        }

        if (page && page === pagination.current_page) {
            addToast("Você já está nessa página", { appearance: 'warning', autoDismiss: true })
            return false;
        }

        setIsLoading(true);

        const searchPage = page ? page : currentPage + 1;
        const response = await api.get(`api/owners/pets?page=${searchPage}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        setPets(response.data.items);
        setPagination(response.data.pagination);
        setCurrentPage(currentPage + 1);
        setIsLoading(false);
    }

    if (notValidate) {
        return <Redirect to="" />
    }

    return (
        <Template>
            <div className="container">

                <div className="header" style={{ marginBottom: 20, textAlign: "center" }}>
                    <h1>Localizar animais</h1>
                    <Link to="/pets/create" className="primary-gradient">Adicionar <FaPlusCircle /></Link>
                </div>

                <div className="card">
                    <table style={{ width: "100%", height: "100%", }}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Cidade/UF</th>
                                <th>Situação</th>
                                <th>Informações</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ?
                                <tr>
                                    <td colSpan="6">
                                        <div className="div-loading">
                                            <RingLoader color="#7840a3" size={40} />
                                        </div>
                                    </td>
                                </tr>
                                :
                                pets.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.city} / {item.state}</td>
                                        <td>{item.status}</td>
                                        <td>{item.informations}</td>
                                        <td>
                                            <Link to={`/pets/${item.id}/show`} className="primary-gradient btn-table" >
                                                <FaEye color="#fff" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <Paginate pagination={pagination} onClick={search} />
        </Template>
    )
}

export default Profile;