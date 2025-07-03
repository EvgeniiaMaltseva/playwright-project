import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signInBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInputField = page.locator("#input_login_email");
        this.passwordInputField = page.locator("#input_login_password");
        this.signInBtn = page.getByRole('button', { name: "SIGN IN"});
    }

    async enterEmail(email: string) {
        await this.emailInputField.fill(email);        
    }

    async enterPassword(password: string) {
        await this.passwordInputField.fill(password);        
        await this.page.waitForLoadState();
    }

    async clickSignIn() {
        await expect(this.signInBtn).toBeEnabled();
        await this.signInBtn.click();
        await this.page.waitForLoadState();
    }
}
