import React, { useState, useEffect } from 'react'
import { useToasts } from 'react-toast-notifications';
import BeatLoader from 'react-spinners/BeatLoader';
// import { Link } from 'react-router-dom';

import Template from '../../template';
import Card from '../../common/components/card';
import Paginate from '../../common/components/paginate';

import api from '../../utils/api';
// import fox from '../../assets/images/animals/fox.png';

const Dashboard = () => {

    const [pets, setPets] = useState([]);
    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { addToast } = useToasts();

    useEffect(() => {

        const getPets = async () => {
            try {
                search();
            } catch (e) {
                alert("Deu erro");
            }
        }

        getPets();
    }, []);

    const search = async page => {

        if (page && page === pagination.current_page) {
            addToast("Você já está nessa página", { appearance: 'warning', autoDismiss: true })
            return false;
        }

        setIsLoading(true);

        const searchPage = page ? page : currentPage + 1;
        const response = await api.get(`api/pets?page=${searchPage}`);

        setPets(response.data.items);
        setPagination(response.data.pagination);
        setCurrentPage(currentPage + 1);
        setIsLoading(false);
    }

    return (
        <Template>
            <div className="container">

                {isLoading ?
                    <div className="div-loading">
                        <BeatLoader color="#7840a3" size={50} />
                    </div>
                    :
                    <div className="card-grid">
                        {pets.map(item => (
                            <Card
                                key={item.id}
                                img={item.photo}
                                name={item.name}
                                age={item.age}
                                city={item.city}
                                state={item.state}
                                status={item.status}
                                link={`${item.id}/found`}
                            />
                        ))}
                    </div>
                }

            </div>
            <Paginate pagination={pagination} onClick={search} />
        </Template>
    )
}

export default Dashboard;