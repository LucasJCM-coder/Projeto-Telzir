import React from 'react';
import { Link } from 'react-router-dom'

import PageFooter from "../../components/PageFooter";
import PageHeader from '../../components/PageHeader';
import HomeImage from '../../assets/images/homeImage.png';

import './styles.css'

function Home() {
    return (
        <div>
            <PageHeader />
            <div className="container">
                <img src={HomeImage} alt="Imagem FaleMais" id="imgFaleMais"/>
                <div className="outText">
                    <h2>Plano FaleMais</h2>
                    <div className="description">
                        <p>
                             A Telzir, preocupada com a transparência com seus clientes, 
                            criou um simulador para o plano <span id="WordFaleMais">FaleMais</span> a 
                            fim de demonstrar as vantagens obtidas na utilização
                            utilização deste plano.</p>
                    </div>
                    <Link to="/simulator">
                    <button id="btnSimulator">Ir ao simulador</button>
                    </Link>
                </div>
            </div>
            <PageFooter/>
       </div>
    );
}

export default Home;