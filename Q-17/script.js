// 17. Remove Duplicate Elements from Array 
// HTML Design 
// • Textbox → input array 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input  → A,B,C,A,B,D 

// Result → A,B,C,D 
// Validation Rules 
// • Empty input not allowed 
// • Multiple commas should be cleaned 
// • Single element not allowed 

const Button = document.getElementById('checkbtn');
const inputbox = document.getElementById('input');
const error = document.getElementById('error');

const result = document.getElementById('result');

function check() {
    const str = inputbox.value.trim();

    const regex = /^[a-zA-Z0-9,]*$/;
    error.innerText = ''
    result.textContent = ''
    if (str === '') {
        error.innerText = "Empty input not allowed"
        return
    }
    if (!isNaN(str)) {
        error.innerText = "Numbers not allowed"
        return
    }
    if (!regex.test(str)) {
        error.innerText = "Special characters not allowed"
        return

    }
    const strVal = str.split(',');
    // console.log(strVal);
    let uniqueArr = [...new Set(strVal)]
    // console.log(uniqueArr);

    result.textContent = `Unique Array: ${uniqueArr}`


}

Button.addEventListener('click', check)