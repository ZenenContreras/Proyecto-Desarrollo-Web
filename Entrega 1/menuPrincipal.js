document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector("#menuPrincipal");
    var menuOffset = menu.offsetTop;

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > menuOffset) {
            menu.classList.add("fijo");
        } else {
            menu.classList.remove("fijo");
        }
    });
});
