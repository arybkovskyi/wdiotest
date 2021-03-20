import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('farmere4@lbzannualj.com');
        LoginPage.setPassword('P@ssw0rd!');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen()


    });
});


