import { expect, Page } from "@playwright/test";

export default class Cart{
    private page:Page;
    placeOrder1: any;
    constructor(page:Page){
        this.page=page;
    }
    private get prodectDetails(){
        return this.page.locator('link:has-Text: ("Apple monitor")');
    }
private get placeOrder(){
    return this.page.getByRole('button', { name: 'Place Order' });
}
private get total(){
    return this.page.getByRole('heading', { name: '400' });
    ;
}
private get Alert(){
    return this.page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
}




async PlasceOrder(){
    
    await expect(this.placeOrder).toBeAttached();
    await this.placeOrder.click();
}



   // async GetPrdoductDetails(){
//     expect (this.prodectDetails.waitFor({
//         state:"visible",
//         timeout:60000}))
// }
//     async getPlaceOrder(){
//        // await this.page.waitForTimeout(30000);
//     //    waitForSelector(this.prodectDetails, { state: 'visible' })
//         expect (this.prodectDetails.waitFor({
//             state:"visible",
//             timeout:60000}))
//              expect(this.prodectDetails).toBeVisible({timeout:50000});
//              expect(this.prodectDetails).toContainText('Apple monitor 24');
//             await this.placeOrder.click();
         
//         }
// async getOrder(){
//     expect (this.total.waitFor({
//                     state:'visible',
//                     timeout:60000}))
//     await expect(this.total).toBeVisible();

// }
}

