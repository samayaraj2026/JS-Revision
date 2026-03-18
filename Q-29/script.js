// 29. Form Auto Uppercase 
// HTML Design 
// • Textbox 
// Behaviour 
// User types → john 
// Automatically converts to → JOHN 

const upperLetter = document.getElementById('upper');

const result = document.getElementById('result')

upperLetter.addEventListener('input',()=>{
    const lowerCase = upperLetter.value.trim().toLowerCase();
    // console.log(lowerCase);

    result.innerText = lowerCase.toUpperCase();
    
})