// Day 2: connect feature steps to the page object.

/*
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { BasicPage } from '../pages/basicPage';

const { Given, When, Then } = createBdd();

Given('I am on the search page', async ({ page }) => {
  await new BasicPage(page).open();
});

When('I search for {string}', async ({ page }, searchTerm: string) => {
  await new BasicPage(page).searchFor(searchTerm);
});

Then('I should see a results heading', async ({ page }) => {
  await expect(new BasicPage(page).resultsHeading()).toBeVisible();
});
*/