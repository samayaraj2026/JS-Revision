// 24. Copy Text to Clipboard 
// HTML Design 
// • Textbox 
// • Copy button 
// • Message div 
// Behaviour 
// Click Copy 
// Text copied to clipboard 

// This uses: navigator.clipboard.writeText()


const copyBtn = document.getElementById('copybtn')
const error = document.getElementById('error')
const result = document.getElementById('result')

function copy() {

    const input = document.getElementById('textbox')
    error.innerText = ''
    result.innerText = ''

    if (input.value === '') {
        error.innerText = 'Please enter text'
        return
    }


    navigator.clipboard.writeText(input.value)
        .then(() => {
            if (result) {
                result.innerText = `Copied : ${input.value}`
            }
            if (error) {
                error.innerText = ''
            }
        })
        .catch((err) => {
            if (error) {
                error.innerText = "Failed to copy : " + err
            }
            console.error(err.message);

        })
        remove();
    
}
copyBtn.addEventListener('click', copy)