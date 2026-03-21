// 50. API Pagination 
// HTML Design 
// Products Table 

// Pagination → 1 2 3 4 5 

// Behaviour 
// Fetch data from API 
// Example 
// ?page=1 
// ?page=2

// 


let currentpage = 1;
let itemsperpage = 5;

async function dataload() {
    try {
        const res = await fetch(`https://dummyjson.com/products?limit=${itemsperpage}&skip=${(currentpage - 1) * itemsperpage}`);
        if (!res.ok) {
            throw new error('Something went wrong...')
        }

        const data = await res.json()
        const pasteData = Array(data)
        console.log(pasteData);
        
        document.getElementById('list').innerHTML = ''
        data.products.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<p>${item.title}`
            li.style.color = 'white'
            li.style.fontSize = '20px'
            document.getElementById('list').appendChild(li)
        })


    } catch (error) {
        document.getElementById('error').innerText = error.message;
    }

}

function next() {
    currentpage++;
    dataload()

}
function prev() {
    if (currentpage > 1) {
        currentpage--;
        dataload()
    }
}
//initial load
dataload()
