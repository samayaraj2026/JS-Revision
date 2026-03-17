// 9. Show Date & Time 
// HTML Design 
// • Single Button 
// • Result div 
// UI 
// [ Show ] 
 
// Current Date & Time: 16 Mar 2026 10:30 AM 

const result = document.getElementById('result')

function show() {
    const dateTime = new Date();

    const options ={
        day:'2-digit',
        month:'short',
        year : 'numeric',
        hour:'2-digit',
        minute:'2-digit',
        hour12:true
    }



    result.innerText = dateTime.toLocaleString("en-GB", options);
}