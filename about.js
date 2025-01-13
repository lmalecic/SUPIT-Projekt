// Pričekaj da se učita prozor kako bi mogli dohvatiti elemente
window.addEventListener("load", async () => {
    const elements = document.querySelectorAll(".moving-slideshow");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const items = element.querySelectorAll(".moving-slideshow-item");

        for (let j = 0; j < items.length; j++) {
            const item = items[j];
            let dupe = item.cloneNode(true);
            element.appendChild(dupe);
        }
    }
})