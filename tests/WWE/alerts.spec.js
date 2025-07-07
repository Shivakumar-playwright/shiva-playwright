const { test, expect } = require('@playwright/test');

test.describe('Automation - Working with Alerts', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    });

    test('Simple Alert', async ({ page }) => {
        await page.locator('text=Click for JS Alert').click();
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });


    });

    test('Confirm Alert - OK', async ({ page }) => {
        await page.locator('text=Click for JS Alert').click();
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm');
            await dialog.accept();
        });


    });

    test('Confirm Alert - Cancel', async ({ page }) => {
        await page.locator('text=Click for JS Alert').click();
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm');
            await dialog.dismiss();
        });


    });

    test('Prompt Alert - Ok', async ({ page }) => {
        await page.locator('text=Click for JS Alert').click();
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt');
            await dialog.accept('shiva');
            await page.waitForTimeout(5000)
        });

    });

    test('Prompt Alert - Cancel', async ({ page }) => {
        await page.locator('text=Click for JS Alert').click();
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt');
            await dialog.dismiss();
        });


    });

});
