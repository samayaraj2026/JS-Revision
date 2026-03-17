// 23. Email Domain Extractor 
// HTML Design 
// • Textbox for email 
// • Error div 
// • Button 
// • Result div 
// Example 
// Input: user@gmail.com 

// Result: Domain = gmail.com 
// Validation Rules 
// • Empty input → "Please enter email" 
// • Invalid email → "Enter valid email"

const emailId = document.getElementById('emailid')
const error = document.getElementById('error')
const subBtn = document.getElementById('sub-btn')
const result = document.getElementById('result')

function check() {
    let emailurl = emailId.value;
    console.log(emailurl);
    
    error.textContent = ''
    result.innerText = ''
    if (emailurl === '') {
        error.textContent = "Please enter email"
        return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailurl)){
        error.textContent = "Enter valid email"
        return
    }

    let domain = emailurl.split('@')[1]

    result.innerText = `Domain : ${domain}`


}

subBtn.addEventListener('click', check)