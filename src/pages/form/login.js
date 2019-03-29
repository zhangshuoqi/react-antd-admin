import React from 'react'
import {Button,Form,Card,Input,message,Icon,Checkbox} from 'antd'

const FormItem = Form.Item
class LoginForm extends React.Component{

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
        const { getFieldDecorator } = this.props.form
        return(
            <div>
                <Card title="行内登录表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="水平登录表单" style={{marginTop:10}}>
                    <Form style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须为英文字母or数字'
                                        }
                                    ]
                                })(<Input prefix={<Icon type="user"/>} placeholder="请输入用户名"></Input>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'密码不能为空'
                                        }
                                    ]
                                })(<Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"></Input>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    initialValue:true,
                                    valuePropName:'checked'
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="#" style={{float:"right"}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(LoginForm)