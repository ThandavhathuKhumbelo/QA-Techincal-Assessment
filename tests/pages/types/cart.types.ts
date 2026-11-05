
export interface ICartPage 
{
    addProductsToCart(numberOfProducts: number): Promise<void>;
    addAllProductsToCart(): Promise<void>;
    addBackpackAndBikeLight(): Promise<void>;
    openCart(): Promise<void>;
    verifyCartCount(expectedCount: number): Promise<void>;
    verifyCartItems(expectedCount: number): Promise<void>;
    verifyCartIsEmpty(): Promise<void>;
    verifyCartBadgeIsEmpty(): Promise<void>;
}
