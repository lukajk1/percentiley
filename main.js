const slider = document.getElementById('my-slider');
const sliderValue = document.getElementById('percentile-value');

const maps = [
    { element: document.getElementById('league'), map: league, label: 'LoL' },
    { element: document.getElementById('valorant'), map: val, label: 'Valorant' },
    { element: document.getElementById('sat'), map: sat, label: 'SAT (nationally representative)' },
    { element: document.getElementById('iq'), map: iq, label: 'IQ' },
    { element: document.getElementById('sc2'), map: sc2, label: 'StarCraft II' },
    { element: document.getElementById('league-old'), map: leagueOld, label: 'LoL (before emerald)' },
    { element: document.getElementById('ow'), map: ow, label: 'Overwatch 1' },
    { element: document.getElementById('tft'), map: tft, label: 'TFT' },
    { element: document.getElementById('chess'), map: chess, label: 'chess.com rapid' },
    { element: document.getElementById('income'), map: income, label: 'US Census self reported income' },
    { element: document.getElementById('cs2'), map: cs2, label: 'Counter-Strike 2' },
    { element: document.getElementById('apex'), map: apex, label: 'Apex Legends' },
    { element: document.getElementById('ow2'), map: ow2, label: 'Overwatch 2' }
];

updatePercentiles();
slider.addEventListener('input', updatePercentiles);

function updatePercentiles() {
    const queryValue = slider.value;
    sliderValue.textContent = `percentile: ${queryValue}`;

    maps.forEach(({ element, map, label }) => {
        element.innerHTML = `${label}: <i>${findPercentile(map, queryValue)}</i>`;
    });
}

function findPercentile(map, queryValue) {
    let result = null; 
    for (const [key, value] of map) {
        if (queryValue > value || queryValue == value) {
            result = key;
        } else {
            break;
        }
    }
    return result;
}
