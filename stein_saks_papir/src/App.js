import React, { useState } from 'react';

import ukjent from './images/maskin_ukjent.png';
import spiller_papir from './images/spiller_papir.png';
import spiller_stein from './images/spiller_stein.png';
import spiller_saks from './images/spiller_saks.png';
import maskin_papir from './images/maskin_papir.png';
import maskin_stein from './images/maskin_stein.png';
import maskin_saks from './images/maskin_saks.png';

import './App.css';

export default function App() {
  const [playerChoice, setPlayerChoice] = useState({ id: 0, image: ukjent });
  const [machineChoice, setMachineChoice] = useState(ukjent);
  const [winner, setWinner] = useState('Ukjent');

  function Stein() {
    setPlayerChoice({ id: 0, image: spiller_stein });
    Spill();
  }

  function Saks() {
    setPlayerChoice({ id: 1, image: spiller_saks });
    Spill();
  }

  function Papir() {
    setPlayerChoice({ id: 2, image: spiller_papir });
    Spill();
  }

  function Spill() {
    const myArray = [maskin_stein, maskin_saks, maskin_papir];
    const randomNumber = Math.floor(Math.random() * 3);
    const machineChoiceTemp = myArray[randomNumber];

    setMachineChoice(machineChoiceTemp);

    if (playerChoice.id === randomNumber) {
      setWinner('Uavgjort');
    } else if (playerChoice.id === 0 && randomNumber === 1) {
      setWinner('Player wins');
    } else if (playerChoice.id === 0 && randomNumber === 2) {
      setWinner('Machine wins');
    } else if (playerChoice.id === 1 && randomNumber === 2) {
      setWinner('Player wins');
    } else if (playerChoice.id === 1 && randomNumber === 0) {
      setWinner('Machine Wins');
    } else if (playerChoice.id === 2 && randomNumber === 0) {
      setWinner('Player Wins');
    } else {
      setWinner('Machine Wins');
    }
  }

  return (
    <div className="container">
      <div className="top">
        <div className="player1">
          <img src={playerChoice.image} alt="spiller ukjent" />
        </div>
        <div className="result">{winner}</div>
        <div className="machine">
          <img src={machineChoice} alt="maskin ukjent" />
        </div>
      </div>
      <div className="bottom">
        <button className="button" onClick={Stein}>
          Stein
        </button>
        <button className="button" onClick={Saks}>
          Saks
        </button>
        <button className="button" onClick={Papir}>
          Papir
        </button>
      </div>
    </div>
  );
}
