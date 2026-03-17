// 10. Registration Form 
// HTML Design 
// Fields: 
// • First Name * 
// • Last Name * 
// • Email * 
// • Phone * 
// • Zipcode 
// • Address 
// • Submit Button 
// • Error message div 
// Structure 
// <form> 

// First Name*  <input type="text"> 
// Last Name*   <input type="text"> 
// Email*       <input type="text"> 
// Phone*       <input type="text"> 
// Zipcode      <input type="text"> 
// Address      <textarea></textarea> 

// <div id="error"></div> 

// <button type="submit">Register</button> 

// </form>

const registerForm = document.getElementById('register');
const errorDiv = document.getElementById('error');

registerForm.addEventListener('submit', (e) => {

    e.preventDefault(); 

    errorDiv.textContent = '';

    // Check if the form is valid using the browser's built-in validation
    if (registerForm.checkValidity()) {
        // If valid, redirect to the success page
        window.location.href = 'success.html';
    } else {

        errorDiv.textContent = 'Please fill out all required fields correctly.';
    }
});


