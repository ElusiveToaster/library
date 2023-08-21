const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

let id = 0;


function newBook() { 

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;

    myLibrary[id] = new book(title, author, pages, read);
    id++;
}

function refresh() {
    myLibrary.forEach( (book) => {
        let libraryContainer = document.querySelector('.library');
        
        let bookContainer = document.createElement("div");
        bookContainer.className += "bookContainer";

        let bookName = document.createElement('h')
        let bookAuthor = document.createElement('h')
        let bookPages = document.createElement('h')
        let bookRead = document.createElement('h')

        bookName.innerText = book.title;
        bookAuthor.innerText = book.author;
        bookPages.innerText = book.pages;
        bookRead.innerText = book.read;

        bookContainer.appendChild(bookName);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPages);
        bookContainer.appendChild(bookRead);
        libraryContainer.appendChild(bookContainer);


    })
}

function info(book) {
    return book.title + " by " + book.author + ", " + book.pages + " pages, " + book.read;
}
