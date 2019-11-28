import React, {useState} from 'react';
import {useForm} from './useForm';
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
  
  // Third example: Incrementing a counter avoiding race conditions
  const [ {countExampleA, countExampleB}, setCountExample ] = useState({countExampleA: 10, countExampleB: 15});

  // Fourth example: Email and password form fields utilizing the custom useForm hook (ln 2)
  const [ values, handleChange ] = useForm({ email: '', password: '' });

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
            <div>Example 2 count: {count}</div>
          </div>
          <div className="example">
            <h3>Example 3: Incrementing a Counter</h3>
            <p>Using an updater function (currentCount) that accepts a single parameter.</p>
            <p>This menthod is useful when you <want></want> to avoid race conditions when more than one update occurs simultaneously said update may get overwritten.</p>
            <p>Note: When updating state using this example, you must use a spread operator or manually call out the other parts of the state you want to save,
                if you want to keep any of the other values</p>
            <button
              onClick={ () =>
                setCountExample(currentState => ({
                  ...currentState,
                  countExampleA: currentState.countExampleA + 1
                }))
              }>+</button>
            <div className="example__copy countExampleA">Example 3 count A: {countExampleA}</div>
            <div className="example__copy countExampleB">Example 3 count B: {countExampleB}</div>
          </div>
          <div className="example">
            <h3>Example 4: Form Field ID and Password</h3>
            <input name="email"
                   value={ values.email }
                   onChange={ handleChange }/>
            <input name="password"
                   value={ values.password }
                   type="password"
                   onChange={ handleChange }/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
