const { browser, test, expect } = require('@playwright/test');
const fs = require('fs')
const path = require('path');

test.describe('Automation - Working With Elements', () => {

    test('Playwright Test Case - upload file', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/upload');

        // Make sure the file path is correct and relative to the project root
        await page.locator('#file-upload').setInputFiles('testdata/files/levels of testing.jpg');
        await page.locator('#file-submit').click();
        await expect(page.locator('#uploaded-files')).toHaveText('levels of testing.jpg');

    });

    test('multiple Playwright Test Case - upload file', async ({ page }) => {

        await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

        await page.locator('input[type="file"]').setInputFiles([
            'testdata/files/levels of testing.jpg',
            'testdata/files/Types-of-Software-Testing.jpg'
        ]);
        await expect(page.locator('//p[@class="name"][1]')).toHaveText("levels of testing.jpg");
        await expect(page.locator('//p[@class="name"][2]')).toHaveText("Types-of-Software-Testing.jpg");
    });

    test('Download a Single file and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('a[href="download/IMG-20250707-WA0000.jpg"]').click()
        ]);

        const suggestedFileName = download.suggestedFilename()
        const filePath = 'downloads/' + suggestedFileName
        await download.saveAs(filePath)
        expect(fs.existsSync(filePath)).toBeTruthy()

    })

    test('Download Multiple files and assert', async ({ page, context }) => {

        // Go to download page
        await page.goto('https://the-internet.herokuapp.com/download');

        // Array of filenames to download
        const fileNames = ["evening.png", "1.png"];

        // Loop through each file
        for (const fileName of fileNames) {

            // Wait for download event and trigger click
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                page.locator(`text=${fileName}`).click()
            ]);

            // Get suggested file name
            const suggestedFileName = download.suggestedFilename();

            // Save download to desired location
            const filePath = `downloads/${suggestedFileName}`;
            await download.saveAs(filePath);

            // Assert that file exists using Node.js fs module
            expect(fs.existsSync(filePath)).toBeTruthy();
        }
    });
});