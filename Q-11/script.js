// 11. Get Full URL 
// HTML Design 
// Button + Result 
// <button onclick="getURL()">Get URL</button> 
// <div id="result"></div> 
 
// JS concept → window.location.href 

const result = document.getElementById('result');

function getURL(){
    const fullURL = window.location.href;

    result.innerText = `Current page full URL:  ${fullURL}`
}