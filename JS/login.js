const loginSubmit = $('#login-btn');
let email = "Email";
let password = "Password";
let empty = "can not be empty";
let number = "can not contain a number";
loginSubmit.on('click', (e)=>{
    e.preventDefault();
    const $email = $('#inputUsername').val();
    const $password = $('#inputPassword').val() ;
    switch($email){
        case "":
            $('#form-user').append('<p/>', {
                text: `${email} ${empty}`
            });
            break;
        case ($email.match(/[^0-9]/)):
            $('#form-user').append('<p/>', {
                text: `${email} ${number}`
            })
            break;
    }
    switch($password){
        case "":
          $('#form-password').append('<p/>').text(`${password} ${empty}`);
    }
})
