function generateContactPage (container) {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'Contact Us';
    container.appendChild(title);

    const phone = document.createElement('div');
    phone.setAttribute('class', 'card');
    const phoneTag = document.createElement('div');
    phoneTag.setAttribute('class', 'tag');
    phoneTag.textContent = 'Phone';
    const phoneText = document.createElement('div');
    phoneText.setAttribute('class', 'text');
    const phoneText1 = document.createElement('p');
    phoneText1.textContent = '+65 8123 4567';

    phoneText.appendChild(phoneText1);
    phone.appendChild(phoneTag);
    phone.appendChild(phoneText);
    container.appendChild(phone);
    
    const email = document.createElement('div');
    email.setAttribute('class', 'card');
    const emailTag = document.createElement('div');
    emailTag.setAttribute('class', 'tag');
    emailTag.textContent = 'Email';
    const emailText = document.createElement('div');
    emailText.setAttribute('class', 'text');
    const emailText1 = document.createElement('p');
    emailText1.textContent = 'contactus@eats.com';

    emailText.appendChild(emailText1);
    email.appendChild(emailTag);
    email.appendChild(emailText);
    container.appendChild(email);

    const facebook = document.createElement('div');
    facebook.setAttribute('class', 'card');
    const facebookTag = document.createElement('div');
    facebookTag.setAttribute('class', 'tag');
    facebookTag.textContent = 'Facebook';
    const facebookText = document.createElement('div');
    facebookText.setAttribute('class', 'text');
    const facebookText1 = document.createElement('p');
    facebookText1.textContent = 'facebook.com/eatsdining';

    facebookText.appendChild(facebookText1);
    facebook.appendChild(facebookTag);
    facebook.appendChild(facebookText);
    container.appendChild(facebook);

    const twitter = document.createElement('div');
    twitter.setAttribute('class', 'card');
    const twitterTag = document.createElement('div');
    twitterTag.setAttribute('class', 'tag');
    twitterTag.textContent = 'Twitter';
    const twitterText = document.createElement('div');
    twitterText.setAttribute('class', 'text');
    const twitterText1 = document.createElement('p');
    twitterText1.textContent = '@EatsDining';

    twitterText.appendChild(twitterText1);
    twitter.appendChild(twitterTag);
    twitter.appendChild(twitterText);
    container.appendChild(twitter);

    const note = document.createElement('div');
    note.setAttribute('class', 'card');
    const noteTag = document.createElement('div');
    noteTag.setAttribute('class', 'tag');
    noteTag.textContent = 'Note';
    const noteText = document.createElement('div');
    noteText.setAttribute('class', 'text');
    const noteText1 = document.createElement('p');
    noteText1.textContent = 'None of the contact information provided are real.';

    noteText.appendChild(noteText1);
    note.appendChild(noteTag);
    note.appendChild(noteText);
    container.appendChild(note);
}

export { generateContactPage };