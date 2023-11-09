import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) {
      alert('Please select a date of birth.');
      return;
    }

    const dobDate = new Date(dob);
    const currentDate = new Date();

    let userAge = currentDate.getFullYear() - dobDate.getFullYear();

    if (
      currentDate.getMonth() < dobDate.getMonth() ||
      (currentDate.getMonth() === dobDate.getMonth() &&
        currentDate.getDate() < dobDate.getDate())
    ) {
      userAge--;
    }

    setAge(userAge);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default App;