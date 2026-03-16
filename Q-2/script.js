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

function Check(){
    const inputBoxVal = inputBox.value;

    if(!inputBoxVal){
        error.innerText = "Please Enter Text"
        return
    }

    error.innerText = " ";

    if(inputBoxVal.length<=1){
        if(inputBoxVal === 'a' || 'e' || 'i' || 'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U'){
            result.innerHTML  = `${inputBoxVal} is a Vowel`;
        }
        else{
            result.innerHTML  = `${inputBoxVal} is a Not Vowel`;
        }
    }
    else{
        
    }

}