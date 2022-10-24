// Pop-up header

const body = document.querySelector('body')
const burger = document.querySelector('.burger')
const headerLogo = document.querySelector('.header__logo_link')
const navigation = document.querySelector('.nav')
const logo = document.querySelector('.header__logo_link')
const logoImage = document.querySelector('.header__logo_img')
const about = document.querySelector('.nav__link_active')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active')
    headerLogo.classList.toggle('header__link_link_active')
    navigation.classList.toggle('nav_active')
    logo.classList.toggle('header__logo_link_active')
    logoImage.classList.toggle('header__logo_img_active')
    body.classList.toggle('body_active')
    about.classList.toggle('nav__link_active')
});

navigation.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav')) {
        burger.classList.toggle('burger_active')
        headerLogo.classList.toggle('header__link_link_active')
        navigation.classList.toggle('nav_active')
        logo.classList.toggle('header__logo_link_active')
        logoImage.classList.toggle('header__logo_img_active')
        body.classList.toggle('body_active')
        about.classList.toggle('nav__link_active')
    }
});


// progress-bar

const buttons = document.querySelectorAll('.progress__btns');
const dollars = document.querySelectorAll('.progress__item');
const amount = document.querySelector('.progress__field')

function activateProgressBar(event) {
    buttons.forEach((elem, i) => {
        elem.addEventListener(event, () => {
            buttons.forEach((el) => {
                el.classList.remove('progress__btns_btn__activ');
            })
            dollars.forEach((el) => {
                el.classList.remove('progress__item_activ');
            })

            elem.classList.add('progress__btns_btn__activ');

            dollars.forEach((elem, j) => {
                if (i == j) {
                    elem.classList.add('progress__item_activ');
                    amount.value = Number(dollars[j].textContent.slice(1, dollars[j].textContent.length))
                }
            })
        })
    })
}

activateProgressBar('click');

amount.addEventListener('input', () => {
    if (amount.value.length > 4) {
        amount.value = amount.value.substr(0, 4)
    }

    buttons.forEach((el) => {
        el.classList.remove('progress__btns_btn__activ');
    })

    dollars.forEach((el, i) => {
        el.classList.remove('progress__item_activ');
        if (amount.value == el.textContent.slice(1, el.textContent.length)) {
            el.classList.add('progress__item_activ');
        }
        buttons.forEach((elem, j) => {
            if (amount.value == el.textContent.slice(1, el.textContent.length) && i === j) {
                elem.classList.add('progress__btns_btn__activ');
            }
        })
    })
})