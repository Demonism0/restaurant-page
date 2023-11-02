import './style.css';
import Background from './background.jpg';
import { generateHomePage } from './home';
import { generateMenuPage } from './menu';
import { generateContactPage } from './contact';

function generateLayout () {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.setAttribute('class', 'header');
    const middle = document.createElement('div');
    middle.setAttribute('class', 'middle');
    const footer = document.createElement('div');
    footer.setAttribute('class', 'footer');

    content.appendChild(header);
    content.appendChild(middle);
    content.appendChild(footer);

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home'; 
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';

    const container = document.createElement('div');

    generateHomePage (container);

    homeBtn.addEventListener('click', () => {
        container.textContent = '';
        generateHomePage (container);
    });
    menuBtn.addEventListener('click', () => {
        container.textContent = '';
        generateMenuPage (container);
    });
    contactBtn.addEventListener('click', () => {
        container.textContent = '';
        generateContactPage (container);
    })

    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);

    const myBackground = new Image();
    myBackground.src = Background;

    container.setAttribute('class', 'container');
    middle.appendChild(container);

    footer.innerHTML = 'Website created by <a href="https://github.com/Demonism0/">Demonism0</a>';
}

generateLayout();