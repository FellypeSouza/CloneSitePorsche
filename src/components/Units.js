import React from "react";
import '../styles/Units.css';
import unitsImageSP1 from '../styles/images/unitsimagesp1.webp';

export default function Units(){
    function switchLocation(value){
        
       
    }

    return(
        <section className="unitsContainer">
            <h1 className="fs-4 mb-3">Unidades</h1>
            <section className="unitsInfo">
                <section class="unitsRow row container w-25" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnunit" id="btnunit1" onClick={switchLocation("input1")}/>
                    <label class="btn text-start p-3" for="btnunit1">São Paulo - SP (Matriz)</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit2" onClick={switchLocation("input2")} autocomplete="off"/>
                    <label class="btn text-start" for="btnunit2">São Paulo - SP (Service | Body & Paint)</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit3" onClick={switchLocation("input3")} autocomplete="off" />
                    <label class="btn text-start p-3" for="btnunit3">Campinas - SP</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit4" onClick={switchLocation("input4")} autocomplete="off" />
                    <label class="btn text-start p-3" for="btnunit4">Ribeirão Preto - SP</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit5" onClick={switchLocation("input5")} autocomplete="off" />
                    <label class="btn text-start p-3" for="btnunit5">Rio de Janeiro - RJ</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit6" onClick={switchLocation("input6")} autocomplete="off" />
                    <label class="btn text-start p-3" for="btnunit6">Curitiba - PR</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit7" onClick={switchLocation("input7")} autocomplete="off" />
                    <label class="btn text-start p-3" for="btnunit7">Florianópois - SC</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit8" autocomplete="off" />
                    <label class="btn text-start p-3" for="btnunit8">Porto Alegre - RS</label>
                </section>
                <section>
                    <img src={unitsImageSP1} width={580} alt="infoLocal"/>
                </section>
                <section id="unitLocation" className="infoLocation">
                    <section className="infoEnd d-flex flex-row m-4">
                        <section className="">
                            <img className="" src="https://www.stuttgartporsche.com.br/img/icon-pin.svg" width={15} height="auto" alt="iconPin"/>
                        </section>
                        <section className="infoEnd2">
                            <h6><b>Endereço</b></h6>
                            <figcaption className="small">Av. Doutor Cardoso de Melo, 1507 - Vila Olímpia, São Paulo - SP, 04548-005</figcaption>
                            <a href="#" className="unitsBtn btn border border-dark">
                                &gt; Tour Virtual
                            </a>
                            <a href="#" className="unitsBtn btn border border-dark">
                                &gt; Como chegar
                            </a>
                        </section>
                    </section>
                    <section className="infoTel d-flex flex-row m-4">
                        <section className="m-1">
                            <img src="https://www.stuttgartporsche.com.br/img/icon-phone.svg" width={15} height="auto" alt="iconPhone"/>
                        </section>
                        <section className="infoEnd2">
                        <h6><b>Telefone</b></h6>
                            <figcaption className="small">(11) 5644-6700</figcaption>
                        </section>    
                    </section>
                    <section className="infoTimeFunc1 d-flex flex-row m-4">
                        <section className="m-1">
                            <img src="https://www.stuttgartporsche.com.br/img/icon-clock.svg" width={15} height="auto" alt="iconClock"/>
                        </section>
                        <section className="infoEnd2">
                            <h6><b>Horário de Funcionamento (Showroom)</b></h6>
                            <figcaption className="small">Segunda a sexta: 09h às 19h<br/>Sábado: 09h às 14h</figcaption>
                        </section>    
                    </section>
                    <section className="infoTimeFunc2 d-flex flex-row m-4">
                        <section className="m-1">
                            <img src="https://www.stuttgartporsche.com.br/img/icon-gear.svg" width={15} height="auto" alt="iconGear"/>
                        </section>
                        <section className="infoEnd2">
                            <h6><b>Horário de Funcionamento (Centro Técnico)</b></h6>
                            <figcaption className="small">Segunda a sexta: 08h às 18h<br/>Sábado: 08h às 12h</figcaption>
                        </section>    
                    </section>
                </section>
                
            </section>
            
        </section>
    );   
}