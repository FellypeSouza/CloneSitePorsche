import imageheader from '../styles/images/image-header.jpg';
import '../styles/images/header.css';

import CarModels from './CarModels';

export default function Header(){
    return(
        <section>
            <img src={imageheader} className="img-fluid w-100" alt='porsche' id='imageHeader'/>

            <section className="mainContainer p-5">{/* container principal */}
                <section className='headerContent'>{/* lado esquerdo */}
                    <h5>Encontre mais fácil aqui</h5>
                    <input placeholder="Palavra-chave" className="input w-75"/>
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
                    <p>Unidade</p>
                    <input list='unidade' placeholder="Selecione uma Unidade" className="input w-75"/>
                    <datalist id='unidade'>
                        <option value="ola"/>
                        <option value="ola"/>
                        <option value="ola"/>
                    </datalist>
                </section>

                <section className="headerContentRight">{/* lado direito */}
                    <CarModels/>
                </section>
                <br></br>
            </section>

        </section>
    );
}