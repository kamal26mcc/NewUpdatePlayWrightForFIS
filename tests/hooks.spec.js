//const {test} =require('@playwright/test')
import { test } from '@playwright/test'
// test('composemail', () => {
//     //playwright code to composemail
//     console.log("composemail")
    
// });
// test('savemail', () => {
//  //playwright code to Savemail
//     console.log("Savemail")
// });
// test('Deletemail', () => {
//  //playwright code to Deletemail
//     console.log("Deletemail")
    
// });



test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


// kamal git add testing 