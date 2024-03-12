import './App.css';
import Explore from './Explore';
import Herosection from './Herosection';
import Tophead from './Tophead';
import VerticleRow from './VerticleRow';
// import Vl from './Vl';


function App() {
  return (
    <div className="App">
      <Tophead />
      <div className="secondpart">
      <VerticleRow />
      <Explore />
      <Herosection />
      </div>
      
     
    </div>
  );
}

export default App;
