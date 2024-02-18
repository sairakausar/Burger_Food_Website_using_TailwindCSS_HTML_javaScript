const menuDivClickbutton = document.getElementById('menuIcone')

const NavbarLinksDiv = document.getElementById('navBarLInks')

menuDivClickbutton.addEventListener("click", () => {
    return (
        NavbarLinksDiv.classList.remove("hidden")
    )
})
