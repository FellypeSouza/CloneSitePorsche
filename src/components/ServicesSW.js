import React from "react";
import '../styles/Services.css';

export default function ServicesSW(props){
    return(
        <section className="servicesContainer p-5">
            <h3 className="font-weight-bold">{props.title}</h3>
            <section className="servicesImages">
                <section className="servicesImages1">
                    <a href="/CloneSitePorsche">
                        <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/historia-s_1_240126_2943.jpg/" alt="porsche" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light ">História Stuttgart</h4>
                </section>
                <section className="servicesImages1">
                    <a href="/CloneSitePorsche">
                        <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/stuttgart-_1_240126_2950.jpg/" alt="porsche" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light">Stuttgart Motorsport</h4>
                </section>
                <section className="servicesImages1">
                    <a href="/CloneSitePorsche">
                        <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/porsche-cl_1_240126_2955.jpg/" alt="porsche" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute text-light">Porsche Club Brasil</h4>
                </section>
                <section className="servicesImages1">
                    <a href="/CloneSitePorsche">
                        <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/revista-in_1_240430_5938.jpg/" alt="porsche" width="810" className="serviceImage m-4 rounded"/>
                    </a>
                    <h4 className="position-absolute">Revista Insider</h4>
                </section>    
            </section>
        </section>
    );
}