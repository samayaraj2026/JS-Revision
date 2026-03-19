// 46. Login Modal Popup 
// HTML Design 
// [ Login ] 
// Modal 
// Email 
// Password 

// [ Login ] 
// Validation required. 

const modalPopup = document.getElementById('modalpopup')

function openmodal() {
    modalPopup.style.display = "block";
    modalPopup.style.transition = "transform 1s ease-in-out";
    modalPopup.style.transform = "scale(2);"


}

function login() {


    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    error.textContent = ''
    if (email === '' || password === '') {
        error.textContent = "Empty fields are not allowed"
        return
    }

    alert("login successfully")


}
function closemodal() {
    modalPopup.style.display = "none";

}