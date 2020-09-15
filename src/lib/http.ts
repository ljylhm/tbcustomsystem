// 请求封装的一些东西
import axios, { AxiosResponse } from "axios"
import { isDev } from "@/lib/env"
import { showLoading,openAlertError } from "@/lib/notice"
import { ElLoadingComponent } from 'element-ui/types/loading'

// http://129.211.87.79
const site_url = isDev() ? "" : ""
const STATUS_SUCCESS = 0

interface IParam{
    [key: string]: any
}

interface IProtocol<T>{
    code:number
    msg:string
    data:T
}

interface IRes<T = any>{
    status: boolean
    data?: T
    origin_data: IProtocol<T>
}

let loadingIns:ElLoadingComponent
const closeLoading = () => {
    if(loadingIns && loadingIns.close) loadingIns.close()
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    loadingIns = showLoading()
    return config;
  }, function (error) {
    return Promise.reject(error);
})


// 接收到数据后处理
const afterResponse = <T>(data:AxiosResponse<IProtocol<T>>):IRes<T> =>{
    closeLoading()
    const Data = data.data
    const ResError = {
        status: false,
        origin_data: Data
    }
    if(Data) {
        if(Data.code == STATUS_SUCCESS) {
            return {
                status: true,
                data: Data.data,
                origin_data:Data
            }
        }
        openAlertError(Data.msg || "异常错误")
        return ResError
    }
    return ResError
}
// 异常错误处理
const afterCatch = (err:any)=>{
    closeLoading()
    console.log("err err",err)
    openAlertError("异常错误")
}

export const httpGet = <T>(url:string,params:IParam = {},options:IParam = {}) => {
    return axios.get<IProtocol<T>>(site_url + url,{
        params,
        headers:{
            "Accept": "application/prs.myapp.v1+json",
            "content-type": "application/x-www-form-urlencoded",
            ...options
        }
    }).then(afterResponse)
    .catch(afterCatch)
}

export const httpPost = <T>(url:string,params:IParam = {},options:IParam = {}) => {
    console.log("post的地址",site_url+url)
    return axios.post<IProtocol<T>>(site_url + url, params,{
        headers:{
            "Accept": "application/prs.myapp.v1+json",
            ...options
        }
    }).then(afterResponse)
    .catch(afterCatch)
}