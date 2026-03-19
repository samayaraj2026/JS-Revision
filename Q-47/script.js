// 47. OTP Input UI 
// HTML Design 
// [ ] [ ] [ ] [ ] [ ] [ ] 
// Behaviour 
// • Each box accepts 1 digit 
// • Auto move to next box 
// • Backspace goes to previous. 

const otp = document.querySelectorAll('#otp input');

function otpGen(el, index) {

    if (el.value.length === 1 && index < otp.length - 1) {
        otp[index + 1].focus();
    }
}

otp.forEach((item, i) => {
    item.addEventListener('keydown', function (e) {

        if (e.key === 'Backspace' && this.value.length === 0 && i > 0) {
            otp[i - 1].focus();
        }
    });
});