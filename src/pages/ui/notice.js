import React from 'react'
import {Card,Button,notification} from 'antd'

export default class Notification extends React.Component{

    handleNotification = (type,direction)=>{
        if(direction){
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message:'发工资了',
            description:'上个月考勤22天，迟到0天，实发工资9999 RMB！'
        })
    }
    render(){
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('error')}>Error</Button>
                </Card>

                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleNotification('success','topLeft')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('info','topRight')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('warning','bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('error','bottomRight')}>Error</Button>
                </Card>

            </div>
        )
    }
}