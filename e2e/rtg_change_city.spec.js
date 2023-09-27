const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('change_city', async ({ page }) => {

    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Смена города
    await page.click('div.popup__body button.js-other-city');
    await page.waitForLoadState('load');
    // Ввод названия города
    await page.locator('input.popup__input').type('Санкт-Петербург');
    await page.click('button.js-send-current-city');
    await page.screenshot({ path: 'images\\change_city.png' });
    const city = page.locator('span.header-top__current-city');
    await expect(city).toHaveText('Санкт-петербург');
});
