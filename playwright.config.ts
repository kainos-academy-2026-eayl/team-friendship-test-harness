import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html'], ['list', { printSteps: true }]],
  use: {
    baseURL: 'http://localhost:8000/',
    testIdAttribute: 'id'
  },
});
