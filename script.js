const boxes = document.querySelectorAll('.detail-box')
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
})


const navbarBtn = document.getElementById('navbar-btn');
let condition = false;
navbarBtn.addEventListener('click', () => {
    const navbar = document.querySelector('nav');
    const header = document.querySelector('header');
    if (condition == false) {
        navbar.classList.add('active')
        header.classList.add('active')
        condition = true;
    } else {
        navbar.classList.remove('active')
        header.classList.remove('active')
        condition = false;
    }
})