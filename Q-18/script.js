// 18. Character Counter 
// HTML Design 
// • Textarea 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input → Hello World 

// Result → Characters = 11 
// Validation Rules 
// • Empty sentence not allowed 

const textarea = document.getElementById('sentence');
const error = document.getElementById('error');
const result = document.getElementById('result');



function count() {
    //take value and ignore extra spaces
    const textareaVal = textarea.value.replace(/\s+/g, ' ').trim();

    error.textContent = ""
    result.textContent = ""

    //Empty sentence not allowed 
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

    result.textContent = `Total Characters  = ${textareaVal.length}`
}