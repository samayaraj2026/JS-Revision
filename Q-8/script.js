// 8. Replace Element in Array 
// HTML Design 
// • Textbox 1: Array elements (A,B,C,D) 
// • Textbox 2: Position 
// • Textbox 3: New element 
// • Error div 
// • Button 
// • Result div 
// UI 
// Array: [A,B,C,D] 
// Position: [2] 
// New Element: [X] 

// Error here 

// [Replace] 

// Result: A,X,C,D

const arr = document.getElementById('first-box')
const position = document.getElementById('position')
const newElement = document.getElementById('new-box')
const error = document.getElementById('error')
const result = document.getElementById('result')

function replace() {
    const arrval = arr.value.trim();
    const arrvalsplit = arrval.split(',')
    // console.log(arrvalsplit);

    const newEl = newElement.value.trim();
    // console.log(newEl);

    const indexVal = position.value;

    error.textContent = ""
    result.textContent = ""
    if (arrvalsplit === '' || newEl === '' || indexVal === '') {
        error.textContent = "Empty value not allowed";
        return
    }

    const indexPos = indexVal - 1
    // console.log(indexPos);
    if (indexPos < 0 || indexPos > arrvalsplit.length || isNaN(indexPos)) {
        error.textContent = `position must between 1 and ${arrvalsplit.length}`
        return
    }

    arrvalsplit[indexPos] = newEl

    result.textContent = arrvalsplit.join(',');

}