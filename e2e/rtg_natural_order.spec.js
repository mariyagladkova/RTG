const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('natural_order', async ({ page }) => {
    test.setTimeout(80000);

    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    //await page.click('div.popup__body button.js-popup-accept');

    // Авторизация физлица
    await page.hover('span.header-bottom__account-link');
    await page.$eval('div.header-fixed__profile div.header-bottom__profile-dropdown-menu a.js-button-login', (element) => element.click());
    // Телефон
    await page.locator('form#authorization input[name="USER_LOGIN"]').type('+7 (912) 123-45-67');
    // Пароль
    await page.locator('form#authorization input[name="USER_PASSWORD"]').type('987654321');
    await page.click('#authorization > button');

    // Оформление заказа
    await page.click('#newProducts div.goods-wrapper:nth-child(1) div.goods div.goods__add button.js-btn-add-to-basket');
    await page.click('div.header-fixed__cart div.header-bottom__cart-link');
    await page.click('div.header-fixed__cart a.dropdown-cart__button');
    await page.waitForLoadState('load');
    await page.click('div.cart-order__checkout-block button.js-checkout');
    await page.waitForURL('http://new.rtg-company.ru/ordering/');

    // Самовывоз из офиса продаж RTG
    await page.click('div.order__body:nth-child(2) div.order__radio:nth-child(3) input.radio__input:nth-child(1)');
    // Способ оплаты - наличными/картой в офисе продаж
    await page.click('div.radio:nth-child(2) input.radio__input[name="payment"]');

    // Проверка, что заказ был оформлен
    //await page.click('input.order__totals-button');
    //const notification = page.locator('h2.notify-title');
    //await expect(notification).toHaveText(/Заказ принят в обработку!/);
    //await page.screenshot({ path: 'images\\natural_order.png' });
});
