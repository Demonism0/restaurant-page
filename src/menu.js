function generateMenuPage (container) {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'Menu';
    container.appendChild(title);

    const starters = document.createElement('div');
    starters.setAttribute('class', 'card');
    const startersTag = document.createElement('div');
    startersTag.setAttribute('class', 'tag');
    startersTag.textContent = 'Starters';
    const startersText = document.createElement('div');
    startersText.setAttribute('class', 'text');
    const startersText1 = document.createElement('p');
    startersText1.textContent = 'Keep your tastebuds busy while waiting for your main course.';

    startersText.appendChild(startersText1);
    starters.appendChild(startersTag);
    starters.appendChild(startersText);
    container.appendChild(starters);
    
    const mains = document.createElement('div');
    mains.setAttribute('class', 'card');
    const mainsTag = document.createElement('div');
    mainsTag.setAttribute('class', 'tag');
    mainsTag.textContent = 'Mains';
    const mainsText = document.createElement('div');
    mainsText.setAttribute('class', 'text');
    const mainsText1 = document.createElement('p');
    mainsText1.textContent = 'What do you feel like having today?';

    mainsText.appendChild(mainsText1);
    mains.appendChild(mainsTag);
    mains.appendChild(mainsText);
    container.appendChild(mains);

    const sides = document.createElement('div');
    sides.setAttribute('class', 'card');
    const sidesTag = document.createElement('div');
    sidesTag.setAttribute('class', 'tag');
    sidesTag.textContent = 'Sides';
    const sidesText = document.createElement('div');
    sidesText.setAttribute('class', 'text');
    const sidesText1 = document.createElement('p');
    sidesText1.textContent = 'Compliment your main course with a delicious side!';

    sidesText.appendChild(sidesText1);
    sides.appendChild(sidesTag);
    sides.appendChild(sidesText);
    container.appendChild(sides);

    const beverages = document.createElement('div');
    beverages.setAttribute('class', 'card');
    const beveragesTag = document.createElement('div');
    beveragesTag.setAttribute('class', 'tag');
    beveragesTag.textContent = 'Beverages';
    const beveragesText = document.createElement('div');
    beveragesText.setAttribute('class', 'text');
    const beveragesText1 = document.createElement('p');
    beveragesText1.textContent = 'Quench your thirst';

    beveragesText.appendChild(beveragesText1);
    beverages.appendChild(beveragesTag);
    beverages.appendChild(beveragesText);
    container.appendChild(beverages);

    const desserts = document.createElement('div');
    desserts.setAttribute('class', 'card');
    const dessertsTag = document.createElement('div');
    dessertsTag.setAttribute('class', 'tag');
    dessertsTag.textContent = 'Desserts';
    const dessertsText = document.createElement('div');
    dessertsText.setAttribute('class', 'text');
    const dessertsText1 = document.createElement('p');
    dessertsText1.textContent = 'Craving for something sweet?';

    dessertsText.appendChild(dessertsText1);
    desserts.appendChild(dessertsTag);
    desserts.appendChild(dessertsText);
    container.appendChild(desserts);
}

export { generateMenuPage };