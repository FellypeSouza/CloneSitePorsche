import React from "react";
import porschelogo from '../styles/images/porsche-logo.png';

export default function Nav(){
    return(
        <section className="nav">
            <a href="#" className="nav-item">
                <img src={porschelogo} width="150"/>
            </a>
            <a href="#" className="nav-item">
                <img src="https://www.stuttgartporsche.com.br/img/logo_stuttgart.svg" width="100" height="28"/>
            </a>
        </section>
    );
}