function toggleNavBar() {
    const element = document.querySelector(".navbar")
    if (element.classList.contains("expand")) {
        element.classList.remove("expand")
    } else {
        element.classList.add("expand")
    }
}

function openLoginDialog() {
    const element = document.createElement("div")
    element.classList.add("login-dialog");



    document.body.appendChild(element);
}

window.addEventListener("load", () => {
    const loginButton = document.querySelector("#loginButton")
    loginButton.addEventListener("click", openLoginDialog)
});