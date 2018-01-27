import React, { Component } from "react";
import { Card } from 'antd';
import { List,Icon } from 'semantic-ui-react';
import Processqueue from "./Processqueue";
import '../../assets/css/Card.css'
import KnexSqlites from '../../providers/KnexSqlites';
import TableNames from '../../providers/TableNames';
import Token from "../../providers/Token";
class Welcome extends Component {
    constructor(props) {
        super();
        this.state ={
            name:'Nuttaphon chanpan',
            sitecode:'00000'
        }
    }
   async componentWillMount(){
       let user_detail = await KnexSqlites.Connect().select("*").from(TableNames.setting_login()).where({"access_token":Token.get_access_token('')});
       user_detail.map(user=>{
         console.log(user);
         let hospital = user.sitecode+" : "+user.hospital;
         this.setState({name:user.name, sitecode:hospital});
       });
   }
    render() {
        return (
            <div className="welcome">
                <Processqueue />
                <Card title="ยินดีต้อนรับ  Thai Database Connector (TDC) " extra={<a href="#">Online</a>} style={{ width: "100%" }}>
                    <List >
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>
                                <List.Header as='a'>ชื่อ-นามสกุล: {this.state.name}</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='table' />
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