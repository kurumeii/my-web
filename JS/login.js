const loginSubmit = $('.form-signin');
let email = "Email";
let password = "Password";
let empty = "Can not be empty";
let number = "Can not contain a number";
loginSubmit.on('submit', (e)=>{
    e.preventDefault();
    const $email = $('#inputUsername').val();
    const $password = $('#inputPassword').val() ;
    switch($email){
        case "":
            $('#form-user').append('<p/>').text(`${email}${empty}`);
            break;
        case ($email.match(/[^0-9]/)):
            $('#form-user').append('<p/>').text(`${email}${number}`);
            break;
    }
    switch($password){
        case "":
          $('#form-password').append('<p/>').text(`${password}${empty}`);
    }
})
