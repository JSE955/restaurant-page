function loadAboutPage() {
    const body = document.createElement('div');

    const headline = document.createElement('h1');
    headline.innerHTML = "About Zaxby's";

    const text = document.createElement('p');
    text.innerHTML = "Zaxby's is down the street from my house. It is delicious. Go chicken!";

    body.appendChild(headline);
    body.appendChild(text);
    return body;
}

export {loadAboutPage};