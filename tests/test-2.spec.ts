import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveURL('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await page.waitForTimeout(5000);

  //проверка докс
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
  await page.waitForTimeout(5000);
  // проверка апи
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await expect(page.getByRole('link', { name: 'API', exact: true })).toBeVisible();
  await expect(page).toHaveURL('https://playwright.dev/docs/api/class-playwright');
  await page.waitForTimeout(5000);

  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Java' }).click();
});
