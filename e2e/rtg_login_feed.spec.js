const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test.describe('Two tests', () => {

  test('juridical_login', async ({ page }) => {
    test.setTimeout(80000);

    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    await page.click('div.popup__body button.js-popup-accept');

    // Подтверждение использования файлов cookie
    await page.click('button.cookie-modal-alert__button');

    // Авторизация юрлица
    await page.hover('span.header-bottom__account-link');
    await page.$eval('div.header-fixed__profile div.header-bottom__profile-dropdown-menu a.js-button-login', (element) => element.click());
    await page.waitForLoadState('load');
    // Адрес электронной почты
    await page.locator('form#authorization input[name="USER_LOGIN"]').type('kitsune.m@yandex.ru');
    // Пароль
    await page.locator('form#authorization input[name="USER_PASSWORD"]').type('123456789');
    await page.click('#authorization > button');

    // Заполнение формы "Обратная связь"
    await page.hover('span.header-bottom__account-link');
    await page.$eval('div.header-bottom__profile-dropdown-menu a[href="/personal/feedback/"]', (element) => element.click());
    await page.waitForLoadState('load');
    await page.click('#feedback_new div.selectFancyWrap div.input-fancy');
    // Тема "Отзывы и предложения" 
    await page.click('#feedback_new div.selectFancy__options button:nth-child(4)');
    // Сообщение (необязательное поле)
    // await page.locator('#feedback_new textarea[name="QUESTION"]').type('Тест!');

    // Прикрепление файлов
    await page.setInputFiles('input.inputFile__input', '../files/sova.jpg');
    const checkbox = page.locator('div.feedback__footer input#check3');
    await expect(checkbox).toBeChecked();

    // Проверка, что заявка была отправлена
    //await page.click('#feedback_new button.form__submit');
    //const notification = page.locator('h2.notify-title');
    //await expect(notification).toHaveText(/Ваше обращение отправлено/);
    //await page.screenshot({ path: 'images\\login_feed_1.png' });
  });

  test('natural_login', async ({ page }) => {
    test.setTimeout(80000);

    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    await page.click('div.popup__body button.js-popup-accept');

    // Подтверждение использования файлов cookie
    await page.click('button.cookie-modal-alert__button');

    // Авторизация физлица
    await page.hover('span.header-bottom__account-link');
    await page.$eval('div.header-fixed__profile div.header-bottom__profile-dropdown-menu a.js-button-login', (element) => element.click());
    await page.waitForLoadState('load');
    // Адрес электронной почты
    await page.locator('form#authorization input[name="USER_LOGIN"]').type('puchka333@yandex.ru');
    // Пароль
    await page.locator('form#authorization input[name="USER_PASSWORD"]').type('987654321');
    await page.click('#authorization > button');

    // Заполнение формы "Обратная связь"
    await page.hover('span.header-bottom__account-link');
    await page.$eval('div.header-bottom__profile-dropdown-menu a[href="/personal/feedback/"]', (element) => element.click());
    await page.waitForLoadState('load');
    await page.click('#feedback_new div.selectFancyWrap div.input-fancy');
    // Тема "Отзывы и предложения"
    await page.click('#feedback_new div.selectFancy__options button:nth-child(4)');
    // Сообщение (необязательное поле)
    // await page.locator('#feedback_new textarea[name="QUESTION"]').type('Тест!');

    // Прикрепление файла
    await page.setInputFiles('input.inputFile__input', '../files/lisa.jpg');
    const checkbox = page.locator('div.feedback__footer input#check3');
    await expect(checkbox).toBeChecked();

    // Проверка, что заявка была отправлена
    //await page.click('#feedback_new button.form__submit');
    //const notification = page.locator('h2.notify-title');
    //await expect(notification).toHaveText(/Ваше обращение отправлено/);
    //await page.screenshot({ path: 'images\\login_feed_2.png' });
  });
});
