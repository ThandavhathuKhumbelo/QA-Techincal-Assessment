import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/login';

type LoginFixtures = { loggedIn: LoginPage;};

export const test = base.extend<LoginFixtures>({loggedIn: async ({ page }, use) =>
     {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.verifySuccessfulLogin();

        await use(loginPage);
    },
});