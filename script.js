let btnTheme = document.querySelector('#btn-theme')
btnTheme.addEventListener('click', ()=> {
    toogleMode()
})

function toogleMode() {
    let html = document.documentElement
    html.classList.toggle("light")
    const imgIcon = document.querySelector('#icon-theme')
    if (html.classList.contains("light")) {
        imgIcon.setAttribute('src', './assets/icon-sun.svg')
    } else {
        imgIcon.setAttribute('src', './assets/icon-moon.svg')
    }
}

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

