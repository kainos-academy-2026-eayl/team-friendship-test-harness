import { test, expect } from '@playwright/test';
import { productVariables } from './testVariables'; //Import our testing variables

// Testing that products are pulled sucessfully from the database
// By navigating to the products browse page and ensuring products are there
test('that the products browse page fetches and displays products', async ({ page, request }) => {
  
  // Get the names of the products and store them
  const nameOne = page.getByRole('heading', {
    name: productVariables.nameOne,
    exact: true,
  });

  const nameTwo = page.getByRole('heading', {
    name: productVariables.nameTwo,
    exact: true,
  });

  // Get the prices of the products and store them
  const priceOne = page.getByText(`${productVariables.priceOne}`, {
    exact: true,
  });

  const priceTwo = page.getByText(`${productVariables.priceTwo}`, {
    exact: true,
  });

  // Get the images of the products and store them
  const imageOne = page.getByRole('img', {
    name: productVariables.imageOne,
    exact: true,
  });

  const imageTwo = page.getByRole('img', {
    name: productVariables.imageTwo,
    exact: true,
  });

  // Navigate to our product browse page
  await page.goto('product_browse');

  // Check that the expected product names, prices and images appear on the page
  await expect(nameOne).toBeVisible();
  await expect(nameOne).toHaveText(productVariables.nameOne);

  await expect(priceOne).toBeVisible();
  await expect(priceOne).toHaveText(`${productVariables.priceOne}`);

  await expect(imageOne).toBeVisible();

  await expect(nameTwo).toBeVisible();
  await expect(nameTwo).toHaveText(productVariables.nameTwo);

  await expect(priceTwo).toBeVisible();
  await expect(priceTwo).toHaveText(`${productVariables.priceTwo}`);

  await expect(imageTwo).toBeVisible();

  // Define a respose constant to check the page status
  const response = await request.get('/product_browse');

  // Get the status of the product browse page
  // We expect it to be a success
  expect(response.status()).toBe(200);
});