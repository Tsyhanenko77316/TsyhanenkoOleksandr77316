// Deklaracja const dla zmiany koloru tła
const btnMotyw = document.getElementById('btnmotyw');
const KolorStyl = document.getElementById('kolor_styl');
// deklaracja zmiennej
let jestCzetwony = false

btnMotyw.addEventListener('click', () => {
    if (jestCzetwony) {
        KolorStyl.href = 'green.css';
        jestCzetwony = false;
    }
    else {
        KolorStyl.href = 'red.css';
        jestCzetwony = true;
    }
}
);
// deklaracja const dla ukrycia doswiadczenia
const btnUkryc = document.getElementById('btnUkryc');
const doswiadczeniaSection = document.getElementById('doswiadczeniaSection');

btnUkryc.addEventListener('click', () => {
    if (doswiadczeniaSection.style.display === 'none') {
        doswiadczeniaSection.style.display = 'block';
        btnUkryc.textContent = 'Ukryj lub pokaż Doświadczenie';
    }
    else {
        doswiadczeniaSection.style.display = 'none';
        btnUkryc.textContent = 'Pokaż Doświadczenie';
    }
}
);

// dla zadania 5
// deklaracja const dla formularza
const formaCV = document.getElementById('Forma_CV');
const imie = document.getElementById('Imie');
const nazwisko = document.getElementById('Nazwisko');
const email = document.getElementById('Email');
const wiadomosc = document.getElementById('Wiadomosc');
const errorProvider = document.getElementById('ErrorProvider');

// event submit dla formularza
formaCV.addEventListener('submit', (e) => {
    e.preventDefault(); // blokada przeładowania strony

    // pobranie wartości
    let imieVal = imie.value.trim();
    let nazwiskoVal = nazwisko.value.trim();
    let emailVal = email.value.trim();
    let wiadomoscVal = wiadomosc.value.trim();

    // czyszczenie komunikatu
    errorProvider.textContent = '';
    errorProvider.style.color = 'red';

    // sprawdzenie czy pola są puste
    if (imieVal === '' || nazwiskoVal === '' || emailVal === '' || wiadomoscVal === '') {
        errorProvider.textContent = 'Wypełnij wszystkie pola';
        return;
    }

    // sprawdzenie cyfr w imieniu i nazwisku
    if (/\d/.test(imieVal) || /\d/.test(nazwiskoVal)) {
        errorProvider.textContent = 'Imię i nazwisko nie mogą zawierać cyfr';
        return;
    }

    // sprawdzenie emaila (proste)
    if (!emailVal.includes('@') || !emailVal.includes('.')) {
        errorProvider.textContent = 'Niepoprawny email';
        return;
    }

    // jeśli wszystko ok
    errorProvider.style.color = 'green';
    errorProvider.textContent = 'Formularz poprawny';
});

// dla zadania 6
// pobranie danych z pliku json
fetch('dane.json')
    .then(response => response.json())
    .then(data => {
        // deklaracja const dla list
        const listaUmiejetnosci = document.getElementById('Lista_Umiejetnosci');
        const listaProjektyCSharp = document.getElementById('Lista_Projekty_CSharp');
        const listaProjektySQL = document.getElementById('Lista_Projekty_SQL');

        // generowanie listy umiejetnosci
        data.umiejetnosci.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element;
            listaUmiejetnosci.appendChild(li);
        });

        // generowanie listy projektow C#
        data.projektyCSharp.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element;
            listaProjektyCSharp.appendChild(li);
        });

        // generowanie listy projektow SQL
        data.projektySQL.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element;
            listaProjektySQL.appendChild(li);
        });
    });
