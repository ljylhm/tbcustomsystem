// 设置localstorage的方法
export const AUTH_TOKEN = 'auth_token'

export const setCache = (key:string,value:string) => {
    window.localStorage.setItem(key,value)
}

export const getCache = (key:string) => {
    return window.localStorage.getItem(key)
}


export const getToken = () => {
    return getCache(AUTH_TOKEN)
}

export const setToken = (value:string)=>{
    setCache(AUTH_TOKEN,value)
}