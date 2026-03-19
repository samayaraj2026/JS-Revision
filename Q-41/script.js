// 41. Basic Image Slider 
// HTML Design 
// [ < ]   Image   [ > ] 
// Behaviour 
// Click next/prev to change image. 

const images41 = [
    "https://picsum.photos/250?1",
    "https://picsum.photos/250?2",
    "https://picsum.photos/250?3"
];

let index41 = 0;
const img41 = document.getElementById("img41");

img41.src = images41[index41];

function nextSlide() {
    index41 = (index41 + 1) % images41.length;
    img41.src = images41[index41];
}

function prevSlide() {
    index41 = (index41 - 1 + images41.length) % images41.length;
    img41.src = images41[index41];
}