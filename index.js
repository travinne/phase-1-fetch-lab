
  // To pass the tests, don't forget to return your fetch!



  


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

window.renderBooks = renderBooks;

let base_url ='https://anapioficeandfire.com/api/books'

function fetchBooks(){ return fetch(base_url)
.then(res => res.json())
.then(data =>renderBooks(data))
.catch(error => console.error('error fetching the books',error));
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
