// Pričekaj da se učita prozor kako bi mogli dohvatiti elemente
window.addEventListener("load", async () => {
    const elements = document.querySelectorAll(".moving-slideshow");

    let offset = 0;
    for (let i = 0; i < elements.length; i++) {
        const container = elements[i];
        const items = Array.from(container.children)

        for (let j = 0; j < items.length; j++) {
            const item = items[j];
            const cycle = 0;

            async function moveLeft() {
                offset -= 1/10;
                container.style.transform = `translateX(${offset}%)`;

                // Provjeri iteme
                const rect = item.getBoundingClientRect();
                if (j === 0) {
                    console.log(rect.x);
                }
                if (rect.x + rect.width >= 0) {
                    return requestAnimationFrame(await moveLeft);
                }

                if (j === 0) {
                    console.log("OUT");
                }

                requestAnimationFrame(await moveLeft);
            }

            moveLeft().catch(console.error);
        }
    }
})