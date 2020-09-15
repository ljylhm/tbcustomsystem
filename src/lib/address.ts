import { httpGet } from './http';
const addressData:any = []

// 直辖市
const directCities = ["北京市","上海市","天津市","重庆市"]
// HK TW AM
const hkCities = ["台湾省","香港特别行政区","澳门特别行政区"]

// 获取省份的所有数据
export const getProvince = () => {
    const provinceData = []
    for(let i in addressData){
        provinceData.push(i)
    }
    return provinceData
}


export const getCities = (province:string) => {
    let citiesData = []
    // 直辖市
    const provinceData = addressData[province]
    if(directCities.indexOf(province) != -1){
        citiesData = [...provinceData["市辖区"],...provinceData["县"]]
    }else if(hkCities.indexOf(province) != -1){
        citiesData = [...provinceData]
    }else{
        console.log("这里",provinceData)
        for(let i in provinceData){
            citiesData.push(i)
        }
    }
    return citiesData
}