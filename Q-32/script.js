// 32. Drag & Drop Reordering List 
// HTML Design 
// • List of tasks 
// 1. Task A 
// 2. Task B 
// 3. Task C 
// Behaviour 
// User should be able to drag and reorder tasks. 
// Example 
// Before → A B C 
// After drag  → C A B 

const options = document.querySelectorAll('#List li');

let draggedItem; 

options.forEach(item => { 
    item.addEventListener('dragstart', () => draggedItem = item);

    item.addEventListener('dragover', e => e.preventDefault());

    item.addEventListener('drop', function (e) {
        e.preventDefault(); // Good practice to prevent default handling

        // Ensure we are dropping onto a different item
        if (draggedItem !== this) {
            let temp = this.innerHTML;
            this.innerHTML = draggedItem.innerHTML;
            draggedItem.innerHTML = temp;
        }
    });
});

