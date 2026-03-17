// 25. Show / Hide Password 
// HTML Design 
// • Password textbox 
// • Checkbox 
// Structure 
// <input type="password" id="password"> 
 
// <input type="checkbox" id="toggle"> 
// <label>Show Password</label> 
// Behaviour 
// If checkbox checked 
// password type → text 
// Otherwise:  text → password 

const input = document.getElementById('input');

function view(){
    if(input.type === 'password'){
        input.type = 'text'
    }
    else{
        input.type = 'password'
    }
}
