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
            <BtnLed name={m.name}
             id={m.id.toString()}
             color={gradients[Math.floor(Math.random()*gradients.length)]} 
             description={m.description || "Нет описания"}/>
        )}
        
      </div>
        <div className="autors pt-5">
          by Ivan Tezin & Danil' Ahmerov & Danila Tezin
        </div>
    </div>
  );
}

export default App;
