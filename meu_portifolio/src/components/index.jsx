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
                    <div className="footer">Me Encontre No <a href="">GitHub</a> and <a href="">Linkedin</a><br></br>Baixe Meu <a href="">Currículo</a></div>
                </div>
            </div>
            <div className='scroll'>
                <div className='content uno'>
                    <img src={diegoImg} alt="Texto alternativo da imagem" className="img-perfil" />
                </div>
                <div className='content projects'>
                    <div className="carousel slide" id='meuCarousel'>
                        <div className='carousel-inner'>
                            <div className='carousel-item'>
                                <div className="d-block w-50 carrosel"></div>
                            </div>
                            <div className='carousel-item'>
                                <div className="d-block w-50 carrosel"></div>
                            </div>
                            <div className='carousel-item active'>
                               <div className="d-block w-50 carrosel webRide" onClick={webRideApp}></div>
                            </div>
                            <button className="carousel-control-prev" data-bs-target="#meuCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" data-bs-target="#meuCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
