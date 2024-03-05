import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import diegoImg from '../images/Diego.jpg'
import '../App.css';

function Home() {
    const navigate = useNavigate()
    const webRideApp = ()=>{
       navigate('/webRide')
    }
    return (
        <div className="app">
            <div className='mainInfo'>
                <div className="mainContent">
                    <div className="title">Olá Eu Sou um Desenvolvedor Web</div>
                    <div className="paragrafo">Eu Sou Diego Carvalho. Eu Crio Sistemas Web Frontend<br></br>Usando Modernas Tecnologias.</div>
                    <div className="button">Vamos Trabalhar Juntos!</div>
                    <div className="footer">Me Encontre No <a href="https://github.com/diegod21/">GitHub</a> and <a href="https://www.linkedin.com/in/diego-carvalho-d3003/">Linkedin</a><br></br>Baixe Meu Currículo</div>
                </div>
            </div>
            <div className='scroll'>
                <div className='content uno'>
                    <img src={diegoImg} alt="Texto alternativo da imagem" className="img-perfil" />
                </div>
                <div className='content projects'>
                    <div className="carousel slide" id='meuCarousel'>
                        <a href="https://diegod21.github.io/ride-app/">
                        <div className='carousel-inner'>
                            <div className='carousel-item'>
                                <div className="d-block w-50 carrosel webRide f3"></div>
                            </div>
                            <div className='carousel-item'>
                                <div className="d-block w-50 carrosel webRide f2 "></div>
                            </div> 
                            <div className='carousel-item active'>
                               <div className="d-block w-50 carrosel webRide f1"></div>
                            </div>
                            <button className="carousel-control-prev" data-bs-target="#meuCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" data-bs-target="#meuCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
