function generateHomePage (container) {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'Eats.';
    container.appendChild(title);

    const about = document.createElement('div');
    about.setAttribute('class', 'card');
    const aboutTag = document.createElement('div');
    aboutTag.setAttribute('class', 'tag');
    aboutTag.textContent = 'About';
    const aboutText = document.createElement('div');
    aboutText.setAttribute('class', 'text');
    const aboutText1 = document.createElement('p');
    aboutText1.innerHTML = 'Here at <span>Eats.</span>, we pride ourselves on our wide variety of food.';
    const aboutText2 = document.createElement('p');
    aboutText2.textContent = "Take your tastebuds on a journey, and come down for a feast like you've never experienced!";

    aboutText.appendChild(aboutText1);
    aboutText.appendChild(aboutText2);
    about.appendChild(aboutTag);
    about.appendChild(aboutText);
    container.appendChild(about);

    const schedule = document.createElement('div');
    schedule.setAttribute('class', 'card');
    const scheduleTag = document.createElement('div');
    scheduleTag.setAttribute('class', 'tag');
    scheduleTag.textContent = 'Hours';
    const scheduleText = document.createElement('div');
    scheduleText.setAttribute('class', 'text');
    const day1 = document.createElement('p');
    day1.textContent = 'Monday: 8AM - 9PM';
    const day2 = document.createElement('p');
    day2.textContent = 'Tuesday: Closed';
    const day3 = document.createElement('p');
    day3.textContent = 'Wednesday: 8AM - 9PM';
    const day4 = document.createElement('p');
    day4.textContent = 'Thursday: 8AM - 9PM';
    const day5 = document.createElement('p');
    day5.textContent = 'Friday: 8AM - 11PM';
    const day6 = document.createElement('p');
    day6.textContent = 'Saturday: 8AM - 11PM';
    const day7 = document.createElement('p');
    day7.textContent = 'Sunday: 8AM - 9PM';

    scheduleText.appendChild(day1);
    scheduleText.appendChild(day2);
    scheduleText.appendChild(day3);
    scheduleText.appendChild(day4);
    scheduleText.appendChild(day5);
    scheduleText.appendChild(day6);
    scheduleText.appendChild(day7);
    schedule.appendChild(scheduleTag);
    schedule.appendChild(scheduleText);
    container.appendChild(schedule);

    const location = document.createElement('div');
    location.setAttribute('class', 'card');
    const locationTag = document.createElement('div');
    locationTag.setAttribute('class', 'tag');
    locationTag.textContent = 'Location';
    const locationText = document.createElement('div');
    locationText.setAttribute('class', 'text');
    const locationText1 = document.createElement('p');
    locationText1.textContent = '1 Westbrook Lane, Baltimore';

    locationText.appendChild(locationText1);
    location.appendChild(locationTag);
    location.appendChild(locationText);
    container.appendChild(location);
}

export { generateHomePage };