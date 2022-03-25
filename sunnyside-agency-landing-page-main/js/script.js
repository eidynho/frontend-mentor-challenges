const menuHamburguer = document.querySelector('.menu-hamburguer')
const nav = document.querySelector('.polygon')


menuHamburguer.onclick = () => {
    nav.classList.toggle('hidden')
}

window.onresize = () => {
    if (visualViewport.width > 783) {
        nav.classList.add('hidden')
    }
}