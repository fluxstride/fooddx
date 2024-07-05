import './App.css';
import AboutUs from './components/AboutUs';
import Explore from './components/Explore';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Metrics />
      <AboutUs />
      <Explore />
    </div>
  );
}

export default App;
