import React, { useState } from 'react';
import { Redirect, Link, useLocation } from 'react-router-dom';
import { FaPowerOff, FaRegArrowAltCircleRight, FaPalette, FaUserPlus } from 'react-icons/fa';

import logo from '../assets/images/logo.png';

const Header = () => {

    const token = localStorage.getItem('token');
    const location = useLocation();
    const [logout, setLogout] = useState(false);


    const handleLogout = () => {
        localStorage.clear();
        setLogout(true);
    }


    if (logout) {
        return <Redirect to="/" />
    }


    return (
        <header>
            <div className="logo" style={{ width: "80%", textAlign: "center", display: "flex" }}>

                <div className="div-menu-start">
                    {!token ?
                        <Link to="/register" className="btn-menu" >
                            <FaUserPlus color="#fff" />
                        </Link>
                        :
                        <Link to="/pets" className="btn-menu">
                            <FaPalette color="#fff" />
                        </Link>
                    }
                </div>
                <Link to="">
                    <img style={{ width: 150, height: 100, display: "flex" }} src={logo} alt="Pet Finder" />
                </Link>
                <div className="div-menu">
                    {token ?

                        <button className="btn-menu" onClick={handleLogout}>
                            <FaPowerOff color="#fff" />
                        </button>
                        :
                        location.pathname !== "/login" ?
                            <Link to="/login" className="btn-menu" >
                                <FaRegArrowAltCircleRight color="#fff" />
                            </Link>
                            :
                            <Link to="/register" className="btn-menu">
                                <FaUserPlus color="#fff" />
                            </Link>
                    }
                </div>

            </div>
        </header>
    );
}

export default Header;