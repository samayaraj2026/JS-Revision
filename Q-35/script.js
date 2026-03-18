// 35. Infinite Scroll List 
// HTML Design 
// Item 1 
// Item 2 
// Item 3 
// ... 
// Behaviour 
// • Load 10 items initially 
// • When user reaches bottom 
// • Load 10 more automatically 

let count = 0;
let list = document.getElementById("list35");

function loadItems() {
    for (let i = 0; i < 100; i++) {
        count++;
        let li = document.createElement("li");
        li.innerText = "Item " + count;
        list.appendChild(li);
    }
}

// Initial load
loadItems();

// Scroll event
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadItems();
    }
});