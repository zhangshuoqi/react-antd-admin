import React from 'react'
import { Card,Button,Tabs,message,Icon } from 'antd'

export default class Buttons extends React.Component{
    newTabIndex = 0
    componentWillMount(){
        const panes = [
            {
                title:'Tab 1',
                content:'Tab 1',
                key:'1'
            },
            {
                title:'Tab 2',
                content:'Tab 2',
                key:'2'
            },
            {
                title:'Tab 3',
                content:'Tab 3',
                key:'3'
            }
        ]
        this.setState({
            activeKey:panes[0].key,
            panes
        })
    }
    handleCallback = (key)=>{
        message.info("Hi, you got Tab :"+key)
    }
    onChange = (activeKey)=>{
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey,action)=>{
        this[action](targetKey)
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      }
    render(){
        return(
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabs.TabPane tab="Tab 1" key="1">No Pain,No Gain!</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 2" key="2">No Pain,No Gain!</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 3" key="3">No Pain,No Gain!</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabs.TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">No Pain,No Gain!</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">No Pain,No Gain!</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">No Pain,No Gain!</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title="可添加删除的Tab页签" className="card-wrap">
                    <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        // defaultActiveKey="1" 
                        type="editable-card"
                        onEdit={this.onEdit}

                    >
                        {
                            this.state.panes.map((panel)=>{
                                return <Tabs.TabPane tab={panel.title} key={panel.key}/>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}