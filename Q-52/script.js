// 52. Lazy Load Images (Performance Optimization) 
// HTML Design 
// Image Gallery 
 
// [ image ] 
// [ image ] 
// [ image ] 
// Images should load only when visible in viewport. 
// Behaviour 
// Use → IntersectionObserver 
// Example 
// Before scroll → images not loaded 
// After scroll → images load.

let page = 1;
const loader = document.getElementById('loader')


function loadposts() {
    for (let i = 0; i < 6; i++) {
        let img = document.createElement("img");
        img.src = `https://picsum.photos/200/200?random=${page * 10 + i}`;
        document.getElementById("gallery").appendChild(img);
    }
  ++page
}
loadposts();

const observer = new IntersectionObserver(entries=>{
  entries.forEach(()=>{
    loadposts()
  })
})

setTimeout(()=>{
  observer.observe(loader)
},2000)