
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

booksContainer.appendChild(parentDiv);
}