import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let calories = 0;
    if (gender === 'male') {
      calories = (879 + 10.2 * weight) * intensity;
    }
    else {
      calories = (795 + 7.18 * weight) * intensity;
    }
    setResult(calories)
  }

  return (
    <>
      <h3>Calories</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)} ></input>
        </div>
        <div>
          <label>Bottles</label>
          <select name="intensity" value={intensity} onChange={e => setIntensity(e.target.value)} >
            <option value="1.3">Light</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(0)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
