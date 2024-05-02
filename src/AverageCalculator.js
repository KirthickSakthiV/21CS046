import React, { useState } from 'react';
import axios from 'axios';

function AverageCalculator() {
  const [numberType, setNumberType] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/numbers/${numberType}`);
      const { windowPrevState, windowCurrState, numbers, avg } = response.data;
      setNumbers(numbers);
      setAverage(avg);
    } catch (error) {
      console.error('Error fetching numbers:', error.message);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <select value={numberType} onChange={(e) => setNumberType(e.target.value)}>
        <option value="">Select Number Type</option>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      <div>
        <h2>Numbers: {numbers.join(', ')}</h2>
        <h2>Average: {average}</h2>
      </div>
    </div>
  );
}

export default AverageCalculator;