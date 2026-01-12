export const BookStoreLocators = {
  menu: '//span[text()="Book Store"]',
  searchBox: '#searchBox',
  title: '.rt-tbody a',
  author: '.rt-td:nth-child(3)',
  publisher: '.rt-td:nth-child(4)',
  bookRowByName: (bookName) => `.rt-tr-group .rt-tr:not(.-padRow):has(a:text("${bookName}"))`,
  bookTitle: 'a',
  author: '.rt-td:nth-child(3)',
  publisher: '.rt-td:nth-child(4)'
};
