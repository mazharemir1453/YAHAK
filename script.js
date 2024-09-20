document.getElementById('ekleBtn').onclick = () => {
    const text = document.getElementById('gorev').value.trim();
    if (text) {
        document.getElementById('gorevListesi').innerHTML += `<li>${text}</li>`;
        document.getElementById('gorev').value = '';
    } else {
        alert('Görev girin.');
    }
};
