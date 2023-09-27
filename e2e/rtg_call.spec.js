const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('call', async ({ page }) => {
    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    await page.click('div.popup__body button.js-popup-accept');

    await page.hover('span.header-top__current-city-phone');
    await page.click('div.header-top__city button[class="callback__btn button"]');
    await page.waitForLoadState('load');

    // Имя
    await page.locator('input[name="NAME"]').type('Тест');
    // Телефон
    await page.locator('input[name="PHONE"]').type('9129876543');
    await expect(page.locator('#check3')).toBeChecked();
    await page.click('button[name="web_form_submit"]');

    // Проверка, что заявка была отправлена
    const notification = page.locator('h2.notify-title');
    await expect(notification).toHaveText("Запрос отправлен");

    await page.screenshot({ path: 'images\\call.png' });
});
