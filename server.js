// const express = require('express');
// const path = require('path');
// const app = express();

// // Serwowanie plików statycznych
// app.use(express.static(path.join(__dirname)));

// // Strona główna
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Detale kafelków
// app.get('/details/:id', (req, res) => {
//     const tileId = req.params.id;
//     res.send(`<h1>Opis dla kafelka ${tileId}</h1><p>To jest szczegółowy opis kafelka nr ${tileId}.</p><a href="/">Powrót</a>`);
// });

// // Uruchomienie serwera
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Serwer działa na http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');
const app = express();

// Serwowanie plików statycznych z głównego katalogu
app.use(express.static(path.join(__dirname)));

// Strona główna - renderuje index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Detale kafelków
app.get('/details/:id', (req, res) => {
    const tileId = req.params.id;
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Opis Kafelka ${tileId}</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="description">
                <h1 class="title">Kafelek ${tileId}</h1>
                <p class="content">To jest szczegółowy opis kafelka nr ${tileId}. Tutaj możesz dodać dowolną treść, która w atrakcyjny sposób przedstawi dane powiązane z kafelkiem.</p>
                <a href="/" class="back-button">Powrót do strony głównej</a>
            </div>
        </body>
        </html>
    `);
});

// Obsługa wszystkich innych URL, by przekierować na główną stronę
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Uruchomienie serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
