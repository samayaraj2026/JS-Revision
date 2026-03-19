// 42. Auto Image Slider 
// HTML Design 
// Image Banner 
// Behaviour 
// Images automatically change every → 3 seconds 

const images42 = [
    "https://picsum.photos/250?4",
    "https://picsum.photos/250?5",
    "https://picsum.photos/250?6"
];

let i42 = 0;

function autoSlider() {
    document.getElementById("img42").src = images42[i42];
    i42 = (i42 + 1) % images42.length;
}

setInterval(autoSlider, 3000);
autoSlider();