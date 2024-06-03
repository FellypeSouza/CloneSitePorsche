import React from "react";
import '../styles/Services.css';
import servicesImage1 from '../styles/images/services-image1.webp';
import servicesImage2 from '../styles/images/services-image2.webp';
import servicesImage3 from '../styles/images/services-image3.webp';
import servicesImage4 from '../styles/images/services-image4.webp';

export default function Services(){
    return(
        <section className="servicesContainer">
            <h3>Entre em contato</h3>
            <section className="servicesImages">
                <section className="servicesImages1">
                    <img src={servicesImage1} width="810" className="serviceImage m-4 rounded"/>
                    <h4 className="position-absolute">Agendamento pós-venda</h4>
                </section>
                <section className="servicesImages2">
                    <img src={servicesImage2} width="810" className="m-4 rounded"/>
                </section>
                <section className="servicesImages3">
                    <img src={servicesImage3} width="810" className="m-4 rounded"/>
                </section>
                <section className="servicesImages4">
                    <img src={servicesImage4} width="810" className="m-4 rounded"/>
                </section>
                
            </section>
        </section>
    );
}