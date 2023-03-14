import './App.css';
import Header from './components/Header';
import Main from './components/Main-section';
import BasicCarousel from './components/Carrosel-imgs';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Main/>
        <BasicCarousel/>
      </section>
    </div>
  );
}

export default App;
