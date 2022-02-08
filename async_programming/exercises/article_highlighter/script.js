/*
1. When the user clicks on a navigation link (Articles 1-4), the browser scrolls to that article in the <main> element and adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.

Rules:
- if another element already has the highlight class, remove it.

1. Add event listener to each link;
- make a function that iterates through the links and adds the event listener;
2. When user clicks a link:
    - remove highlighter from any element on the page;
        * create clearHighlighter and add it to document;
        * set the function to activate during the capture phase;
    - Browser must scroll to appropriate article;
    * Identify article;
         Get element whose id is the same as the link's href attribute without the '#';
    * Add highlighter class to it;
    

2. When the user clicks on an article element or any of its child elements, the browser adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.
3. When the user clicks anywhere else on the page, the browser adds the highlight class to the main element. If another element already has the highlight class, the browser removes the class from that element.
*/


document.addEventListener('DOMContentLoaded', () => {
    function clearHighlight(node) {
        node.classList.remove('highlight');
        Array.from(node.children).forEach(child => {
            clearHighlight(child);
        }) 
    }

    let links = document.getElementsByTagName('a');
    let articles = document.getElementsByTagName('article');
    let main = document.querySelector('main');

    Array.from(links).forEach(link => {
        link.addEventListener('click', (event) => {
            clearHighlight(document.body);
            let targetArticleID = event.target.getAttribute('href').slice(1);
            let targetArticle = document.getElementById(targetArticleID);
            targetArticle.classList.add('highlight')
        })
    })

    Array.from(articles).forEach(article => {
        article.addEventListener('click', (event) => {
            event.stopPropagation();
            clearHighlight(document.body);
            article.classList.add('highlight');
        })
    })

    main.addEventListener('click', () => {
        clearHighlight(document.body);
        main.classList.add('highlight');
    })
})
