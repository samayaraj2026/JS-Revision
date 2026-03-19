// 45. Modal Popup Close Methods 
// Behaviour 
// Modal should close when 
// • Clicking close button 
// • Clicking outside modal 
// • Pressing ESC key 

function openModal45() {
    document.getElementById("modal45").style.display = "block";
}

function closeModal45() {
    document.getElementById("modal45").style.display = "none";
}

// Close when clicking outside
window.addEventListener("click", function (e) {
    let modal = document.getElementById("modal45");
    if (e.target === modal) {
        closeModal45();
    }
});

// Close with ESC key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal45();
    }
});