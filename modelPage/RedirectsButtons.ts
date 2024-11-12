import { Locator, Page } from "@playwright/test";

export async function doElementsRedirectTo(locators: Locator[], page: Page, expectedUrl: string): Promise<boolean> {
    for (const locator of locators) {
        // Intentamos la navegación para cada uno de los elementos en `locators`
        const redirectsToExpectedUrl = await Promise.all([
            page.waitForNavigation({ url: expectedUrl, timeout: 2000 }).then(() => true).catch(() => false),
            locator.click({ noWaitAfter: true })
        ]);
        // Si encontramos una redirección válida, devolvemos true
        if (redirectsToExpectedUrl[0]) {
            return true;
        }
    }
    return false;
}