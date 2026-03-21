// 30. Countdown Timer 
// HTML Design 
// • Input for seconds 
// • Start button 
// • Display timer 
// Example 
// Input → →10 
// Output 
// 10 
// 9 
// 8 
// 7 
// ... 
// 1 
// 0 

const seconds = document.getElementById('second');
const result = document.getElementById('result');
const startBtn = document.getElementById('startBtn');

let timer = null;

startBtn.addEventListener('click', () => {
    clearInterval(timer)
    let timeleft = seconds.value;
    if (isNaN(timeleft) || timeleft <= 0) {
        result.textContent = "Enter a valid number of seconds";
        return; 
    }
    timer = setInterval(() => {
        if (timeleft <= 0) {
            clearInterval(timer)

            result.textContent = "Countdown done"
        }
        else {
            result.textContent = `${timeleft} seconds remaining...`
        }
        timeleft -= 1
    }, 1000)

})