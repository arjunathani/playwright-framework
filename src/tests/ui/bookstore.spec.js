import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { BookStorePage } from '../../pages/bookstore.page';
import user from '../../data/users.json';
import bookStoreDetails from '../../data/bookStoreDetails.json';
import { writeBookDetails } from '../../utils/fileUtil';

test('Book Store App Validation', async ({ page }, testInfo) => {
  // Initialize page objects for Login and Book Store
  const login = new LoginPage(page);
  const bookstore = new BookStorePage(page);

  // Navigate to "https://demoqa.com/login"
  // (New user is assumed to be created manually as per requirement)
  await page.goto('/login');

  // Login using the newly created user
  await login.login(user.username, user.password);

  // Upon successful login, validate username is displayed
  expect(await login.getLoggedUser()).toBe(user.username);

  // Navigate to Books Store Application
  await bookstore.goToBookStore();

  // Search for the book "Learning JavaScript Design Patterns"
  await bookstore.searchBook(bookStoreDetails.bookName);

  // Validate the search result contains the searched book
  const book = await bookstore.getBookInfo(bookStoreDetails.bookName);
  expect(book.title).toContain(bookStoreDetails.bookName);

  // Print Title, Author, and Publisher into a file
  const filePath = await writeBookDetails(book, testInfo.project.name);

  // Attach the generated file to the Playwright report only if the test passed
  if (testInfo.status === 'passed') {
    await testInfo.attach('Book Details', {
      path: filePath,
      contentType: 'text/plain',
    });
  }

  // Click on log out
  await login.logout();
});
