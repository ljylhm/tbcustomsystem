// 省份的数据
let Province_Data:any[] = []


// 获取数据的方法
export const getProvinceData = () => {
    return Province_Data
} 

// 设置数据的方法
export const setProvinceData = (data:any[]) => {
    Province_Data = data
    return Province_Data
}