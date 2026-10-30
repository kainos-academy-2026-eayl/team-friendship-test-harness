import { test, expect } from '@playwright/test';
import { testAccountVariables } from './testVariables'; //Import our testing variables

// Testing that a user can login to their account
// By registering a new user and logging in with those credentials
test('that a user can register and login', async ({ page, request }) => {
  
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

  // Define a respose constant to check the page status
  const response = await request.get('/register');

  // Submit the registration form
  await page.getByTestId('register-submit').click();

  // Get the status of the register
  // We expect it to be a success
  await expect(page.getByTestId('status')).toHaveText('Account created successfully.');
  expect(response.ok()).toBeTruthy();

  // Navigate to the login page after registration
  await page.goto('login');

  // Logging in with the registered details
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill(testAccountVariables.email);
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill(testAccountVariables.password);
  await page.getByTestId('login-submit').click();

  // Define a response constant to check the page status
  const loginResponse = await request.get('/login');

  // Get the status of the login
  // We expect it to be a success
  expect(loginResponse.ok()).toBeTruthy();
});