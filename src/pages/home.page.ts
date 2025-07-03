import { Locator, Page } from "@playwright/test";

export class HomePage {
    private readonly page: Page;
    readonly url = 'https://fastbudget.app/';
    readonly cookiesBtn: Locator;
    readonly logInBth: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookiesBtn = page.getByRole('button', {name: "allow cookies"});
        this.logInBth = page.getByRole('button', { name: "Log in"} );
    }

     async openHomePage() {
         await this.page.goto(this.url);
    }

    async acceptCookies() {
        await this.cookiesBtn.click();
    }

    async clickLogIn() {
        await this.logInBth.click();
    }
}
