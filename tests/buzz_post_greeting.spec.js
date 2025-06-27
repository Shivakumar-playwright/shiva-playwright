const { test, expect } = require('@playwright/test');

test('Post a greeting in Buzz module on OrangeHRM', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 2: Login as admin
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Step 3: Wait for dashboard to load
  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Step 4: Go to Buzz module
  await page.click('a[href="/web/index.php/buzz/viewBuzz"]');
  await page.waitForURL('**/buzz/viewBuzz');

  // Step 5: Enter greetings text in "What’s on your mind"
  const greeting = 'Hello from Playwright!';
  await page.click('textarea[placeholder="What\'s on your mind?"]');
  await page.fill('textarea[placeholder="What\'s on your mind?"]', greeting);
  await page.click('button:has-text("Post")');

  // Step 6: Verify the post is visible
  await expect(page.locator('.oxd-buzz-post .oxd-buzz-post-body-text')).toHaveText(greeting);
});
