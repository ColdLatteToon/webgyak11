const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];

// Táblázat feltöltése 5x5 véletlen számokkal
for (let i = 0; i < 5; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 5; j++) {
    const cell = row.insertCell();
    cell.textContent = Math.floor(Math.random() * 100); // 0-99 közötti szám
  }
}

// Diagram inicializálása
const ctx = document.getElementById('lineChart').getContext('2d');
let chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1.', '2.', '3.', '4.', '5.'],
    datasets: [{
      label: 'Kiválasztott sor adatai',
      data: [],
      borderColor: 'blue',
      borderWidth: 2,
      fill: false
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Sorokra kattintás kezelése és a diagram frissítése
Array.from(table.rows).forEach((row, rowIndex) => {
  row.addEventListener('click', () => {
    const values = Array.from(row.cells).map(cell => Number(cell.textContent));
    chart.data.datasets[0].data = values;
    chart.update();
  });
});