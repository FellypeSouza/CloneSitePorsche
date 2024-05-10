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
                    <input placeholder="Palavra-chave" className="input"/>
                    <hr className='modelCross mt-4 border-2 border-dark'/>
                    <input type='range' className='inputRange w-75 m-4'/>
                    <input type='range' className='inputRange w-75 m-4'/>
                </section>

                <section className="headerContentRight">{/* lado direito */}
                    <CarModels/>
                </section>
                <br></br>
            </section>

        </section>
    );
}