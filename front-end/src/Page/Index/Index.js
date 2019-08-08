import React from 'react';
import '../css/common.css';
import './Index.css';
import {Link} from 'react-router-dom'
import { Button, Switch } from 'antd';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import RK from '../tools/Ranking/RK';
const { Search } = Input;
const ButtonGroup = Button.Group;
const constData ={
    options:["学术期刊","博硕","会议","报纸","年鉴","专利","标准","成果"]
}
class Index extends React.Component{
    render(){
        return (
            <div className="IndexOutSide scFlexColumn">
                <div className="IndexTopBar scFlexColumn">
                    <div className="buttonBar ecFlexRow">
                        <ButtonGroup>
                            <Button type="default"><Link to="/Login">登录</Link></Button>
                            <Button type="primary">注册</Button>
                        </ButtonGroup>
                    </div>
                    <div className="searchBar ccFlexColumn">
                        <Search
                            placeholder="中文文献、外文文献"
                            enterButton={<Link to="/Search">搜索</Link>}
                            size="large"
                            onSearch={value => console.log(value)}
                            />
                        <div className="selectBar bcFlexRow">
                            <Checkbox.Group 
                                options={constData.options} 
                                defaultValue={['学术期刊']} 
                                onChange={(checkedValues)=>{console.log('checked = ', checkedValues)}} />
                            <Switch checkedChildren="高级搜索" unCheckedChildren="高级搜索" defaultChecked />
                        </div>
                    </div>
                </div>
                <div className="bcFlexRow Rankings">
                    <RK />
                    <RK title="最新论文"/>
                    <RK title="论文下载榜"/>
                    <RK title="论文被引榜"/>
                    <RK title="审核积分榜"/>
                    <RK title="上传榜"/>
                </div>
            </div>
            )
    }
}

export default Index;
