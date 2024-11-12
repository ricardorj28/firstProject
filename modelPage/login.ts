export class LoginPage {
    private page: ('https://www.saucedemo.com/');
    private username_textbox: any;
    private password_textbox: any;
    private login_button: any;

    constructor(page: any){
        this.page = page;
        this.username_textbox = page.locator('[data-test="username"]');
        this.password_textbox = page.locator('[data-test="password"]');
        this.login_button = page.locator('[data-test="login-button"]');
    }

    async login(username: string, password: string): Promise<void>{
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click()
    }

}