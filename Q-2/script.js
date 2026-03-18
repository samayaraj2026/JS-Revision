// 2. Vowel or Not 
// HTML Design 
// • Title: Vowel Checker 
// • Textbox → input single letter 
// • Error div 
// • Button: Check 
// • Result div


const inputBox = document.getElementById('input-box');
const error = document.getElementById('error')
const result = document.getElementById('result')

function Check() {
    const inputBoxVal = inputBox.value;


    error.innerText = "";
    error.innerText = "";
    result.style.color = 'black'
    if (!inputBoxVal) {
        error.innerText = "Please Enter Text"
        return
    }

    if (inputBoxVal.length === 1) {
        // Correct way to check vowels
        if ('aeiouAEIOU'.includes(inputBoxVal)) {
            result.innerText = `${inputBoxVal} is a Vowel`;
        } else {
            result.innerText = `${inputBoxVal} is a Not Vowel`;
        }
    } else if (inputBoxVal.length > 1) {
        // Proper length check
        result.style.color = 'red'
        result.innerText = 'Enter single character';

    }
}
