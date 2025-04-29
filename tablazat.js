let records = [];
let editIndex = null;

const form = document.getElementById('recordForm');
const tableBody = document.querySelector('#dataTable tbody');
const searchInput = document.getElementById('search');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('neptun').value.trim();

  if (!name || !neptun)
    {
        alert('Minden mezőt ki kell tölteni!');
        return;
    }

  const record = { name, neptun};

  if (editIndex !== null)
    {
        records[editIndex] = record;
        editIndex = null;
    }
    else
    {
        records.push(record);
    }

  form.reset();
  renderTable();
});

function renderTable()
{
  tableBody.innerHTML = '';
  const filtered = records.filter(r =>
    Object.values(r).some(val =>
      val.toString().toLowerCase().includes(searchInput.value.toLowerCase())
    )
  );
  filtered.forEach((rec, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${rec.name}</td>
      <td>${rec.neptun}</td>
      <td>
        <button onclick="editRecord(${index})">Szerkeszt</button>
        <button onclick="deleteRecord(${index})">Törlés</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteRecord(index)
{
  if (confirm('Biztosan törlöd ezt a rekordot?'))
    {
        records.splice(index, 1);
        renderTable();
    }
}

function editRecord(index)
{
  const rec = records[index];
  document.getElementById('name').value = rec.name;
  document.getElementById('neptun').value = rec.neptun;
  editIndex = index;
}

searchInput.addEventListener('input', renderTable);

const headers = document.querySelectorAll('#dataTable th[data-column]');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const column = header.dataset.column;
    records.sort((a, b) =>
      a[column].toString().localeCompare(b[column].toString(), 'hu', { numeric: true })
    );
    renderTable();
  });
});