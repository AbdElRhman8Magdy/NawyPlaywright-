import { APIRequestContext, BrowserContext, expect, Page } from "@playwright/test";
import User from "../models/User";
import UserApi from "../apis/UserApi";
import Config   from '../playwright.config'
import { config } from "process";

export default class RegisterPage{
    getByRole(arg0: string, arg1: { name: string; }) {
        throw new Error("Method not implemented.");
    }
    private page:Page;
    private request?:APIRequestContext;
    private context?:BrowserContext;
    constructor(page:Page,requst?:APIRequestContext,context?:BrowserContext){
        this.page=page;
        this.request=requst;
        this.context=context
    }
    
    private get registerBTN(){
        return this.page.getByRole('link', { name: 'Sign up' })
    }
    private get firstnameInput(){
        return this.page.getByLabel('Username:')
    } private get passwordInput(){
        return this.page.getByLabel('Password:')
    } private get submitBTNInput(){
        return this.page.getByRole('button', { name: 'Sign up' })
    } 

    async load(){
        await this.page.goto("/")
    }
    async register(user:User){

        await this.registerBTN.click()
        await this.firstnameInput.fill(user.getEmail());
        await this.passwordInput.fill(user.getPassword());
        await this.submitBTNInput.click();

   }

   async registerAPI(user:User){
    await new UserApi(this.request!).register(user);
   
        
    ;
   }
}