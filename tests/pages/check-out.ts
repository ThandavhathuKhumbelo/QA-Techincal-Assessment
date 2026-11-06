import { Page, Locator, expect } from '@playwright/test';

export interface ICheckoutPage 
{
    checkoutButton: Locator;
    firstNameInput: Locator;
    lastNameInput: Locator;
    postalCodeInput: Locator;
    continueButton: Locator;
    checkoutOverview: Locator;
    errorMessage: Locator;
}

export class CheckoutPage implements ICheckoutPage
{

    readonly checkoutButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly checkoutOverview: Locator;
    readonly errorMessage: Locator;

    constructor(private page: Page)
    {
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.postalCodeInput = page.getByRole('textbox', { name: 'Zip/Postal Code' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.checkoutOverview = page.getByText('Checkout: Overview');
        this.errorMessage = page.getByRole('alert');
    }

    async clickCheckout() {await this.checkoutButton.click();}
    async enterFirstName(firstName: string) {await this.firstNameInput.fill(firstName);}
    async enterLastName(lastName: string) {await this.lastNameInput.fill(lastName);}
    async enterPostalCode(postalCode: string) {await this.postalCodeInput.fill(postalCode);}
    async clickContinue() {await this.continueButton.click();}
    async verifyCheckoutOverview() {await expect(this.checkoutOverview).toBeVisible();}
    async verifyCheckoutError(expectedMessage: string) {await expect(this.errorMessage).toHaveText(expectedMessage);}
}