import { APIRequestContext } from "@playwright/test"
import User from "../models/User";

export default class userApi{
    private request:APIRequestContext;
    constructor(request:APIRequestContext){
        this.request=request
    }
    async register(user:User){
        return await this.request.post('https://api.demoblaze.com/signup',
            {
                data:{
                    username: user.getEmail(),
                    password:user.getPassword()
                }
            })
    }
    
}