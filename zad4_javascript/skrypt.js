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

