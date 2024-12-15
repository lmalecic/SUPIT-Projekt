// Pričekaj da se učita prozor kako bi mogli dohvatiti elemente
window.onload = () => {
    // document.getElementById("nastavniPlan").classList.add("isLoggedIn");
}

function toggleNavBar() {
    var element = document.getElementById("navbar");
    if (element.classList.contains("expand")) {
        element.classList.remove("expand");
    } else {
        element.classList.add("expand");
    }
}