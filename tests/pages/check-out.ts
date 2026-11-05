import { expect, Page } from '@playwright/test';
import { ICheckoutPage } from './types/check-out.types';

export class CheckoutPage {
    constructor(private page: Page) { }
    private checkoutButton = this.page.locator('[data-test="checkout"]');
    private firstName = this.page.locator('[data-test="firstName"]');
    private lastName = this.page.locator('[data-test="lastName"]');
    private postalCode = this.page.locator('[data-test="postalCode"]');
    private errorMessage = this.page.locator('[data-test="expectedError"]');
    private continueButton = this.page.locator('[data-test="continue"]');

    async proceedToCheckout() { await this.checkoutButton.click(); }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async continueCheckout() { await this.continueButton.click(); }

    async verifyCheckoutOverview() {
        await expect(this.page).toHaveURL(/checkout-step-two.html/);
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
    }

    async verifyFinishPage() 
    { 
        await expect(this.page).toHaveURL(/checkout-complete.html/);
        await expect( this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    }

    async finishOrder() { await this.page.locator('[data-test="finish"]').click();}

    async verifyErrorMessage(expectedMessage: string) { await expect(this.errorMessage).toHaveText(expectedMessage); }

    // Verify success title
async verifySuccessTitle() {
    await expect(
        this.page.locator('[data-test="complete-header"]')
    ).toHaveText('Thank you for your order!');
}

// Verify success description
async verifySuccessDescription() {
    await expect(
        this.page.locator('[data-test="complete-text"]')
    ).toHaveText(
        'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
}
}
