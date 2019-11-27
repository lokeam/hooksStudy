import React, {useState} from 'react';
import rhook from './rhook.png';
import './App.css';

// function callOnce() {
//   // I'm an expensive operation, call me only once on initial load.
//   return 9999;
// }

const App = () => {
/** useState Hook
 * @param   {String/Number} count - value of state
 * @param   {Function}      setCount - function that allows you to update param 1
 * @returns {Array}
 */
  // First example: This will only be called first time app renders
  //const [count, setCount] = useState( () => callOnce());

  // Second example: Incrementing a counter
  const [ count, setCount ] = useState(10);
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
        <h2>useState</h2>
        <div className="example">
          <h3>Example 1: Expensive Operations</h3>
          <p>Setting a function as the second parameter within the useState hook can be called within an arrow function in order to ensure that an operation is only called once</p>
        </div>
        <div className="example">
        <h3>Example 2: Incrementing a Counter</h3>
          <button onClick={ () => setCount(count + 1)}>+</button>
          <div>{count}</div>
        </div>

        </div>
      </section>
    </div>
  );
}

export default App;
