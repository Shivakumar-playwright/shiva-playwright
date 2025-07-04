import { test, expect } from '@playwright/test';

test('based on browser Name run different script', async ({ page, browserName }) => {
    switch (browserName) {
        case 'chromium':
            await page.goto('https://www.google.com');
            break;
        case 'firefox':
            await page.goto('https://www.bing.com');
            break;
        case 'webkit':
            await page.goto('https://www.duckduckgo.com');
            break;
        default: {
            console.log('Browser not supported');
        }

    }
})

test('based on env run different script', async ({ page }) => {
    switch (process.env.ENV) {
        case "qa":
            await page.goto('https://www.flipkart.com/');
            break;
        case "dev":
            await page.goto('https://www.amazon.com/');
            break;
        case "prod":
            await page.goto('https://www.meesho.com/');
            break;
    }
})