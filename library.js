const Book = require('c:/Users/HP/Desktop/lib_mgt_system/book');
const User = require('c:/Users/HP/Desktop/lib_mgt_system/user');

class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  registerMember(user) {
    if (!this.members.some((member) => member.id === user.id)) {
      this.members.push(user);
      console.log(`Member ${user.name} registered successfully.`);
    } else {
      console.log(`Member with ID ${user.id} is already registered.`);
    }
  }

  addNewBook(book) {
    if (!this.books.some((b) => b.ISBN === book.ISBN)) {  // Use book.ISBN instead of book.isbn
      this.books.push(book);
      console.log(`Book "${book.title}" added successfully.`);
    } else {
      console.log(`Book with ISBN ${book.ISBN} already exists.`);
    }
  }

  borrowBook(userId, ISBN) {
    const member = this.members.find((member) => member.id === userId);
    if (member) {
      member.borrowBook(ISBN, this);
    } else {
      console.log(`User with ID ${userId} is not registered.`);
    }
  }

  returnBook(userId, ISBN) {
    const member = this.members.find((member) => member.id === userId);
    if (member) {
      member.returnBook(ISBN, this);
    } else {
      console.log(`User with ID ${userId} is not registered.`);
    }
  }
}

module.exports = Library;