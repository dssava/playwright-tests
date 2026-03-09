import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://ds.wellnessliving.com/login/difficult_teenagers');

  await page.getByRole('textbox', { name: 'Enter email' }).fill('clientkatf@g.com');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('123456Qq');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://ds.wellnessliving.com/Wl/Staff/Location.html');

  //await page.locator('.menu-item.search-button').click({ timeout: 1000 });
  //await page.getByRole('button', { name: 'Searsh' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).click();

  await page.getByRole('textbox', { name: 'Search...' }).fill('3137437');
  await page.getByRole('textbox', { name: 'Search...' }).press('Enter');

  await expect(page).toHaveURL('https://ds.wellnessliving.com/rs/profile.html?uid=3137437');
});
