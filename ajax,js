function validateInput(code, height) {
    if (!code || !height) {
        return "A mezők nem lehetnek üresek!";
    }
    if (code.length > 30 || height.length > 30) {
        return "A mezők legfeljebb 30 karakteresek lehetnek!";
    }
    return "";
}

function createData() {
    let code = document.getElementById("create_code").value;
    let height = document.getElementById("create_height").value;
    let error = validateInput(code, height);
    if (error) {
        document.getElementById("create_msg").innerText = error;
        return;
    }

    fetch("backend.php", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({action: "create", code, height})
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("create_msg").innerText = data;
    });
}

function readData() {
    fetch("backend.php?action=read")
    .then(res => res.json())
    .then(data => {
        let out = "";
        let sum = 0, max = 0;
        data.forEach(row => {
            out += `ID: ${row.id}, Kód: ${row.code}, Height: ${row.height}<br>`;
            let h = parseFloat(row.height);
            sum += h;
            if (h > max) max = h;
        });
        let avg = (sum / data.length).toFixed(2);
        out += `<hr><strong>Összeg:</strong> ${sum}, <strong>Átlag:</strong> ${avg}, <strong>Legnagyobb:</strong> ${max}`;
        document.getElementById("read_output").innerHTML = out;
    });
}

function getDataForId() {
    let id = document.getElementById("update_id").value;
    if (!id) return;
    fetch(`backend.php?action=get&id=${id}`)
    .then(res => res.json())
    .then(data => {
        if (data) {
            document.getElementById("update_code").value = data.code;
            document.getElementById("update_height").value = data.height;
        } else {
            document.getElementById("update_msg").innerText = "Nem található adat ezzel az ID-val.";
        }
    });
}

function updateData() {
    let id = document.getElementById("update_id").value;
    let code = document.getElementById("update_code").value;
    let height = document.getElementById("update_height").value;

    let error = validateInput(code, height);
    if (error) {
        document.getElementById("update_msg").innerText = error;
        return;
    }

    fetch("backend.php", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({action: "update", id, code, height})
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("update_msg").innerText = data;
    });
}

function deleteData() {
    let id = document.getElementById("delete_id").value;
    if (!id) return;
    fetch("backend.php", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({action: "delete", id})
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("delete_msg").innerText = data;
    });
}