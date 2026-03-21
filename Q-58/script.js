// 58. Multi Step Form Wizard 
// HTML Design 
// Step 1: Personal Info 
// Step 2: Address 
// Step 3: Review 
// UI 
// [Next] [Previous] 
// Behaviour 
// • Validate each step 
// • Save progress 
// • Prevent skipping steps.

let step = 1;

function showStep() {
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step3").classList.remove("active");

    document.getElementById("step" + step).classList.add("active");


    if (step === 3) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let city = document.getElementById("city").value;
        let country = document.getElementById("country").value;

        document.getElementById("review").innerHTML =
            "Name: " + name + "<br>Email: " + email +
            "<br>City: " + city + "<br>Country: " + country;
    }
}

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function next() {

    if (step === 1) {
        if (emailRegex.test(email.value)) {
            alert("Enter correct email format")
            return
        }
        if (name.value === "" || email.value === "") {
            alert("Fill Step 1");
            return;
        }

    }

    if (step === 2) {
        if (city.value === "" || country.value === "") {
            alert("Fill Step 2");
            return;
        }
    }

    if (step < 3) {
        step++;
        showStep();
    } else {
        alert("Form Submitted!");
    }
}

function prev() {
    if (step > 1) {
        step--;
        showStep();
    }
}