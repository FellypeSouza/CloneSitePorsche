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
                            <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/inscricoes_1_240619_2901.jpg/" class="d-block w-100 h-75" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/porsche-pa_1_240430_2608.jpg" class="d-block w-100 h-75" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.stuttgartporsche.com.br/webp/pub/banners/banner-rev_1_231101_0249.png" class="d-block w-100 h-75" alt="..."/>
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
        </section>
            
    );
}