import React from 'react'
import {Card,Button,Modal} from 'antd'
import './ui.less'

export default class Modals extends React.Component{
    state = {
        show:false
    }
    handleOpen = (type)=>{
        this.setState({
            [type]:true
        })
    }
    handleConfirm = (type)=>{
        Modal[type]({
            title:"确定？",
            content:"你确定要吗？",
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }
    render(){
        return(
            <div>
                <Card title="基础模态框" className="card-wrap">
                    {/* 传参数的话需要使用尖头函数 */}
                    <Button type="primary" onClick={()=>this.handleOpen('show1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('show2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('show3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('show4')}>水平垂直居中</Button>
                </Card>
                <Card title="基础模态框" className="card-wrap">
                    {/* 传参数的话需要使用尖头函数 */}
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal title="React"
                       visible={this.state.show1} 
                       onCancel={()=>{
                           this.setState({
                               show1:false
                           })
                       }}
                >
                    <p>欢迎来到FOX Admin</p>
                </Modal>
                <Modal title="React"
                       visible={this.state.show2} 
                       okText="好的"
                       cancelText="算了"
                       onCancel={()=>{
                           this.setState({
                               show2:false
                           })
                       }}
                >
                    <p>欢迎来到FOX Admin</p>
                </Modal>
                <Modal title="React"
                       style={{top:20}} 
                       visible={this.state.show3} 
                       onCancel={()=>{
                           this.setState({
                               show3:false
                           })
                       }}
                >
                    <p>欢迎来到FOX Admin</p>
                </Modal>
                <Modal title="React"
                       visible={this.state.show4} 
                       wrapClassName="vertical-center-modal"
                       onCancel={()=>{
                           this.setState({
                               show4:false
                           })
                       }}
                >
                    <p>欢迎来到FOX Admin</p>
                </Modal>
            </div>
        )
    }
}