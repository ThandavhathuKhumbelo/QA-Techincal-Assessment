
export interface INavigationPage {
    openMenu(): Promise<void>;

    navigateToAllItems(): Promise<void>;

    verifyProductsPage(): Promise<void>;

    logout(): Promise<void>;

    verifyLoginPage(): Promise<void>;
}
