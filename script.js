const langSelect = document.querySelector('.language')

function changeLanguage() {
    const navLink1 = document.querySelector('.nav-link1')
    const navLink2 = document.querySelector('.nav-link2')
    const navLink3 = document.querySelector('.nav-link3')
    const mainText1 = document.querySelector('#main-text1')
    const mainText2 = document.querySelector('#main-text2')
    const mainText3 = document.querySelector('#main-text3')
    const mainText4 = document.querySelector('#main-text4')
    const textLink1 = document.querySelector('#project-link1')
    const textLink2 = document.querySelector('#project-link2')
    const textLink3 = document.querySelector('#project-link3')
    const textLink4 = document.querySelector('#project-link4')

    if (langSelect.value === 'english'){
        navLink1.innerHTML = `Main`
        navLink2.innerHTML = `Projects`
        navLink3.innerHTML = `Contact`
        mainText1.innerHTML = `Rock-Paper-Scissors`
        mainText2.innerHTML = `Currency Converter`
        mainText3.innerHTML = `Calculator`
        mainText4.innerHTML = `Digital Clock`
        textLink1.innerHTML = `Access`
        textLink2.innerHTML = `Access`
        textLink3.innerHTML = `Access`
        textLink4.innerHTML = `Access`
    }

    if (langSelect.value === 'portuguese'){
        navLink1.innerHTML = `Menu`
        navLink2.innerHTML = `Projetos`
        navLink3.innerHTML = `Contato`
        mainText1.innerHTML = `Jokenpô`
        mainText2.innerHTML = `Conversor de Moedas`
        mainText3.innerHTML = `Calculadora`
        mainText4.innerHTML = `Relógio Digital`
        textLink1.innerHTML = `Acessar`
        textLink2.innerHTML = `Acessar`
        textLink3.innerHTML = `Acessar`
        textLink4.innerHTML = `Acessar`
    }

}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = 'assets/menu_white_36dp.png'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'assets/close_white_36dp.png'
    }
}

language.addEventListener('change', changeLanguage)