document.addEventListener('DOMContentLoaded', () => {
    function incrementCounter(counter) {
        counter += 1;
        if (counter > photos.length) {
            counter = 1;
        }

        return counter;
    }

    function decrementCounter(counter) {
        counter -= 1;
        if (counter < 1) {
            counter = photos.length
        }

        return counter;
    }

    function changePhoto(current, previous) {
        previous.classList.remove('show');
        previous.classList.add('hide');

        current.classList.remove('hide');
        current.classList.add('show');

        insertPhotoInfo(currentPhotoID, photos);
        insertPhotoComments(currentPhotoID);
    }

    function renderPhotos() {
        let slidesSection = document.querySelector('#slides');
        slidesSection.insertAdjacentHTML('beforeend', templates.photos({photos: photos}));
    }

    function insertPhotoInfo(selectedID) {
        let photoInfoSection = document.querySelector("section header");
    
        for (let i = 0; i < photos.length; i += 1) {
            if (photos[i].id === selectedID) {
                photoInfoSection.innerHTML = templates.photo_information(photos[i]);
            };
        }
    }

    async function insertPhotoComments(selectedID) {
        let commentsSection = document.querySelector('#comments');
        let photoComments = await fetch(`/comments?photo_id=${selectedID}`).then(response => response.json());

        commentsSection.innerHTML = templates.photo_comments({comments: photoComments});
    }

    const templates = {};
    let currentPhotoID = 1;
    let photos;

    document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
        templates[tmpl["id"]] = Handlebars.compile(tmpl.innerHTML);
    })

    document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
        Handlebars.registerPartial(tmpl["id"], tmpl.innerHTML);
    })

    fetch('/photos')
        .then(response => response.json())
        .then(data => {
            photos = data;
            renderPhotos(photos);
            insertPhotoInfo(currentPhotoID, photos);
            insertPhotoComments(currentPhotoID);
        });

    document.querySelector('.next').addEventListener('click', (event) => {
        event.preventDefault();
        let slides = document.querySelector('#slides');
        let previousPhoto = slides.querySelector(`[data-id='${currentPhotoID}']`);
        
        currentPhotoID = incrementCounter(currentPhotoID);

        let currentPhoto = slides.querySelector(`[data-id='${currentPhotoID}']`);
        
        changePhoto(currentPhoto, previousPhoto);
    })

    document.querySelector('.prev').addEventListener('click', (event) => {
        event.preventDefault();
        let slides = document.querySelector('#slides');
        let previousPhoto = slides.querySelector(`[data-id='${currentPhotoID}']`);
        
        currentPhotoID = decrementCounter(currentPhotoID);

        let currentPhoto = slides.querySelector(`[data-id='${currentPhotoID}']`);
        
        changePhoto(currentPhoto, previousPhoto);
    })

    document.querySelector("section > header").addEventListener("click", function(e) {
        e.preventDefault();
        let button = e.target;
        let buttonType = button.getAttribute("data-property");
        if (buttonType) {
            let href = button.getAttribute("href");
            let dataID = button.getAttribute("data-id");
            let text = button.textContent;

            fetch(href, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: 'photo_id=' + dataID,
            })
            .then(response => response.json())
            .then(json => {
                button.textContent = text.replace(/\d+/, json.total);
            });
        }
    })
})