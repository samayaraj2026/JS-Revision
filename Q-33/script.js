// 33. Drag File Upload Area 
// HTML Design ----------------------- 
//  Drag file here 
//  or click to upload ----------------------- 
// Behaviour 
// • User drags image file 
// • Display file name 
// • Validate image only 

const dropArea = document.getElementById("dropArea");
    const fileInput = document.getElementById("fileInput");
    const fileName = document.getElementById("fileName");

    dropArea.addEventListener("click", () => {
      fileInput.click();
    });

    // File select
    fileInput.addEventListener("change", (e) => {
      handleFile(e.target.files[0]);
    });

    // Drag over
    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropArea.classList.add("active");
    });

    // Drag leave
    dropArea.addEventListener("dragleave", () => {
      dropArea.classList.remove("active");
    });

    // Drop file
    dropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dropArea.classList.remove("active");

      const file = e.dataTransfer.files[0];
      handleFile(file);
    });


    function handleFile(file) {
      if (!file) return;


      if (!file.type.startsWith("image/")) {
        fileName.innerText = "Only image files allowed";
        return;
      }


      fileName.innerText = "Uploaded: " + file.name;
    }