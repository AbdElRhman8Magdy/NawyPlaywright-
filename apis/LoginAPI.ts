import { APIRequestContext } from "@playwright/test"
import User from "../models/User";

export default class LoginAPI{
    private request:APIRequestContext;
    constructor(request:APIRequestContext){
        this.request=request
    }
    async LoginWithAPI(user:User){
        return await  this.request.post('https://api.demoblaze.com/login',
            {
                data:{
                    username: user.getEmail(),
                    password:user.getPassword(),
                }
                
    })
    
}}