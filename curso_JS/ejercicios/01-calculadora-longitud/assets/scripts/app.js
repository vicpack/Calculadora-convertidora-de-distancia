const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function writeToLog(medidaIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        medida: medidaIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function createAndWriteOutput(medida, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${medida} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

//obtenemos lo que ingresa el usuario y lo convertimos a entero
function getUserNumberInput() {
    return parseInt(userInput.value);
}

function miles() {
    const enteredNumber = getUserNumberInput();
    const initialResult = 0;
    currentResult = 1.609 * enteredNumber;
    createAndWriteOutput('miles', initialResult, enteredNumber);
    writeToLog('miles', initialResult, enteredNumber, currentResult);
}

function foots() {
    const enteredNumber = getUserNumberInput();
    const initialResult = 0;
    currentResult = (enteredNumber * (1 / (3.28))) * (1 / 1000);
    createAndWriteOutput('foots', initialResult, enteredNumber);
    writeToLog('foots', initialResult, enteredNumber, currentResult);
}

function inches() {
    const enteredNumber = getUserNumberInput();
    const initialResult = 0;
    currentResult = (enteredNumber * (1 / 39.37)) * (1 / 1000);
    createAndWriteOutput('inches', initialResult, enteredNumber);
    writeToLog('inches', initialResult, enteredNumber, currentResult);
}

function yards() {
    const enteredNumber = getUserNumberInput(); //obtenemos el número ingresado por el usuario
    const initialResult = 0;
    currentResult = enteredNumber * (1 / 1093.6);
    createAndWriteOutput('Yards', initialResult, enteredNumber);
    writeToLog('Yards', initialResult, enteredNumber, currentResult);
}

milesBtn.addEventListener('click', miles);//metodo,funcion a invocar
footsBtn.addEventListener('click', foots);
inchesBtn.addEventListener('click', inches);
yardsBtn.addEventListener('click', yards);
