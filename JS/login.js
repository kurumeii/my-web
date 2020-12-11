let email = "Email";
let password = "Password";
let emptyErr = "can not be empty";
let numberErr = "can not contain a number";
let passErr = "has to be greater than 6 digits";
const $email = $('#inputUsername').val();
const $password = $('#inputPassword').val();


    $('.form-signin').on('submit', function (e) {
        e.preventDefault();
        if ($email === "test" && $password === "123456789") {
            $('.form-signin').attr("action", "/HTML/index/html")
            return;
           
        }
    });



$('#inputUsername').focusin(() => {
    $('#form-user-err').fadeOut(600);
});

$('#inputPassword').focusin(() => {
    $('#form-password-err').fadeOut(600);
});