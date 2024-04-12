
document.addEventListener('DOMContentLoaded',() => {

    fetchBooks()
})

function fetchBooks() {
    fetch(`http://localhost:3000/books`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => res.json())
    .then((book) => {
        book.forEach((book1) => renderBooks(book1));
    })
    
}

function renderBooks(book1) {
    const booksContainer = document.querySelector('#book')
const parentDiv = document.createElement('div')
parentDiv.classList.add('card')
    
const image = document.createElement('img')
image.classList.add('card-img-top', 'mt-2')
image.height = 200;
image.src = book1.imageLink
image.alt = book1.title
parentDiv.appendChild(image)


const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

const title = document.createElement('h5')
title.className = 'card-title'
title.innerText = book1.title
cardBody.append(title)
parentDiv.appendChild(cardBody)


const description = document.createElement('p')
description.className = 'card-text'
description.innerText = book1.author


const button = document.createElement('button')
button.classList.add('btn','btn-primary')
button.innerText = 'Add'




booksContainer.appendChild(parentDiv);
}