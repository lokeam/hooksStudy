import React, {useState} from 'react';
import rhook from './rhook.png';
import './App.css';

function callOnce() {
  // I'm an expensive operation, call me only once on initial load.
  return 9999;
}

const App = () => {
/** useState Hook
 * @param   {String/Number} count - value of state
 * @param   {Function}      setCount - function that allows you to update param 1
 * @returns {Array}
 */
  // This will only be called first time app renders
  const [count, setCount] = useState( () => callOnce());
  return (
    <div className="App">
      <header className="App-header">
        <img src={rhook} className="hook-logo" alt="logo" />
        <p>
          Nothing to see here, just practising hooks.
        </p>
      </header>
      <section className="area__useState">
        <div className="hero__copy">
          <h2>use state</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
