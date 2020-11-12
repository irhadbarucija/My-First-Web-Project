const nav = document.getElementById("mainNavbar");

window.addEventListener('scroll', (e) => {
    const offset = window.pageYOffset;
    if (offset > 10) {
        nav.classList.add("background")
    } else if(offset <= 10 && window.innerWidth > 768) {
        nav.classList.remove("background")
    }
})

document.getElementById("toggler").addEventListener("click", () => {
    nav.classList.add("background")
})

window.addEventListener('resize', (e) => {
    if(window.innerWidth > 768 && window.pageYOffset < 10) {
        nav.classList.remove("background")
    }
})