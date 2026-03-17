// 20. Generate Random Number 
// HTML Design 
// • Textbox for Min 
// • Textbox for Max 
// • Error div 
// • Button 
// • Result div 
// Example 
// Min: 1 
// Max: 100 

// Result: Random Number = 54 
// Validation Rules 
// • Empty fields not allowed 
// • Only numbers allowed 
// • Max must be greater than Min 

const min = document.getElementById('min');
const max = document.getElementById('max');
const error = document.getElementById('error');
const clickbtn = document.getElementById('click');
const result = document.getElementById('result');

function random() {
    // 1. Clear previous errors/results
    error.innerText = "";
    result.innerText = "";

    const minValStr = min.value.trim();
    const maxValStr = max.value.trim();
    const regex = /^-?\d+$/; 

    // 2. Validation: Empty fields
    if (minValStr === '' || maxValStr === '') {
        error.innerText = "Empty fields not allowed";
        return;
    }

    // 3. Validation: Only numbers allowed
    if (!regex.test(minValStr) || !regex.test(maxValStr)) {
        error.innerText = "Only numbers allowed";
        return;
    }

    const minVal = parseInt(minValStr);
    const maxVal = parseInt(maxValStr);

    // 4. Validation: Max > Min
    if (maxVal < minVal) {
        error.innerText = "Max must be greater than or equal to Min";
        return;
    }

    // 5. Calculate Result
    const randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    result.innerText = `Random Number = ${randomNumber}`;
}

clickbtn.addEventListener('click', random);
