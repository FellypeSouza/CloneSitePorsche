import React from "react";
import '../styles/MainPage.css';
import Nav from "../components/Nav";

export default function MainPage(){
    return(
        <section>
            <Nav/>
            <section className="MPContainer">  
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/inscricoes_1_240619_2901.jpg/" class="d-block" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/porsche-pa_1_240430_2608.jpg" class="d-block " alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/banner-rev_1_231101_0249.png" class="d-block " alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                
            </section>
                <section className="bg-light d-flex align-items-center justify-content-evenly w-75 m-auto p-3">
                    <a href="#" className="d-flex p-2">
                        <img className="m-1" src="https://www.stuttgartporsche.com.br/img/icon-phone.svg" width={"20px"} height={"20px"} alt="phone"/>
                        <figcaption className="text-dark">Fale Conosco</figcaption>
                    </a>
                    <a href="#" className="d-flex p-2">
                        <img className="m-1" src="https://www.stuttgartporsche.com.br/img/icon-calculator.svg" width={"20px"} height={"20px"} alt="phone"/>
                        <figcaption className="text-dark">Serviços</figcaption>
                    </a>
                    <a href="#" className="d-flex p-2">
                        <img className="m-1" src="https://www.stuttgartporsche.com.br/img/icon-calendar.svg" width={"20px"} height={"20px"} alt="phone"/>
                        <figcaption className="text-dark">Calendário Porsche Club</figcaption>
                    </a>
                    <a href="#" className="d-flex p-2">
                        <img className="m-1" src="https://www.stuttgartporsche.com.br/img/icon-whatsapp.svg" width={"20px"} height={"20px"} alt="phone"/>
                        <figcaption className="text-dark">Whatsapp</figcaption>
                    </a>
                    <a href="#" className="d-flex p-2">
                        <img className="m-1" src="https://www.stuttgartporsche.com.br/img/icon-pin.svg" width={"20px"} height={"20px"} alt="phone"/>
                        <figcaption className="text-dark">Endereços</figcaption>
                    </a>
                </section>
        </section>
            
    );
}