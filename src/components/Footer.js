import '../styles/Footer.css'

export default function Footer(){
    return(
       /* Eventos & Motorsport
Porsche Clube Brasil
Stuttgart Motorsport */
        <section className='footerContainer'>
            <section className="footerContent">
                <section className='row m-5'>
                    <h5>Stuttgart Porsche</h5>
                    <a>Home</a>
                    <a>Comparar Modelos</a>
                    <a>Seminovos</a>
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
            <figcaption>Siga a Stuttgart Porsche</figcaption>
            <i class="bi bi-0-square-fill"></i>
        </section>
    );
}