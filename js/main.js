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
const surnames = ["Abramović","Acinger","Adamović","Adžić","Alajbeg","Aleksić","Alić","Alujević","Ančić","Anđelić","Andreškić","Andrić","Andrijanić","Andrijašević","Andrijević","Anić","Aničić","Antić","Antolić","Antolović","Antonijević","Antunović","Anušić","Aračić","Arambašić","Arbanas","Atlan","Babić","Bačić","Badanjak","Bagarić","Bagić","Bajamić","Bajić","Bajlo","Bakić","Baković","Balaban","Balen","Balenović","Balić","Baljak","Balog","Ban","Banić","Banovac","Banović","Barac","Barbalić","Barbarić","Barbor","Bare","Barešić","Barić","Baričević","Barišić","Bartaković","Bartolić","Bartolović","Bartulović","Barukčić","Bašić","Bastašić","Batinić","Batur","Bebić","Bedeković","Begić","Begović","Bekavac","Bekić","Belić","Beljan","Belobrajdić","Belošević","Benčić","Benić","Benko","Benković","Bertović","Bešić","Bešlić","Bičanić","Bijelić","Bikić","Bilandžić","Bilandžija","Bilić","Bilobrk","Biloglav","Bilonić","Bionder","Biondić","Bišćan","Biskup","Bistrović","Blagojević","Blašković","Blažeković","Blažević","Blažić","Boban","Bobić","Bočina","Bogdan","Bogdanić","Bogdanović","Bogović","Bojanić","Bojić","Boras","Borić","Borilović","Borjanić","Borojević","Borovac","Borović","Bosak","Bosanac","Bošković","Bosnić","Bošnjak","Bošnjaković","Botica","Bozanić","Božanović","Božić","Božićević","Božinović","Bračun","Bradarić","Bradić","Brzica","Brajdić","Brajković","Brala","Bralić","Braut","Brčić","Brdar","Brekalo","Brgan","Brkić","Brkljačić","Brković","Brlek","Brnabić","Brnetić","Brnić","Brozović","Brulja","Brusić","Bubalo","Bubić","Budić","Budimir","Bukovac","Bukvić","Bulat","Bulić","Buljan","Buljubašić","Bunčić","Bunić","Burić","Burišić","Buršić","Bušić","Butković","Butorac","Bazina","Bužančić","Buzov","Čabraja","Čačić","Čagalj","Čalić","Capan","Car","Carević","Carić","Časni","Čavlović","Čečelja","Čelina","Ceranić","Cesarec","Čičak","Čigir","Cindrić","Čirjak","Čolak","Ćolić","Ćorak","Čorluka","Čorić","Čosić","Ćović","Crčić","Crnić","Črnjak","Crnković","Ćuk","Ćulić","Čulina","Čupić","Curić","Čurković","Cvetko","Cvetković","Cvijanović","Cvitanović","Cvitković","Dadić","Dakić","Damjanović","Dasović","Davidović","Debeljak","Dedić","Dejanović","Delač","Delić","Devčić","Dević","Divić","Dudaš","Djaković","Đorđević","Đukić","Đurđević","Đureković","Đurić","Đurin","Đurak","Đurkin","Đujić","Dobrić","Dodig","Dolenec","Domazet","Dominiković","Domitrović","Dorić","Dodlek","Došen","Draganić","Dragić","Dragičević","Dragojević","Drašković","Draženović","Dražić","Družeta","Dubravac","Dugandžić","Dujić","Dujmić","Dujmović","Dukarić","Dukić","Dumančić","Dundović","Duvnjak","Džaja","Erceg","Ercegović","Fabijanić","Fabijanković","Ferenčak","Feretić","Ferić","Filičić","Filipović","Fotez","Franić","Franičević","Franjić","Franjković","Franković","Friščić","Frketić","Fumić","Fišter","Feketija","Francisković","Frijang","Fazlić","Gabrić","Gajić","Gajski","Galić","Govorčinović","Gavranić","Gavrilović","Galjanić","Galović","Garić","Gašljević","Gaspar","Gasparić","Gasparović","Gaus","Gavran","Gavrić","Gavranović","Glasnović","Glavan","Glavaš","Glavić","Glavica","Glavinić","Gledec","Golub","Golubić","Goreta","Gojak","Gorički","Gotal","Grabar","Grabovac","Grabrovec","Gracin","Grahovac","Granić","Grbac","Grbeša","Grbić","Grčić","Grdenić","Grdić","Grđan","Grdović","Gregurić","Gregurek","Grgurić","Grizelj","Grubić","Grubišić","Grubor","Grzan","Gudelj","Gulin","Gundić","Hačko","Hajni","Hadžić","Haluzan","Hanzek","Hečimović","Herceg","Hercigonja","Herman","Hodak","Hodžić","Horvat","Horvatić","Hranilović","Hren","Hrgović","Hranj","Hrnjkaš","Hrončić","Hrsak","Hrvatin","Hrvojić","Hrženjak","Husnjak","Hužjak","Igrec","Ilić","Iličić","Iskra","Ivančević","Ivančić","Ivandić","Ivanić","Ivanišević","Ivanušić","Ivanković","Ivanović","Ivezić","Ivić","Ivković","Ivošević","Jagić","Jagodić","Jakin","Jakić","Jovanović","Josipović","Jakopović","Jakovac","Jaković","Jakovljević","Jakšić","Jakus","Jambrešić","Jambrović","Janeš","Janjić","Janković","Jarak","Jefak","Jelavić","Jelačić","Jelčić","Jelenić","Jelić","Jeličić","Jelinić","Jelušić","Jerčić","Jergović","Jerković","Jurković","Jerkončić","Jokić","Jonjić","Josić","Jović","Jovičić","Jozić","Jurilj","Jug","Jugović","Jukić","Jurak","Juras","Jurčević","Jurčić","Juretić","Jurić","Juričić","Jurina","Jurišić","Jurjević","Jurlina","Jušić","Jurakić","Kadić","Kalinić","Kapetanović","Karabatić","Karabajić","Karaman","Karamatić","Kardum","Karlović","Katalenić","Katalinić","Katavić","Katušić","Kavran","Kekez","Kelava","Kelemen","Kirin","Kitarović","Klaić","Kljuić","Klarić","Klanac","Klašić","Kljajić","Klaić","Klobučar","Knapić","Knez","Knežević","Knežić","Knezović","Kocijan","Kokić","Kokot","Kolak","Kolar","Kolarić","Kolceg","Kolić","Kolonić","Komadina","Komar","Komljenović","Komušar","Kopić","Koprivec","Koprivnjak","Kordić","Koren","Kortizija","Kos","Kosanović","Košić","Kostelac","Kostić","Košutić","Kovač","Kovačić","Kovaček","Kovačević","Kovarbašić","Kozbašić","Kozić","Kozina","Kozul","Krajačić","Krajina","Krajinović","Krajnović","Kralj","Kraljević","Kraljić","Kramar","Kramarić","Kranjčec","Kranjec","Krčelić","Kremenić","Krešić","Krijan","Kristić","Kristo","Krivić","Križan","Kremić","Križanac","Križanić","Križanović","Krizmanić","Krmpotić","Krnić","Krtić","Krolo","Krpan","Kršnik","Krstić","Kruljac","Krznar","Krznarić","Kučina","Kumiša","Kuhar","Kujundžić","Kukec","Kukić","Kukolja","Kulas","Kulić","Kunić","Kunica","Kupina","Kurtović","Kušić","Kutleša","Kuzmanić","Kuzmić","Kuzmanović","Kvešić","Labas","Lacković","Lalić","Lang","Lašić","Lazar","Lazić","Lekić","Leko","Leljak","Leš","Lešić","Leskovar","Levačić","Levak","Lipoščak","Lipovac","Lisica","Lisjak","Ljubanović","Ljubić","Ljubičić","Lončar","Lončarveić","Lončarić","Lonza","Lovreković","Lovrenčić","Lovrić","Ložančić","Ložić","Lubina","Lucić","Lučić","Lukac","Lukačević","Lukačić","Luketić","Lukić","Lukšić","Lulić","Macan","Maček","Madunić","Magdić","Magić","Magovac","Magzan","Mahovlić","Majcen","Majdandžić","Majer","Majnarić","Majstorović","Maksimović","Malenica","Maleš","Maletić","Malešević","Malić","Malnar","Mamić","Mandarić","Mandić","Manđurić","Manojlović","Marak","Marković","Maras","Marasović","Marčec","Maretić","Margetić","Marić","Maričić","Marijanović","Marinčić","Marinić","Marinković","Marinović","Marjanović","Markulin","Markušić","Marović","Maršić","Martić","Martinčević","Martinčić","Martinić","Martinović","Marušić","Mašić","Matanović","Matas","Matenda","Matešić","Matić","Matijas","Matijašević","Matijašić","Matijević","Matković","Matošević","Matulić","Mauzer","Medančić","Medić","Medved","Merkas","Mesarić","Mesić","Meštrović","Merlin","Mičić","Mihajlović","Mihalić","Mihaljević","Mihelčić","Mihić","Mijatović","Mijić","Mijatović","Mijić","Mikačić","Mikešić","Mikić","Mikulčić","Mikulec","Mikulić","Milaković","Milanović","Milardović","Milas","Milašinčić","Milat","Milčić","Miletić","Milić","Miličević","Miličić","Milinković","Milković","Miloš","Milošević","Miočić","Mirković","Mišić","Mišković","Miškulin","Mitrović","Mlinac","Mlinar","Mlinarić","Modrić","Molnar","Morić","Markovčić","Mrakuzić","Mrkonjić","Mršić","Mušić","Mustapić","Mujčinović","Naglić","Nakić","Nekić","Nemet","Nenadić","Nerovčić","Nikić","Nikolić","Nikšić","Nimac","Novačić","Novak","Novaković","Novosel","Novoselec","Nurkić","Nuskern","Obradović","Ogribić","Olujić","Opačak","Opačić","Oreški","Orešković","Orlić","Oslić","Orlović","Orsluić","Osojnički","Ostojić","Pačić","Padovan","Pajić","Palčić","Palić","Pandžić","Panić","Panjić","Papić Papratović","Pašalić","Pašković","Paulić","Pavelić","Paunović","Pavić","Pavičić","Pavković","Pavlaković","Pavlek","Pavletić","Parlov","Papoči","Pavlinić","Pavlović","Pejić","Pešić","Pejaković","Penić","Perak","Perin","Perčić","Perdija","Perić","Perica","Peričić","Periša","Perković","Pernar","Perović","Perišić","Peruško","Pervan","Petković","Petrić","Pretić","Petričević","Petrović","Petrušić","Pintar","Pintarić","Piškulić","Plantak","Plazibat","Pleše","Pleša","Podrug","Pogačić","Poljić","Poljak","Pongrac","Popić","Popović","Poropat","Posavac","Posavec","Potkovac","Potočki","Prosinečki","Požgaj","Praljak","Pranjić","Prelošnjak","Preložnjak","Prgomet","Pribanić","Primorac","Prodan","Prodanović","Prpić","Prskalo","Prugovečki","Puljić","Pupić","Pusić","Puškarić","Račić","Radaković","Radović","Radan","Radanović","Radetić","Radić","Radišić","Radljević","Radman","Radočaj","Radojčić","Radolović","Radoš","Radonić","Radošević","Radovanović","Radulović","Raguz","Rajčić","Rajić","Rajković","Rak","Rakek","Rakić","Ramić","Rimac","Ramljak","Ranogajec","Rašić","Ratković","Razum","Ravlić","Rebić","Rebrović","Rendulić","Repar","Rešetar","Ribarić","Ribić","Ribičić","Ristić","Rodić","Rodin","Rogić","Rogina","Rogošić","Roguljić","Romić","Rončević","Rožić","Rozman","Rubinić","Rudman","Rukavina","Rupčić","Ružić","Sabalj","Sabalja","Šabić","Šablić","Sabljak","Sabljić","Sabolić","Šakić","Šalaj","Šalić","Salinović","Salopek","Šafar","Samardžija","Samardžić","Sambunjak","Šantek","Šantić","Šarčević","Starčević","Savić","Šarić","Širić","Sedlar","Sever","Šestan","Sertić","Šegota","Sekulić","Separović","Šertić","Šestak","Šikić","Šiklić","Šimac","Šimek","Šimić","Šimunec","Šimičić","Šimunić","Šimunković","Šimunović","Sinković","Šintić","Sipek","Škara","Skender","Škobelj","Skok","Škorić","Škrlec","Skrnjug","Škrtić","Skugor","Škvorc","Sladić","Slavić","Slavujević","Slišković","Slunjski","Smičiklas","Smiljanić","Smolčić","Smolić","Sodan","Sokač","Sokol","Sokolić","Soldo","Solić","Sorić","Sošić","Šoštarić","Spajić","Spanić","Špiljak","Štrek","Špehar","Spicijarić","Sporčić","Šprem","Srbljić","Sršen","Stančić","Staničić","Stanić","Stanišić","Stanković","Štefanac","Štefančić","Štefanec","Štefanić","Stepić","Stepinac","Stilinović","Štimac","Stipanović","Stipetić","Stipić","Stipetić","Stjepanović","Stojaković","Stojanović","Stojčević","Stojić","Stojković","Strošić","Štrbac","Stričević","Stulić","Subotić","Sučić","Sudar","Sunjić","Supan","Suprinović","Šušak","Sušanj","Suša","Šutalo","Svalina","Svetličić","Tadić","Takac","Tanacković","Tepeš","Terzić","Tkalčec","Todorović","Tokić","Tolić","Tomas","Tomašević","Tomašić","Tomašković","Tomić","Tomičić","Tomljanović","Tomljenović","Tomšić","Tonković","Topalović","Topalčić","Topić","Topolovec","Tošić","Tot","Trbojević","Trobić","Trstenjak","Trumbetić","Tunjić","Turčić","Turk","Turkalj","Turković","Tušek","Tutić","Udovičić","Ukalović","Umljenović","Uzelac","Valčić","Valentić","Valjak","Varga","Varoščić","Vedrić","Vekić","Velić","Vidak","Vidaković","Vidas","Vidić","Vidoš","Vidović","Vidulić","Vincek","Vinčetić","Vinković","Višić","Višković","Višnjić","Vitez","Vlačić","Vlahović","Vlah","Vlašić","Vodopija","Vojković","Vojnović","Vojvodić","Volarević","Volarić","Vozetić","Vrabec","Vrančić","Vranić","Vranjić","Vranješ","Vranjković","Vrban","Vrbanec","Vrbanić","Vrdoljak","Vrebac","Vrkić","Vučetić","Vučić","Vučina","Vučinić","Vučković","Vugrinec","Vujčić","Vujević","Vujić","Vujnović","Vuk","Vukadin","Vukas","Vukasović","Vuksan","Vukelić","Vukić","Vukman","Vukoja","Vukojević","Vuković","Vukšić","Vukušić","Vuletić","Vulić","Volić","Vušić","Zagorac","Zajec","Žanić","Žarković","Zauhar","Zupan","Župan","Zebić","Zec","Zečević","Zekić","Železnjak","Želić","Žilić","Ženić","Žeravica","Žganec","Žgela","Žuvjivuć","Židak","Žižić","Zlatunić","Zoretić","Zovko","Zorić","Zubak","Zubčić","Zubović","Žugaj","Žugec","Zulim","Zunec","Žunić","Županić","Zuvić","Žužić","Zrinski"];

function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomSurname() {
    return surnames[Math.floor(Math.random() * surnames.length)];
}

function getRandomPerson() {
    return {
        name: getRandomName(),
        surname: getRandomSurname(),

        getEmail: function() {
            return `${this.name.toLowerCase()}.${this.surname.toLowerCase()}@gmail.com`;
        },

        toString: function() {
            return `${this.name} ${this.surname}`;
        }
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 9999);
}

function getUsername(name, number) {
    return name.toLowerCase() + number;
}

function getRandomUsername() {
    return getUsername(getRandomName(), getRandomNumber());
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

function createContactModal() {
    const modal = createModal("Kontaktirajte nas!");
    const form = document.createElement("form");

    const randomPerson = getRandomPerson();

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "contactNameInput");
    nameLabel.textContent = "Puno ime";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "contactNameInput");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "FullName");
    nameInput.setAttribute("spellcheck", "false");
    nameInput.setAttribute("placeholder", randomPerson.toString());

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "contactEmailInput");
    emailLabel.textContent = "E-mail";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("id", "contactEmailInput");
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("name", "Email");
    emailInput.setAttribute("placeholder", randomPerson.getEmail())
    emailInput.setAttribute("spellcheck", "false");

    const importanceLabel = document.createElement("label");
    importanceLabel.setAttribute("for", "contactImportanceInput");
    importanceLabel.textContent = "Važnost";
    const importanceInputContainer = document.createElement("div");
    importanceInputContainer.classList.add("importanceInputContainer");
    const option1 = document.createElement("input");
    option1.classList.add("lowImportance");
    option1.setAttribute("type", "radio");
    option1.setAttribute("name", "Importance");
    option1.setAttribute("value", "Niska");
    const option2 = document.createElement("input");
    option2.classList.add("mediumImportance");
    option2.setAttribute("type", "radio");
    option2.setAttribute("name", "Importance");
    option2.setAttribute("value", "Srednja");
    const option3 = document.createElement("input");
    option3.classList.add("highImportance");
    option3.setAttribute("type", "radio");
    option3.setAttribute("name", "Importance");
    option3.setAttribute("value", "Visoka");
    importanceInputContainer.append(option1, option2, option3);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("name", "submit");
    submitButton.setAttribute("value", "Pošalji");

    form.append(nameLabel, nameInput, emailLabel, emailInput, importanceLabel, importanceInputContainer, submitButton);
    modal.reference.appendChild(form);

    return modal;
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

        function setInputDisabled(disabled) {
            usernameInput.disabled = disabled;
            passwordInput.disabled = disabled;
            loginButton.disabled = disabled;
            registerButton.disabled = disabled;
        }

        setInputDisabled(true)

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
                            setInputDisabled(false);
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
                        setInputDisabled(false);
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
            logoutButton.style.animation = "logoutConfirm 1s var(--easeOutExpo)";
        }
    })

    logoutButton.addEventListener("mouseout", () => {
        logoutClickCount = 0;
        logoutButton.classList.remove("confirm");
        logoutButton.textContent = originalLogoutText;
        logoutButton.style.animation = "";
    })

    if (localStorage.getItem("token")) {
        showLoggedInUI();
    }

    document.querySelector("#loginButton").addEventListener("click", () => {
        createLoginModal().open();
    })

    document.querySelector("#contactButton").addEventListener("click", () => {
        createContactModal().open();
    })
});