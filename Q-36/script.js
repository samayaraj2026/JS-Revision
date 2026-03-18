// 36. Infinite Scroll Image Gallery 
// HTML Design 
// Image Grid 
 
// [img] [img] [img] 
// [img] [img] [img] 
// Behaviour 
// Scroll down → load more images



let page = 1;

function loadImages() {
    for (let i = 0; i < 6; i++) {
        let img = document.createElement("img");
        img.src = `https://picsum.photos/200/200?random=${page * 10 + i}`;
        document.getElementById("gallery").appendChild(img);
    }
    page++;
}

// initial load
loadImages();

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadImages();
    }
});