let records = [];

function addRecord() {
    const studentName = document.getElementById('studentName').value;
    const bookName = document.getElementById('bookName').value;

    if (studentName && bookName) {
        records.push({ studentName, bookName });
        renderRecords();
        clearForm();
    } else {
        alert('Harap isi semua bidang.');
    }
}

function renderRecords() {
    const tbody = document.querySelector('#recordsTable tbody');
    tbody.innerHTML = '';

    records.forEach((record, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${record.studentName}</td>
            <td>${record.bookName}</td>
            <td>
                <button onclick="editRecord(${index})">Edit</button>
                <button onclick="deleteRecord(${index})">Hapus</button>
                <button onclick="markAsFinished(${index})">Selesai</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('bookName').value = '';
}

function editRecord(index) {
    const studentName = prompt('Nama Siswa:', records[index].studentName);
    const bookName = prompt('Nama Buku:', records[index].bookName);

    if (studentName && bookName) {
        records[index] = { studentName, bookName };
        renderRecords();
    }
}

function deleteRecord(index) {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        records.splice(index, 1);
        renderRecords();
    }
}

function markAsFinished(index) {
    records[index].bookName += ' (Selesai)';
    renderRecords();
}
