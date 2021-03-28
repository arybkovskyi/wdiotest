import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach (()=>{
        LoginPage.open();
    });

    afterEach(()=>{
        browser.execute('window.localStorage.clear()');
    });


    it('user logs in with valid data', () => {
        // LoginPage.setLogin('farmere4@lbzannualj.com');
        LoginPage.inputUsername.setValue('farmere4@lbzannualj.com');
        LoginPage.setPassword('P@ssw0rd!');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
   it('test 002 Login button disabled by default', () => {
       LoginPage.submitButtonIsDisabled();
   });
   it('test 003 Invalid Email results in Error Message', ()=> {
        LoginPage.setLogin('asdasdasda@test.com');
        LoginPage.setPassword('12345');
        LoginPage.clickSubmitButton();
        LoginPage.invalidData();
   })



    it('Test 005 Login Input Is Required ', function () {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();
    });

});




