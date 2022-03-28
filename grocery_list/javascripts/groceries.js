document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    let list = document.querySelector('#grocery-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let itemName = document.querySelector('#name').value;
        let itemQty = document.querySelector('#quantity').value || '1';

        let listItem = document.createElement('li');
        let text = document.createTextNode(`${itemQty} ${itemName}`);

        listItem.appendChild(text);
        list.appendChild(listItem);
    })
})