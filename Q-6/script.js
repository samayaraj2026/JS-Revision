// 6. Checkbox Controls 
// HTML Design 
// • Title: Checkbox Manager 
// • 5 Checkboxes 
// • 3 Buttons 
// UI 
// ☐ Option 1 
// ☐ Option 2 
// ☐ Option 3 
// ☐ Option 4 
// ☐ Option 5 

// [Check All]  [UnCheck All]  [Toggle] 


const options = document.querySelectorAll('.option');

function checkall() {
    options.forEach(ele => {
        ele.checked = true;
    })
}

function uncheck() {
    options.forEach(ele => {
        ele.checked = false;
    })
}
function toggle() {
    options.forEach(ele => {
        ele.checked = !ele.checked;
    })
}
