const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('legal_form', async ({ page }) => {
    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    //await page.click('div.popup__body button.js-popup-accept');

    // Заполнение формы "Юридическим лицам"
    await page.click('div.footer-top__list a[href="/legal/"]');
    await page.waitForLoadState('load');
    // Имя
    await page.locator('input[name="form_text_29"]').type('Тест');
    // Адрес электронной почты
    await page.locator('input[name="form_email_37"]').type('test@mmmail.ru');
    // Телефон
    await page.locator('input[name="form_text_30"]').type('9129876543');
    // Название компании (необязательное поле)
    //await page.locator('input[name="form_text_31"]').type('Тестов');
    // ИНН (необязательное поле)
    //await page.locator('input[name="form_text_31"]').type('123456789000');
    await page.evaluate(() => $('input.js-validate-checkbox').trigger('click'));

    // Проверка, что заявка была отправлена
    await page.click('input[class="insstallersForm__btn button"]');
    const notification = page.locator('h2.applicationModal_title');
    //await expect(notification).toHaveText("Заявка принята в обработку!");
    //await page.screenshot({ path: 'images\\juridical_person.png' });
});
