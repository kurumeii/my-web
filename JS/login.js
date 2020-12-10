let email = "Email";
let password = "Password";
let emptyErr = "can not be empty";
let numberErr = "can not contain a number";
let passErr = "has to be greater than 6 digits";
const $email = $('#inputUsername').val();
const $password = $('#inputPassword').val();

$('.form-signin').on('submit', (e) => {
    e.preventDefault();
    if ($email == "") {
        $('#form-user-err').text(`* ${email} ${emptyErr}`);
    }
    if ($password == "" || $password.length <= 6) {
        $('#form-password-err').text(`* ${password} ${numberErr} or ${passErr}`);
        return false
    }
});

$('#btn-login').on("click", (e) => {
    e.preventDefault();
    if($email == "test" && $password == "123456789") {
       return $('#btn-login').attr("href", "/HTML/index/html")
    }
});


$('#inputUsername').focusin(() => {
    $('#form-user-err').fadeOut(600);
});

$('#inputPassword').focusin(() => {
    $('#form-password-err').fadeOut(600);
});