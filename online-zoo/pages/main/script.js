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

// Carousel testimonials

const inputRange = document.querySelector('.testimonials__scrollbar_scroll')
const testimonialsSlider = document.querySelector('.testimonials__wrapper')

inputRange.addEventListener('input', () => {
    testimonialsSlider.style.transform = `translateX(-${inputRange.value * 9.17}%)`
    console.log ('little')
})

// Popup testimonials

const testimonialsItem = document.querySelectorAll('.testimonials__gradient')
const background = document.querySelectorAll('.testimonials__background')
const testimonialsWrapper = document.querySelector('.testimonials__wrapper')
const X = document.querySelectorAll('.X')

testimonialsItem.forEach ((elem, i) => {
    elem.addEventListener('click', (event) => {
        if (!event.target.classList.contains('X')) {
            elem.classList.add('testimonials__gradient_active')
            background.forEach((e, j) => {
                if (i == j) {
                    e.classList.add('testimonials__background_active')
                }
            })
            testimonialsWrapper.classList.add('testimonials__wrapper_active')
        }
    })
})

background.forEach ((elem, i) => {
    elem.addEventListener('click', (event) => {
        if (event.target.classList.contains('testimonials__background_active')) {
            elem.classList.remove('testimonials__background_active')
            testimonialsItem.forEach((e, j) => {
                if (j == i) {
                    e.classList.remove('testimonials__gradient_active')
                    testimonialsWrapper.classList.remove('testimonials__wrapper_active')
                }
            })
        }
    })
})

X.forEach((elem) => {
    elem.addEventListener('click', () => {
        background.forEach((e) => {
            e.classList.remove('testimonials__background_active')
        })
        testimonialsItem.forEach((e) => {
            e.classList.remove('testimonials__gradient_active')
            testimonialsWrapper.classList.remove('testimonials__wrapper_active')
        })
    })
})

// Pets slider

const petsWrapper = document.querySelector('.pets__wrapper')
const left = document.querySelector('.pets__btn_left')
const right = document.querySelector('.pets__btn_right')

const elem0 = document.createElement('div')
elem0.classList.add('pets__grad')
elem0.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_pandas"></div>
    <div class="pets__content">
        <div class="pets__subtitle">giant Pandas</div>
        <div class="pets__text">Native to Southwest China</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem1 = document.createElement('div')
elem1.classList.add('pets__grad')
elem1.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_eagles"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Eagles</div>
        <div class="pets__text">Native to South America</div>
        <img src="../../assets/icons/meet-fish_icon.svg" alt="banana" class="pets__food pets__food_meet">
    </div>
</div>`

const elem2 = document.createElement('div')
elem2.classList.add('pets__grad')
elem2.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_gorillas"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Gorillas</div>
        <div class="pets__text">Native to Congo</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem3 = document.createElement('div')
elem3.classList.add('pets__grad')
elem3.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_sloth"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Two-toed Sloth</div>
        <div class="pets__text">Mesoamerica, South America</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem4 = document.createElement('div')
elem4.classList.add('pets__grad')
elem4.classList.add('pets__hide')
elem4.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_cheetahs"></div>
    <div class="pets__content">
        <div class="pets__subtitle">cheetahs</div>
        <div class="pets__text">Native to Africa</div>
        <img src="../../assets/icons/meet-fish_icon.svg" alt="banana" class="pets__food pets__food_meet">
    </div>
</div>`

const elem5 = document.createElement('div')
elem5.classList.add('pets__grad')
elem5.classList.add('pets__grad_hide')
elem5.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_ping"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Penguins</div>
        <div class="pets__text">Native to Antarctica</div>
        <img src="../../assets/icons/meet-fish_icon.svg" alt="banana" class="pets__food pets__food_meet">
    </div>
</div>`

const elem6 = document.createElement('div')
elem6.classList.add('pets__grad')
elem6.classList.add('pets__grad_hide')
elem6.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_elk"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Elks</div>
        <div class="pets__text">Native to Europe</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem7 = document.createElement('div')
elem7.classList.add('pets__grad')
elem7.classList.add('pets__grad_hide')
elem7.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_beers"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Bears</div>
        <div class="pets__text">Native to Alaska</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem8 = document.createElement('div')
elem8.classList.add('pets__grad')
elem8.classList.add('pets__grad_hide')
elem8.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_kenguru"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Kangaroos</div>
        <div class="pets__text">Native to Australia</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem9 = document.createElement('div')
elem9.classList.add('pets__grad')
elem9.classList.add('pets__grad_hide')
elem9.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_crocodile"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Crocodiles</div>
        <div class="pets__text">Native to Africa</div>
        <img src="../../assets/icons/meet-fish_icon.svg" alt="banana" class="pets__food pets__food_meet">
    </div>
</div>`

const elem10 = document.createElement('div')
elem10.classList.add('pets__grad')
elem10.classList.add('pets__grad_hide')
elem10.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_rabbit"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Rabbits</div>
        <div class="pets__text">Native to England</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem11 = document.createElement('div')
elem11.classList.add('pets__grad')
elem11.classList.add('pets__grad_hide')
elem11.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_tushkan"></div>
    <div class="pets__content">
        <div class="pets__subtitle">squirrels</div>
        <div class="pets__text">Native to Belarus</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem12 = document.createElement('div')
elem12.classList.add('pets__grad')
elem12.classList.add('pets__grad_hide')
elem12.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_kalan"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Sea otters</div>
        <div class="pets__text">Native to Canada</div>
        <img src="../../assets/icons/meet-fish_icon.svg" alt="banana" class="pets__food pets__food_meet">
    </div>
</div>`

const elem13 = document.createElement('div')
elem13.classList.add('pets__grad')
elem13.classList.add('pets__grad_hide')
elem13.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_jaguar"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Jaguars</div>
        <div class="pets__text">Native to Texas</div>
        <img src="../../assets/icons/meet-fish_icon.svg" alt="banana" class="pets__food pets__food_meet">
    </div>
</div>`

const elem14 = document.createElement('div')
elem14.classList.add('pets__grad')
elem14.classList.add('pets__grad_hide')
elem14.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_deer"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Deers</div>
        <div class="pets__text">Native to Finland</div>
        <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana" class="pets__food pets__food_banana">
    </div>
</div>`

const elem15 = document.createElement('div')
elem15.classList.add('pets__grad')
elem15.classList.add('pets__grad_hide')
elem15.innerHTML = `<div class="pets__item">
<div class="pets__image pets__image_dolphin"></div>
    <div class="pets__content">
        <div class="pets__subtitle">Dolphins</div>
        <div class="pets__text">Native to World Ocean</div>
        <img src="../../assets/icons/meet-fish_icon.svg" alt="banana" class="pets__food pets__food_meet">
    </div>
</div>`

const array = [elem0, elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9, elem10, elem11, elem12, elem13, elem14, elem15]

function slider (trigger) {
    trigger.addEventListener('click', () => {
        petsWrapper.innerHTML = ``;

        array.sort(() => Math.round(Math.random() * 100) - 50);

        const rand = (arr) => {
            return arr.sort(() => Math.round(Math.random() * 100) - 50);
        }

        rand(array).forEach ((elem, i) => {
            if (i < 6) {
                petsWrapper.append(elem)
            }
        })

        left.disabled = true;
        right.disabled = true;
        setTimeout(() => {
            left.disabled = false
            right.disabled = false
        }, 1000)
    })
}

slider (left);
slider (right);