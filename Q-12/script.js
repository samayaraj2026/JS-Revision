// 12. Get Query Parameters 
// Example URL → http://www.mitrahsoft.com?technology=coldfusion&people=veryNice 
 
// HTML 
// <button>Get Params</button> 
// <div id="result"></div> 

const result = document.getElementById('result');

function getparams(){
    let urlString = `http://www.mitrahsoft.com?technology=coldfusion&people=veryNice`;

    let url = new URL(urlString);
    console.log(url)
    let technology = url.searchParams.get('technology');
    let people = url.searchParams.get('people');


    result.innerText = `Query parameters : technology=${technology} & people=${people}`;
}