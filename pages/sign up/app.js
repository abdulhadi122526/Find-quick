let email = document.querySelector('#email')
let password = document.querySelector('#password')
let rePass = document.querySelector('#retypepassword')
let signUp = document.querySelector('#btn-signup')

signUp.addEventListener('click', (e)=>{
    e.preventDefault()
    let emailValue = email.value
    let passValue = password.value
    let repassValue = rePass.value
    localStorage.setItem('email', emailValue )
    localStorage.setItem('password', passValue )
    localStorage.setItem('repassword', repassValue )

    if(localStorage.getItem('repassword') != localStorage.getItem('password')){
        alert('Your retype password is not same as your password')
    } else  if(emailValue && passValue && repassValue ){
        window.location.href = '../../index.html'
        
    }else {
        alert('Please enter email & password')
        
    } 
        
})







