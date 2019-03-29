import React from 'react'
import { Card,Alert,Spin,Icon } from 'antd'

export default class Loadings extends React.Component{

    render(){
        const icon = <Icon type="loading" style={{fontSize:24}}/>
        return(
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"></Spin>
                    <Spin style={{margin:'0 10px'}}></Spin>
                    <Spin size="large"></Spin>
                    <Spin indicator={icon} style={{marginLeft:10}} spinning={true}></Spin>
                </Card>

                <Card title="内容遮罩" className="card-wrap">
                    <Alert message="React" description="欢迎来到FOX Admin" type="info"></Alert>
                    <Spin>
                        <Alert message="React" description="欢迎来到FOX Admin" type="warning"></Alert>
                    </Spin>
                    <Spin indicator={icon} tip="加载中...">
                        <Alert message="React" description="欢迎来到FOX Admin" type="warning"></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}