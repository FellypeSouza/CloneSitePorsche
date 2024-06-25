import React from "react";
import '../styles/ScreenContacts.css';
import whatsappIcon from '../styles/icons/whatsapp.png';
import porscheIcon from '../styles/icons/porsche.png';

export default function ScreenContacts(){
    return(
        <section className="scContainer p-2">
            <section className="scContent">
                <section className="porscheIcon p-3 rounded-circle">
                    <a href="/CloneSitePorsche/Seminovos">
                        <img src={porscheIcon} width={30} height={30} alt="porsche"/>
                    </a>
                </section>
                <section className="whatsappIcon p-3 rounded-circle">
                    <a className="whatsappLink" href="">
                        <img src={whatsappIcon} width={30} height={30} alt="whatsapp"/>
                    </a>
                </section>
            </section>
        </section>
    );
}