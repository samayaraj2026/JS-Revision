// 59. Detect Internet Connection Status 
// HTML Design 
// Connection Status 
 
// Online 
// Offline 
// Behaviour 
// Use 
// navigator.onLine 
// Listen for 
// online 
// offline 
// Example →  You are offline 


const stausBtn = document.getElementById('statusBtn');
const statusMsg = document.getElementById('status');

stausBtn.addEventListener('click', ()=>{
    statusMsg.textContent = `Window navigatore.onLine is ${window.navigator.onLine}`
})