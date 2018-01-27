import React, { Component } from "react";
import { Card } from 'antd';
import { List,Icon } from 'semantic-ui-react';
import Processqueue from "./Processqueue";
import '../../assets/css/Card.css'

class Welcome extends Component {
    constructor(props) {
        super();
        this.state ={
            name:'nuttaphon chanpan',
            sitecode:'91112'
        }
    }

    render() {
        return (
            <div className="welcome">
                <Processqueue />
                <Card title="ยินดีต้อนรับ" extra={<a href="#">Online</a>} style={{ width: "100%" }}>
                    <List >
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>
                                <List.Header as='a'>ชื่อ-นามสกุล: {this.state.name}</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>
                                <List.Header as='a'>Sitecode: {this.state.sitecode}</List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                </Card><br />
            </div>
        );
    }
}
export default Welcome;