// alternar entre light mode e dark mode
let btnTheme = document.querySelector('#btn-theme')
btnTheme.addEventListener('click', ()=> {
    toogleMode()
})

function toogleMode() {
    let html = document.documentElement
    html.classList.toggle("light")

    const imgIcon = document.querySelector('#icon-theme')
    const svgPin = document.querySelector('#img-pin')
    const svgLink = document.querySelector('#img-link')
    const svgCompany = document.querySelector('#img-company')
    const svgLinkedIn = document.querySelector('#img-linkedin')
    const svgGitHub = document.querySelector('#img-github')

    if (html.classList.contains("light")) {
        imgIcon.setAttribute('src', './assets/icon-moon.svg')
        svgPin.setAttribute('src', './assets/icon-pin-white.svg')
        svgLink.setAttribute('src', './assets/icon-link-white.svg')
        svgCompany.setAttribute('src', './assets/icon-company-white.svg')
        svgLinkedIn.setAttribute('src', './assets/icon-linkedin-white.svg')
        svgGitHub.setAttribute('src', './assets/icon-github-white.svg')
    } else {
        imgIcon.setAttribute('src', './assets/icon-sun.svg')
        svgPin.setAttribute('src', './assets/icon-pin.svg')
        svgLink.setAttribute('src', './assets/icon-link.svg')
        svgCompany.setAttribute('src', './assets/icon-company.svg')
        svgLinkedIn.setAttribute('src', './assets/icon-linkedin.svg')
        svgGitHub.setAttribute('src', './assets/icon-github.svg')
    }
}

// mostrar resultado 
let btnSearch = document.querySelector('#btn-search')
let containerResult = document.querySelector('#container-result')
let input = document.querySelector('#input')

btnSearch.addEventListener('click', ()=> {
    if(input.value === "") {
        alert('Preencha o campo')
    } else {
        containerResult.style.display="flex"
    }
})

// integração com API
