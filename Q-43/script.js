// 43. Slider with Dots Navigation 
// HTML Design 
// [ Image ] 

// • • • • 
// Behaviour 
// Click dot → change image. 

const images43 = [
    "https://picsum.photos/250?7",
    "https://picsum.photos/250?8",
    "https://picsum.photos/250?9"
];

const img43 = document.getElementById("img43");
const dotsContainer = document.getElementById("dots43");

function showSlide(i) {
    img43.src = images43[i];
}

images43.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.innerText = "● ";
    dot.style.cursor = "pointer";
    dot.onclick = () => showSlide(i);
    dotsContainer.appendChild(dot);
});

showSlide(0);