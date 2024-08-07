import React from "react";
import '../styles/nav.css';
import porschelogo from '../styles/images/porsche-logo.png';

export default function Nav(){
    return(
        <section className="navContainer d-flex justify-content-between m-auto">
            <button className="nav-item btn m-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                Menu
            </button>
            <a href="/CloneSitePorsche" className="nav-item m-3">
                <img src={porschelogo} width="150" alt="Logo Porsche" title="Logo Porsche"/>
            </a>
            <a href="/CloneSitePorsche" className="nav-item m-3">
                <img src="https://www.stuttgartporsche.com.br/img/logo_stuttgart.svg" width="100" height="28" alt="Stuttgart Porsche" title="Stuttgart Porsche"/>
            </a>
        </section>
    );
}