// 54. Local Storage Form Auto Save 
// HTML Design 
// Name 
// Email 
// Message 
// Behaviour 
// • When user types → automatically save to localStorage 
// • When page refreshes → restore form values. 

const nameVal = document.getElementById('name')
const emailval = document.getElementById('email')
const message = document.getElementById('message')
const result = document.getElementById('result')

window.addEventListener('load',()=>{
    nameVal.value = localStorage.getItem('name')||"";
    emailval.value = localStorage.getItem('email')||"";

    message.value = localStorage.getItem('message')||"";
    if(nameVal.value || emailval.value || message.value){
        result.innerText = "Saved..."
    }
})

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function handleInput(event) {
    if (nameVal.value === event.target.value) {
        localStorage.setItem("name", nameVal.value)
        return
    }
    if (emailval.value === event.target.value) {
        localStorage.setItem("email", emailval.value)
        return
    }
    if (message.value === event.target.value) {
        localStorage.setItem("message", message.value)
        return
    }

}

const Debounce = debounce(handleInput, 500)

nameVal.addEventListener('input', Debounce)
emailval.addEventListener('input', Debounce)

message.addEventListener('input', Debounce)


