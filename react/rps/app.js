const { useState } = React;

function RPSApp() {
  const choices = ['Kő', 'Papír', 'Olló'];
  const [player, setPlayer] = useState(null);
  const [cpu, setCpu] = useState(null);
  const [result, setResult] = useState('');

  function play(choice) {
    const cpuChoice = choices[Math.floor(Math.random() * 3)];
    setPlayer(choice);
    setCpu(cpuChoice);

    if (choice === cpuChoice) setResult('Döntetlen!');
    else if (
      (choice === 'Kő' && cpuChoice === 'Olló') ||
      (choice === 'Papír' && cpuChoice === 'Kő') ||
      (choice === 'Olló' && cpuChoice === 'Papír')
    ) setResult('Nyertél!');
    else setResult('Vesztettél!');
  }

  return (
    <div>
      <h2>Kő-Papír-Olló</h2>
      <div>
        {choices.map(c => (
          <button key={c} onClick={() => play(c)}>{c}</button>
        ))}
      </div>
      {player && (
        <div>
          <p>Te: {player}</p>
          <p>Gép: {cpu}</p>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RPSApp />);