import React from 'react'
import { Row,Col } from 'antd'
import Header from './components/Header'
import 'antd/dist/antd.less'
import './style/common.less'



export default class Common extends React.Component{
    render(){
        return(
            <div>
                <Row className="container">
                    <Header menuType="second"/>
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}