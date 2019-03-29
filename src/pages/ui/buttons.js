import React from 'react'
import {Card,Button,Radio} from 'antd'
import './ui.less'
export default class Buttons extends React.Component{
    state = {
        size:'default'
    }
    handleChange = (e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render(){
        return(
            <div>
               <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">FOX</Button>
                    <Button>FOX</Button>
                    <Button type="dashed">FOX</Button>
                    <Button type="danger">FOX</Button>
                    <Button disabled>FOX</Button>
               </Card> 
               <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button type="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
               </Card> 
               <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={true}>确定</Button>
                    <Button type="primary" shape="circle" loading={true}></Button>
                    <Button loading={true}>点击加载</Button>
                    <Button shape="circle" loading={true}></Button>
                    <Button type="primary">关闭</Button>
               </Card>
               <Card title="按钮组" style={{marginBottom:10}}>
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
               </Card>
               <Card title="按钮尺寸" className="card-wrap">
                   <Radio.Group value={this.state.size} onChange={this.handleChange}>
                       <Radio value="small">小</Radio>
                       <Radio value="default">中</Radio>
                       <Radio value="large">大</Radio>
                   </Radio.Group>
                   <Button type="primary" size={this.state.size}>FOX</Button>
                   <Button size={this.state.size}>FOX</Button>
                   <Button type="dashed" size={this.state.size}>FOX</Button>
                   <Button type="danger" size={this.state.size}>FOX</Button>
               </Card>
            </div>
        )
    }
}