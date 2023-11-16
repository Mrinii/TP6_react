import logo from './logo.svg';
import './App.css';
import LangueContext from './LangueContext';
import { Children } from 'react';
import Ccontent from './Ccontent';
import Icons from './Icons';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App bg-dark text-white">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LangueContext>
        <Icons/>
        <Ccontent/>
      </LangueContext>
    </div>
  );
}

export default App;
