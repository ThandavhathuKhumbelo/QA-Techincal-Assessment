
import { Page, Locator, expect } from '@playwright/test';

export interface IProductsPage 
{
    productSortDropdown: Locator;
    activeFilter: Locator;
    productNames: Locator;
    productPrices: Locator;
}

export class ProductsPage implements IProductsPage 
{
    readonly productSortDropdown: Locator;
    readonly activeFilter: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;

    constructor(private page: Page) 
    {
        this.productSortDropdown = page.getByTestId('product-sort-container');
        this.activeFilter = page.getByTestId('active-option');
        this.productNames = page.getByTestId('inventory-item-name');
        this.productPrices = page.getByTestId('inventory-item-price');
    }

    // Select sorting option
    async selectSortOption(option: string) {await this.productSortDropdown.selectOption({ label: option }); }

    // Verify selected filter and actual product order
    async verifyProductsSorted() 
    {
        const selectedFilter = await this.activeFilter.textContent();
        await expect(this.activeFilter).toHaveText(selectedFilter!.trim());
        if (selectedFilter?.includes('Name (A to Z)'))
        {
            const names = await this.productNames.allTextContents();
            expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
        }
         else 
          if(selectedFilter?.includes('Name (Z to A)')) 
        {
            const names = await this.productNames.allTextContents();
            expect(names).toEqual([...names].sort((a, b) => b.localeCompare(a)));

        } else 
          if (selectedFilter?.includes('Price (low to high)'))
        {
            const prices = await this.productPrices.allTextContents();
            const actualPrices = prices.map(price => Number(price.replace('$', '').trim()) );
            expect(actualPrices).toEqual([...actualPrices].sort((a, b) => a - b));

        } else
          if (selectedFilter?.includes('Price (high to low)')) 
            {

            const prices = await this.productPrices.allTextContents();
            const actualPrices = prices.map(price =>Number(price.replace('$', '').trim()))
            expect(actualPrices).toEqual([...actualPrices].sort((a, b) => b - a)
            );
        } else
        {
          throw new Error(`Unexpected sorting option: ${selectedFilter}`);
        }
    }
}