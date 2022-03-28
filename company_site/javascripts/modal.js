const team = {
    kevin: {
        img: "images/img_kevin.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cum dignissimos aut et perspiciatis temporibus, architecto repellat ipsa odio deserunt laborum quas earum alias totam expedita recusandae dolorum magni, magnam similique unde? Maiores, eius? Ipsa iusto sapiente magnam earum aliquam rerum, minus nobis, quas saepe accusamus reprehenderit consequatur, asperiores cum.",
    },
    louis: {
        img: "images/img_louis.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cum dignissimos aut et perspiciatis temporibus, architecto repellat ipsa odio deserunt laborum quas earum alias totam expedita recusandae dolorum magni, magnam similique unde? Maiores, eius? Ipsa iusto sapiente magnam earum aliquam rerum, minus nobis, quas saepe accusamus reprehenderit consequatur, asperiores cum.",
    },
    kasper: {
        img: "images/img_kasper.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cum dignissimos aut et perspiciatis temporibus, architecto repellat ipsa odio deserunt laborum quas earum alias totam expedita recusandae dolorum magni, magnam similique unde? Maiores, eius? Ipsa iusto sapiente magnam earum aliquam rerum, minus nobis, quas saepe accusamus reprehenderit consequatur, asperiores cum.",
    },
    chris: {
        img: "images/img_chris.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cum dignissimos aut et perspiciatis temporibus, architecto repellat ipsa odio deserunt laborum quas earum alias totam expedita recusandae dolorum magni, magnam similique unde? Maiores, eius? Ipsa iusto sapiente magnam earum aliquam rerum, minus nobis, quas saepe accusamus reprehenderit consequatur, asperiores cum.",
    },
}

function setModal(inputName, inputModal) {
    inputModal.querySelector('#modalPic').setAttribute('src', `${team[inputName].img}`);
    inputModal.removeAttribute('hidden');
}

function closeModal(inputModal) {
    inputModal.setAttribute('hidden', '');
}

document.addEventListener('DOMContentLoaded', () => {
    let links = document.querySelectorAll('article a');
    let modal = document.querySelector('#modal');
    let exitLink = document.querySelector('#exitLink');

    Array.from(links).forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            let name = link.textContent.trim().toLowerCase();
            setModal(name, modal);
        })
    })

    exitLink.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal(modal);
    })

    window.addEventListener('click', (event) => {
        if (event.target.id !== 'modal' && modal.hasAttribute('hidden') === false) {
            closeModal(modal);
        }
    })
})
