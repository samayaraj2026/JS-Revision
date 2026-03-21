// 13. Cookie Counter (CFML + JS) 
// HTML Design 
// Button + message 
// <form method="post"> 
// <input type="submit" value="Submit"> 
// </form> 
// Flow 
// 1. Page loads 
// 2. CFML creates cookie VisitsCounter 
// 3. Increment every submit 
// 4. JS alert shows value 
// Example 
// alert("Visits: 5");


function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let char of cookies) {
        const [key, value] = char.split("=");
        if (key === name) return value;
    }
    return null;
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}
function init() {
    let visits = getCookie("Visits");

    if (!visits) {
        setCookie("Visits", 1);
    }
}
function handleSubmit(e) {
    e.preventDefault();

    let visits = getCookie("Visits");
    visits = visits ? parseInt(visits) + 1 : 1;

    setCookie("Visits", visits);

    alert("Visits: " + visits);
}
init();