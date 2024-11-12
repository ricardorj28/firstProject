import { test, expect, Locator } from '@playwright/test';
import { LoginPage } from '../modelPage/login';
import { Dashboard } from '../modelPage/Dasboard';
import {doElementsRedirectTo} from '../modelPage/RedirectsButtons'

test.beforeEach('Login TEST', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('About Page', async ({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="about-sidebar-link"]').click();
    //await page.pause();

    //Cookies notification
    await page.getByText('This website uses cookies to').click();
    await page.getByLabel('More information about your privacy', { exact: true }).click();
    await page.getByText('This Cookie Notice explains').click();
    await page.getByRole('heading', { name: 'Cookie Notice' }).click();

    // About page
    await page.goto('https://saucelabs.com/');
    await expect(page.getByText('Website and mobile testingat')).toBeVisible;
    await expect(page.getByText('The world relies on your code. Test on thousands of different device, browser, and OS configurations–anywhere, any time.')).toBeVisible;
    await page.getByRole('button', { name: 'Test it all. Free' }).click();
    await expect(page.getByText('Start testing in minutesGet')).toBeVisible;
    await expect(page.getByText('Your free 28-day trial includesInstant access to real devices60 Automated and')).toBeVisible;
    await page.goto('https://saucelabs.com/');
    await expect(page.locator('a').filter({ hasText: 'Request a demoRequest a demo' }).getByRole('button')).toBeVisible;
    await expect(page.getByText('Request a DemoTalk to our')).toBeVisible;
    await expect(page.locator('#form_3766 div').filter({ hasText: 'Book Your Demo Here*Business' })).toBeVisible;
    await page.getByRole('img', { name: 'Scroll down' }).click();
    await page.locator('div').filter({ hasText: /^Trusted by industry leaders$/ });
    await page.locator('div').filter({ hasText: '217%ROI<6 mosPAYBACK$6.8MNET' }).nth(3);
    await page.getByText('Deliver quality software continuouslyStart testing in minutesSign upRequest a').click();
    await page.locator('[id="__next"] > div:nth-child(10)').click();
})

test('Dashboard', async ({page}) => {
    const dashboard = new Dashboard(page);
    await page.goto('https://www.saucedemo.com/inventory.html');

    //Sauce Labs Backpack
    const expectedUrl ='https://www.saucedemo.com/inventory-item.html?id=4';
    const locators = [dashboard.sauce_labs_backpack, dashboard.sauce_labs_backpack_img];
    const redirectsToExpectedUrl = await doElementsRedirectTo(locators, page, expectedUrl);
    expect(redirectsToExpectedUrl).toBe(true);

    //Sauce Labs Bike Light
    await page.goto('https://www.saucedemo.com/inventory.html');
    const expectedUrl2 = 'https://www.saucedemo.com/inventory-item.html?id=0';
    const locators2 = [dashboard.sauce_labs_bike_light, dashboard.sauce_labs_bike_light_img];
    const redirectsToExpectedUrl2 = await doElementsRedirectTo(locators2, page, expectedUrl2);
    expect(redirectsToExpectedUrl2).toBe(true)
    
    //Sauce Labs Bolt T-Shirt
    await page.goto('https://www.saucedemo.com/inventory.html');
    const expectedUrl3 = 'https://www.saucedemo.com/inventory-item.html?id=1';
    const locators3 = [dashboard.sauce_labs_bolt_t_shirt, dashboard.sauce_labs_bolt_t_shirt_img];
    const redirectsToExpectedUrl3 = await doElementsRedirectTo(locators3, page, expectedUrl3);
    expect(redirectsToExpectedUrl3).toBe(true)

    // Sauce Labs Fleece Jacket
    await page.goto('https://www.saucedemo.com/inventory.html');
    const expectedUrl4 = 'https://www.saucedemo.com/inventory-item.html?id=5';
    const locators4 = [dashboard.sauce_labs_fleece_jacket, dashboard.sauce_labs_fleece_jacket_img];
    const redirectsToExpectedUrl4 = await doElementsRedirectTo(locators4, page, expectedUrl4);
    expect(redirectsToExpectedUrl4).toBe(true)

    //Sauce Labs Onesie
    await page.goto('https://www.saucedemo.com/inventory.html');
    const expectedUrl5 = 'https://www.saucedemo.com/inventory-item.html?id=2';
    const locators5 = [dashboard.sauce_labs_onesie, dashboard.sauce_labs_onesie_img];
    const redirectsToExpectedUrl5 = await doElementsRedirectTo(locators5, page, expectedUrl5);
    expect(redirectsToExpectedUrl5).toBe(true)

    // Test.allTheThings() T-Shirt (Red)
    await page.goto('https://www.saucedemo.com/inventory.html');
    const expectedUrl6 = 'https://www.saucedemo.com/inventory-item.html?id=3';
    const locators6 = [dashboard.test_allTheThings, dashboard.test_allTheThings_img];
    const redirectsToExpectedUrl6 = await doElementsRedirectTo(locators6, page, expectedUrl6);
    expect(redirectsToExpectedUrl6).toBe(true)
})

test('Add to Cart', async ({page}) => {
    const dashboard = new Dashboard(page);
    await page.goto('https://www.saucedemo.com/inventory.html');

    //Sauce Labs Backpack
    await page.goto('https://www.saucedemo.com/inventory.html');
    const productId = "sauce-labs-backpack";
    await dashboard.addToCart(productId);
    await page.goto ('https://www.saucedemo.com/cart.html');
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible

    //Sauce Labs Bike Light
    await page.goto('https://www.saucedemo.com/inventory.html');
    const productId2 = "sauce-labs-bike-light";
    await dashboard.addToCart(productId2);
    await page.goto ('https://www.saucedemo.com/cart.html');
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible

     //Sauce Labs Bolt T-Shirt
     await page.goto('https://www.saucedemo.com/inventory.html');
     const productId3 = "sauce-labs-bolt-t-shirt";
     await dashboard.addToCart(productId3);
     await page.goto ('https://www.saucedemo.com/cart.html');
     await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible

     //Sauce Labs Fleece Jacket
     await page.goto('https://www.saucedemo.com/inventory.html');
     const productId4 = "sauce-labs-fleece-jacket";
     await dashboard.addToCart(productId4);
     await page.goto ('https://www.saucedemo.com/cart.html');
     await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible

     //Sauce Labs Onesie
     await page.goto('https://www.saucedemo.com/inventory.html');
     const productId5 = "sauce-labs-onesie";
     await dashboard.addToCart(productId5);
     await page.goto ('https://www.saucedemo.com/cart.html');
     await expect(page.locator('[data-test="item-2-title-link"]')).toBeVisible

     //Test.AllTheThings() T-Shirt (Red)
     await page.goto('https://www.saucedemo.com/inventory.html');
     const productId6 = "test\\.allthethings\\(\\)-t-shirt-\\(red\\)";
     await dashboard.addToCart(productId6);
     await page.goto ('https://www.saucedemo.com/cart.html');
     await expect(page.locator('[data-test="item-3-title-link"]')).toBeVisible
})