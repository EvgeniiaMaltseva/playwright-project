import { Locator, Page } from "@playwright/test";

export class TransactionsPage {
    private readonly page: Page;
    readonly addBtn: Locator;
    readonly removeBtn: Locator;
    readonly latestTransactionName: Locator;
    readonly latestTransactionValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addBtn = page.getByRole('button', { name: "add"});
        this.removeBtn = page.getByRole('button', { name: "remove"});
        this.latestTransactionName = page.locator("#card_ov_list").nth(2).locator("#template_tr_category");
        this.latestTransactionValue = page.locator("#card_ov_list").nth(2).locator("#template_tr_value");
    }

    async clickAddBtn() {
        await this.addBtn.click();      
    }

    async clickRemoveBtn() {
        await this.removeBtn.click();      
    }
}
