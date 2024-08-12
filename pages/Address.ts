import { expect, Page } from "@playwright/test";
import User from "../models/User";

export default class Product{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
private get Name(){
    return this.page.getByLabel('Total:');
}
private get Country(){
    return this.page.getByLabel('Country:');
}
private get City(){
    return this.page.getByLabel('City:');
}private get Credit(){
    return this.page.getByLabel('Credit card:');
}private get Month(){
    return this.page.getByLabel('Month:');
}
private get Year(){
    return this.page.getByLabel('Year:');
}
private get purchaseBTN(){
    return this.page.getByRole('button', { name: 'Purchase' });
}
private get okBTN(){
    return this.page.getByRole('button', { name: 'OK' });
}

    async AddressDetials(user:User){
        await this.Name.click()
         await this.Name.fill(user.getEmail())
        await this.Country.click()
         await this.Country.fill(user.getEmail())
        await this.City.click()
         await this.City.type(user.getEmail())
        await this.Credit.click()
         await this.Credit.fill(user.getPassword())
        await this.Month.click()
         await this.Month.fill(user.getPassword())
        await this.Year.click()
         await this.Year.fill(user.getPassword())
         await this.purchaseBTN.click()
         await this.okBTN.click()

        }

   
}