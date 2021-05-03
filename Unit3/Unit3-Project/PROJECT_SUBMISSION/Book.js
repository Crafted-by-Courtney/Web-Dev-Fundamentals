export class Book {
    constructor(title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }

    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0;
        } else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1;
        } else if (page == this.pages) {
            let currentPage = page;
            let read = true;
            return 1;
        }
    }

}

const firstBook = new Book("JavaScript for Dummies", "Mr. Robot", "A guide to keep new programmers from going insane", 100, 15, false);
const secondBook = new Book("JavaScript for the Lost", "Rick and Morty", "A guide to teach how to copy and paste found code", 150, 150, true);
const thirdBook = new Book("Imagination and Coffee", "Thomas Anderson", "Requirements for Coding", 230, 0, false);



export const books = [firstBook, secondBook, thirdBook];
console.log(books[0]);