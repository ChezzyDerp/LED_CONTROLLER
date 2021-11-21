import './App.css';
import { choseLed } from './initserial';
import { modes } from './modes';


function App() {

  return (
    <div className="App">
      <h3 className="mt-1">Led Controller by Ivan Tezin</h3>
      <div className="row m-5 gap-2 ">
        <div className="col ">
          <div className="row gap-1">
                {modes.map(m => <button className="btn btn-success" onClick={() => choseLed(m.id.toString())}>{m.name}</button>)}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
