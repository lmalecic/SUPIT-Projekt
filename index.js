// Pričekaj da se učita prozor kako bi mogli dohvatiti elemente
window.addEventListener("load", async () => {
    // document.getElementById("nastavniPlan").classList.add("isLoggedIn");
    const elements = document.getElementsByClassName("typewriter")

    // TypeWriter
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        element.setAttribute("step", "0")
        await typeWriter(element)
    }
})

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function typeWriter(element) {
    let txt = element.getAttribute("text")
    let step = parseInt(element.getAttribute("step"))

    if (step > txt.length) {
        return true
    }

    if (step === 0) {
        element.classList.add("text-appear")
    }

    element.innerHTML = txt.slice(0, step)
    element.setAttribute("step", step + 1)

    await timeout(40)
    await typeWriter(element)
}