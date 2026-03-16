// 4. Reverse String 
// HTML Design 
// • Title: Reverse String 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// UI 
// Enter String 
// [ javascript ] 

// Error here 

// [ Reverse ] 

// Result: tpircsavaj

const inputBox = document.getElementById('input-box');
const error = document.getElementById('error');
const result = document.getElementById('result');


function Check() {
    const str = inputBox.value.trim();
    error.textContent = '';
    result.textContent = '';
    result.className = '';

    if (str.length === 0) {
        error.textContent = 'Please enter a string.';
        return;
    }
    const reverse = str.split('').reverse().join('')
    // console.log(reverse);
    result.textContent = "Reversed String : " + reverse;

}