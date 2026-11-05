import { test, expect } from '@playwright/test';


// Testing that a user can't access the basket without logging in
test('that the basket page cannot be accessed while logged out', async ({ page, request }) => {
  
  // Navigate to our basket page
  await page.goto('basket');

  // It should redirect to the login page because we're not logged in
  await expect(page).toHaveURL(/login/);
});
