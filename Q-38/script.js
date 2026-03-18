// 38. Debounce Search Input 
// HTML Design 
// Search Products 
 
// [ Search box ] 
// Behaviour 
// Search should trigger after 500ms pause 
// Example 
// Typing → lap 
 
// Search triggers once.

const searchInput = document.getElementById('search');
const result = document.getElementById('result')

function debounce(fn,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

function handleInput(event){
    console.log(event)
    result.textContent = event.target.value
}

const Debounce = debounce(handleInput, 500)
// console.log(Debounce());

searchInput.addEventListener('input',Debounce)