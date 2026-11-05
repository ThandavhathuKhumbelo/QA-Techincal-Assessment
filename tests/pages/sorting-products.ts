
import { expect, Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  private sortDropdown = this.page.locator(
    '[data-test="product-sort-container"]'
  );

  private productNames = this.page.locator('.inventory_item_name');

  private productPrices = this.page.locator('.inventory_item_price');

  async sortProducts(sortingOption: string) {
    const sortOptions: Record<string, string> = {
      'Name: A to Z': 'az',
      'Name: Z to A': 'za',
      'Price: Low to High': 'lohi',
      'Price: High to Low': 'hilo',
    };

    const optionValue = sortOptions[sortingOption];

    if (!optionValue) {
      throw new Error(`Invalid sorting option: ${sortingOption}`);
    }

    await this.sortDropdown.selectOption(optionValue);
  }

  async verifyProductsSorted(sortingOption: string) {
    if (sortingOption.startsWith('Name:')) {
      await this.verifyNamesSorted(sortingOption);
    } else {
      await this.verifyPricesSorted(sortingOption);
    }
  }

  private async verifyNamesSorted(sortingOption: string) {
    const actualNames = await this.productNames.allTextContents();

    const expectedNames = [...actualNames].sort((a, b) =>
      a.localeCompare(b)
    );

    if (sortingOption === 'Name: Z to A') {
      expectedNames.reverse();
    }

    expect(actualNames).toEqual(expectedNames);
  }

  private async verifyPricesSorted(sortingOption: string) {
    const priceTexts = await this.productPrices.allTextContents();

    const actualPrices = priceTexts.map(price =>
      Number(price.replace('$', '').trim())
    );

    const expectedPrices = [...actualPrices].sort(
      (a, b) => a - b
    );

    if (sortingOption === 'Price: High to Low') {
      expectedPrices.reverse();
    }

    expect(actualPrices).toEqual(expectedPrices);
  }
}
