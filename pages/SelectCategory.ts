import { APIRequestContext, expect, Page } from "@playwright/test";
import { request } from "http";
import addToDO from "../apis/AddToDo";
import User from "../models/User";

export default class SelectCategory{
    private page:Page;
    private request?:APIRequestContext;
    constructor(page:Page,request?:APIRequestContext){
        this.page=page;
        this.request=request;
    }
private get Monitor(){
    return this.page.getByText( 'monitor');
}
private get MonitorItem(){
    return this.page.getByRole('link', { name: 'monitor' });
}private get AppleMonitorItem(){
    return this.page.getByRole('link', { name: 'Apple monitor' });
}


async load(){
    await this.page.goto('/todo/new')
}
  async selectCategory(){
    await expect(this.Monitor).toContainText('Monitors');
    await this.MonitorItem.click();
  }

  async selectProduct(){
    await expect(this.AppleMonitorItem).toBeVisible();
    await this.AppleMonitorItem.click()
  }
 



}