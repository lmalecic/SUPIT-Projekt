// Pričekaj da se učita prozor kako bi mogli dohvatiti elemente
window.onload = function () {
    // document.getElementById("nastavniPlan").classList.add("loggedIn");
}

function toggleNavBar() {
    var element = document.getElementById("navbar");
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}