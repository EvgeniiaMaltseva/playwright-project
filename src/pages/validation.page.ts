import { expect, Locator, Page } from "@playwright/test";

export class ValidationPage {
    private readonly page: Page;
    readonly trialVersionBtn: Locator;
    readonly okBtn: Locator;
    readonly userBottomText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.trialVersionBtn = page.locator('#button_trial_version');
        this.okBtn = page.locator('#modal_message_confirmation');
        this.userBottomText = page.locator('#user_sync_bottom_text');
    }

    async clickTrialVerison() {
        await expect(this.userBottomText).toBeVisible();
        await this.page.waitForTimeout(5000); 
        await this.trialVersionBtn.click(); 
        await this.page.waitForLoadState();
    }

    async clickOkBtn() {
        await expect(this.okBtn).toBeVisible();
        await this.okBtn.click();      
        await this.page.waitForLoadState();
    }
}
