import React, { Component } from "react";
import { Card } from 'antd';
import { List,Icon,Button } from 'semantic-ui-react';
import Processqueue from "./Processqueue";
import '../../assets/css/Card.css';
import '../../assets/css/Button.css';
import KnexSqlites from '../../providers/KnexSqlites';
import TableNames from '../../providers/TableNames';
import Token from "../../providers/Token";

import electron from 'electron';
//const electron = require("electron").remote;
const ipcMain = electron.ipcMain;
const ipcRenderer = electron.ipcRenderer;

class Welcome extends Component {
    constructor(props) {
        super();
        this.state ={
            name:'Nuttaphon chanpan',
            sitecode:'00000',
            buttons:{
                disble_start:false,
                disble_pause:true,
                disble_stop:true,
            }
        }
    }
   async componentWillMount(){
       let user_detail = await KnexSqlites.Connect().select("*").from(TableNames.setting_login()).where({"access_token":Token.get_access_token('')});
       user_detail.map(user=>{
         let hospital = user.sitecode+" : "+user.hospital;
         this.setState({name:user.name, sitecode:hospital});
       });
   }
   Start(){
        localStorage.setItem("status", 1);
        ipcRenderer.send('Start');
        // ipcRenderer.on('test-func', (event,arg)=>{

        // });
   }
    render() {
        let {buttons} = this.state;
        return (
            <div className="welcome">
                <Processqueue />
                <Card title="ยินดีต้อนรับ  Thai Database Connector (TDC) " extra={<span style={{color:"#fff"}}>Online</span>} style={{ width: "100%" }}>
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
                                <List.Header as='a'>
                                    Sitecode: {this.state.sitecode}
                                    <div className="btnControl">
                                        <Button onClick={this.Start.bind(this)} disabled={buttons.disble_start} color='green'><Icon name='play' /> Start</Button> {' '}
                                        <Button disabled={buttons.disble_pause} color='blue'><Icon name='pause' /> Pause</Button> {' '}
                                        <Button disabled={buttons.disble_stop} color='red'><Icon name='stop' /> Stop</Button> {' '}
                                    </div>
                                </List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                </Card><br />
            </div>
        );
    }
}
export default Welcome;