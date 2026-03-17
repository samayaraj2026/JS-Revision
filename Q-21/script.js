// 21. Live Character Counter (Textarea) 
// HTML Design 
// • Textarea 
// • Character count display below 
// • Maximum 200 characters 
// Behaviour 
// • As the user types, character count updates. 
// • If more than 200 characters, show error. 
// Example 
// Message → Hello world 
 
// Characters → 11 / 200

const textarea = document.getElementById('sentence');
const error = document.getElementById('error');
const result = document.getElementById('result');

function count() {
    //take value and ignore extra spaces
    const textareaVal = textarea.value.replace(/\s+/g, ' ').trim();
    const maxCount  = 200
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
    if(textareaVal.length>maxCount){
        error.innerText = "More than 200 characters not allowed"
        textarea.value = textareaVal.substring(0,maxCount)

    }
    result.textContent = `Total Characters  = ${textareaVal.length}/${maxCount}`
}
textarea.addEventListener('input',count)