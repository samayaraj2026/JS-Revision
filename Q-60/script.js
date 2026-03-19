// 60. Idle User Detection 
// HTML Design 
// User Dashboard 
// Behaviour 
// If user inactive for 30 seconds 
// Show modal 
// Are you still there? →  [Yes] 
// If not confirmed → logout. 

let idleTimer;
let logoutTimer;
const IDLE_TIME = 5 * 1000; // 30 seconds
const LOGOUT_TIME = 10 * 1000; 

function startIdleTimer() {
    clearTimeout(idleTimer);
    clearTimeout(logoutTimer);
    idleTimer = setTimeout(showModal, IDLE_TIME);
}

function showModal() {
    document.getElementById('modalpopup').style.display = 'block';

    logoutTimer = setTimeout(logoutUser, LOGOUT_TIME);
}

function stayActive() {
    document.getElementById('modalpopup').style.display = 'none';
    startIdleTimer();
}

function logoutUser() {
    window.location.href = '/logout';
}


window.onload = startIdleTimer;
window.onmousemove = startIdleTimer;
window.onkeypress = startIdleTimer;
document.getElementById('btn').onclick = stayActive;


