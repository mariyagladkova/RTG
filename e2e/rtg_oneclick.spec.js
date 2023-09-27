const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('oneclick_order', async ({ page }) => {
    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    await page.click('div.popup__body button.js-popup-accept');

    // Оформление заказа в "1 клик"
    await page.click('div.header-bottom div.button');
    await page.click('div.aim-menu-wrap ul.aim-menu__list li.aim-menu__item:nth-child(2)');
    await page.click('div#catalog_cont div.goods-container__item:nth-child(3) a:nth-child(1)');
    const availability = page.locator('div.goods-card__right span.goods__wo_price--local');
    await expect(availability).toHaveText("В наличии");
    await page.waitForLoadState('networkidle');
    await page.locator('button#btnOneClick').waitFor();
    await page.click('button#btnOneClick');
    // Имя
    await page.locator('input#name').type('Тест');
    // Номер телефона
    await page.locator('div.one-click__fields input[name="PHONE"]').type('9129876543');

    // Проверка, что заказ был оформлен
    //await page.click('button#submitOrder');
    //const notification = page.locator('div#modalOneClickContent h2');
    //await expect(notification).toHaveText(/Заказ принят в обработку!/);
    //await page.screenshot({ path: 'images\\oneclick.png' });
});
