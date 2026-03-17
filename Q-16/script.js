// 16. Count Vowels and Consonants 
// HTML Design 
// • Textbox 
// • Error div 
// • Button 
// • Result div 
// Output Example 
// Input → javascript 

// Vowels: 3 
// Consonants: 7 
// Validation Rules 
// • Empty input not allowed 
// • Numbers not allowed 
// • Special characters not allowed

const input = document.getElementById('input')
const error = document.getElementById('error')

const result = document.getElementById('result')

const button = document.getElementById('click-btn')

function click() {
    const val = input.value.trim();
    // console.log(val);
    const regex = /^[a-zA-Z0-9\s]*$/;
    error.innerText =''
    result.textContent =''
    if (val === '') {
        error.innerText = "Empty input not allowed"
        return
    }
    if (!isNaN(val)) {
        error.innerText = "Numbers not allowed"
        return
    }
    if(!regex.test(val)){
        error.innerText = "Special characters not allowed"
        return

    }
    let vowels = 0;
    let Consonants = 0;
    for (let i = 0; i < val.length; i++) {
        if ('aeiouAEIOU'.includes(val[i])) {
            ++vowels;
        }
        else {
            ++Consonants
        }

    }
    result.textContent = `Vowels count: ${vowels} ,  Consonants count: ${Consonants}`
}

button.addEventListener('click', click)