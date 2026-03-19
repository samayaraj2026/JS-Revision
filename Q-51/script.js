// 51. Debounce vs Throttle Scroll Logger 
// HTML Design 
// • Large scrollable page 
// • Console log scroll position 
// Behaviour 
// • Implement Debounce version 
// • Implement Throttle version 
// • Compare results. 
// Example 
// Scroll Position: 450px 


//throttle scroll logger
function throttling(func, limit) {
    let waiting = false;
    return function (...args) {
        if (!waiting) {
            waiting = true;
            setTimeout(() => {

                func.apply(this, args);
                waiting = false;
            }, limit);
        }
    };
}

let count1 = 0

function scroll() {
    console.log("Scroll Position Throttle:" + window.scrollY, +" " + ++count1)
}

const throttlingScroll = throttling(scroll, 1000);

window.addEventListener('scroll', throttlingScroll);

//Debounce scroll logger

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

let count = 0

function handleInput() {
    console.log("Scroll Position Dobounce:" + window.scrollY, +" " + ++count)
}

const Debounce = debounce(handleInput, 1000)

window.addEventListener('scroll', Debounce)