function toggleNavBar() {
    const element = document.querySelector(".navbar")
    if (element.classList.contains("expand")) {
        element.classList.remove("expand")
    } else {
        element.classList.add("expand")
    }
}

function showLoggedInUI() {
    const noUserElements = document.querySelectorAll(".no-user");
    const userOnlyElements = document.querySelectorAll(".user-only");

    noUserElements.forEach((element) => {
        element.classList.add("hidden");
    })

    userOnlyElements.forEach((element) => {
        element.classList.remove("hidden");
    })
}

function resetLoggedInChanges() {
    const noUserElements = document.querySelectorAll(".no-user");
    const userOnlyElements = document.querySelectorAll(".user-only");

    noUserElements.forEach((element) => {
        element.classList.remove("hidden");
    })

    userOnlyElements.forEach((element) => {
        element.classList.add("hidden");
    })
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

function createLoader() {
    const svg = document.createElement("img");
    svg.className = "loader";
    svg.setAttribute("src", "/icon/infinite-spinner.svg");
    svg.setAttribute("alt", "Loading...");

    return svg;
}

/* Names from https://www.fantasynamegenerators.com/croatian-names.php */
const names = ["Andrija","Ante","Adam","Aleksandar","Alan","Antonio","Branimir","Boris","Branko","Bruno","Bozo","Bozidar","Branislav","Budimir","Benjamin","Cvjetko","Dario","Darko","Damir","Davor","Dino","Danijel","David","Denis","Dominik","Domagoj","Duje","Drazen","Dubravko","Dinko","Dalibor","Dejan","Djuro","Emanuel","Ernest","Emil","Eduard","Edvard","Filip","Franjo","Florijan","Gabrijel","Goran","Gordan","Hrvoje","Igor","Ivan","Ivo","Ivica","Imanuel","Ilija","Josip","Jan","Juraj","Jakov","Jasmin","Karlo","Kresimir","Kristijan","Luka","Lucijan","Ljubomir","Ljudevit","Mario","Marko","Mirko","Matej","Martin","Marin","Mladen","Mislav","Miroslav","Matija","Marijan","Nikola","Nenad","Neven","Oliver","Petar","Pavao","Patrik","Renato","Robert","Stjepan","Silvije","Sasa","Sinisa","Sime","Tomislav","Tihomir","Toni","Teo","Velimir","Vedran","Viktor","Vinko","Vladimir","Vanja","Vedran","Zdenko","Zdravko","Zvonimir","Zvonko","Zlatko","Zoran","Zarko","Zeljko","Anamarija","Ana","Anastazija","Anica","Andreja","Anita","Antonija","Andjela","Anja","Branka","Barbara","Blazenka","Bozica","Cvijeta","Danica","Danijela","Dijana","Dora","Dubravka","Daria","Dubravka","Dorotea","Djurdja","Ema","Ela","Ena","Elizabeta","Eva","Gabrijela","Gorana","Gordana","Helena","Hana","Irena","Ines","Irma","Ivana","Izabela","Jadranka","Jagoda","Jana","Jasna","Jelena","Josipa","Julija","Katarina","Klara","Kristina","Ksenija","Kornelija","Karolina","Karla","Lana","Laura","Lara","Lea","Lidija","Lucija","Leonarda","Ljiljana","Ljubica","Marta","Magdalena","Marija","Mia","Maja","Marina","Martina","Mateja","Mirjam","Mirjana","Monika","Nada","Natalija","Nevenka","Nikolina","Olga","Petra","Patricija","Paula","Ruza","Ruzena","Ruzica","Renata","Sara","Sabina","Sandra","Sanja","Stela","Suzana","Snjezana","Silvija","Tea","Tamara","Tatjana","Tina","Tihana","Vesna","Valentina","Vlatka","Vanja","Viktorija","Veronika","Vanesa","Zdenka","Zrinka","Zlata","Zeljka"];
function getRandomUsername() {
    const name = names[Math.floor(Math.random() * names.length)];
    const numbers = Math.floor(Math.random() * 9999)

    return name + numbers;
}

function createModal(titleString) {
    const overlay = document.createElement("div");
    overlay.className = "dark-overlay"

    const element = document.createElement("div");
    element.className = "modal closed";

    const title = document.createElement("h2");
    title.textContent = titleString;
    const closeButton = document.createElement("button");
    closeButton.className = "close";

    function close() {
        element.classList.add("closed");
        overlay.classList.remove("fade-in");
        timeout(500).then(() => overlay.remove());
    }

    overlay.addEventListener("click", close)
    closeButton.addEventListener("click", close)

    element.addEventListener("click", (event) => {
        event.stopPropagation();
    })

    element.append(title, closeButton);
    overlay.appendChild(element);

    return {
        reference: element,
        overlay: overlay,
        title: title,
        closeButton: closeButton,

        close: close,
        open: () => {
            document.body.appendChild(overlay);
            timeout(10).then(() => {
                overlay.classList.add("fade-in");
                element.classList.remove("closed");
            })
        }
    }
}

function createInfoModal(title, message) {
    const modal = createModal(title)
    modal.reference.classList.add("info");

    const msg = document.createElement("p");
    msg.textContent = message;

    modal.reference.appendChild(msg);

    return modal;
}

function createLoginModal() {
    const modal = createModal("Prijava");

    const message = document.createElement("p");
    message.className = "messageBox container hidden reset";

    const form = document.createElement("form");

    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Korisničko ime";
    usernameLabel.setAttribute("for", "username");
    const usernameInput = document.createElement("input");
    usernameInput.setAttribute("id", "username");
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("name", "username");
    usernameInput.setAttribute("placeholder", `${getRandomUsername().toLowerCase()}`);
    usernameInput.setAttribute("spellcheck", "false");

    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Zaporka";
    passwordLabel.setAttribute("for", "password");
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("placeholder", "•".repeat(8 + Math.floor(Math.random() * 8)));
    passwordInput.setAttribute("spellcheck", "false");

    const loginBtnContainer = document.createElement("div");
    const loginButton = document.createElement("input");
    loginButton.setAttribute("type", "submit");
    loginButton.setAttribute("name", "login");
    loginButton.setAttribute("value", "Prijavi se")
    loginBtnContainer.appendChild(loginButton);

    const registerLabel = document.createElement("label");
    registerLabel.textContent = "ili";
    registerLabel.setAttribute("for", "register");
    const regBtnContainer = document.createElement("div");
    const registerButton = document.createElement("input");
    registerButton.setAttribute("type", "submit");
    registerButton.setAttribute("name", "register");
    registerButton.setAttribute("value", "Registriraj se")
    regBtnContainer.appendChild(registerButton);

    const loader = createLoader()

    function resetMessageBox() {
        message.className = "messageBox container hidden";
    }

    async function showSuccess(successMessage) {
        resetMessageBox()
        await timeout(10)
        message.style.animation = "msgBoxAnim 0.5s var(--easeOutExpo)"
        message.className = "messageBox successBg container"
        message.textContent = successMessage;
    }

    async function showFailure(errorMessage) {
        resetMessageBox()
        await timeout(10)
        message.style.animation = "msgBoxAnim 0.5s var(--easeOutExpo)"
        message.className = "messageBox errorBg container"
        message.textContent = "⚠️ " + errorMessage + " ⚠️";
    }

    form.append(usernameLabel, usernameInput, passwordLabel, passwordInput, loginBtnContainer, registerLabel, regBtnContainer);
    modal.reference.append(message, form);

    let submitType = "";

    form.querySelectorAll("input[type=submit]").forEach(submitButton => {
        submitButton.addEventListener("click", () => {
            submitType = submitButton.getAttribute("name");
        })
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        form.reset();

        let url = "";

        switch (submitType) {
            case "login":
                url = "https://www.fulek.com/data/api/user/login"
                loginButton.setAttribute("value", "");
                loginBtnContainer.appendChild(loader);
                break
            case "register":
                url = "https://www.fulek.com/data/api/user/register"
                registerButton.setAttribute("value", "");
                regBtnContainer.appendChild(loader);
                break
            default:
                console.error(`No implementation for submitType=${submitType} :(`)
                break
        }

        usernameInput.disabled = true;
        passwordInput.disabled = true;
        loginButton.disabled = true;
        registerButton.disabled = true;

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);

                switch (submitType) {
                    case "login":
                        if (!result.isSuccess) {
                            console.error(result.errorMessages)
                            showFailure("Prijava neuspješna; " + result.errorMessages[0]).catch(console.error);
                            return
                        }

                        showSuccess("Prijava uspješna, prozor će se uskoro zatvoriti.").catch(console.error);

                        localStorage.setItem("token", result.data.token);
                        localStorage.setItem("username", result.data.username);

                        showLoggedInUI();
                        timeout(1500).then(modal.close).catch(console.error);

                        break
                    case "register":
                        if (!result.isSuccess) {
                            console.error(result.errorMessages)
                            showFailure("Registracija neuspješna; " + result.errorMessages[0]).catch(console.error);
                            return
                        }

                        showSuccess("Registracija uspješna, možete se sada prijaviti.").catch(console.error);
                        break
                }
            })
            .catch(error => {
                console.error(error);
                showFailure("Došlo je do nepoznate pogreške, probajte ponovno.").catch(console.error);
            })
            .finally(() => {
                loader.parentNode.removeChild(loader);

                loginButton.setAttribute("value", "Prijavi se");
                registerButton.setAttribute("value", "Registriraj se");

                usernameInput.disabled = false;
                passwordInput.disabled = false;
                loginButton.disabled = false;
                registerButton.disabled = false;
            });
    })

    return modal
}

function logout() {
    const infoModal = createInfoModal("Odjava", "Uspješno ste odjavljeni.")

    infoModal.open()
    timeout(1500).then(infoModal.close).catch(console.error);

    localStorage.removeItem("token")
    localStorage.removeItem("username")
    resetLoggedInChanges();
}

window.addEventListener("load", () => {
    let logoutClickCount = 0;
    const logoutButton = document.querySelector("#logoutButton")
    const originalLogoutText = logoutButton.textContent;

    logoutButton.addEventListener("click", () => {
        if (logoutClickCount >= 1) {
            logout();
        } else {
            logoutClickCount++;
            logoutButton.classList.add("confirm");
            logoutButton.textContent = "Potvrdi odjavu";
        }
    })

    logoutButton.addEventListener("mouseout", () => {
        logoutClickCount = 0;
        logoutButton.classList.remove("confirm");
        logoutButton.textContent = originalLogoutText;
    })

    if (localStorage.getItem("token")) {
        showLoggedInUI();
    }

    document.querySelector("#loginButton").addEventListener("click", () => {
        createLoginModal().open();
    })
});