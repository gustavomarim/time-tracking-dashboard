const url = "./data/data.json";

const informationsField = document.querySelectorAll('.informations');
const btnTimeTracking = document.querySelectorAll('.periodos li');

btnTimeTracking.forEach((btn) => {
    btn.addEventListener('click', handleTimeTracking);
});

function handleTimeTracking(event) {
    const targetBtn = event.target.id;
    initTimeTracking(targetBtn);
}

async function initTimeTracking(targetBtn) {
    const dataResponse = await fetch(url);
    const dataJSON = await dataResponse.json();

    if (targetBtn === 'daily') handleTimeTrackingInitial(dataJSON);
    else if (targetBtn === 'weekly') handleTimeTrackingWeekly(dataJSON);
    else if (targetBtn === 'monthly') handleTimeTrackingMonthly(dataJSON)
}

function handleTimeTrackingInitial(dataJSON) {
    informationsField.forEach((information, i) => {
        information.innerHTML = `
            <p>${dataJSON[i].title}</p>
            <h2>${dataJSON[i].timeframes.daily.current}hrs</h2>
            <span>
                Last Daily - ${dataJSON[i].timeframes.daily.previous}hrs
            </span>
        `;
    });
}

function handleTimeTrackingWeekly(dataJSON) {
    informationsField.forEach((information, i) => {
        information.innerHTML = `
            <p>${dataJSON[i].title}</p>
            <h2>${dataJSON[i].timeframes.weekly.current}hrs</h2>
            <span>
                Last Weekly - ${dataJSON[i].timeframes.weekly.previous}hrs
            </span>
        `;
    });
}

function handleTimeTrackingMonthly(dataJSON) {
    informationsField.forEach((information, i) => {
        information.innerHTML = `
            <p>${dataJSON[i].title}</p>
            <h2>${dataJSON[i].timeframes.monthly.current}hrs</h2>
            <span>
                Last Monthly - ${dataJSON[i].timeframes.monthly.previous}hrs
            </span>
        `;
    });
}

initTimeTracking('daily');
