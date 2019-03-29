import React from 'react'
import { Card,Button,message } from 'antd'

export default class Messages extends React.Component{

    show = (type)=>{
        message[type]('欢迎来到FOX Admin')
    }
    render(){
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.show('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.show('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.show('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.show('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.show('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}