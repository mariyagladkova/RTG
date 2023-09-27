const { test, expect } = require('@playwright/test');
import { RTGMainPage } from '../pages/basePage.page';

test.describe('Two tests', () => {
    test('engineering_center_form_juridical', async ({ page }) => {
        test.setTimeout(80000);

        const RTGmp = new RTGMainPage(page);
        await RTGmp.goto();

        // Подтверждение выбора города
        await page.click('div.popup__body button.js-popup-accept');

        // Подтверждение использования файлов cookie
        await page.click('button.cookie-modal-alert__button');

        // Заполнение первой страницы формы "Инженерный центр RTG" (юрлицо)
        await page.click('div.footer-top__list a[href="/services/engineering-center/"]');
        await page.waitForLoadState('networkidle');
        await page.click('div.select-organization-item:nth-child(2) button.select-organization-btn');
        // Организация
        await page.locator('div.interview-item input[name="ORG_NAME"]').type('Тесто');
        // Имя контактного лиа
        await page.locator('div.interview-item input[name="NAME"]').type('Тест');
        // Номер телефона
        await page.locator('div.interview-item input[name="PHONE"]').type('9121357900');
        // Адрес электронной почты
        await page.locator('div.interview-item input[name="EMAIL"]').type('testo@mmmail.ru');
        // Адрес объекта
        await page.locator('div.interview-item input[name="ADDRESS"]').type('Тест');
        // Требования к ценовой категории оборудования
        await page.click('form#educationCenterPage1 div.selectFancy');
        // Средняя
        await page.click('form#educationCenterPage1 div.selectFancy button:nth-child(2)');
        // Общая площадь дома, м2
        await page.locator('input[name="AREA"]').type('100');
        // Количество этажей
        await page.locator('input[name="FLOORS_NUMBER"]').type('1');
        // Конструкция стены
        await page.locator('input[name="WALL_CONSTRUCTION"]').type('Тест');
        // Конструкция пола
        await page.locator('input[name="FLOOR_CONSTRUCTION"]').type('Тест');
        // Конструкция кровли
        await page.locator('input[name="ROOF_CONSTRUCTION"]').type('Тест');
        // Чекбокс "Наличие панорамного остекления"
        await page.evaluate(() => $('input#checkOne').trigger('click'));
        await page.click('div#educationSliderStart button.button--widht-init');

        // Заполнение второй страницы формы "Инженерный центр RTG"
        await page.waitForLoadState('networkidle');
        // Тип отопления - Тёплый пол
        await page.click('div.heatingType-type div:nth-child(2)');
        await page.click('div.WarmFloor');
        // Материал трубопроводов водопровода - Полипропилен
        await page.click('div.WarmFloor button:nth-child(1)');
        // Теплоноситель
        await page.click('div.heatingType-selects div.interview-item:nth-child(3)');
        // Антифриз
        await page.click('div.heatingType-selects div.interview-item:nth-child(3) button:nth-child(1)');
        // Количество точек водоразбора
        await page.locator('input[name="WATER_POINTS_NUMBER"]').type('1');
        // Теплоноситель
        await page.click('#educationCenterPage2 div:nth-child(8)');
        // Металлопласт
        await page.click('#educationCenterPage2 div:nth-child(8) button:nth-child(2)');
        // Бойлер
        await page.click('#educationCenterPage2 div:nth-child(9)');
        // Внешний
        await page.click('#educationCenterPage2 div:nth-child(9) button:nth-child(2)');
        // Источник холодной воды
        await page.click('#educationCenterPage2 div:nth-child(10)');
        // Центральная магистраль
        await page.click('#educationCenterPage2 div:nth-child(10) button:nth-child(1)');
        // Система очистки воды
        await page.locator('input[name="WATER_CLEANER"]').type('Тест');
        // Чекбокс "Наличие участков напорной канализации"
        await page.evaluate(() => $('input#checkThree').trigger('click'));
        await page.click('div#educationSliderStart button.button--widht-init');

        // Заполнение третьей страницы формы "Инженерный центр RTG"
        await page.waitForLoadState('networkidle');
        // Вид топлива
        await page.click('#educationCenterPage3 div:nth-child(4) div.input-fancy');
        // Электричество
        await page.click('#educationCenterPage3 div:nth-child(4) div.input-fancy button:nth-child(2)');
        // Тип котла
        await page.click('#educationCenterPage3 div:nth-child(5) div.input-fancy');
        // Напольный
        await page.click('#educationCenterPage3 div:nth-child(5) div.input-fancy button:nth-child(2)');
        // Резервный котёл
        await page.click('#educationCenterPage3 div:nth-child(6) div.input-fancy');
        // Твёрдотопливный
        await page.click('#educationCenterPage3 div:nth-child(6) div.input-fancy button:nth-child(1)');
        // Производитель котла
        await page.locator('input[name="BOILER_MANUFACTURER"]').type('Тест');
        // Чекбокс "Тёплый пол"
        await page.evaluate(() => $('input#check36552').trigger('click'));
        // Управление работой системы теплоснабжения
        await page.click('#educationCenterPage3 div:nth-child(10) div.input-fancy');
        // По температуре теплоносителя (с помощью котла)
        await page.click('#educationCenterPage3 div:nth-child(10) div.input-fancy button:nth-child(1)');
        // Управление температурой радиаторов
        await page.click('#educationCenterPage3 div:nth-child(11) div.input-fancy');
        // Ручная регулировка
        await page.click('#educationCenterPage3 div:nth-child(11) div.input-fancy button:nth-child(3)');
        // Дополнительные пожелания
        await page.locator('textarea[name="MESSAGE"]').type('Тест');

        // Прикрепление файла
        await page.setInputFiles('input.inputFile__input', '../files/ISTQB_CTFL_Syllabus_2018_RU.pdf');
        const files = page.locator('div.inputFile__file');

        const checkbox = page.locator('input#check100');
        await expect(checkbox).toBeChecked();

        // Проверка, что заявка была отправлена
        await page.click('div#educationSliderStart button.button--widht-init');
        const notification = page.locator('h2.notify-title');
        await expect(notification).toHaveText("Ваша заявка на расчёт и подбор оборудования отправлена");
        //await page.screenshot({ path: 'images\\engineer.png' });
    });

    //     test('engineering_center_form_juridical_natural', async ({ page }) => {
    //         test.setTimeout(80000);

    //         const RTGmp = new RTGMainPage(page);
    //         await RTGmp.goto();

    //         // Подтверждение выбора города
    //         await page.click('div.popup__body button.js-popup-accept');

    //         // Подтверждение использования файлов cookie
    //         await page.click('button.cookie-modal-alert__button');

    //         // Заполнение первой страницы формы "Инженерный центр RTG" (физлицо)
    //         await page.click('div.footer-top__list a[href="/services/engineering-center/"]');
    //         await page.waitForLoadState('networkidle');
    //         // Имя
    //         await page.locator('div.interview-item input[name="NAME"]').type('Тест');
    //         // Фамилия
    //         await page.locator('div.interview-item input[name="LAST_NAME"]').type('Тест');
    //         // Номер телефона
    //         await page.locator('div.interview-item input[name="PHONE"]').type('9129876543');
    //         // Адрес электронной почты
    //         await page.locator('div.interview-item input[name="EMAIL"]').type('test@mmmail.ru');
    //         // Адрес объекта
    //         await page.locator('div.interview-item input[name="ADDRESS"]').type('Тест');
    //         // Требования к ценовой категории оборудования
    //         await page.click('form#educationCenterPage1 div.selectFancy');
    //         // Средняя
    //         await page.click('form#educationCenterPage1 div.selectFancy button:nth-child(2)');
    //         // Общая площадь дома, м2
    //         await page.locator('input[name="AREA"]').type('100');
    //         // Количество этажей
    //         await page.locator('input[name="FLOORS_NUMBER"]').type('1');
    //         // Конструкция стены
    //         await page.locator('input[name="WALL_CONSTRUCTION"]').type('Тест');
    //         // Конструкция пола
    //         await page.locator('input[name="FLOOR_CONSTRUCTION"]').type('Тест');
    //         // Конструкция кровли
    //         await page.locator('input[name="ROOF_CONSTRUCTION"]').type('Тест');
    //         // Чекбокс "Наличие панорамного остекления"
    //         await page.evaluate(() => $('input#checkOne').trigger('click'));
    //         await page.click('div#educationSliderStart button.button--widht-init');

    //         // Заполнение второй страницы формы "Инженерный центр RTG"
    //         await page.waitForLoadState('networkidle');
    //         // Тип отопления - Тёплый пол
    //         await page.click('div.heatingType-type div:nth-child(2)');
    //         await page.click('div.WarmFloor');
    //         // Материал трубопроводов водопровода - Полипропилен
    //         await page.click('div.WarmFloor button:nth-child(1)');
    //         // Теплоноситель
    //         await page.click('div.heatingType-selects div.interview-item:nth-child(3)');
    //         // Антифриз
    //         await page.click('div.heatingType-selects div.interview-item:nth-child(3) button:nth-child(1)');
    //         // Количество точек водоразбора
    //         await page.locator('input[name="WATER_POINTS_NUMBER"]').type('1');
    //         // Теплоноситель
    //         await page.click('#educationCenterPage2 div:nth-child(8)');
    //         // Металлопласт
    //         await page.click('#educationCenterPage2 div:nth-child(8) button:nth-child(2)');
    //         // Бойлер
    //         await page.click('#educationCenterPage2 div:nth-child(9)');
    //         // Внешний
    //         await page.click('#educationCenterPage2 div:nth-child(9) button:nth-child(2)');
    //         // Источник холодной воды
    //         await page.click('#educationCenterPage2 div:nth-child(10)');
    //         // Центральная магистраль
    //         await page.click('#educationCenterPage2 div:nth-child(10) button:nth-child(1)');
    //         // Система очистки воды
    //         await page.locator('input[name="WATER_CLEANER"]').type('Тест');
    //         // Чекбокс "Наличие участков напорной канализации"
    //         await page.evaluate(() => $('input#checkThree').trigger('click'));
    //         await page.click('div#educationSliderStart button.button--widht-init');

    //         // Заполнение третьей страницы формы "Инженерный центр RTG"
    //         await page.waitForLoadState('networkidle');
    //         // Вид топлива
    //         await page.click('#educationCenterPage3 div:nth-child(4) div.input-fancy');
    //         // Электричество
    //         await page.click('#educationCenterPage3 div:nth-child(4) div.input-fancy button:nth-child(2)');
    //         // Тип котла
    //         await page.click('#educationCenterPage3 div:nth-child(5) div.input-fancy');
    //         // Напольный
    //         await page.click('#educationCenterPage3 div:nth-child(5) div.input-fancy button:nth-child(2)');
    //         // Резервный котёл
    //         await page.click('#educationCenterPage3 div:nth-child(6) div.input-fancy');
    //         // Твёрдотопливный
    //         await page.click('#educationCenterPage3 div:nth-child(6) div.input-fancy button:nth-child(1)');
    //         // Производитель котла
    //         await page.locator('input[name="BOILER_MANUFACTURER"]').type('Тест');
    //         // Чекбокс "Тёплый пол"
    //         await page.evaluate(() => $('input#check36552').trigger('click'));
    //         // Управление работой системы теплоснабжения
    //         await page.click('#educationCenterPage3 div:nth-child(10) div.input-fancy');
    //         // По температуре теплоносителя (с помощью котла)
    //         await page.click('#educationCenterPage3 div:nth-child(10) div.input-fancy button:nth-child(1)');
    //         // Управление температурой радиаторов
    //         await page.click('#educationCenterPage3 div:nth-child(11) div.input-fancy');
    //         // Ручная регулировка
    //         await page.click('#educationCenterPage3 div:nth-child(11) div.input-fancy button:nth-child(3)');
    //         // Дополнительные пожелания
    //         await page.locator('textarea[name="MESSAGE"]').type('Тест');

    //         // Прикрепление файла
    //         await page.setInputFiles('input.inputFile__input', '../files/ISTQB_CTFL_Syllabus_2018_RU.pdf');
    //         const files = page.locator('div.inputFile__file');

    //         const checkbox = page.locator('input#check100');
    //         await expect(checkbox).toBeChecked();

    //         // Проверка, что заявка была отправлена
    //         //await page.click('div#educationSliderStart button.button--widht-init');
    //         //const notification = page.locator('h2.notify-title);
    //         //await expect(notification).toHaveText("Ваша заявка на расчёт и подбор оборудования отправлена");
    //         //await page.screenshot({ path: 'images\\engineer.png' });
    //     });
});
