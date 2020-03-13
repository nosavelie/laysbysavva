let burger = document.getElementById('burger')
let menu_gallery = document.getElementById('gallery')
let menu_about = document.getElementById('about-project')
let menu_summer = document.getElementById('summer-with-lays')
let menu_close = document.getElementById('close_menu')
let mobile_menu = document.getElementById('mobile-menu')

burger.onclick = function (e) {
    let menu = document.getElementById('menu__wrap')
    menu.style.background = 'transparent'

    if (!e.currentTarget.classList.contains('menu_close')) {
        menu.style.display = 'block'
        e.currentTarget.classList.add('menu_close')

        menu_gallery.style.animation = 'menu-left-to-right 0.5s'
        menu_about.style.animation = 'menu-right-to-left 0.5s'
        menu_summer.style.animation = 'menu-left-to-right 0.5s'
        menu_close.style.animation = 'menu-right-to-left 0.5s'
    } else {
        e.currentTarget.classList.remove('menu_close')
        menu_gallery.style.animation = 'menu-left-to-right_hide 0.5s forwards'
        menu_about.style.animation = 'menu-right-to-left_hide 0.5s forwards'
        menu_summer.style.animation = 'menu-left-to-right_hide 0.5s forwards'
        menu_close.style.animation = 'menu-right-to-left_hide 0.5s forwards'
    }

    window.onscroll = function () {
        burger.classList.remove('menu_close')
        menu_gallery.style.animation = 'menu-left-to-right_hide 0.5s forwards'
        menu_about.style.animation = 'menu-right-to-left_hide 0.5s forwards'
        menu_summer.style.animation = 'menu-left-to-right_hide 0.5s forwards'
        menu_close.style.animation = 'menu-right-to-left_hide 0.5s forwards'
    }
}

close_menu.onclick = function () {
    burger.classList.remove('menu_close')
    menu_gallery.style.animation = 'menu-left-to-right_hide 0.5s forwards'
    menu_about.style.animation = 'menu-right-to-left_hide 0.5s forwards'
    menu_summer.style.animation = 'menu-left-to-right_hide 0.5s forwards'
    menu_close.style.animation = 'menu-right-to-left_hide 0.5s forwards'
}

const sectionsAnimateToRight = document.querySelectorAll('.animation-to-right')
const sectionsAnimateToLeft = document.querySelectorAll('.animation-to-left')

let lastValue = 0

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY

    if (window.innerWidth <= 640) {
    if (lastValue < scrollY) {
        mobile_menu.style.top = '-80px'
        lastValue = scrollY
    }

    if (lastValue > scrollY) {
        mobile_menu.style.top = '0px'
    lastValue = scrollY
    }
}

sectionsAnimateToLeft.forEach(function (section) {
    const sectionY = section.getBoundingClientRect().y;

    if (scrollY > sectionY) {
        section.classList.add('animation-move-to-left')
    }
});

sectionsAnimateToRight.forEach(function (section) {
    const sectionY = section.getBoundingClientRect().y;

    if (scrollY > sectionY) {
        section.classList.add('animation-move-to-right')
    }
})
})
