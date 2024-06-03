import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <section>
        <Nav/>
        <Header/>
        <Services/>
      </section>
    </div>
  );
}

export default App;
