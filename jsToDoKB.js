document.addEventListener('DOMContentLoaded', (event) => {
    loadEntry();
});
document.getElementById('save-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    if (text.trim() !== "") {
        saveEntry(text);
        document.getElementById('text-input').value = '';
    }
});
function saveEntry(text) {
    const entry = getEntry();
    entry.push(text);
    localStorage.setItem('ievade', JSON.stringify(entry));
    loadEntry();
}
function loadEntry() {
    const entry = getEntry();
    const entryContainer = document.getElementById('ievade');
    entryContainer.innerHTML = '';
    entry.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';
        entryDiv.innerText = entry;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Dzēst';
        deleteBtn.addEventListener('click', () => {
            deleteEntry(index);
        });

        entryDiv.appendChild(deleteBtn);
        entryContainer.appendChild(entryDiv);
    });
}
function getEntry() {
    const entry = localStorage.getItem('ievade');
    return entry ? JSON.parse(entry) : [];
}
function deleteEntry(index) {
    const entry = getEntry();
    entry.splice(index, 1);
    localStorage.setItem('ievade', JSON.stringify(entry));
    loadEntry();
}