// JavaScript source code
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

email.addEventListener('textinput', email_Verify);
password.addEventListener('textinput', pass_Verify);


function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solis red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 9) {
        email.style.border = "1px solis red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }

}
function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        return true;
    }
}
function pass_Verify() {
    if (password.value.length >= 8) {
        pass.style.border = "1px solid silver";
        return true;
    }
}