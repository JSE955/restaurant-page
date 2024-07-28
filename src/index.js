import {loadHomePage} from './loadHome';
import { loadAboutPage } from './loadAbout';
import { loadMenuPage } from './loadMenu';

const content = document.querySelector('#content');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const menu = document.querySelector('#menu');

home.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(loadHomePage());
});

about.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(loadAboutPage());
});

menu.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(loadMenuPage());
});

content.appendChild(loadHomePage());