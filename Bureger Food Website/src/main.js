const menuDivClickbutton = document.getElementById('menuIcone')

const NavbarLinksDiv = document.getElementById('navBarLInks')

const closeIconeDiv = document.getElementById("closeFinish")

menuDivClickbutton.addEventListener("click", () => {
    return (
        NavbarLinksDiv.classList.remove("hidden")
    )
})

closeIconeDiv.addEventListener("click", () => {
    return(
        NavbarLinksDiv.classList.add("hidden")
    )
})
