import imageheader from '../styles/images/image-header.jpg';
import '../styles/images/header.css';

import CarModels from './CarModels';

export default function Header(){
    return(
        <section>
            <img src={imageheader} className="headerImage img-fluid w-100" alt='porsche' id='imageHeader'/>

            <section className="mainContainer p-5">{/* container principal */}
                <section className='headerContent'>{/* lado esquerdo */}
                    <h5>Encontre mais fácil aqui</h5>
                    <input placeholder="Palavra-chave" className="input w-100"/>
                    <hr className='modelCross mt-4 border-2 border-dark'/>
                    <section className='ranges'>
                        <p className=''>Preço</p>
                        <section className='d-flex m-2'>
                            <p>R$0 Min.</p>
                            <input type='range' className='inputRange w-75 mb-5 m-2'/>
                            <p>R$1.980.000 Max.</p>
                        </section>
                        <section className='d-flex m-2'>
                            <p>0 Min</p>
                            <input type='range' className='inputRange w-75 mb-5 m-2'/>
                            <p>70000 Máx.</p>
                        </section>
                    </section>
                    <p className='m-1'>Unidade</p>
                    <select class="form-select input w-100 border-1 border-dark rounded-0 mb-4" id="inputGroupSelect01">
                        <option selected>Selecione uma Unidade</option>
                        <option value="1">São Paulo - SP (Matriz)</option>
                        <option value="2">Campinas - SP</option>
                        <option value="3">Ribeirão Preto - SP</option>
                        <option value="4">Rio de Janeiro - RJ</option>
                        <option value="5">Porto Alegre - RS</option>
                        <option value="6">Curitiba - PR</option>
                        <option value="7">Florianópolis - SC</option>
                        <option value="8">Curitiba - PR</option>
                    </select>
                    <p className='m-1'>Marca</p>
                    <select class="form-select input w-100 border-1 border-dark rounded-0 mb-4" id="inputGroupSelect02">
                        <option selected>Selecione uma Marca</option>
                        <option value="1">AUDI</option>
                        <option value="2">LAND ROVER</option>
                        <option value="3">PORSCHE</option>
                    </select>
                    <p className='m-1'>Modelo</p>
                    <select class="form-select input w-100 border-1 border-dark rounded-0 mb-4" id="inputGroupSelect03">
                        <option selected>Selecione um Modelo</option>
                        <option value="1">718</option>
                        <option value="2">911</option>
                        <option value="3">BOXSTER</option>
                        <option value="4">CAYENNE</option>
                        <option value="5">CAYMAN</option>
                        <option value="6">DEFENDER</option>
                        <option value="7">MACAN</option>
                        <option value="8">PANAMERA</option>
                    </select>
                    <p className='m-1'>Ordenação</p>
                    <select class="form-select input w-100 border-1 border-dark rounded-0 mb-4" id="inputGroupSelect03">
                        <option selected>Ordenação</option>
                        <option value="1">Mais recentes</option>
                        <option value="2">Menor preço</option>
                        <option value="3">Maior preço</option>
                        <option value="4">Menor Km</option>
                        <option value="5">Maior Km</option>
                    </select>
                    <p className='m-1'>Ano</p>
                    <section className='d-flex mb-4 justify-content-around'>
                        <select class="headerForm form-select input border-1 border-dark rounded-0 m-1" id="inputGroupSelect03">
                            <option selected>de</option>
                            <option value="1">2024</option>
                            <option value="2">2023</option>
                            <option value="3">2022</option>
                            <option value="4">2021</option>
                            <option value="5">2020</option>
                        </select>
                        <select class="headerForm form-select input border-1 border-dark rounded-0 m-1" id="inputGroupSelect03">
                            <option selected>até</option>
                            <option value="1">2024</option>
                            <option value="2">2023</option>
                            <option value="3">2022</option>
                            <option value="4">2021</option>
                            <option value="5">2020</option>
                        </select>
                    </section>
                    <p className='m-1'>Veículo blindado?</p>
                    <select class="form-select input w-100 border-1 border-dark rounded-0 mb-4" id="inputGroupSelect03">
                        <option selected>Todos</option>
                        <option value="1">Blindado</option>
                        <option value="2">Sem blindagem</option>
                    </select>
                    <button className='headerButton btn text-light'>Filtrar</button>
                </section>

                <section className="headerContentRight">{/* lado direito */}
                    <CarModels/>
                </section>
                <br></br>
            </section>

        </section>
    );
}