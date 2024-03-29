import React from 'react'
import { Card, Table, Modal,message,Button } from 'antd'
import axios from '../../axios/index'
import Utils from './../../utils/utils';
export default class BasicTable extends React.Component{
    state = {
        dataSource2:''
    }
    
    params = {
        page:1
    }
    componentDidMount(){
        const dataSource = [
            {
                id:'0',
                userName:'FOX',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2019-03-18',
                address:'xxx',
                time:'09:00'
            },{
                id:'1',
                userName:'Rabbit',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2019-03-18',
                address:'xxx',
                time:'09:00'
            },{
                id:'2',
                userName:'Apple',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2019-03-18',
                address:'xxx',
                time:'09:00'
            }
        ]
        dataSource.map((item,index)=>{
            item.key = index;

        })
        this.setState({
            dataSource
        })
        this.request()
    }
    //动态获取mock数据
    request = ()=>{
        let _this = this
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            if(res.code == '0'){
                res.result.list.map((item,index)=>{
                    item.key = index
                })
                this.setState({
                    dataSource2:res.result.list,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page = current
                        this.request()
                    })
                })
            }
        })
    }
    onRowClick = (record,index)=>{
        let selectKey = [index]
        console.log(index,record)
        Modal.info({
            title:'info',
            content:'用户名: '+record.userName+' 用户爱好: '+record.interest
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    }

    //多选执行删除
    handleDelete = (()=>{
        let rows = this.state.selectedRows
        let ids = []
        rows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:'确定删除这些数据吗？'+ids.join(),
            onOk:()=>{
                message.success('删除成功')
            }
        })
    })
    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },{
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ?'男':'女'
                }
            },{
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者',
                    }
                    return config[state]
                }
            },{
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    let config = {
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'踢足球',
                        '4':'跑步',
                        '5':'爬山',
                        '6':'骑行',
                        '7':'斯诺克',
                        '8':'麦霸'
                    }
                    return config[interest]
                }
            },{
                title:'生日',
                dataIndex:'birthday'
            },{
                title:'地址',
                dataIndex:'address'
            },{
                title:'早起时间',
                dataIndex:'time'
            }
        ]
        const { selectedRowKeys } = this.state
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table columns={columns} dataSource={this.state.dataSource} bordered pagination={false} >

                    </Table>
                </Card>
                <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
                    <Table columns={columns} dataSource={this.state.dataSource2} bordered pagination={false} >

                    </Table>
                </Card>

                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table 
                        columns={columns} 
                        dataSource={this.state.dataSource2} 
                        rowSelection={rowSelection} 
                        bordered 
                        pagination={false}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index)
                                }, //点击行
                                onMouseEnter:()=>{} //鼠标移入行
                            }
                        }}
                        >

                    </Table>
                </Card>

                <Card title="Mock-复选" style={{margin:'10px 0'}}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table 
                        columns={columns} 
                        dataSource={this.state.dataSource2} 
                        rowSelection={rowCheckSelection} 
                        bordered 
                        pagination={false}
                        >

                    </Table>
                </Card>
                <Card title="Mock-表格分页" style={{margin:'10px 0'}}>
                    <Table 
                        bordered
                        columns={columns} 
                        dataSource={this.state.dataSource2} 
                        pagination={this.state.pagination}
                        >
                    </Table>
                </Card>
            </div>
        )
    }
}