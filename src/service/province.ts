import { httpGet } from '@/lib/http'
import { setProvinceData } from '@/config/province'

export const getProvinceNet = async () => {
   const data = await httpGet<any[]>("/api/clubcenter/province")
   if(data && data.status && data.data) setProvinceData(data.data)
}

