// src/GuessTheNumber.jsx
import React, { useState } from 'react';

const GuessTheNumber = () => {
  const [target, setTarget] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (userGuess === target) {
      setMessage('Correct! You guessed the number!');
    } else if (userGuess < target) {
      setMessage('Too low! Guess again champ.');
    } else {
      setMessage('Too high! Guess again champ.');
    }
  };

  const handleReset = () => {
    setTarget(Math.floor(Math.random() * 10) + 1);
    setGuess('');
    setMessage('');
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 10) {
      setGuess(value);
    } else if (e.target.value === '') {
      setGuess('');
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
    }}>
      <div>
        <h1>Guess the Number!</h1>
        <p>Enter a number between 1 and 10:</p>
        <input
          type="number"
          value={guess}
          onChange={handleInputChange}
          min="1"
          max="10"
          style={{ padding: '5px', fontSize: '16px' }}
        />
        <button onClick={handleGuess} style={{ padding: '5px 10px', marginLeft: '10px' }}>Guess</button>

        <p style={{ color: message.includes('Correct') ? 'green' : 'red' }}>
          {message}
        </p>

        <button onClick={handleReset} style={{ padding: '5px 10px', marginTop: '10px' }}>Reset Game</button>
      </div>
    </div>
  );
};

export default GuessTheNumber;
