import VueRouter  from 'vue-router';

export default class RouterHelper{

    private router:VueRouter

    constructor(router:VueRouter){
        this.router = router
    }

    jump = (url:string, args = {}, mode = true) => {
        if (!this.router || !url) return;

        let para = { path: url, query: args };

        if (mode) this.router.push(para);
        else this.router.replace(para);
    }

    to = (url:string, args = {}) => this.jump(url,args,true)

    replace = (url:string, args = {}) => this.jump(url,args,false)

    go = (num:number) => {
        if (!this.router) return;
        this.router.go(num);
    }

    getData = () => this.router.currentRoute.query

}