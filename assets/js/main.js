
// Allgemeine Variablen Definition

// Button

const berechne = document.body.querySelector('#calculate');


const kalorienRechner = () => {
    // Inputs
    const heightInput = document.body.querySelector('#height-input').value;
    const ageInput = document.body.querySelector('#age-input').value;
    const weightInput = document.body.querySelector('#weight-input').value;
    const radioFemale = document.body.querySelector('#female');
    const radioMale = document.body.querySelector('#male');
    const activityInput = document.body.querySelector('#activity-input').value;
    // Outputs
    const basicKcalOutput = document.body.querySelector('#basic-kcal-output');
    const basicKjOutput = document.body.querySelector('#basic-kj-output');
    const totalKcalOutput = document.body.querySelector('#total-kcal-output');
    const totalKjOutput = document.body.querySelector('#total-kj-output');
    const errorOutput = document.body.querySelector('#error');

    if (radioFemale.checked) {
        let basicKcalFemale = 655.1 + (9.6 * weightInput) + (1.8 * heightInput) - (4.7 * ageInput);
        let totalKcalFemale = basicKcalFemale * activityInput;
        basicKcalOutput.textContent = Math.round(basicKcalFemale * 100) / 100;
        basicKjOutput.textContent = Math.round((basicKcalFemale * 4.184) * 100) / 100;
        totalKcalOutput.textContent = Math.round(totalKcalFemale * 100) / 100;
        totalKjOutput.textContent = Math.round((totalKcalFemale * 4.184) * 100) / 100;
    } else if (radioMale.checked) {
        let basicKcalMale = 66.47 + (13.7 * weightInput) + (5 * heightInput) - (6.8 * ageInput);
        let totalKcalMale = basicKcalMale * activityInput;
        basicKcalOutput.textContent = Math.round(basicKcalMale * 100) / 100;
        basicKjOutput.textContent = Math.round((basicKcalMale * 4.184) * 100) / 100;
        totalKcalOutput.textContent = Math.round(totalKcalMale * 100) / 100;
        totalKjOutput.textContent = Math.round((totalKcalMale * 4.184) * 100) / 100;
    } else {
        errorOutput.textContent = "*Bitte fülle ALLE Felder aus (achte auf die korrekte Einheit)";
        errorOutput.classList.add('error');
    }
}


berechne.addEventListener('click', kalorienRechner);
