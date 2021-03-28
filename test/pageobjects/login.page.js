import Page from './page';


class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); };
    get inputPassword () { return $('#normal_login_password'); };
    get btnSubmit () { return $('.login-form-button'); };
    get loginValidationError(){return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'); };
    get wrongDataMessage () { return $('.ant-notification-notice-message')}


    setLogin (email){
        this.inputUsername.setValue(email);
    };
    setPassword (password){
        this.inputPassword.setValue(password);
    };
    clickSubmitButton(){
        this.btnSubmit.click();
    };
    open () {
        return super.open('/');
    };

    emptyLoginInput(){
        this.clearInput(this.inputUsername);
    };

    submitButtonIsDisabled(){
        expect(this.btnSubmit).toBeDisabled();
    };

    invalidData(){
        expect(this.wrongDataMessage).toBeDisplayed();
    }

     loginRequiredError(){
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.loginValidationError.getText()).toEqual('Required')
    };
}

export default new LoginPage();
