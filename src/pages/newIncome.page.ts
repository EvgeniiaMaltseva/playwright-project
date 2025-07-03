import { Locator, Page } from "@playwright/test";

export class NewIncomePage {
    private readonly page: Page;
    readonly categoryTxtField: Locator;
    readonly valueTxtField: Locator;
    readonly saveBtn: Locator;
    readonly categoryName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.categoryTxtField = page.locator("#new_tr_multicategory_val_cat #input_new_tr_val_cat_category");
        this.categoryName = page.locator("#t_category_name");
        this.valueTxtField = page.locator("#new_tr_multicategory_val_cat #input_new_tr_val_cat_value");
        this.saveBtn = page.locator("#button_add_transaction_save");
    }

    async selectCategory(option: string) {
        await this.categoryTxtField.click();
        await this.page.waitForLoadState();

        switch (option) {
            case "Financial income":
                await this.categoryName.getByText(option).click();
                break;

            case "Income":
                await this.categoryName.getByText(option).click();
                break;

            default:
                throw new Error(`Unknown category option: ${option}`);
        }
    }

    async enterValue(value: string) {
        await this.valueTxtField.fill(value);
    }

    async clickSave() {
        await this.saveBtn.click();
        await this.page.waitForLoadState();
    }
}
