// 26. Filter List Search 
// HTML Design 
// • Search textbox 
// • List of items 
// Behaviour 
// Typing man 
// Visible result 
// Mango 
// Other items hidden. 

const searchItems = document.getElementById('search');
const result = document.getElementById('result');

function searching(e) {
    const searchItemsVal = e.target.value.toLowerCase();
    result.innerText = "";
    // console.log(searchItemsVal);

    let arrList = [
        "Apple", "Ball", "Cat", "Dog", "Egg", "Fish", "Giraffe", "Hat",
        "Ice", "Jaguar", "Kite", "Lemon", "Monkey", "Nature", "Ocean",
        "Panda", "Quilt", "Rabbit", "Sun", "Table", "Umbrella", "Vase",
        "Watch", "X-ray", "Yacht", "Zebra"
    ]

    function display(list) {
        result.innerHTML = list.join('<br>')
    }

    if (searchItemsVal === "") {
        display(arrList);
        return;
    }

    let output = arrList.filter(items => {
        if (items.toLowerCase().includes(searchItemsVal)) {
            return items
        }
    })
    if (output) {
        result.innerHTML = output.join('<br>');
    }

}

searchItems.addEventListener('input', (e) => searching(e))