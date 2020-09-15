
interface IProps{
    limit?:string[]
    multiple?:boolean
}

interface IPicInfos{
    size:number    
    name:string
    type:string
    file:File
    base64Buffer:string
}
export default class OpenFile {
    
    public limit:string = "image/*"     // 默认获取全部

    public multiple:boolean = false     // 是否多选

    public inputEle: HTMLInputElement | undefined

    constructor(props?:IProps){

        if(props && props.limit){
            this.limit = props.limit.join(",")  
        }

        if(props && props.multiple){
            this.multiple = props.multiple
        }
       
    }

    // 将string类型转化为element类型
    public praseDom = (str:string)=>{
        const divEle = document.createElement("div")
        divEle.innerHTML = str
        return divEle.childNodes;
    }

    public makeSinglePic = (fileList:FileList,cb:(data:IPicInfos[])=>void)=>{
        
        let initCount = 0
        const pic_arr:IPicInfos[] = []

        // 判断是否到了临界值
        const fn = ()=>{
            ++initCount
            if(initCount == fileList.length){
                cb && cb(pic_arr)
            }
        }

        for (let i = 0;i < fileList.length;i++){ 
            
            let fileData:File = fileList[i]

            const default_obj:IPicInfos = {
                size:fileData.size || 0,
                name:fileData.name || "",
                type:fileData.type || "",
                file:fileData,
                base64Buffer:""
            }

            const reader:FileReader = new FileReader();

            reader.onload = function(){
                const that = this
                default_obj.base64Buffer = that.result as string
                pic_arr[i] = default_obj
                fn()
            } 
            
            reader.onerror = function(){
                default_obj.base64Buffer = ""
                pic_arr[i] = default_obj
                fn()
            }

            reader.readAsDataURL(fileData)

        }
    }

    // 获得本地图片
    public getLocalImage = (cb?:(data:IPicInfos[])=>void) => {

        // 如果选择框的元素存在的话 
        // 一个实例对应一个input file选择框
        if(!this.inputEle){
            const inputEle = document.createElement("input")
            const body = document.getElementsByTagName("body")[0]
             
            this.inputEle = inputEle

            inputEle.accept = this.limit
            inputEle.hidden = true
            inputEle.type = "file"
            inputEle.multiple = this.multiple

            body.appendChild(inputEle)

            let fileData:File

            // 获取文件对象
            inputEle.addEventListener("change",(evt:Event)=>{

                const fileEvent = evt.target as HTMLInputElement
                if(fileEvent && fileEvent.files){
                    
                    fileData = fileEvent.files[0]
                    cb && this.makeSinglePic(fileEvent.files,cb)
                
                }
            })
        }

        this.inputEle.click()

    }
        
}