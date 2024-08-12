import { expect, Page } from "@playwright/test";

export default class Categories{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
private get categorisList(){
    return this.page.locator('#contcont');
}

async load(){
    await this.page.goto('/')
}



    getCategorisList(){
        return expect(this.categorisList).toContainText('Monitors');
    }

   
}