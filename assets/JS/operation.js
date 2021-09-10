window.onscroll = () => {
    navbarAdaptation()
}

function navbarAdaptation() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector("#header").style.backgroundColor = "var(--white)";
        document.querySelector("#header").style.boxShadow = "0 2px 10px -1px rgb(87 97 100 / 35%)";
        document.querySelector(".header__logo img").style.transform = "scale(0.8) translate(-10%, -10%)";
        document.querySelector(".header__logo img").src = "./assets/img/logo(scrolled).png";
        [...(document.querySelectorAll(".header__nav-item a"))].map(args => {
            args.style.color = "var(--black)"
        })
    } else {
        document.querySelector("#header").style.backgroundColor = "";
        document.querySelector("#header").style.height = "74px";
        document.querySelector("#header").style.boxShadow = "none";
        document.querySelector(".header__logo img").style.transform = "scale(1)";
        document.querySelector(".header__logo img").src = "./assets/img/logo.png";
        [...(document.querySelectorAll(".header__nav-item a"))].map(args => {
            args.style.color = "var(--white)"
        })
    }
}