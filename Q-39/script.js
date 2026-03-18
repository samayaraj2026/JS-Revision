// 39. Debounced API Search 
// HTML Design 
// Search GitHub Users 

// [ search username ] 
// Behaviour 
// Call API → https://api.github.com/search/users?q= 
// Use debounce 500ms 


const searchInput = document.getElementById('search');
const result = document.getElementById('result')
const error = document.getElementById('error')

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}



async function fetchResult(query) {

    result.textContent = '';

    if (query.trim() === '') {
        error.textContent = "Empty values not allowed"
        return
    }
    error.textContent = '';

    try {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`)
        if (!response.ok) {
            error.textContent = response.status;
            return;
        }
        const data = await response.json();


        data.items.forEach(item => {
            
            if (item.login.toLowerCase().includes(query.toLowerCase())) {
                const li = document.createElement('li')
                li.textContent = item.login
                result.appendChild(li)
            }
        })
    }
    catch (error) {
        console.error(error.message);
        error.textContent = `${error.message}`
    }
}




const Debounce = debounce(fetchResult, 500)

searchInput.addEventListener('input', (e) => {
    Debounce(e.target.value)
})
