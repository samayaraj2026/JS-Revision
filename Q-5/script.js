// 5. Find Largest Number 
// HTML Design 
// • Title: Largest Number Finder 
// • Textbox → input like 1,2 
// • Error div 
// • Button 
// • Result div 
// UI 
// Enter Numbers 
// [ 4,8 ] 

// Error here 

// [ Find Largest ] 

// Result: 8 


const inputbox = document.getElementById('input-box')

const error = document.getElementById('error')

const result = document.getElementById('result')

function check() {

    const val = inputbox.value.trim();
    error.textContent = ""

    if (val === '') {
        error.textContent = "Please enter number"
    }



    const numbers = val.split(',').map(Number);

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        largest = numbers[i]
    }

    result.textContent = `largest number: ${largest}`



}