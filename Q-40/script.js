// 40. Auto Suggest Search 
// HTML Design 
// Search Country → [ Ind ] 

// Suggestions 

// India 
// Indonesia 
// Indigo 
// Behaviour 
// • Typing should show suggestions 
// • Use debounce

let countries = ["India", "Indonesia", "Indigo", "USA", "UK", "UAE", "Volvo", "BMW", "Ford", "Mazda", "Kia", "Honda", "Toyota", "Nissan", "Jeep", "Subaru",
    "Chevy", "Dodge", "Audi", "Mercedes", "Hyundai", "Porsche", "Fiat", "Mini", "Lexus", "Acura",
    "Buick", "Cadillac", "GMC", "Infiniti", "Jaguar", "Land Rover", "Maserati", "Tesla", "VW", "Subaru"];

let timer40;

document.getElementById("countrySearch").addEventListener("input", function () {
    clearTimeout(timer40);

    let query = this.value.toLowerCase();

    timer40 = setTimeout(() => {
        let list = document.getElementById("suggestions");
        list.innerHTML = "";

        if (query === "") return;

        let filtered = countries.filter(c =>
            c.toLowerCase().startsWith(query)
        );

        filtered.forEach(item => {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });
    }, 500);
});
