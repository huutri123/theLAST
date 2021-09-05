window.onscroll = () => {
    navbarAdaptation()
}

function navbarAdaptation() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").style.backgroundColor = "#ccc";
        document.getElementsByClassName("header__logo-img")[0].src = "./assets/img/logo(scrolled).png";
        document.getElementsByClassName("header__logo-img")[0].style.width = "117px";   
    } else {
        document.getElementById("header").style.backgroundColor = "";
        document.getElementsByClassName("header__logo-img")[0].src = "./assets/img/logo.png";
        document.getElementsByClassName("header__logo-img")[0].style.width = "143px";
    }
}

