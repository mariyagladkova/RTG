const { expect } = require('@playwright/test');

exports.RTGMainPage = class RTGMainPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    //this.searchField = page.locator('input#title-search-input3');
    //this.searchButton = page.locator('#search button');
    this.accountButton = page.locator('span.header-bottom__account-link');
    this.loginButton = page.locator('div.header-fixed__profile div.header-bottom__profile-dropdown-menu a.js-button-login');
    this.loginField = page.locator('form#authorization input[name="USER_LOGIN"]');
    this.passwordField = page.locator('form#authorization input[name="USER_PASSWORD"]');
    this.submitButton = page.locator('#authorization > button');
  }

  async goto() {
    await this.page.goto('http://new.rtg-company.ru/');
    //await this.page.goto('http://rtg-company.ru/');
  }

  async naturalLogin() {
    await this.accountButton.hover();
    await this.loginButton.click();
    await this.loginField.type('puchka333@yandex.ru');
    await this.passwordField.type('987654321');
    await this.submitButton.click();
  }

  async juridicalLogin() {
    await this.accountButton.hover();
    await this.loginButton.click();
    await this.loginField.type('kitsune.m@yandex.ru');
    await this.passwordField.type('123456789');
    await this.submitButton.click();
  }
}
