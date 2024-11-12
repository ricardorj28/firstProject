import { expect, Locator } from "@playwright/test";

export class Dashboard {
    readonly page: any;
    readonly sauce_labs_backpack: Locator;
    readonly sauce_labs_backpack_img: Locator;
    readonly sauce_labs_backpack_cart: Locator;
    readonly sauce_labs_bike_light: Locator;
    readonly sauce_labs_bike_light_img: Locator;
    readonly sauce_labs_bike_light_cart: Locator;
    readonly sauce_labs_bolt_t_shirt: Locator;
    readonly sauce_labs_bolt_t_shirt_img: Locator;
    readonly sauce_labs_bolt_t_shirt_cart: Locator;
    readonly sauce_labs_fleece_jacket: Locator;
    readonly sauce_labs_fleece_jacket_img: Locator;
    readonly sauce_labs_fleece_jacket_cart: Locator;
    readonly sauce_labs_onesie: Locator;
    readonly sauce_labs_onesie_img: Locator;
    readonly sauce_labs_onesie_cart: Locator;
    readonly test_allTheThings: Locator;
    readonly test_allTheThings_img: Locator;
    readonly test_allTheThings_cart: Locator;
    readonly cart_link: Locator

    constructor(page: any) {
        this.page = page;
        this.sauce_labs_backpack = page.locator('[data-test="item-4-title-link"]');
        this.sauce_labs_backpack_img = page.locator('[data-test="item-4-img-link"]');
        this.sauce_labs_backpack_cart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.sauce_labs_bike_light = page.locator('[data-test="item-0-title-link"]');
        this.sauce_labs_bike_light_img = page.locator('[data-test="item-0-img-link"]');
        this.sauce_labs_bike_light_cart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.sauce_labs_bolt_t_shirt = page.locator('[data-test="item-1-title-link"]');
        this.sauce_labs_bolt_t_shirt_img = page.locator('[data-test="item-1-img-link"]');
        this.sauce_labs_bolt_t_shirt_cart = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.sauce_labs_fleece_jacket = page.locator('[data-test="item-5-title-link"]');
        this.sauce_labs_fleece_jacket_img = page.locator('[data-test="item-5-img-link"]');
        this.sauce_labs_fleece_jacket_cart = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.sauce_labs_onesie = page.locator('[data-test="item-2-title-link"]');
        this.sauce_labs_onesie_img = page.locator('[data-test="item-2-img-link"]');
        this.sauce_labs_onesie_cart = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.test_allTheThings = page.locator('[data-test="item-3-title-link"]');
        this.test_allTheThings_img = page.locator('[data-test="item-3-img-link"]');
        this.test_allTheThings_cart = page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');
        this.cart_link = page.locator('[data-test="shopping_cart_link"]')
    }

    async checkIfElementsAreVisible() {
        await expect(this.sauce_labs_backpack).toBeVisible();
        await expect(this.sauce_labs_backpack_img).toBeVisible();
        await expect(this.sauce_labs_backpack_cart).toBeVisible();
        await expect(this.sauce_labs_bike_light).toBeVisible();
        await expect(this.sauce_labs_bike_light_img).toBeVisible();
        await expect(this.sauce_labs_bike_light_cart).toBeVisible();
        await expect(this.sauce_labs_bolt_t_shirt).toBeVisible();
        await expect(this.sauce_labs_bolt_t_shirt_img).toBeVisible();
        await expect(this.sauce_labs_bolt_t_shirt_cart).toBeVisible();
        await expect(this.sauce_labs_fleece_jacket).toBeVisible();
        await expect(this.sauce_labs_fleece_jacket_img).toBeVisible();
        await expect(this.sauce_labs_fleece_jacket_cart).toBeVisible();
        await expect(this.sauce_labs_onesie).toBeVisible();
        await expect(this.sauce_labs_onesie_img).toBeVisible();
        await expect(this.sauce_labs_onesie_cart).toBeVisible();
        await expect(this.test_allTheThings).toBeVisible();
        await expect(this.test_allTheThings_img).toBeVisible();
        await expect(this.test_allTheThings_cart).toBeVisible();
    }

    async checkClickeableButtons() {
        await this.sauce_labs_backpack.click();
        await this.sauce_labs_backpack_img.click();
        await this.sauce_labs_backpack_cart.click();
    
        await this.sauce_labs_bike_light.click();
        await this.sauce_labs_bike_light_img.click();
        await this.sauce_labs_bike_light_cart.click();
    
        await this.sauce_labs_bolt_t_shirt.click();
        await this.sauce_labs_bolt_t_shirt_img.click();
        await this.sauce_labs_bolt_t_shirt_cart.click();
    
        await this.sauce_labs_fleece_jacket.click();
        await this.sauce_labs_fleece_jacket_img.click();
        await this.sauce_labs_fleece_jacket_cart.click();
    
        await this.sauce_labs_onesie.click();
        await this.sauce_labs_onesie_img.click();
        await this.sauce_labs_onesie_cart.click();
    
        await this.test_allTheThings.click();
        await this.test_allTheThings_img.click();
        await this.test_allTheThings_cart.click();
    }
    
    async addToCart(productId: string) {
        const addToCartButton = this.page.locator(`[data-test="add-to-cart-${productId}"]`);
        await addToCartButton.click();

    }

    async goToCart() {
        await this.cart_link.click()
    }

    async isProductInTheCart(productId: string): Promise <boolean> {
        const productInCartSelector = `[data-test="cart-item-${productId}"]`;
        return await this.page.locator(productInCartSelector).isVisible();
    }

}
    

