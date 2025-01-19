function toggleNavBar() {
    const element = document.querySelector(".navbar")
    if (element.classList.contains("expand")) {
        element.classList.remove("expand")
    } else {
        element.classList.add("expand")
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

function openLoginDialog() {
    const overlay = document.createElement("div");
    overlay.className = "dark-overlay"

    const element = document.createElement("dialog");
    element.className = "login-dialog";

    const form = document.createElement("form");

    const title = document.createElement("h2");
    title.textContent = "Prijava";

    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Korisničko ime";
    usernameLabel.setAttribute("for", "username");
    const usernameInput = document.createElement("input");
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("name", "username");

    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Zaporka";
    passwordLabel.setAttribute("for", "password");
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("name", "password");

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Prijavi se")

    function closeDialog() {
        overlay.remove();
    }

    overlay.addEventListener("click", closeDialog)

    element.addEventListener("click", (event) => {
        event.stopPropagation();
    })

    form.append(usernameLabel, usernameInput, passwordLabel, passwordInput, submitButton);
    element.append(title, form);
    overlay.appendChild(element);
    document.body.appendChild(overlay);

    timeout(10).then(() => {
        overlay.classList.add("fade-in");
    })
}

window.addEventListener("load", () => {
    const loginButton = document.querySelector("#loginButton")
    loginButton.addEventListener("click", openLoginDialog)
});