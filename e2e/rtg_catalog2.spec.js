const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('catalog2', async ({ page }) => {
    test.setTimeout(80000);

    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    await page.click('div.popup__body button.js-popup-accept');

    // Подтверждение использования файлов cookie
    await page.click('button.cookie-modal-alert__button');

    // Проверка разделов Каталога
    await page.click('div.header-bottom div.button');
    // Раздел "Сантехника" (можно поменять 6 на другое число, чтобы выбрать другой раздел)
    await page.click('div.aim-menu-wrap ul.aim-menu__list li.aim-menu__item:nth-child(6)');
    // Подраздел "Фильтры тонкой очистки и фильтрующие элементы" (можно поменять 3 на другое число, чтобы выбрать другой подраздел)
    await page.click('li.tab-vertical__item:nth-child(3)');
    // Добавление 1-го по счёту товара в корзину (можно поменять 1 на другое число)
    await page.click('div.goods-container__item:nth-child(1) button.js-btn-add-to-basket');

    // Переход в Корзину
    await page.click('div.header-fixed__cart div.header-bottom__cart-link');
    await page.click('div.header-fixed__cart a.dropdown-cart__button');

    // Кнопки "+/-" в "Подобрать комплектующие"
    await page.locator('div.cart-list__info button.cart-list__alsoBuy').first().click();
    const modalAlsoBuy = page.locator('div.also-buy-modal');
    modalAlsoBuy.waitFor();

    // Добавление 2-го по счёту товара в корзину (можно поменять 2 на другое число)
    await page.click('div#partForProduct div.goods-wrapper:nth-child(2) button.js-btn-add-to-basket');
    await page.click('div#partForProduct div.goods-wrapper:nth-child(2) button.js-counter-increase');
    await page.waitForLoadState('load');
    await page.click('div#partForProduct div.goods-wrapper:nth-child(2) button.js-counter-increase');
    await page.waitForLoadState('load');
    await page.click('div#partForProduct div.goods-wrapper:nth-child(2) button.js-counter-reduce');
    const componentry = page.locator('div#partForProduct div.goods-wrapper:nth-child(2) input.counter__input');
    await expect.soft(componentry).toHaveValue(/2/);
    await page.click('div#modalAlsoBuy button.modal__close');

    // Очистить корзину
    await page.click('button.cart-footer__clearCart');
    await page.screenshot({ path: 'images\\catalog_5.png' });
    const cart = page.locator('div.cart-empty__message');
    await expect.soft(cart).toHaveText("В Корзине пока ничего нет");
});
