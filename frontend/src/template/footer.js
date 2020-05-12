import React from 'react';
import { FaGithub } from 'react-icons/fa';

const footer = () => (
    <footer className="footer">
        <div>
            <span>
                Copyright © 2020 Pedro Parronchi
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/pedroparronchi">
                    <FaGithub size={15} color="#000" />
                </a>
            </span>
        </div>
    </footer>
);

export default footer;