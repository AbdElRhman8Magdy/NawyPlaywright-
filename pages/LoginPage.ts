import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import LoginAPI from "../apis/LoginAPI";
import User from "../models/User";
import { th } from "@faker-js/faker";

export default class RegisterPage{
    private page:Page;
    private request?:APIRequestContext;
    private context?:BrowserContext;
    constructor(page:Page,requst?:APIRequestContext,context?:BrowserContext){
        this.page=page;
        this.request=requst;
        this.context=context
    }
   
     private get emailInput(){
        return this.page.getByTestId('email')
    } private get passwordInput(){
        return this.page.getByTestId('password')
    }

    async loginWithApi(user:User){
       await new LoginAPI(this.request!).LoginWithAPI(user);
       }

       private get loginBTN(){
        return this.page.getByRole('link', { name: 'Log in' })
    }
    private get firstnameInput(){
        return this.page.locator('#loginusername')
    } private get passwordField(){
        return this.page.locator('#loginpassword')
    } private get loginSubmitBTN(){
        return this.page.getByRole('button', { name: 'Log in' })
    } private get logOutBTN(){
        return this.page.getByRole('link', { name: 'Log out' })
    } 

   
    async login(user:User){

        await this.loginBTN.click()
        await this.firstnameInput.fill(user.getEmail());
        await this.passwordField.fill(user.getPassword());
        await this.loginSubmitBTN.click();

   }
   async logOut(user:User){
    await this.loginBTN.click()
        await this.firstnameInput.fill(user.getEmail());
        await this.passwordField.fill(user.getPassword());
        await this.loginSubmitBTN.click();
    await this.logOutBTN.click();
   }
}