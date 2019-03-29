import React from 'react'
import {Card,Form,Input,InputNumber,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Button,Icon,message} from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea
class RegisterForm extends React.Component{
    state = {

    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(userInfo.userName + ' 恭喜你，通过本次学习！')
            }else{
                console.log(err)
            }

        })
    }
    render(){
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        }
                                    ]
                                })(<Input placeholder='请输入用户名'></Input>)
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'密码不能为空'
                                        }
                                    ]
                                })(<Input type="password" placeholder='请输入密码'></Input>)
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:18,
                                })(
                                    <InputNumber></InputNumber>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2',
                                })(
                                    <Select>
                                        <Option value="1">React</Option>
                                        <Option value="2">Vue</Option>
                                        <Option value="3">JS</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:[],
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">健身</Option>
                                        <Option value="2">摄影</Option>
                                        <Option value="3">架子鼓</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried',{
                                    initialValue:true,
                                    valuePropName:'checked'
                                })(
                                    <Switch></Switch>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue:moment('2019-03-18')
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD"></DatePicker>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue:''
                                })(
                                    <TextArea autosize={
                                        {
                                            minRows:4,maxRows:6
                                        }
                                    }></TextArea>
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time',{
                                    initialValue:''
                                })(
                                    <TimePicker></TimePicker>
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="pictrue-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                    {this.state.userImg ? <img src={this.state.userImg}/> : <Icon type="plus"></Icon>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('policy',{
                                    initialValue:''
                                })(
                                    <Checkbox>我已阅读过<a href="#">协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('time',{
                                    initialValue:''
                                })(
                                    <TimePicker></TimePicker>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>



                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(RegisterForm)