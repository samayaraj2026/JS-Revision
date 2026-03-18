// 37. Infinite Scroll API Loader 
// HTML Design 
// User List 
 
// Name 
// Email 
// Phone 
// Behaviour 
// Fetch from API 
// Example 
// https://jsonplaceholder.typicode.com/users 
// Load more users on scroll. 


let page37 = 1;

async function loadUsers() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let data = await res.json();

    let list = document.getElementById("users");

    data.forEach(user => {
        let li = document.createElement("li");
        li.innerText = `${user.name} | ${user.email} | ${user.phone}`;
        list.appendChild(li);
    });
}

// initial load
loadUsers();

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadUsers();
    }
});