import React from 'react'
import { Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
    componentWillMount(){
      const menuTreeNode = this.renderMenu(MenuConfig)

      this.setState({
        menuTreeNode
      })
    }
    renderMenu = (data)=>{
      return data.map((item)=>{
        if(item.children){
          return (
            <SubMenu title={item.title} key={item.key}>
              { this.renderMenu(item.children)}
            </SubMenu>
          )
        }
        return <Menu.Item title={item.title} key={item.key}>
                 <NavLink to={item.key}>
                  {item.title}
                 </NavLink> 
              </Menu.Item>
      })
    }
    render(){
        return (
            <div>
              <div className="logo">
                  <h1>FOX</h1>
              </div>
              <Menu theme="dark">
                {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu> */}
                { this.state.menuTreeNode }
              </Menu>
            </div>
        )
    }
}