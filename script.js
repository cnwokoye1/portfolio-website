
function toggleMenu() {
    /* targeting the "menu-links" and "hamburger-icon" elements of html 
        file and when toggled/clicked, it will either add or remove 
        the styled "open" class in that element */
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}