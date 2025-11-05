const slider = document.getElementById('my-slider');
const sliderValue = document.getElementById('percentile-value');

const maps = [
    { url: 'https://www.leagueofgraphs.com/rankings/rank-distribution', element: document.getElementById('league'), map: league, label: 'LoL' },
    { url: 'https://www.esportstales.com/league-of-legends/rank-distribution-percentage-of-players-by-tier', element: document.getElementById('league-old'), map: leagueOld, label: 'LoL (before emerald)' },
    { url: 'https://www.esportstales.com/valorant/rank-distribution-and-percentage-of-players-by-tier', element: document.getElementById('valorant'), map: val, label: 'Valorant' },
    { url: 'https://www.leagueofgraphs.com/tft/rank-distribution', element: document.getElementById('tft'), map: tft, label: 'TFT' },

    { url: 'https://starcraft.fandom.com/wiki/League_(StarCraft_II)', element: document.getElementById('sc2'), map: sc2, label: 'StarCraft II' },
    { url: 'https://us.forums.blizzard.com/en/overwatch/t/rank-distribution-ow1-vs-ow2/828683', element: document.getElementById('ow'), map: ow, label: 'Overwatch 1' },
    { url: 'https://www.dexerto.com/overwatch/overwatch-2-rank-distribution-how-good-are-you-in-competitive-2207081/', element: document.getElementById('ow2'), map: ow2, label: 'Overwatch 2' },
    { url: 'https://totalcsgo.com/ranks', element: document.getElementById('cs2'), map: cs2, label: 'Counter - Strike 2' },
    { url: 'https://dotesports.com/apex-legends/news/what-is-apex-legends-rank-distribution', element: document.getElementById('apex'), map: apex, label: 'Apex Legends' },
    { url: 'https://www.chess.com/leaderboard/live/rapid', element: document.getElementById('chess'), map: chess, label: 'chess.com rapid' },

    { url: 'https://research.collegeboard.org/reports/sat-suite/understanding-scores/sat', element: document.getElementById('sat'), map: sat, label: 'SAT (nationally representative)' },
    { url: 'https://www.omnicalculator.com/health/iq-percentile#iq-percentile-chart', element: document.getElementById('iq'), map: iq, label: 'IQ' },
];

updatePercentiles();
slider.addEventListener('input', updatePercentiles);

function updatePercentiles() {
    const queryValue = slider.value;
    sliderValue.textContent = `percentile: ${queryValue}`;

    maps.forEach(({ element, map, label, url }) => {
        element.innerHTML = `<a href="${url}">(source)</a> ${label}: <i>${findPercentile(map, queryValue)}</i>`;
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
