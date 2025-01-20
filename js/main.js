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

function createLoader(loadingText) {
    const container = document.createElement("div");
    container.className = "loader";

    const svg = document.createElement("img");
    svg.setAttribute("src", "/icon/infinite-spinner.svg");
    svg.setAttribute("alt", "Loading...");

    const label = document.createElement()

    container.append(svg, label);

    return container;
}

/* Names from https://www.fantasynamegenerators.com/croatian-names.php */
const names = ["Andrija","Ante","Adam","Aleksandar","Alan","Antonio","Branimir","Boris","Branko","Bruno","Božo","Božidar","Branislav","Budimir","Benjamin","Cvjetko","Dario","Darko","Damir","Davor","Dino","Danijel","David","Denis","Dominik","Domagoj","Duje","Dražen","Dubravko","Dinko","Dalibor","Dejan","Đuro","Emanuel","Ernest","Emil","Eduard","Edvard","Filip","Franjo","Florijan","Gabrijel","Goran","Gordan","Hrvoje","Igor","Ivan","Ivo","Ivica","Imanuel","Ilija","Josip","Jan","Juraj","Jakov","Jasmin","Karlo","Krešimir","Kristijan","Luka","Lucijan","Ljubomir","Ljudevit","Mario","Marko","Mirko","Matej","Martin","Marin","Mladen","Mislav","Miroslav","Matija","Marijan","Nikola","Nenad","Neven","Oliver","Petar","Pavao","Patrik","Renato","Robert","Stjepan","Silvije","Saša","Siniša","Šime","Tomislav","Tihomir","Toni","Teo","Velimir","Vedran","Viktor","Vinko","Vladimir","Vanja","Vedran","Zdenko","Zdravko","Zvonimir","Zvonko","Zlatko","Zoran","Žarko","Željko","Anamarija","Ana","Anastazija","Anica","Andreja","Anita","Antonija","Anđela","Anja","Branka","Barbara","Blaženka","Božica","Cvijeta","Danica","Danijela","Dijana","Dora","Dubravka","Daria","Dubravka","Dorotea","Đurđa","Ema","Ela","Ena","Elizabeta","Eva","Gabrijela","Gorana","Gordana","Helena","Hana","Irena","Ines","Irma","Ivana","Izabela","Jadranka","Jagoda","Jana","Jasna","Jelena","Josipa","Julija","Katarina","Klara","Kristina","Ksenija","Kornelija","Karolina","Karla","Lana","Laura","Lara","Lea","Lidija","Lucija","Leonarda","Ljiljana","Ljubica","Marta","Magdalena","Marija","Mia","Maja","Marina","Martina","Mateja","Mirjam","Mirjana","Monika","Nada","Natalija","Nevenka","Nikolina","Olga","Petra","Patricija","Paula","Ruža","Ružena","Ružica","Renata","Sara","Sabina","Sandra","Sanja","Stela","Suzana","Snježana","Silvija","Tea","Tamara","Tatjana","Tina","Tihana","Vesna","Valentina","Vlatka","Vanja","Viktorija","Veronika","Vanesa","Zdenka","Zrinka","Zlata","Željka"];
function getRandomUsername() {
    const name = names[Math.floor(Math.random() * names.length)];
    let numbers = "";

    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
        numbers += Math.floor(Math.random() * 10);
    }

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
            .then(result => console.log(result))
            .catch(console.error);
    })

    document.body.appendChild(overlay);

    timeout(10).then(() => {
        overlay.classList.add("fade-in");
        element.classList.remove("closed");
    })
}

window.addEventListener("load", () => {
    const loginButton = document.querySelector("#loginButton")
    loginButton.addEventListener("click", openLoginDialog)
});