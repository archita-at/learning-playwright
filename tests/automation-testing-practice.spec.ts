import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);
});

test('enter name by label', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');
  await page.getByLabel('Name:');
  await page.getByLabel('Name:').fill('Jane');
  await expect(page.getByLabel('Name:')).toHaveValue('Jane');
});

test('enter name by placeholder', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');
  await page.getByPlaceholder('Enter Name');
  await page.getByPlaceholder('Enter Name').fill('Jane');
  await expect(page.getByPlaceholder('Enter Name')).toHaveValue('Jane');
});