import imageheader from '../styles/images/image-header.jpg';
import '../styles/images/header.css';

export default function Header(){
    return(
        <section>
            <img src={imageheader} className="img-fluid w-100" alt='porsche' id='imageHeader'/>
            <section className='headerTitle'>
                <h1>Seminovos</h1>
            </section>
            <section className='container'>
                <h1>headerContent</h1>
            </section>
        </section>
    );
}