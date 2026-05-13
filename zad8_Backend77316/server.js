const express = require('express');
const fs = require('fs');
const app = express();

// obsluga json
app.use(express.json());
// folder strony
app.use(express.static('.'));
// zapis danych
app.post('/zapisz', (req, res) => {

    const noweDane = req.body;

    let dane = [];

    // sprawdzenie pliku
    if (fs.existsSync('backend.json')) {
        // odczyt json
        const plik = fs.readFileSync('backend.json');
        dane = JSON.parse(plik);
    }

    // dodanie danych
    dane.push(noweDane);
    // zapis do pliku
    fs.writeFileSync('backend.json', JSON.stringify(dane, null, 2));
    // odpowiedz dla strony
    res.json({
        message: 'Dane zapisane poprawnie'
    });
});

// uruchomienie servera
app.listen(3000, () => {

    console.log('Backend działa poprawnie');

});