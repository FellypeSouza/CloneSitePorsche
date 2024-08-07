import React from "react";
import '../styles/Services.css';
import servicesImage1 from '../styles/images/services-image1.webp';
import servicesImage2 from '../styles/images/services-image2.webp';
import servicesImage3 from '../styles/images/services-image3.webp';
import servicesImage4 from '../styles/images/services-image4.webp';

export default function Services(props){
    return(
        <section className="servicesContainer p-5">
            <h3 className="font-weight-bold">{props.title}</h3>
            <section className="servicesImages">
                <section className="servicesImages1">
                    <a href="/CloneSitePorsche">
                        <img src={servicesImage1} alt="porsche" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute">Agendamento pós-venda</h4>
                </section>
                <section className="servicesImages1">
                    <a href="/CloneSitePorsche">
                        <img src={servicesImage2} alt="porsche" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute">Porsche Driver's Selection</h4>
                </section>
                <section className="servicesImages1">
                    <a href="/CloneSitePorsche">
                        <img src={servicesImage3} alt="porsche" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute">Porsche Exclusive Manufaktur</h4>
                </section>
                <section className="servicesImages1">
                    <a href="/CloneSitePorsche">
                        <img src={servicesImage4} alt="porsche" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute">Porsche Tequipament</h4>
                </section>    
            </section>
        </section>
    );
}