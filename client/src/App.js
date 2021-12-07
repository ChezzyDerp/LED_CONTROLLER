import './App.css';
import logo from './img/logo.png'

//Led modes
import React, {useEffect, useState} from 'react'
import { modes } from './modes';
import BtnLed from './components/BtnLed';
import axios from 'axios';

let gradients = ["purple","mint","yellowPink","sky","pinkBlue","yellow","red","sea","blueYellow", "blackSea"]


const checkIsConnected = () =>{

}

function App() {

  let [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    axios.get('/connected').then(res =>{
      setIsConnected(true) 
    }).catch(err =>  setIsConnected(false))
  })

  return (
    <div className="App">
      
      <img className="logo" src={logo} alt="Led controller" />
      
      <div className={
        isConnected ?"isConnected connected" : "isConnected disconnected"
       }>

         {isConnected ? "Connected" : "Disconnected"}

      </div>

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
