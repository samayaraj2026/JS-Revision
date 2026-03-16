// 1. Find Largest & Smallest Word 
// HTML Design 
// • Title: Find Largest & Smallest Word 
// • Layout: 
//  Label: Enter Sentence 
//  Textarea → user types sentence (ex: I love my country) 
//  Error div → shows validation message 
//  Button: Find Words 
//  Result div 

const textArea = document.getElementById('text-area')
const result = document.getElementById('result')
const error = document.getElementById('error')
function find() {

    const textAreaVal = textArea.value.trim()
    const split = textAreaVal.split(" ");

    if (!textAreaVal) {
        error.innerText = "Enter something"
        return
    }

    error.innerText = " "


    let smallest = split[0]
    let largest = split[0]

    for (let i = 0; i < split.length; i++) {
        let word = split[i];
        if (word.length < smallest.length) {
            smallest = word
        }
        if (word.length > largest.length) {
            largest = word
        }
    }

    result.innerText = `Smallest:${smallest}, Largest:${largest}`

}