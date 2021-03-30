import LoginPage from '../test/pageobjects/login.page';
import ProfilePage from '../test/pageobjects/profile.page';

module.exports = {
    before: function (capabilities, specs) {
        browser.addCommand('login', function (username, password) {
            LoginPage.open();
            LoginPage.setLogin(username);
            LoginPage.setPassword(password);
            LoginPage.clickSubmitButton();
            ProfilePage.isOpen();
        })
    }
}
