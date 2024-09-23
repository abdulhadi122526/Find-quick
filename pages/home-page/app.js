let navBarToggler = document.querySelector(".navbar-toggler")
let togglerList = document.querySelector('.toggler-list')

navBarToggler.addEventListener('click', (event)=>{
    console.log(event.target);
    togglerList.innerHTML += `
     <ul class="navbar-nav bg-white position-absolute w-100 border border-danger rounded-2">
          <li class="nav-item">
            <a class="nav-link active text-black fw-semibold" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black fw-semibold" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black fw-semibold" href="#">Contact us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black fw-semibold" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black fw-semibold" href="#">Login</a>
          </li>
        </ul>
    
    `
    
})