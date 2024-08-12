import test, { expect } from "@playwright/test";
import User from "../models/User";
import RegisterPage from "../pages/RegisterPage";
import NewToDoPage from "../pages/SelectCategory";
import ToDoPage from "../pages/Categories";
import LoginPage from "../pages/LoginPage";
import Categories from "../pages/Categories";
import SelectCategory from "../pages/SelectCategory";
import Product from "../pages/Product";
import Cart from "../pages/CArt";
import Address from "../pages/Address";

test("register With API",async({page,request,context})=>{

    const user = new User();
    const registerPage = new RegisterPage(page,request,context);
    await registerPage.load()
    await registerPage.registerAPI(user);


    const loginPage = new LoginPage(page,request,context) 
    await loginPage.login(user);
})

test("register & Login",async({page,request,context})=>{

    const user = new User();
    const registerPage = new RegisterPage(page,request,context);
    await registerPage.load()
    await registerPage.register(user);

    const loginPage = new LoginPage(page,request,context) 
    await loginPage.login(user);

})

test("Login and Logout",async({page,request,context})=>{
    
    const user = new User();
    const registerPage = new RegisterPage(page,request,context);
    await registerPage.load()
    await registerPage.register(user);
    const loginPage = new LoginPage(page,request,context) 
    
    await loginPage.logOut(user);

})
test("Order Apple Monitor",async({page,request,context })=>{
    const user = new User();
    const registerPage = new RegisterPage(page,request,context);
    await registerPage.load()

    const selectCategory = new SelectCategory(page)
    await selectCategory.selectCategory();
    await selectCategory.selectProduct()

    const product = new Product(page)
    await product.getProductDetails();
    await product.AddressDetials(user)
    // await page.waitForTimeout(30000);
   
    // const address = new Address(page)
    // address.AddressDetials(user)
    //await page.waitForTimeout(30000);
   // cart.GetPrdoductDetails()
    // cart.PlasceOrder()
})