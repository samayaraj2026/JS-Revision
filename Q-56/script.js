// 56. Search with Highlighted Matches 
// HTML Design 
// Search: [ react ] 

// Articles List 
// Behaviour 
// Text → Learn React and JavaScript 
// Should become → Learn <mark>React</mark> and JavaScript 


const searchInput = document.getElementById('searching');

const result = document.getElementById('result');

const error = document.getElementById('error');


const techNames = [
    // Programming Languages
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "C#",
    "Ruby",
    "Swift",
    "Go",
    "Rust",
    "PHP",
    "TypeScript",
    "Kotlin",
    "R",
    "SQL",
    "Perl",
    "Scala",
    "Dart",

    // Frameworks/Libraries
    "react.js",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "Ruby on Rails",
    "Spring Boot",
    "ASP.NET",
    "Laravel",
    "Gatsby",
    "Next.js",
    "Nuxt.js",
    "Flutter",
    "TensorFlow",
    "PyTorch"
];

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function handleInput(event) {
    const searchInputVal = event.target.value;
    // console.log(searchInputVal);
    error.innerText = ''
    result.innerHTML = ''
    const lower = searchInputVal.toLowerCase()
    if (searchInputVal === '') {
        error.innerText = "Please searching..."
    }
    techNames.forEach(tech => {
        // console.log(tech)
        if (lower.includes(tech.toLowerCase())) {
            result.innerHTML = `Learn <mark>${tech}</mark> and JavaScript `;
            console.log(tech);

        }

    })

}

const Debounce = debounce(handleInput, 500)
searchInput.addEventListener('input', Debounce)