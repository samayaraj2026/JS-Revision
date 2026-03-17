// 14. Count Words in a Sentence 
// HTML Design 
// • Title: Word Counter 
// • Textarea → user enters a sentence 
// • Error div 
// • Button: Count Words 
// • Result div 
// UI Example 
// Enter Sentence 
// [ I love javascript programming ] 

// Error here → [ Count Words ] 

// Result  → Total Words = 4 
// Validation Rules 
// • If empty → "Please enter a sentence" 
// • Ignore extra spaces 
// • Special characters not allowed 

const textarea = document.getElementById('sentence');
const error = document.getElementById('error');
const result = document.getElementById('result');



function count() {
    //take value and ignore extra spaces
    const textareaVal = textarea.value.replace(/\s+/g, ' ').trim();
    const words = textareaVal.split(' ')
    // console.log(words.length);

    error.textContent = ""
    result.textContent = ""

    //IF empty
    if (textareaVal === "") {
        error.textContent = "Please enter a sentence"
        return
    }

    //special characters not allowed
    const speacialChar = /^[a-zA-Z0-9\s]*$/;

    if (!speacialChar.test(textareaVal)) {
        error.textContent = "Special characters not allowed...";
        return
    }

    result.textContent = `Total Words = ${words.length}`
}