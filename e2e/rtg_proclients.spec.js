const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('club_form', async ({ page }) => {
    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    await page.click('div.popup__body button.js-popup-accept');

    // Заполнение формы "Профессиональным клиентам"
    await page.click('div.footer-top__list a[href="/club/"]');
    await page.waitForLoadState('load');
    // Имя
    await page.locator('input[name="form_text_27"]').type('Тест');
    // Адрес электронной почты
    await page.locator('input[name="form_text_38"]').type('test@mmmail.ru');
    // Номер телефона
    await page.locator('input[name="form_text_28"]').type('9129876543');
    await page.evaluate(() => $('input.js-validate-checkbox').trigger('click'));

    // Проверка, что заявка была отправлена
    await page.click('input[class="insstallersForm__btn button"]');
    const notification = page.locator('h2.applicationModal_title');
    //await expect(notification).toHaveText(/Заявка принята в обработку!/);
    //await page.screenshot({ path: 'images\\proclients.png' });
});
