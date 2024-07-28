function loadMenuPage() {
    const body = document.createElement('div');
    const headline = document.createElement('h1');
    headline.innerHTML = "Zaxby's Menu";
    const list = document.createElement('ul');

    const menuItems = ["Wings n' Things", "Kickin' Chicken Sandwich", "Fried Zalad with Ranch"];
    for (let i = 0; i < menuItems.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = menuItems[i];
        list.appendChild(item);
    }

    body.appendChild(headline);
    body.appendChild(list);
    return body;
}

export {loadMenuPage};