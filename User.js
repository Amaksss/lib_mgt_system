class User {
    constructor({ name, id }) {
      this.name = name;
      this.id = id;
      this.borrowedBooks = [];
    }
  
    borrowBook(isbn, library) {
      if (this.borrowedBooks.length >= 3) {
        console.log(`User ${this.name} has already borrowed 3 books.`);
        return;
      }
  
      const book = library.books.find((b) => b.ISBN === isbn);
      if (book && !book.borrowed) {
        book.borrowed = true;
        this.borrowedBooks.push(book);
        console.log(`User ${this.name} borrowed "${book.title}".`);
      } else if (!book) {
        console.log(`Book with ISBN ${isbn} not found in the library.`);
      } else if (book.borrowed) {
        console.log(`Book "${book.title}" is already borrowed.`);
      }
    }
  
    returnBook(isbn, library) {
      const bookIndex = this.borrowedBooks.findIndex((b) => b.ISBN === isbn);
      if (bookIndex !== -1) {
        const book = this.borrowedBooks[bookIndex];
        book.borrowed = false;
        this.borrowedBooks.splice(bookIndex, 1);
        console.log(`User ${this.name} returned "${book.title}".`);
      } else {
        console.log(`User ${this.name} has not borrowed book with ISBN ${isbn}.`);
      }
    }
  }
  
  module.exports = User;