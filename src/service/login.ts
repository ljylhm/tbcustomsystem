import { httpGet, httpPost } from '@/lib/http';

// 登录的方法
export const login = (phone: string, password: string) => {
    return httpPost("/api/login", {
        phone,
        password
    })
}

// 登出的方法
export const logout = (token:string) => {
    return httpGet("/api/logout", {
        token
    })
}

// 注册的方法
export const register = (form:any) => { 
    return httpPost("/api/register",form)
}

// 获取用户信息的方法
export const getUserInfo = (token:string) => { 
    return httpGet("/api/current",{
        token
    })
}