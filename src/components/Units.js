import React from "react";
import '../styles/Units.css';
import unitsImageSP1 from '../styles/images/unitsimagesp1.webp';

export default function Units(){
    return(
        <section className="unitsContainer p-4">
            <section>
                <h1 className="fs-4 mb-3">Unidades</h1>
                <div class="row container w-25" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnunit" id="btnunit1" autocomplete="off"/>
                    <label class="btn btn-outline-dark text-start p-3" for="btnunit1">São Paulo - SP (Matriz)</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit2" autocomplete="off" />
                    <label class="btn btn-outline-dark text-start" for="btnunit2">São Paulo - SP (Service | Body & Paint)</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit3" autocomplete="off" />
                    <label class="btn btn-outline-dark text-start p-3" for="btnunit3">Campinas - SP</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit4" autocomplete="off" />
                    <label class="btn btn-outline-dark text-start p-3" for="btnunit4">Ribeirão Preto - SP</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit5" autocomplete="off" />
                    <label class="btn btn-outline-dark text-start p-3" for="btnunit5">Rio de Janeiro - RJ</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit6" autocomplete="off" />
                    <label class="btn btn-outline-dark text-start p-3" for="btnunit6">Curitiba - PR</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit7" autocomplete="off" />
                    <label class="btn btn-outline-dark text-start p-3" for="btnunit7">Florianópois - SC</label>

                    <input type="radio" class="btn-check" name="btnunit" id="btnunit8" autocomplete="off" />
                    <label class="btn btn-outline-dark text-start p-3" for="btnunit8">Porto Alegre - RS</label>
                </div>
                
            </section>
            
        </section>
    );   
}