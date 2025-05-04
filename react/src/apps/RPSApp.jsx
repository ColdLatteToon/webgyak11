
import React, { useState } from "react";

export default function RPSApp() {
  const choices = ["Kő", "Papír", "Olló"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const play = (choice) => {
    const comp = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(comp);

    if (choice === comp) {
      setResult("Döntetlen!");
    } else if (
      (choice === "Kő" && comp === "Olló") ||
      (choice === "Papír" && comp === "Kő") ||
      (choice === "Olló" && comp === "Papír")
    ) {
      setResult("Nyertél!");
    } else {
      setResult("Vesztettél!");
    }
  };

  return (
    <div>
      <h2>Kő-Papír-Olló</h2>
      {choices.map((c, i) => (
        <button key={i} onClick={() => play(c)}>{c}</button>
      ))}
      {playerChoice && <p>Te választottad: {playerChoice}</p>}
      {computerChoice && <p>Számítógép választása: {computerChoice}</p>}
      {result && <p>Eredmény: {result}</p>}
    </div>
  );
}
