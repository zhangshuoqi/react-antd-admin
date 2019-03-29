import axios from 'axios'
import {Modal} from 'antd'
export default class Axios{
    static ajax(options){
        let loading
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'block'
        }
        let baseAPI = 'https://easy-mock.com/mock/5c9d7b02e2ebde02b5f8ab2f/mockapi'
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseAPI,
                timeout:5000,
                params:(options.data && options.data.params) || ''
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                if(response.status == '200'){
                    let res = response.data
                    if(res.code == '0'){
                        resolve(res)
                    } else{
                        Modal.info({
                            title:"提示",
                            content:res.message
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}