const url = './data/data.json';

const informationsField = document.querySelectorAll('.informations');
const btnTimeTracking = document.querySelectorAll('.periodos li');

// Renderiza as informações de rastreamento de tempo DIÁRIO
function handleTimeTrackingInitial(dataJSON) {
    informationsField.forEach((information, i) => {
        informationsField[i].innerHTML = `
            <p>${dataJSON[i].title}</p>
            <h2>${dataJSON[i].timeframes.daily.current}hrs</h2>
            <span>
                Last Daily - ${dataJSON[i].timeframes.daily.previous}hrs
            </span>
        `;
    });
}

// Renderiza as informações de rastreamento de tempo SEMANAL
function handleTimeTrackingWeekly(dataJSON) {
    informationsField.forEach((information, i) => {
        informationsField[i].innerHTML = `
            <p>${dataJSON[i].title}</p>
            <h2>${dataJSON[i].timeframes.weekly.current}hrs</h2>
            <span>
                Last Weekly - ${dataJSON[i].timeframes.weekly.previous}hrs
            </span>
        `;
    });
}

// Renderiza as informações de rastreamento de tempo MENSAL
function handleTimeTrackingMonthly(dataJSON) {
    informationsField.forEach((information, i) => {
        informationsField[i].innerHTML = `
            <p>${dataJSON[i].title}</p>
            <h2>${dataJSON[i].timeframes.monthly.current}hrs</h2>
            <span>
                Last Monthly - ${dataJSON[i].timeframes.monthly.previous}hrs
            </span>
        `;
    });
}

// Inicializa a renderização dos elementos
// de acordo com o retorno do click do usuário
// no escopo do rastreamento
async function initTimeTracking(targetBtn) {
    const dataResponse = await fetch(url);
    const dataJSON = await dataResponse.json();

    if (targetBtn === 'daily') handleTimeTrackingInitial(dataJSON);
    else if (targetBtn === 'weekly') handleTimeTrackingWeekly(dataJSON);
    else if (targetBtn === 'monthly') handleTimeTrackingMonthly(dataJSON)
}

// Captura o escopo do rastreamento de 
// acordo com a escolha do usuário
function handleTimeTracking(event) {
    const targetBtn = event.target.id;
    initTimeTracking(targetBtn);
}

btnTimeTracking.forEach((btn) => {
    btn.addEventListener('click', handleTimeTracking);
});

// Inicializa como DIÁRIO por padrão
initTimeTracking('daily');
