
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btnLogIn = document.querySelector('#btn-login')


function home(){       
    if(!email.value || !password.value){
        alert('please log in your account')
    }
}

btnLogIn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(email.value == localStorage.getItem('email') && password.value == localStorage.getItem('password')){
        window.location.href = 'pages/home-page/index.html'
    }else{
        alert('Incorrect email or password')
        
    }
    
    
})

    



// pages/home-page/index.html