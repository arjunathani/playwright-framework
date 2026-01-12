import { LoginLocators } from '../locators/login.locators';

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.fill(LoginLocators.username, username);
    await this.page.fill(LoginLocators.password, password);
    await this.page.click(LoginLocators.loginBtn);

  }

  async getLoggedUser() {
    await this.page.waitForSelector(LoginLocators.logoutBtn, { state: 'visible', timeout: 60000 });
    return this.page.textContent(LoginLocators.userValue);
  }

  async logout() {
    await this.page.click(LoginLocators.logoutBtn);
    await this.page.waitForSelector(LoginLocators.loginHeader, { state: 'visible', timeout: 60000 });
  }
}
