window.onload = function () {
    const menuResponsive = document.getElementById("menu-responsive");
    const buttonOpenMenu = document.getElementById("btn-open-menu");
    const buttonCloseMenu = document.getElementById("btn-close-menu");

    buttonOpenMenu.addEventListener("click", function openMenu() {
        menuResponsive.classList.add("slideInRight");
        menuResponsive.classList.remove("slideOutRight");
        menuResponsive.classList.remove("non-displayed");
    });
    menuResponsive.addEventListener('animationend', function() { 
        console.log("animacion terminada");
        menuResponsive.classList.remove("slideInRight");
        buttonCloseMenu.addEventListener("click", function closeMenu() {        
        menuResponsive.classList.add("slideOutRight");
        })
     });

        buttonCloseMenu.addEventListener("hover", function closeMenu() {        
            alert("hover");
            
            menuResponsive.classList.add("non-displayed");
            menuResponsive.classList.remove("displayed");
        });
    

    var myNav = document.getElementById('navbar');

    window.onscroll = function () {
        if (window.scrollY >= 110) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-initial");
        }
        else {
            myNav.classList.add("nav-initial");
            myNav.classList.remove("nav-colored");
        }
    };


};