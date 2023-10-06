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
const form = document.getElementById("search-bar")

form.addEventListener('submit', function(e){
    e.preventDefault()

    const search = document.getElementById("input").value

    const originalName = search.split(' ').join('')
    
    document.getElementById("section-1").innerHTML = ""

    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        document.getElementById("section-1").innerHTML = `
            <img src="${data.avatar_url}"/>
        `

        document.getElementById("names-profile").innerHTML = `
            <h1>${data.name}</>
            <a target="_blank" href="https://www.github.com/${originalName}"><p id="username">@${data.login}</p></a>
        `
        document.getElementById("bio-description").innerHTML = `
            <p id="bio-description">${data.bio}</p>
        `
        document.getElementById("public-repositories").innerHTML = `
            <span>Public Repositories: ${data.public_repos}</span>
        `
        document.getElementById("followers").innerHTML = `
            <span>Followers: ${data.followers}</span>
        `
        document.getElementById("following").innerHTML = `
            <span>Following: ${data.following}</span>
        `

        document.getElementById("projects").innerHTML = `
            <span><img src="./assets/icon-book.svg"><span>
        `
    })
    .catch(error => {
        console.error("Erro ao buscar informações do usuário do GitHub:", error);
    });
})
