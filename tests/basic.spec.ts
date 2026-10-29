import { test, expect } from '@playwright/test';

test('log in with valid credentials then log out', async ({ page }) => {

  // Navigate to the login page
  // Fill in login form with valid credentials
  // Click the login button
  // Click the log out button
  
  await page.goto('https://practice.expandtesting.com/login');

  const usernameInput = page.getByTestId('username');
  const passwordInput = page.getByTestId('password');
  
  await usernameInput.click();
  await usernameInput.fill('practice');
  await passwordInput.click();
  await passwordInput.fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});