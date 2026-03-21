// 55. API Request Loader with Retry 
// HTML Design 
// [ Fetch Data ] → Result Area 
// Behaviour 
// • Show loading spinner 
// • If API fails → retry 3 times 
// • If still fails → show error. 
// Example 
// Loading... 
// Retrying request... 
// Error: Failed after 3 attempts 


async function fetchData() {
    let attempts = 0;
    let maxattempts = 3;
    document.getElementById('result').innerText = "Loading..."


    while (attempts <= maxattempts) {
        try {
            attempts++
            
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
            if (!res.ok) {
                throw new Error('something went wrong...')
            }
            const data = await res.json();

            console.log(data);


            document.getElementById('result').innerText = JSON.stringify(data[0].name, null, 2)

        }
        catch (error) {
            console.log(error.message);
            if (attempts < maxattempts) {
                document.getElementById('result').innerText = `failed after ${attempts} attempts`;
                await new Promise(r => setTimeout(r, 1000)); 
            }
            else {
                document.getElementById('result').innerText = `Api failed...`
            }

        }
    }
}

//if API is failed after 3 attempts that error message is showm.