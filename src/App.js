import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';
import Units from './components/Units';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section>
        <Nav/>
        <Header/>
        <Services/>
        <Units/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
