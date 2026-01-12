import { BookStoreLocators } from '../locators/bookstore.locators';
import { expect } from '@playwright/test';

export class BookStorePage {
  constructor(page) {
    this.page = page;
  }

  async goToBookStore() {
    await this.page.click(BookStoreLocators.menu);
  }

  async searchBook(bookName) {
    await this.page.fill(BookStoreLocators.searchBox, bookName);
  }

  async getBookInfo(bookName) {

    const row = this.page.locator(BookStoreLocators.bookRowByName(bookName));
    await expect(row, `Book "${bookName}" should be present in search results`).toBeVisible();

    const title = await row.locator(BookStoreLocators.bookTitle).innerText();
    const author = await row.locator(BookStoreLocators.author).innerText();
    const publisher = await row.locator(BookStoreLocators.publisher).innerText();

    await expect.soft(title, 'Book title should not be empty').not.toBe('');
    await expect.soft(author, 'Author should not be empty').not.toBe('');
    await expect.soft(publisher, 'Publisher should not be empty').not.toBe('');

    return { title, author, publisher };
  }
}
