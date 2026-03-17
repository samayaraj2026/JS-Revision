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

    let output = arrList.filter(items => {
        if (items.toLowerCase().includes(searchItemsVal)) {
            return items
        }
    })

    result.innerText = output;

}

searchItems.addEventListener('input', (e) => searching(e))