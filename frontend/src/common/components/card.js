import React from 'react';

import '../../assets/css/card.css'

const card = props => (
    <div className="card">
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }} className="card-content">
            <img src={props.img} alt="imagem animal"/>
            <div className="card-description-grid">
                <div>
                    <strong>Nome</strong>
                    <p>{props.name}</p>
                </div>

                <div>
                    <strong>Idade</strong>
                    <p>{props.age}</p>
                </div>

                <div>
                    <strong>Cidade/Estado</strong>
                    <p>{props.city} / {props.state}</p>
                </div>

                <div>
                    <strong>Situação</strong>
                    <p>{props.status}</p>
                </div>
            </div>

            <div className="card-description">
                <strong>Informações</strong>
                <p>Animal atende pelo nome de Daniela</p>
            </div>

            <div className="card-button">
                <button className="primary-gradient">Encontrei</button>
            </div>
        </div>
    </div>
);

export default card;