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

        let nameSpan = document.createElement('span');
        let authorSpan = document.createElement('span');
        let pagesSpan = document.createElement('span');
        let readSpan = document.createElement('span');

        let bookName = document.createElement('p');
        let bookAuthor = document.createElement('p');
        let bookPages = document.createElement('p');
        let bookRead = document.createElement('p');

        let nameTag = document.createElement('h3');
        let authorTag = document.createElement('h3');
        let pagesTag = document.createElement('h3');
        let readTag = document.createElement('h3');

        nameTag.innerText = "Name: ";
        authorTag.innerText = "Author: ";
        pagesTag.innerText = "Pages: ";
        readTag.innerText = "Read?: ";

        bookName.innerText = book.title;
        bookAuthor.innerText = book.author;
        bookPages.innerText = book.pages;
        bookRead.innerText = book.read;

        nameSpan.append(nameTag, bookName);
        authorSpan.append(authorTag, bookAuthor);
        pagesSpan.append(pagesTag, bookPages);
        readSpan.append(readTag, bookRead);

        bookContainer.appendChild(nameSpan);
        bookContainer.appendChild(authorSpan);
        bookContainer.appendChild(pagesSpan);
        bookContainer.appendChild(readSpan);
        libraryContainer.appendChild(bookContainer);


    })
}

function info(book) {
    return book.title + " by " + book.author + ", " + book.pages + " pages, " + book.read;
}
