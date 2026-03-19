// 48. OTP Paste Feature 
// Behaviour 
// User pastes 
// 123456 
// Automatically fills all boxes.

document.getElementById('otp').addEventListener('paste',function(e){
    let pasteData = e.clipboardData.getData('text').trim();
    let inputs = document.querySelectorAll('#otp input')

    for(let i=0; i<inputs.length; i++){
        inputs[i].value = pasteData[i] || '';
    }
})