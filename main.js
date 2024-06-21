const Library = require('c:/Users/HP/Desktop/lib_mgt_system/library');
const User = require('c:/Users/HP/Desktop/lib_mgt_system/user');
const Book = require('c:/Users/HP/Desktop/lib_mgt_system/book');

// Create a new library instance
const library = new Library();

// Create books
const book1 = new Book({ title: 'Zero to One', author: 'Peter Thiel', ISBN: '1234567890' });
const book2 = new Book({ title: 'Verity', author: 'Colleen Hoover', ISBN: '1234567891' });
const book3 = new Book({ title: 'A Court of Thorns and Roses', author: 'Sarah Maas', ISBN: '1234567892' });

// Add books to the library
library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);

// Register a user
const user1 = new User({ name: 'Alice', id: '1' });
library.registerMember(user1);

// Borrow books
library.borrowBook('1', '1234567890');
library.borrowBook('1', '1234567891');
library.borrowBook('1', '1234567892'); // Should not be allowed (max 3 books)

// Return a book and borrow another
library.returnBook('1', '1234567890');
library.borrowBook('1', '1234567892');