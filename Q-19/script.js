// 19. Number Even or Odd 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input: 8 
 
// Result: Even Number 
// Validation Rules 
// • Empty → "Please enter a number" 
// • Letters not allowed 
// • Special characters not allowed 



const Button = document.getElementById('checkbtn');
const inputbox = document.getElementById('input');
const error = document.getElementById('error');

const result = document.getElementById('result');

function check() {
    const num = inputbox.value.trim();

    const regex = /^\d+$/;
    error.innerText = ''
    result.textContent = ''
    if (num === '') {
        error.innerText = "Please enter a number"
        return
    }
    if (!regex.test(num)) {
        error.innerText = "Letters or Special characters not allowed"
        return

    }

    if(num%2===0){
        result.textContent = "Even Number"
    }
    else{
        result.textContent = "Odd Number"
    }


}

Button.addEventListener('click', check)