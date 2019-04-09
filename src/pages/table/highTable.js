import React from 'react'
import { Card, Table, Modal,message,Button ,Badge} from 'antd'
import axios from '../../axios/index'
import Utils from './../../utils/utils';
export default class HighTable extends React.Component{
    state = {
        dataSource2:''
    }
    
    params = {
        page:1
    }
    componentDidMount(){
        this.request()
    }
    //动态获取mock数据
    request = ()=>{
        let _this = this
        axios.ajax({
            url:'/table/high/list',
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

    handleDelete = (item)=>{
        let id = item.id
        Modal.confirm({
            title:'确认',
            content:'您确认要删除此条数据吗？',
            onOk:()=>{
                message.success('删除成功')
                this.request()
            }

        })
    }

    //排序
    handleChange = (pagination,filters,sorter)=>{
        console.log("::" + sorter)
        this.setState({
            sortOrder:sorter.order
        })
    }
    render(){
        const columns = [
            {
                title:'id',
                width:80,
                dataIndex:'id'
            },
            {
                title:'用户名',
                width:80,
                dataIndex:'userName'
            },{
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex == 1 ?'男':'女'
                }
            },{
                title:'状态',
                width:80,
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
                width:80,
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
                width:120,
                dataIndex:'birthday'
            },{
                title:'地址',
                width:120,
                dataIndex:'address'
            },{
                title:'早起时间',
                width:120,
                dataIndex:'time'
            }
        ]

        const columns2 = [
            {
                title:'id',
                width:80,
                fixed:'left',
                dataIndex:'id'
            },
            {
                title:'用户名',
                width:80,
                fixed:'left',
                dataIndex:'userName'
            },{
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex == 1 ?'男':'女'
                }
            },{
                title:'状态',
                width:80,
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
                width:80,
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
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'地址',
                width:120,
                fixed:'right',
                dataIndex:'address'
            },{
                title:'早起时间',
                width:120,
                fixed:'right',
                dataIndex:'time'
            }
        ]

        const columns3 = [
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
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age - b.age
                },
                sortOrder:this.state.sortOrder
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

        const columns4 = [
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
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age - b.age
                },
                sortOrder:this.state.sortOrder
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
                        '1':<Badge status="success" text="成功"/>,
                        '2':<Badge status="error" text="报错"/>,
                        '3':<Badge status="default" text="正常"/>,
                        '4':<Badge status="processing" text="进行中"/>,
                        '5':<Badge status="warning" text="警告"/>,
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
                title:'操作',
                render:(text,item)=>{
                    return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                }
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
                <Card title="头部固定表格">
                    <Table 
                        columns={columns} 
                        dataSource={this.state.dataSource2} 
                        bordered 
                        pagination={false} 
                        scroll={{y:360}}
                    >

                    </Table>
                </Card>
                <Card title="左侧固定表格" style={{margin:'10px 0'}}>
                    <Table 
                        columns={columns2} 
                        dataSource={this.state.dataSource2} 
                        bordered 
                        pagination={false} 
                        scroll={{x:2340}} >

                    </Table>
                </Card>

                <Card title="排序表格" style={{margin:'10px 0'}}>
                    <Table 
                        columns={columns3} 
                        dataSource={this.state.dataSource2} 
                        bordered 
                        pagination={false} 
                        onChange={this.handleChange}
                        >

                    </Table>
                </Card>

                <Card title="操作按钮" style={{margin:'10px 0'}}>
                    <Table 
                        columns={columns4} 
                        dataSource={this.state.dataSource2} 
                        bordered 
                        pagination={false} 
                        >

                    </Table>
                </Card>

                
            </div>
        )
    }
}