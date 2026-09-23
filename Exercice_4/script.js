let password = document.getElementById('password')
let cpassword = document.getElementById('cpassword')
let verif = document.getElementById('verification')

function verifPassword(){
    if (password.value == cpassword.value){
        password.style.border = "solid 3px green"
        cpassword.style.border = "solid 3px green"
    } 
    else {
        password.style.border = "solid 3px red"
        cpassword.style.border = "solid 3px red"
    }
}

verif.addEventListener('click', verifPassword)