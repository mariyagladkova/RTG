const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('feedback_form', async ({ page }) => {
    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    //await page.click('div.popup__body button.js-popup-accept');

    // Заполнение формы "Обратная связь"
    await page.click('div.footer-top__btns a[href="/conveniently/feedback"]');
    await page.waitForLoadState('load');
    // Имя
    await page.locator('form.feedback__form input[name="NAME"]').type('Тест');
    // Выбор темы
    await page.locator('div#feedback_new div.selectFancyWrap div.input-fancy').click();
    // Тема "Сотрудничество"
    await page.click('div#feedback_new div.selectFancyWrap button[data-value="3"]');
    // Адрес электронной почты
    await page.locator('form.feedback__form input[name="EMAIL"]').type('test@mmmail.ru');
    // Телефон
    await page.locator('form.feedback__form input[name="PHONE"]').type('9129876543');
    // Сообщение
    await page.locator('form.feedback__form textarea[name="QUESTION"]').type('Тест теста')

    // Прикрепление файла
    await page.setInputFiles('input.inputFile__input', ['../files/zmeya.jpg', '../files/belka.jpg']);
    const checkbox = page.locator('div.feedback__footer input#check3');
    await expect(checkbox).toBeChecked();

    // Проверка, что заявка была отправлена
    await page.click('#feedback_new button.form__submit');
    //const notification = page.locator('h2.notify-title');
    //await expect(notification).toHaveText("Ваше обращение отправлено");
    //await page.screenshot({ path: 'images\\feedback.png' });
});
