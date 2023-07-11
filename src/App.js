import logo from './logo.svg';
import './App.css';

import Toys from './components/Toys';
import toys from './models/toys';

const state = {toys}

function App() {
  return (
    <div className="App">

    <Toys toyInfo={state.toys[0]}/>
    <Toys toyInfo={state.toys[1]}/>
    <Toys toyInfo={state.toys[2]}/>

    </div>
  );
}

export default App;