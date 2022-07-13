let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-title');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
}