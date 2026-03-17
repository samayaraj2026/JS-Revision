// 22. Password Strength Checker 
// HTML Design 
// • Password textbox 
// • Error div 
// • Strength indicator 
// Strength Rules 
// Password must contain: 
// • Minimum 8 characters 
// • Uppercase 
// • Lowercase 
// • Number 
// • Special character 
// Output Example 
// Weak 
// Medium 
// Strong


const Password = document.getElementById('password')
const error = document.getElementById('error')
const Strengthdiv = document.getElementById('strength')

function passCheck() {
    const PasswordVal = Password.value.trim()
    console.log(PasswordVal)
    let strength = 0;

    if (PasswordVal.length >= 8) strength++; 
    if (/[A-Z]/.test(PasswordVal)) strength++
    if (/[a-z]/.test(PasswordVal)) strength++
    if (/[0-9]/.test(PasswordVal)) strength++
    if (/[^A-Za-z0-9]/.test(PasswordVal)) strength++

    if (strength <= 2) {
        Strengthdiv.innerText = "Weak";
        Strengthdiv.style.color = 'red';
    } else if (strength >= 3 && strength < 5) { 
        Strengthdiv.innerText = "Medium";
        Strengthdiv.style.color = 'orange';
    } else {
        Strengthdiv.innerText = "Strong";
        Strengthdiv.style.color = 'green'; 
    }
}


Password.addEventListener('input', passCheck)

