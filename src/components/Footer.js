import '../styles/Footer.css';
import facebookIcon from '../styles/icons/facebook.png';
import instagramIcon from '../styles/icons/instagram.png';
import youtubeIcon from '../styles/icons/youtube.png';
import linkedinIcon from '../styles/icons/linkedin.png';

export default function Footer(){
    return(
        <section className='footerContainer'>
            <section className="footerContent ">
                <section className='row m-5'>
                    <h5>Stuttgart Porsche</h5>
                    <a href='https://www.stuttgartporsche.com.br/'>Home</a>
                    <a href='https://www.stuttgartporsche.com.br/dados-tecnicos/'>Comparar Modelos</a>
                    <a hre>Seminovos</a>
                    <a>Porsche Tequipment</a>
                    <a>E-Performance</a>
                </section>
                <section className='row m-5'>
                    <h5>Serviços/Acessórios</h5>
                    <a>Agendamento pós-venda</a>
                    <a>Porsche Driver’s Selection</a>
                    <a>Porsche Exclusive Manufaktur</a>
                    <a>Trabalhe Conosco</a>
                    <a>Contato</a>
                </section>
                <section className='row m-5'>
                    <h5>Eventos & Motorsport</h5>
                    <a>Porsche Clube Brasil</a>
                    <a>Stuttgart Motorsport</a>
                </section>
                <section className='row m-5'>
                    <h5>Novidades</h5>
                    <a>Press Release</a>
                    <a>Revista Insider</a>
                </section>
            </section>
            <section className='footerSocialIcons d-flex'>
                <section className='SocialIcons'>
                    <p className='p-2'><b>Siga a Stuttgart Porsche</b></p>
                    <a href='https://www.facebook.com/stuttgartporsche/' title='facebook' className='bg-light p-3 m-2 rounded'>
                        <img src={facebookIcon} width={20} height={20}/>
                    </a>
                    <a href='https://www.instagram.com/stuttgartporsche/' title='instagram' className='bg-light p-3 m-2 rounded'>
                        <img src={instagramIcon} width={20} height={20}/>
                    </a>
                    <a href='https://www.youtube.com/stuttgartporsche/' title='youtube' className='bg-light p-3 m-2 rounded'>
                        <img src={youtubeIcon} width={20} height={20}/>
                    </a>
                    <a href='https://www.linkedin.com/company/stuttgartporsche/' title='linkedin' className='bg-light p-3 m-2 rounded'>
                        <img src={linkedinIcon} width={20} height={20}/>
                    </a>
                </section>
            </section>
            <section className='footerLastInfo'>
                <hr className='footerLastInfoLine'/>
                <p className=''>© 2024 - Porsche Stuttgart.
                    <a className='text-decoration-underline' href='https://www.stuttgartporsche.com.br/notas-legais/'> Notas Legais </a>
                    e
                    <a className='text-decoration-underline' href='https://www.stuttgartporsche.com.br/politica-de-privacidade/'> Política de Privacidade.</a>
                </p>
            </section>
        </section>
    );
}