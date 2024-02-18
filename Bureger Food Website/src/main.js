const menuDivClickbutton = document.getElementById('menuIcone')

const NavbarLinksDiv = document.getElementById('navBarLInks')

const closeIconeDiv = document.getElementById("closeFinish")

const NavBarLinks = document.querySelectorAll('.Nav__Link')



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

NavBarLinks.forEach((link) => {
    return (
        link.addEventListener('click', () => {
            return (
                NavbarLinksDiv.classList.add("hidden")
            )
        } )
    )
})

