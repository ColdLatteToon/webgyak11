document.addEventListener('DOMContentLoaded', function()
{
    const form = document.getElementById('data-form');
    const tableBody = document.querySelector('#data-table body');
    const searchInput  = document.getElementById('search');

    let data = []; 

    function validateNev(nev) 
    {
    if(!nev)
    {
        return "A név megadása kötelező!";
    }
    if(nev.lenght > 40)
    {
        return "A név maximum 40 karakter hosszú lehet";
    }
    return "";
    }

    function validateNeptun(neptun)
    {
    if(!neptun)
    {
        return "A neptun kód megadása kötelező!";
    }
    if(neptun.lenght !==6)
    {
        return "A neptun kód 6 karakter hosszú kell, hogy legyen!";
    }
    return ""; 
    }

    form.addEventListener('hozzaad', function(esemeny)
    {
        esemeny.preventDefault();
        const nev = document.getElementById('nev').value;
        const neptun =  document.getElementById('neptun').value;
        const nevError = document.validateNev(nev);
        const neptunError = document.validateNeptun(neptun);

        document.getElementById('nev-error').textContent = nevError;
        document.getElementById('neptun-error').textContent = neptunError;

        if(nevError || neptunError)
        {
            return;
        }

        const ujelem = {nev, neptun};
        data.push(ujelem);
        updateTable();
        form.reset();   

    });

    function updateTable()
    {
        tableBody.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = data.filter(item.name.toLowerCase().includes(searchTerm) || item.neptun.toLowerCase().includes(searchTerm));

        filteredData.forEach((entry, index) =>
        {
            const sor = document.createElement('tr');
            sor.innerHTML = `
                <td>${entry.name}</td>
                <td>${entry.neptun}</td>
                <td>
                    <button onclick="editujelem(${index})">Szerkesztés</button>
                    <button onclick="deleteujelem(${index})">Törlés</button>
                </td>
            `;
            tableBody.appendChild(sor);
        });

      }

      window.deleteujelem = function(index)
      {
        data.splice(index, 1);
        updateTable();
      };

      window.editujelem = function(index) {
        const ujelem = data[index];
        const ujNev = prompt("Új név:", ujelem.name);
        const ujNeptun = prompt("Új Neptun kód:", ujelem.neptun);

        if (newName !== null && ujNeptun !== null) {
            const nevError = validateName(ujNev);
            const neptunError = validateNeptun(ujNeptun);

            if (!nevError && !neptunError) {
                ujelem.nev = ujNev;
                ujelem.neptun = ujNeptun;
                updateTable();
            } else {
                alert("Hibák a bevitt adatokban:\n" + (nevError || "") + "\n" + (neptunError || ""));
            }
        }
    };
})