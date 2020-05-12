import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FaPowerOff, FaRegArrowAltCircleRight, FaPlusCircle } from 'react-icons/fa';

import logo from '../assets/images/logo.png';

const Header = () => {

    const token = localStorage.getItem('token');
    const [logout, setLogout] = useState(false);
    const [login, setLogin] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        setLogout(true);
    }

    const handleLogin = () => {
        setLogin(true);
    }

    if (logout) {
        return <Redirect to="/" />
    }

    if (login) {
        return <Redirect to="/login" />
    }

    return (
        <header>
            <div className="logo" style={{ width: "80%", textAlign: "center", display: "flex" }}>

                <div className="div-menu-start">
                    {token ?
                        <button className="btn-menu" onClick={handleLogout}>
                            <FaPlusCircle color="#fff" />
                        </button>
                        :
                        <></>
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
                        <button className="btn-menu" onClick={handleLogin}>
                            <FaRegArrowAltCircleRight color="#fff" />
                        </button>
                    }
                </div>

            </div>
        </header>
    );
}

export default Header;