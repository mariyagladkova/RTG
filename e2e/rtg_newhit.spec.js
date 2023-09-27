const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('newhit_buttons', async ({ page }) => {
  test.setTimeout(80000);

  const RTGmp = new RTGMainPage(page);
  await RTGmp.goto();

  // Подтверждение выбора города
  //await page.click('div.popup__body button.js-popup-accept');

  // Подтверждение использования файлов cookie
  await page.click('button.cookie-modal-alert__button');

  // Кнопки "+/-" в разделе "Акции" (есть только на проде)
  //await page.click('#bestProductsSlider div.goods-wrapper:nth-child(2) div.goods div.goods__add button.js-btn-add-to-basket');
  //for (let i = 0; i < 2; i++) {
  //  await page.click('#bestProductsSlider div.goods-wrapper:nth-child(2) div.goods div.goods__add button.js-counter-increase')
  //}
  //await page.click('#bestProductsSlider div.goods-wrapper:nth-child(2) div.goods div.goods__add button.js-counter-reduce');
  //await page.waitForLoadState('load');
  //await page.screenshot({ path: 'images\\newhit_1.png' });
  //await page.locator('#bestProductsSlider').screenshot({ path: 'images\\newhit_4.png' });
  //await expect(page.locator('h2.best-products__title')).toContainText("Акции");
  //const bestproducts = page.locator('#bestProductsSlider div.goods-wrapper:nth-child(2) div.goods div.goods__add input.counter__input');
  //await expect(bestproducts).toHaveValue(/2/);

  // Кнопки "+/-" в разделе "Новинки" 
  await page.click('#newProducts div.goods-wrapper:nth-child(2) div.goods div.goods__add button.js-btn-add-to-basket');
  for (let i = 0; i < 2; i++) {
    await page.click('#newProducts div.goods-wrapper:nth-child(2) div.goods div.goods__add button.js-counter-increase')
  }
  await page.click('#newProducts div.goods-wrapper:nth-child(2) div.goods div.goods__add button.js-counter-reduce');
  await page.screenshot({ path: 'images\\newhit_2.png' });
  await page.locator('#newProducts').screenshot({ path: 'images\\newhit_5.png' });

  const newproducts = page.locator('#newProducts div.goods-wrapper:nth-child(2) div.goods div.goods__add input.counter__input');
  await expect(newproducts).toHaveValue(/2/);

  // Кнопки "+/-" в разделе "Хиты продаж" 
  await page.click('#hitsProducts div.goods-wrapper:nth-child(3) div.goods div.goods__add button.js-btn-add-to-basket');
  for (let i = 0; i < 2; i++) {
    await page.click('#hitsProducts div.goods-wrapper:nth-child(3) div.goods div.goods__add button.js-counter-increase')
  }
  await page.click('#hitsProducts div.goods-wrapper:nth-child(3) div.goods div.goods__add button.js-counter-reduce');
  await page.screenshot({ path: 'images\\newhit_3.png' });
  await page.locator('#hitsProducts').screenshot({ path: 'images\\newhit_6.png' });
  const hitproducts = page.locator('#hitsProducts div.goods-wrapper:nth-child(3) div.goods div.goods__add input.counter__input');
  await expect(hitproducts).toHaveValue(/2/);
});
