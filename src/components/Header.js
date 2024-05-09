import imageheader from '../styles/images/image-header.jpg';
import '../styles/images/header.css';

export default function Header(){
    return(
        <section>
            <img src={imageheader} className="img-fluid w-100" alt='porsche' id='imageHeader'/>

            <section className="mainContainer">{/* container principal */}

                <section className='headerContent'>{/* lado esquerdo */}
                    <h1 className="headerTitle">Seminovos</h1>
                    <h5>Encontre mais fácil aqui</h5>
                    <input placeholder="Palavra-chave" className="input"/>
                </section>

                <section className="headerContentRight">{/* lado direito */}
                    <section className='models'>
                        <section className='model'>
                            <img src="https://image.webmotors.com.br/vmotors-images/2024/5/7/3585ad67-f1a3-4e5f-8551-c40936cebef0.webp" width="355" height="265"/>
                            <figcaption className='m-3'><b>CAYENNE 3.0 V6 E-HYBRID COUPÉ AWD TIPTRONIC S</b></figcaption>
                            <section className='d-flex justify-content-between p-3'>
                                <p>Por</p> 
                                <h4>R$745.000,00</h4>
                            </section>
                            <hr className='modelCross p-1'/>
                            <section className='p-3'>
                                <figcaption><b>Km:</b> 8511</figcaption>
                                <figcaption><b>Cor:</b> Branco</figcaption>
                                <figcaption><b>Câmbio:</b> Automático</figcaption>
                                <figcaption><b>Unidade:</b> Curitiba - PR</figcaption>
                            </section>
                        </section>
                    </section>
                    
                </section>

            </section>

        </section>
    );
}