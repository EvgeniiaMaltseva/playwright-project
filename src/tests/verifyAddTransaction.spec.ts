import { test, expect } from "@playwright/test"
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { ValidationPage } from "../pages/validation.page";
import { TransactionsPage } from "../pages/transactions.page";
import { NewIncomePage } from "../pages/newIncome.page";
import { Credentials } from "../utilities/credentials.enum";

test.describe('Home page', () => {
    test.beforeEach(async ({ page }) => {
    });

    test('should allow the user to login in and add an income transaction and see it on the top of the list @test', async ({ page }) => {
        const home = new HomePage(page);
        const login = new LoginPage(page);
        const validation = new ValidationPage(page);
        const transactionsPage = new TransactionsPage(page);
        const newIncomePage = new NewIncomePage(page);

        await home.openHomePage();
        await home.acceptCookies();
        await home.clickLogIn();
        console.log('✅ Home page opened and cookies accepted');

        await login.enterEmail(Credentials.EMAIL);
        await login.enterPassword(Credentials.PASSWORD);
        await login.clickSignIn();
        console.log('✅ Successfully logged in with credentials');

        await validation.clickTrialVerison();
        await validation.clickOkBtn();
        console.log('✅ Trial version validation handled');

        await transactionsPage.clickAddBtn();

        await newIncomePage.selectCategory("Financial income");
        await newIncomePage.enterValue("5000");
        await newIncomePage.clickSave();
        console.log('✅ New income transaction added successfully');

        await expect(transactionsPage.latestTransactionName.nth(0)).toHaveText("Financial income");
        await expect(transactionsPage.latestTransactionValue.nth(0)).toHaveText("$5,000.00");
        console.log('✅ Transaction verification completed successfully');
    });
});