import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html'], ['list', { printSteps: true }]],
  use: {
    baseURL: 'https://practice.expandtesting.com/',
    testIdAttribute: 'id'
  },
});
