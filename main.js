const togglerbtn = document.getElementsByClassName('toggler-btn')[0]
const navbarLinks = document.getElementsByClassName('navbar_menu')[0]
const loginBtn = document.getElementsByClassName('login_btn')[0]

togglerbtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    loginBtn.classList.toggle('active')
})

