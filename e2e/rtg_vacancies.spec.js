const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test('vacancies_form', async ({ page }) => {
    const RTGmp = new RTGMainPage(page);
    await RTGmp.goto();

    // Подтверждение выбора города
    //await page.click('div.popup__body button.js-popup-accept');

    // Заполнение формы "Вакансии"
    await page.click('div.footer-top a[href*="/about/vacancies/"]');
    await page.waitForLoadState('load');

    // Имя
    await page.locator('div.resume__item input[name="NAME"]').type('Тест');
    // Фамилия
    await page.locator('div.resume__item input[name="SURNAME"]').type('Тест');
    // Телефон
    await page.locator('div.resume__item input[name="PHONE"]').type('9129876543');
    // Адрес электронной почты
    await page.locator('div.resume__item input[name="EMAIL"]').type('test@mmmail.ru');
    // В каком городе ищете работу? - Чайковский
    await page.click('form#form-vacancies div.embla__container div:nth-child(4)');
    // На какую вакансию претендуете
    await page.locator('div.resume__item textarea[name="MESSAGE"]').type('Менеджер');

    // Прикрепление файла
    await page.setInputFiles('input.inputFile__input', '../files/ISTQB_CTFL_Syllabus_2018_RU.pdf');
    const files = page.locator('div.inputFile__file');
    await expect(files).toBeInViewport();

    // Проверка, что заявка была отправлена
    await page.click('form#form-vacancies button.form__submit');
    //const notification = page.locator('h2.notify-title');
    //await expect(notification).toHaveText(/Резюме отправлено/);
    //await page.screenshot({ path: 'images\\vacancies.png' });
});
