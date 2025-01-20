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
        element.classList.add("loggedIn");
    })

    userOnlyElements.forEach((element) => {
        element.classList.add("loggedIn");
    })
}

function resetLoggedInChanges() {
    const noUserElements = document.querySelectorAll(".no-user");
    const userOnlyElements = document.querySelectorAll(".user-only");

    noUserElements.forEach((element) => {
        element.classList.remove("loggedIn");
    })

    userOnlyElements.forEach((element) => {
        element.classList.remove("loggedIn");
    })
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

function createLoader(loadingText) {
    const container = document.createElement("div");
    container.className = "loader";

    const svg = document.createElement("img");
    svg.setAttribute("src", "/icon/infinite-spinner.svg");
    svg.setAttribute("alt", "Loading...");

    const label = document.createElement("p")

    container.append(svg, label);

    return container;
}

/* Names from https://www.fantasynamegenerators.com/croatian-names.php */
const names = ["Andrija","Ante","Adam","Aleksandar","Alan","Antonio","Branimir","Boris","Branko","Bruno","Bozo","Bozidar","Branislav","Budimir","Benjamin","Cvjetko","Dario","Darko","Damir","Davor","Dino","Danijel","David","Denis","Dominik","Domagoj","Duje","Drazen","Dubravko","Dinko","Dalibor","Dejan","Djuro","Emanuel","Ernest","Emil","Eduard","Edvard","Filip","Franjo","Florijan","Gabrijel","Goran","Gordan","Hrvoje","Igor","Ivan","Ivo","Ivica","Imanuel","Ilija","Josip","Jan","Juraj","Jakov","Jasmin","Karlo","Kresimir","Kristijan","Luka","Lucijan","Ljubomir","Ljudevit","Mario","Marko","Mirko","Matej","Martin","Marin","Mladen","Mislav","Miroslav","Matija","Marijan","Nikola","Nenad","Neven","Oliver","Petar","Pavao","Patrik","Renato","Robert","Stjepan","Silvije","Sasa","Sinisa","Sime","Tomislav","Tihomir","Toni","Teo","Velimir","Vedran","Viktor","Vinko","Vladimir","Vanja","Vedran","Zdenko","Zdravko","Zvonimir","Zvonko","Zlatko","Zoran","Zarko","Zeljko","Anamarija","Ana","Anastazija","Anica","Andreja","Anita","Antonija","Andjela","Anja","Branka","Barbara","Blazenka","Bozica","Cvijeta","Danica","Danijela","Dijana","Dora","Dubravka","Daria","Dubravka","Dorotea","Djurdja","Ema","Ela","Ena","Elizabeta","Eva","Gabrijela","Gorana","Gordana","Helena","Hana","Irena","Ines","Irma","Ivana","Izabela","Jadranka","Jagoda","Jana","Jasna","Jelena","Josipa","Julija","Katarina","Klara","Kristina","Ksenija","Kornelija","Karolina","Karla","Lana","Laura","Lara","Lea","Lidija","Lucija","Leonarda","Ljiljana","Ljubica","Marta","Magdalena","Marija","Mia","Maja","Marina","Martina","Mateja","Mirjam","Mirjana","Monika","Nada","Natalija","Nevenka","Nikolina","Olga","Petra","Patricija","Paula","Ruza","Ruzena","Ruzica","Renata","Sara","Sabina","Sandra","Sanja","Stela","Suzana","Snjezana","Silvija","Tea","Tamara","Tatjana","Tina","Tihana","Vesna","Valentina","Vlatka","Vanja","Viktorija","Veronika","Vanesa","Zdenka","Zrinka","Zlata","Zeljka"];
function getRandomUsername() {
    const name = names[Math.floor(Math.random() * names.length)];
    const numbers = Math.floor(Math.random() * 9999)

    return name + numbers;
}

function openLoginDialog() {
    const overlay = document.createElement("div");
    overlay.className = "dark-overlay"

    const element = document.createElement("dialog");
    element.className = "login-dialog closed";

    const title = document.createElement("h2");
    title.textContent = "Prijava";
    const closeButton = document.createElement("button");
    closeButton.className = "close";

    const form = document.createElement("form");

    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Korisničko ime";
    usernameLabel.setAttribute("for", "username");
    const usernameInput = document.createElement("input");
    usernameInput.setAttribute("id", "username");
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("name", "username");
    usernameInput.setAttribute("placeholder", `${getRandomUsername().toLowerCase()}`);

    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Zaporka";
    passwordLabel.setAttribute("for", "password");
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("placeholder", "•".repeat(8 + Math.floor(Math.random() * 8)));

    const loginButton = document.createElement("input");
    loginButton.setAttribute("type", "submit");
    loginButton.setAttribute("name", "login");
    loginButton.setAttribute("value", "Prijavi se")

    const registerLabel = document.createElement("label");
    registerLabel.textContent = "ili";
    registerLabel.setAttribute("for", "register");
    const registerButton = document.createElement("input");
    registerButton.setAttribute("type", "submit");
    registerButton.setAttribute("name", "register");
    registerButton.setAttribute("value", "Registriraj se")

    const loader = createLoader()
    loader.style.display = "none";

    function closeDialog() {
        element.classList.add("closed");
        overlay.classList.remove("fade-in");
        timeout(500).then(() => overlay.remove());
    }

    function showSuccess() {

    }

    function showFailure(errorMessage) {

    }

    overlay.addEventListener("click", closeDialog)
    closeButton.addEventListener("click", closeDialog)

    element.addEventListener("click", (event) => {
        event.stopPropagation();
    })

    form.append(usernameLabel, usernameInput, passwordLabel, passwordInput, loginButton, registerLabel, registerButton);
    element.append(title, closeButton, form, loader);
    overlay.appendChild(element);

    let submitType = "";
    let pending = false;
    let submitted = false;

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
        form.style.display = "none";
        loader.style.display = "block";

        let url = "";

        switch (submitType) {
            case "login":
                url = "https://www.fulek.com/data/api/user/login";
                break;
            case "register":
                url = "https://www.fulek.com/data/api/user/register";
                break;
            default:
                console.error(`No implementation for submitType=${submitType} :(`);
                break;
        }

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

                if (!result.isSuccess) {
                    console.log(`Login failed! Error message: ${result.errorMessages[0]}`);
                    showFailure(result.errorMessages[0]);
                    return;
                }

                localStorage.setItem("token", result.data.token);
                showSuccess();
                showLoggedInUI();
            })
            .catch(console.error);
    })

    document.body.appendChild(overlay);

    timeout(10).then(() => {
        overlay.classList.add("fade-in");
        element.classList.remove("closed");
    })
}

function logoff() {
    localStorage.removeItem("token")
    resetLoggedInChanges();
}

window.addEventListener("load", () => {
    const loginButton = document.querySelector("#loginButton")
    loginButton.addEventListener("click", openLoginDialog)

    const logoffButton = document.querySelector("#logoffButton")
    logoffButton.addEventListener("click", logoff)

    if (localStorage.getItem("token") !== null) {
        showLoggedInUI();
    }
});