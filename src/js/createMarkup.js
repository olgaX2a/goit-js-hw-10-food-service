import menu from '../data/menu.json'
import template from '../templates/menuTemplate.hbs'

const refs = {
    menuList: document.querySelector('.js-menu'),
}

const markup = template(menu)
refs.menuList.insertAdjacentHTML('beforeend', markup)