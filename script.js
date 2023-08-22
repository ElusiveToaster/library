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
    let libraryContainer = document.querySelector('.library');
    libraryContainer.innerHTML = "";
    myLibrary.forEach( (book, index) => {
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

        let removeButton = document.createElement('button');

        removeButton.innerText = "Remove";

        removeButton.addEventListener("click", () => {
            let bookContainer = document.querySelector(".bookContainer");
            let bookID = document.querySelector("button").dataset.index;

            myLibrary.splice(bookID, 1);

            bookContainer.remove();

        })

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

        
        removeButton.dataset.index = index;
        bookContainer.appendChild(nameSpan);
        bookContainer.appendChild(authorSpan);
        bookContainer.appendChild(pagesSpan);
        bookContainer.appendChild(readSpan);
        bookContainer.appendChild(removeButton);
        libraryContainer.appendChild(bookContainer);


    })
}

function info(book) {
    return book.title + " by " + book.author + ", " + book.pages + " pages, " + book.read;
}
