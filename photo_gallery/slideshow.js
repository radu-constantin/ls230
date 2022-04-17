document.addEventListener('DOMContentLoaded', () => {
    let focusImg = document.querySelector('figure img');
    let imgLinks = document.querySelectorAll('li img');

    Array.from(imgLinks).forEach(img => {
        img.addEventListener('click', (event) => {
            let source = event.target.getAttribute('src');
            imgLinks.forEach(img => img.classList.remove('selectedImg'));
            img.classList.add('selectedImg');
            focusImg.setAttribute('src', source);
        })
    })
})