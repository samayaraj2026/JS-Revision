// 27. Dynamic Table Row Add 
// HTML Design 
// • Name textbox 
// • Age textbox 
// • Add button 
// • Table 
// Structure 
// <input type="text" placeholder="Name"> 
// <input type="text" placeholder="Age"> 

// <button>Add</button> 

// <table> 
// <tr> 
// <th>Name</th> 
// <th>Age</th> 
// </tr> 
// </table> 

// Behaviour 
// Add new rows dynamically. 
// Example 
// Name: John 
// Age: 25 

// Table becomes 
// Name   Age 
// John   25

const name = document.getElementById('name')
const age = document.getElementById('age')
const tablebody = document.getElementById('tbody')

function clearInput() {
    name.value = ''
    age.value = ''

}

function add() {
    const nameVal = name.value;
    const ageVal = age.value;

    if (nameVal === '' || ageVal === '') {
        tablebody.innerHTML = ''
        return
    }

    const rows = tablebody.rows;
    for (let i = 0; i < rows.length; i++) {

        if (rows[i].cells[0].textContent === nameVal) {
            alert("This name already exists!");
            return;
        }
    }
    const rowHtml = `
    <td>${nameVal}</td>
    <td>${ageVal}</td>

    `
    tablebody.innerHTML += rowHtml

    clearInput()

}