import { test, expect } from '@playwright/test';

test('checking disappearing elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');

    const gallery = await page.locator('a[href="/gallery/"]');
    const portfolio = await page.locator('a[href="/portfolio/"]');

    if (gallery.isVisible()) {
        gallery.click();
        console.log("gallery is clicked");
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/gallery/');
        await page.close()
    } else if (portfolio.isVisible()) {
        portfolio.click();
        console.log("portfolio is clicked");
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/portfolio/');
    }
    await page.close()
    //  else {
    //     console.log("Neither gallery nor portfolio is visible");

    // }
});
