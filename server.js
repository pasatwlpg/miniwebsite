const express = require('express');
const path = require('path');
const app = express();

// Serwowanie plików statycznych
app.use(express.static(path.join(__dirname)));

// Strona główna
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Detale kafelków
app.get('/details/:id', (req, res) => {
    const tileId = req.params.id;
    res.send(`<h1>Opis dla kafelka ${tileId}</h1><p>To jest szczegółowy opis kafelka nr ${tileId}.</p><a href="/">Powrót</a>`);
});

// Uruchomienie serwera
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
