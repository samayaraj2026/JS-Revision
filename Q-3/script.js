// 3. Check First & Last Character Same 
// HTML Design 
// • Title: First & Last Character Checker 
// • Textbox 
// • Error div 
// • Button 
// • Result div


const inputBox = document.getElementById('input-box');
const error = document.getElementById('error')
const result = document.getElementById('result')

function Check() {
    const str = inputBox.value.trim();
    error.textContent = '';
    result.textContent = '';
    result.className = '';

    if (str.length === 0) {
        error.textContent = 'Please enter a string.';
        return;
    }

    const firstChar = str[0].toLowerCase();
    const lastChar = str[str.length - 1].toLowerCase();

    if (firstChar === lastChar) {
        result.textContent = `'${str}' matches!`;
    } else {
        result.textContent = `'${str}' does not match.`;
    }
}