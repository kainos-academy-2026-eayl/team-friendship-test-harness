import { test, expect } from '@playwright/test';
import { testAccountVariables } from './testVariables'; //Import our testing variables

// Testing that a user can login to their account
// By registering a new user and logging in with those credentials

test('that a user can register and login', async ({ page }) => {
  
  // Navigate to our register page
  await page.goto('register');

  // Fill in the registration form
  await page.getByTestId('customer-forename').click();
  await page.getByTestId('customer-forename').fill(testAccountVariables.forename);
  await page.getByTestId('customer-surname').click();
  await page.getByTestId('customer-surname').fill(testAccountVariables.surname);
  await page.getByTestId('customer-email').click();
  await page.getByTestId('customer-email').fill(testAccountVariables.email);
  await page.getByTestId('customer-phone').click();
  await page.getByTestId('customer-phone').fill(testAccountVariables.phone);
  await page.getByTestId('address').click();
  await page.getByTestId('address').fill(testAccountVariables.address);
  await page.getByTestId('postcode').click();
  await page.getByTestId('postcode').fill(testAccountVariables.postcode);
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill(testAccountVariables.password);
  await page.getByTestId('confirm-password').click();
  await page.getByTestId('confirm-password').fill(testAccountVariables.password);
  await page.getByTestId('register-submit').click();

  // Get the status of the register
  // We expect it to be a success and thus show us the success text
  await expect(page.getByTestId('status')).toHaveText('Account created successfully.');

  // Logging in with the registered details
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill(testAccountVariables.email);
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill(testAccountVariables.password);
  await page.getByTestId('login-submit').click();
});
