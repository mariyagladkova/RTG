const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test.describe('Two tests', () => {

    // test('juridical_service_form', async ({ page }) => {
    //     const RTGmp = new RTGMainPage(page);
    //     await RTGmp.goto();

    //     // Подтверждение выбора города
    //     await page.click('div.popup__body button.js-popup-accept');

    //     // Заполнение формы "Сервисный центр RTG" 
    //     await page.click('div.footer-top__list a[href="/services/service-center/"]');
    //     await page.waitForLoadState('load');
    //     // Выбор юрлица
    //     await page.click('div.select-organization-item:nth-child(2) button.bg-transparent');
    //     // Организация
    //     await page.locator('input[name="ORG_NAME"]').type('Тесто');
    //     // Имя контактного лица
    //     await page.locator('form#education-center-form input[name="NAME"]').type('Тест');
    //     // Телефон
    //     await page.locator('form#education-center-form input[name="PHONE"]').type('9129876543');
    //     // Адрес электронной почты
    //     await page.locator('form#education-center-form input[name="EMAIL"]').type('test@mmmail.ru');

    //     await page.click('form#education-center-form div.selectFancy');
    //     // Причина обращения - Нарушение товарного вида
    //     await page.click('div.interview-item div.selectFancy__options button:nth-child(2)');
    //     // Сообщение (необязательное поле)
    //     // await page.locator('form#education-center-form textarea[name="QUESTION"]').type('Тест');

    //     // Прикрепление файла
    //     await page.setInputFiles('input.inputFile__input', '../files/ISTQB_CTFL_Syllabus_2018_RU.pdf');
    //     const checkbox = page.locator('input#check100');
    //     await expect(checkbox).toBeChecked();

    //     // Проверка, что заявка была отправлена
    //     await page.click('form#education-center-form button.form__submit');
    //     //const notification = page.locator('h2.notify-title');
    //     //await expect(notification).toHaveText(/Ваша рекламация отправлена/);
    //     //await page.screenshot({ path: 'images\\service_1.png' });
    // });

    test('natural_service_form', async ({ page }) => {
        const RTGmp = new RTGMainPage(page);
        await RTGmp.goto();

        // Подтверждение выбора города
        await page.click('div.popup__body button.js-popup-accept');

        // Заполнение формы "Сервисный центр RTG" 
        await page.click('div.footer-top__list a[href="/services/service-center/"]');
        await page.waitForLoadState('load');
        // Имя
        await page.locator('input[type="name"]').type('Тест');
        // Телефон
        await page.locator('div.interview-item input[name="PHONE"]').type('9129876543');
        // Адрес электронной почты
        await page.locator('input[name="EMAIL"]').type('test@mmmail.ru');

        await page.click('form#education-center-form div.selectFancy');
        // Причина обращения - Технический брак
        await page.click('div.interview-item div.selectFancy__options button:nth-child(3)');
        // Сообщение (необязательное поле)
        // await page.locator('form#education-center-form textarea[name="QUESTION"]').type('Тест');

        // Прикрепление файла
        await page.setInputFiles('input.inputFile__input', '../files/ISTQB_CTFL_Syllabus_2018_RU.pdf');
        const checkbox = page.locator('input#check100');
        await expect(checkbox).toBeChecked();

        // Проверка, что заявка была отправлена
        await page.click('form#education-center-form button.form__submit');
        //const notification = page.locator('h2.notify-title');
        //await expect(notification).toHaveText(/Ваша рекламация отправлена/);
        //await page.screenshot({ path: 'images\\service_2.png' });
    });
});
