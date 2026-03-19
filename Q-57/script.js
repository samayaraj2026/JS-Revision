// 57. Undo / Redo System 
// HTML Design 
// Input Field 
 
// [Undo] [Redo] 
// Behaviour 
// User types 
// Hello 
// Hello World 
// Hello World JS 
// Undo 
// Hello World 
// Hello 
// Redo 
// Hello World 
// Hello World JS 

const inputField = document.getElementById('myInputField');
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');
const currentValueDisplay = document.getElementById('currentValueDisplay');

let history = [''];
let historyPointer = 0;


function updateUI() {
    inputField.value = history[historyPointer];
    console.log(history[historyPointer ]);
    
    currentValueDisplay.textContent = inputField.value;
    console.log(historyPointer);
    console.log(history.length);
    
    undoBtn.disabled = historyPointer === 0;
    redoBtn.disabled = historyPointer === history.length - 1;
}


function handleInputChange(event) {
    const newValue = event.target.value;

    if (historyPointer < history.length - 1) {
        history = history.slice(0, historyPointer + 1);
        console.log(history);
        
    }

    history.push(newValue);
    historyPointer = history.length - 1;
    updateUI();
}


function undo() {
    if (historyPointer > 0) {
        historyPointer--;
        updateUI();
    }
}


function redo() {
    if (historyPointer < history.length - 1) {
        historyPointer++;
        updateUI();
    }
}


inputField.addEventListener('input', handleInputChange);
undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);

// Initial UI setup
updateUI();
