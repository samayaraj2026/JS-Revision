// 31. Basic Drag & Drop Between Two Boxes 
// HTML Design 
// • Two containers 
// o Available Items 
// o Selected Items 
// UI Example 
// Available Items          Selected Items 
 
// [Item 1]                 (Drop Here) 
// [Item 2] 
// [Item 3] 
// Behaviour 
// • Drag item from left box 
// • Drop into right box

const options = document.querySelectorAll('.items');

let dragged;
options.forEach(item=>{
    item.addEventListener('dragstart',(e)=>{
        dragged = e.target;
    })
})

function allowdrag(event){
    event.preventDefault()
}

function drop(event){
    event.preventDefault();
    event.target.appendChild(dragged)
}