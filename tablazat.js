function addRow() {
    const name = prompt("Add meg a nevet:");
    const neptun = prompt("Add meg a Neptun kódot:");

    // Validáció
    if (!name || !neptun) {
        alert("Kérlek, töltsd ki az összes mezőt!");
        return;
    }
    if (name.length < 2 || name.length > 30) {
        alert("A név hossza 2 és 30 karakter között kell legyen!");
        return;
    }
    if (neptun.length !== 6) {
        alert("A Neptun kódnak 6 karakter hosszúnak kell lennie!");
        return;
    }

    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = neptun;
    newRow.insertCell(2).innerHTML = '<button onclick="deleteRow(this)">Törlés</button> <button onclick="editRow(this)">Szerkesztés</button>';
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(button) {
    const row = button.parentNode.parentNode;
    const name = row.cells[0].innerHTML;
    const neptun = row.cells[1].innerHTML;

    const newName = prompt("Add meg a nevet:", name);
    const newNeptun = prompt("Add meg a Neptun kódot:", neptun);

    // Validáció
    if (!newName || !newNeptun) {
        alert("Kérlek, töltsd ki az összes mezőt!");
        return;
    }
    if (newName.length < 2 || newName.length > 30) {
        alert("A név hossza 2 és 30 karakter között kell legyen!");
        return;
    }
    if (newNeptun.length !== 6) {
        alert("A Neptun kódnak 6 karakter hosszúnak kell lennie!");
        return;
    }

    row.cells[0].innerHTML = newName;
    row.cells[1].innerHTML = newNeptun;
}

function sortTable(columnIndex) {
    const table = document.getElementById("data-table");
    const rows = Array.from(table.rows).slice(1);
    const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;
        return aText.localeCompare(bText);
    });
    sortedRows.forEach(row => table.appendChild(row));
}

document.getElementById('search').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#data-table tbody tr');
    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        const rowText = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' ');
        row.style.display = rowText.includes(filter) ? '' : 'none';
    });
});