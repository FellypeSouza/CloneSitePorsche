import '../styles/Footer.css';
import facebookIcon from '../styles/icons/facebook.png';
import instagramIcon from '../styles/icons/instagram.png';
import youtubeIcon from '../styles/icons/youtube.png';
import linkedinIcon from '../styles/icons/linkedin.png';

export default function Footer(){
    return(
        <section className='footerContainer'>
            <section className="footerContent ">
                <section className='footerLinks row'>
                    <h5>Stuttgart Porsche</h5>
                    <a href='https://www.stuttgartporsche.com.br/'>Home</a>
                    <a href='https://www.stuttgartporsche.com.br/dados-tecnicos/'>Comparar Modelos</a>
                    <a href='/CloneSitePorsche/Seminovos'>Seminovos</a>
                    <a href='/CloneSitePorsche'>Porsche Tequipment</a>
                    <a href='/CloneSitePorsche'>E-Performance</a>
                </section>
                <section className='footerLinks row'>
                    <h5>Serviços/Acessórios</h5>
                    <a href='/CloneSitePorsche'>Agendamento pós-venda</a>
                    <a href='/CloneSitePorsche'>Porsche Driver’s Selection</a>
                    <a href='/CloneSitePorsche'>Porsche Exclusive Manufaktur</a>
                    <a href='/CloneSitePorsche'>Trabalhe Conosco</a>
                    <a href='/CloneSitePorsche'>Contato</a>
                </section>
                <section className='footerLinks row'>
                    <h5>Eventos & Motorsport</h5>
                    <a href='/CloneSitePorsche'>Porsche Clube Brasil</a>
                    <a href='/CloneSitePorsche'>Stuttgart Motorsport</a>
                </section>
                <section className='footerLinks row'>
                    <h5>Novidades</h5>
                    <a href='/CloneSitePorsche'>Press Release</a>
                    <a href='/CloneSitePorsche'>Revista Insider</a>
                </section>
            </section>
            <section className='footerSocialIcons'>
                <section className='SocialIcons'>
                    <p className='p-2'><b>Siga a Stuttgart Porsche</b></p>
                    <a href='https://www.facebook.com/stuttgartporsche/' title='facebook' className='bg-light p-3 m-2 rounded'>
                        <img src={facebookIcon} alt="porsche" width={20} height={20}/>
                    </a>
                    <a href='https://www.instagram.com/stuttgartporsche/' title='instagram' className='bg-light p-3 m-2 rounded'>
                        <img src={instagramIcon} alt="porsche" width={20} height={20}/>
                    </a>
                    <a href='https://www.youtube.com/stuttgartporsche/' title='youtube' className='bg-light p-3 m-2 rounded'>
                        <img src={youtubeIcon} alt="porsche" width={20} height={20}/>
                    </a>
                    <a href='https://www.linkedin.com/company/stuttgartporsche/' title='linkedin' className='bg-light p-3 m-2 rounded'>
                        <img src={linkedinIcon} alt="porsche" width={20} height={20}/>
                    </a>
                </section>
            </section>
            <section className='footerLastInfo'>
                
                <p className=''>© 2024 - Porsche Stuttgart.
                    <a className='text-decoration-underline' href='https://www.stuttgartporsche.com.br/notas-legais/'> Notas Legais </a>
                    e
                    <a className='text-decoration-underline' href='https://www.stuttgartporsche.com.br/politica-de-privacidade/'> Política de Privacidade.</a>
                </p>
            </section>
        </section>
    );
}