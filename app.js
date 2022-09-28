let form = document.getElementById('form')

function cer() {
    var signUp = document.getElementById('signUpForm')
    signUp.style.display = 'block'
    var login = document.getElementById('form')
    login.style.display = 'none'
}


function loginPage() {
    var signUp = document.getElementById('signUpForm')
    signUp.style.display = 'none'
    var login = document.getElementById('form')
    login.style.display = 'block'

}

let btn = document.getElementById('cerAcc')
btn.addEventListener('click', cer)

let account = document.getElementById('reg')
account.addEventListener('click', loginPage)


let register = document.getElementById('registerUser')
register.addEventListener('click', reg)

function reg() {
    // if (nameReg.test(name.value)) {
    //     if (emailReg.email.value) {
    //         if (pass.value < 6) {
    //             if (dob.value) {
    //                 if (qualify.trim !== "") {
    //                     swal("Registration Sucess", "Good Job", "sucess");

    //                 } else {
    //                     swal("Qualification Required", "Please Enter your Last Qualification", "info");
    //                 }
    //             } else {
    //                 swal("DOB Required", "Please Enter your Date of Birth", "info");
    //             }
    //         } else {
    //             swal("Short Password", "Password Must be 6 Characters Long", "info");
    //         }
    //     } else {
    //         swal("Invalid Email", "Please Type Email Correctly", "error");
    //     }

    // } else {
    //     swal("Invalid Name", "Please Type Your Full Name Correctly", "error");
    // }


    if (nameReg.test(signUpName.value)) {
        alert(signUpName)
    } else {
        alert('not Found')
    }


}