// 49. Pagination (Basic) 
// HTML Design 
// User List 

// Item 1 
// Item 2 
// Item 3 

// Bottom 
// Prev  1  2  3  4  Next 
// Behaviour 
// Show 10 items per page 

const lists = document.getElementById('list')

const data = Array.from({ length: 50 }, (_, i) => "Item - " + (i + 1))
// console.log(data);

let currentpage = 1;
let itemsperpage = 10;

function dataload() {
    const start = (currentpage - 1) * itemsperpage;
    const end = start + itemsperpage;
    lists.innerHTML = ''
    const pageData = data.slice(start, end)
    
    console.log(pageData);
    pageData.map(item => {
        const li = document.createElement('li')
        li.innerText = item;
        li.style.color =  'white'
        li.style.fontSize = '20px'
        lists.appendChild(li)
        
    })
    

}
function next(){
    if(currentpage*itemsperpage<data.length){
        currentpage++;
        dataload()
    }
}
function prev(){
    if(currentpage > 1){
        currentpage--;
        dataload()
    }
}
//initial load
dataload()