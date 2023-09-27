const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('catalog', async ({ page }) => {
    test.setTimeout(80000);

    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    await page.click('div.popup__body button.js-popup-accept');

    // Проверка разделов Каталога
    await page.click('div.header-bottom div.button');
    // Раздел "Внутренние системы водопроводов" (можно поменять 1 на другое число, чтобы выбрать другой раздел)
    await page.click('div.aim-menu-wrap ul.aim-menu__list li.aim-menu__item:nth-child(1)');
    // Подраздел "Внутренние системы ХВС, ГВС, радиаторного отопления и "теплого пола" (можно поменять 1 на другое число, чтобы выбрать другой подраздел)
    await page.click('li.tab-vertical__item:nth-child(1)');
    // Переход в Каталог
    await page.click('a.events-none[href="/catalog/"]');
    // Раздел "Сантехника" (можно поменять 6 на другое число, чтобы выбрать другой раздел)
    await page.click('li.tab-vertical__item:nth-child(6)');
    // Подраздел "Фильтры тонкой очистки и фильтрующие элементы" (можно поменять 3 на другое число, чтобы выбрать другой подраздел)
    await page.click('li.tab-vertical__item:nth-child(3)');
    // Добавление 1-го по счёту товара в корзину (можно поменять 1 на другое число)
    await page.click('div.goods-container__item:nth-child(1) button.js-btn-add-to-basket');

    await page.locator('div.goods-container__item:nth-child(1)').scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'images\\catalog_1.png' });

    // Кнопка "Показать ещё"
    await page.click('button.showMore__btn');
    const button = page.locator('span.nav-current-page');
    await expect.soft(button).toHaveText("2");

    // Кнопки "+/-" в Каталоге
    await page.waitForLoadState('load');
    // Добавление 16-го по счёту товара в корзину (можно поменять 16 на другое число)
    await page.click('#catalog_cont div:nth-child(16) button.js-btn-add-to-basket');
    await page.click('#catalog_cont div:nth-child(16) button.js-counter-increase');
    await page.waitForLoadState('load');
    await page.click('#catalog_cont div:nth-child(16) button.js-counter-increase');
    await page.waitForLoadState('load');
    await page.click('#catalog_cont div:nth-child(16) button.js-counter-reduce');
    await page.locator('#catalog_cont div:nth-child(16)').scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'images\\catalog_2.png' });
    const catalog = page.locator('#catalog_cont div:nth-child(16) input');
    await expect.soft(catalog).toHaveValue(/2/);

    // Кнопки "+/-" в карточке товара
    // Открытие 18-го по счёту товара и добавление в корзину (можно поменять 18 на другое число)
    await page.click('#catalog_cont div:nth-child(19) div.goods__card-header a');
    await page.waitForLoadState('load');
    await page.click('div.goods-card__pay-desc button.js-btn-add-to-basket');
    await page.click('div.goods-card__pay-desc button.js-counter-increase');
    await page.waitForLoadState('load');
    await page.click('div.goods-card__pay-desc button.js-counter-increase');
    await page.waitForLoadState('load');
    await page.click('div.goods-card__pay-desc button.js-counter-reduce');
    await page.locator('h1[itemprop="name"]').scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'images\\catalog_3.png' });
    const goods = page.locator('div.goods-card__pay-desc input.counter__input');
    await expect.soft(goods).toHaveValue(/2/);

    // Кнопки "+/-" в "Вы недавно просматривали"
    await page.click('div.header-desktop div.header-bottom a[href="/"]');
    await page.click('section.recent-products button.js-counter-increase');
    await page.waitForLoadState('load');
    await page.click('section.recent-products button.js-counter-increase');
    await page.waitForLoadState('load');
    await page.click('section.recent-products button.js-counter-reduce');
    await page.locator('h2.recent-products__title').scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'images\\catalog_4.png' });
    const recent = page.locator('section.recent-products input.counter__input');
    await expect.soft(recent).toHaveValue(/3/);
});
