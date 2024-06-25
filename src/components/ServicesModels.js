import React from "react";
import '../styles/Services.css';

export default function ServicesSW(props){
    return(
        <section className="servicesContainer p-5">
            <h3 className="font-weight-bold">{props.title}</h3>
            <section className="servicesImages">
                <section className="servicesImages1">
                    <a href="#">
                        <img src="https://www.stuttgartporsche.com.br/pub/modelos/categoria/large/718240327_1600_lg_240327_1600.jpg" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light">Dois lugares com alta dinâmica de condução graças ao seu motor central.</h4>
                        
                    
                    
                </section>
                <section className="servicesImages1">
                    <a href="#">
                        <img src="https://www.stuttgartporsche.com.br/pub/modelos/categoria/large/911240327_1619_lg_240327_1619.jpg" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light">Icônico carro esportivo com motor montado na traseira</h4>
                </section>
                <section className="servicesImages1">
                    <a href="#">
                        <img src="https://www.stuttgartporsche.com.br/pub/modelos/categoria/large/taycan240327_1928_lg_240327_1928.jpg" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light">Sedan esportivo totalmente elétrico com porta-malas dianteiro e traseiro.</h4>
                </section>
                <section className="servicesImages1">
                    <a href="#">
                        <img src="https://www.stuttgartporsche.com.br/pub/modelos/categoria/large/panamera240327_1625_lg_240327_1625.jpg" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light">Sedan esportivo de luxo com quatro lugares.</h4>
                </section>
                <section className="servicesImages1">
                    <a href="#">
                        <img src="https://www.stuttgartporsche.com.br/pub/modelos/categoria/large/macan240327_1634_lg_240327_1634.jpg" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light">SUV compacto com alta versatilidade.</h4>
                </section>    
                <section className="servicesImages1">
                    <a href="#">
                        <img src="https://www.stuttgartporsche.com.br/pub/modelos/categoria/large/cayenne240327_1649_lg_240327_1649.jpg" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light">SUV com até 5 assentos, mas antes de tudo, um carro esportivo.
 
 </h4>
                </section>        
            </section>
        </section>
    );
}