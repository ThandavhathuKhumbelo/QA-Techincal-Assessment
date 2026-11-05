
export interface ICheckoutPage 
{
    proceedToCheckout(): Promise<void>;
    fillCheckoutInformation( firstName: string, lastName: string, postalCode: string ): Promise<void>;
    continueCheckout(): Promise<void>;
    verifyCheckoutOverview(): Promise<void>;
    finishOrder(): Promise<void>;
    verifyFinishPage(): Promise<void>;
    verifySuccessTitle(): Promise<void>;
    verifySuccessDescription(): Promise<void>;
    verifyErrorMessage(expectedMessage: string): Promise<void>;
}
