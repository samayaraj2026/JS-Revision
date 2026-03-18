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

startBtn.addEventListener('click', () => {
    let timeleft = seconds.value;
    let timer = setInterval(() => {
        if (timeleft <= 0) {
            clearInterval(timer)

            result.textContent = "Timer finished..."
        }
        else {
            result.textContent = `${timeleft} seconds remaining...`
        }
        timeleft -= 1
    }, 1000)

})