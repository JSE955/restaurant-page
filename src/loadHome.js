function loadHomePage() {
    const body = document.createElement('div');

    const headline = document.createElement('h1');
    headline.innerHTML = "Welcome to Zaxby's!";

    const text = document.createElement('p');
    text.innerHTML = "This is a website for the greatest chicken in the world.";

    body.appendChild(headline);
    body.appendChild(text);
    return body;
}

export { loadHomePage };
