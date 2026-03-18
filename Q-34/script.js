// 34. Kanban Board Drag & Drop 
// HTML Design 
// TODO          IN PROGRESS          DONE ---------------------------------------- 
// Task 1 
// Task 2 
// Behaviour 
// User can drag task between columns 
// Example 
// TODO -> IN PROGRESS 

let draggedTask;

document.addEventListener("dragstart", function (e) {
    if (e.target.classList.contains("task")) {
        draggedTask = e.target;
    }
});

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    e.currentTarget.appendChild(draggedTask);
}