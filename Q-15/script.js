// 15. Palindrome Checker 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input → madam 

// Result → This is a Palindrome 
// Validation Rules 
// • Empty → Please enter a word 
// • Numbers not allowed 
// • Special characters not allowed 

const input = document.getElementById('text-box');
const error = document.getElementById('error');
const result = document.getElementById('result');

function check() {
    const str = input.value.trim();
    // console.log(str);
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (str === '') {
        error.textContent = "Please enter a word "
        return
    }
    else if (!isNaN(str)) {
        error.textContent = "Numbers not allowed"
        return
    }

    else if (!regex.test(str)) {
        error.textContent = "Special characters not allowed"
        return
    }


    const reverseStr = str.split('').reverse().join('')
    // console.log(reverseStr);

    if (str === reverseStr) {
        result.textContent = `${str} is a palindrome`
    }
    else {
        result.textContent = `${str} is Not a palindrome`
    }
}
