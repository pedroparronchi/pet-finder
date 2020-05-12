import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';

import Template from '../../template';
import Card from '../../common/components/card';
import Paginate from '../../common/components/paginate';

import api from '../../utils/api';
import fox from '../../assets/images/animals/fox.png';

const Dashboard = () => {

    const [pets, setPets] = useState([]);
    const [paginate, setPaginate] = useState({});
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {

        const getPets = async () => {
            try {
                const response = await api.get('api/pets');
                console.log(response);
                setPets(response.data.data);
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
    }, [])

    return (
        <Template>
            <div className="container">
                <div className="card-grid">
                    {pets.map(item => (
                        <Card
                            key={item.id}
                            img={item.photo}
                            name={item.name}
                            age={item.age}
                            city={item.city}
                            status={item.state}
                        />
                    ))}

                </div>
            </div>
            <Paginate />
        </Template>
    )
}

export default Dashboard;