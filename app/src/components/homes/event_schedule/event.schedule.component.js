import React, { Component } from 'react';
import { Button, Card, Col } from 'antd';
import { Image, List } from 'semantic-ui-react'

class EventScheduleComponent extends Component {
    render() {
        return (
            <div>
                
                <Card title="จำนวนคิวที่เหลือ อัพเดทล่าสุด 25 ม.ค.2561 22:21 14.00">
                    <Col span={12}>
                        <List animated verticalAlign='middle'>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Helen</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                 
                                <List.Content>
                                    <List.Header>Christian</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                 
                                <List.Content>
                                    <List.Header>Daniel</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Col>

                    <Col span={12}>
                        <List animated verticalAlign='middle' >
                            <List.Item>
                                <List.Content>
                                    <List.Header>Helen</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                 
                                <List.Content>
                                    <List.Header>Christian</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                 
                                <List.Content>
                                    <List.Header>Daniel</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Col>
                </Card>
            </div>
        );
    }
}
export default EventScheduleComponent;