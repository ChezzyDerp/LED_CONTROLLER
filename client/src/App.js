import './App.css';
import logo from './img/logo.png'

//Set mode

//Led modes
import { modes } from './modes';
import BtnLed from './components/BtnLed';

let gradients = ["purple","mint","yellowPink","sky","pinkBlue","yellow","red","sea","blueYellow", "blackSea"]


function App() {

  return (
    <div className="App">
      
      <img className="logo" src={logo} alt="" />

      <div className="wrapButtons">
        {modes.map(m => 
            <BtnLed name={m.name} id={m.id.toString()} color={gradients[Math.floor(Math.random()*gradients.length)]}/>
        )}
        
      </div>
        <div className="autors pt-5">
          by Ivan Tezin and Danil' Ahmerov
        </div>
    </div>
  );
}

export default App;
