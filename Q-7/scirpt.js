// 7. Sum & Multiply Numbers 
// HTML Design 
// • Title: Sum and Multiply 
// • Input textbox 
// • Output textbox (readonly) 
// • Error div 
// • Add button 
// • Multiply button 
// UI 
// Input Numbers 
// [1,2,3,4] 

// Output 
// [          ] 

// Error here 

// [Add]  [Multiply] 


const inputval = document.getElementById('input');
const outputval = document.getElementById('output');
const error = document.getElementById('error')
const result = document.getElementById('result')


function add() {
    const inputval1 = inputval.value.trim('');
    const outputval1 = outputval.value.trim('');

    if (inputval1 === '' || outputval1 === '') {
        error.textContent = "Empty value not allowed"
        return
    }

    error.textContent = ''
    result.textContent = ''
    const num1 = inputval1.split(',').map(Number)
    const num2 = outputval1.split(',').map(Number)

    let largest = Math.max(num1.length, num2.length);

    let resultarr = []
    for (let i = 0; i < largest; i++) {
        let val1 = num1[i]||0;
        let val2 = num2[i]||0;

        resultarr.push(val1 + val2)
    }
    result.textContent = `Val1 + Val2 = ${resultarr}`
}

function multiply() {
    const inputval1 = inputval.value.trim('');
    const outputval1 = outputval.value.trim('');

    if (inputval1 === '' || outputval1 === '') {
        error.textContent = "Empty value not allowed"
        return
    }
    error.textContent = ''
    result.textContent = ''
    const num1 = inputval1.split(',').map(Number)
    const num2 = outputval1.split(',').map(Number)

    let largest = Math.max(num1.length, num2.length);

    let resultarr = []
    for (let i = 0; i < largest; i++) {
        let val1 = num1[i]||0;
        let val2 = num2[i]||0;

        resultarr.push(val1 * val2)
    }
    result.textContent = `Val1 * Val2 = ${resultarr}`

}
