import React, { Component } from 'react';
import { Button, Card, Slider, InputNumber, Row, Col,notification,message  } from 'antd';

import { Grid, Icon, mage, List } from 'semantic-ui-react';
import Slide from './slide';
import KnexSqlites from '../../../providers/KnexSqlites';
import TableNames from '../../../providers/TableNames';
import Token from '../../../providers/Token';
export default class DelayConfigComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            configs: {
                config_delay: 0,
                command_delay: 0,
                constants_delay: 0,
                template_delay: 0,
                sync_delay: 0,
                sync_nrec: 0,
                event_delay:1
            },
            disabled:true
        }
        // this.onChange = this.onChange.bind(this);
    }
    onchange_config_delay(config_delay) {
        let {event_delay,command_delay,constants_delay,template_delay,sync_delay,sync_nrec} = this.state.configs;
        this.setState({
            configs: {config_delay,command_delay,constants_delay,template_delay,sync_delay,sync_nrec,event_delay} 
        });
    }
    onchange_command_delay(command_delay) {
        let {event_delay,config_delay,constants_delay,template_delay,sync_delay,sync_nrec} = this.state.configs;
        this.setState({
            configs: {config_delay,command_delay,constants_delay,template_delay,sync_delay,sync_nrec,event_delay} 
        });
    }
    onchange_constants_delay(constants_delay) {
        let {event_delay,config_delay,command_delay,template_delay,sync_delay,sync_nrec} = this.state.configs;
        this.setState({
            configs: {config_delay,command_delay,constants_delay,template_delay,sync_delay,sync_nrec,event_delay} 
        });
    }
    onchange_template_delay(template_delay) {
        let {event_delay,config_delay,command_delay,constants_delay,sync_delay,sync_nrec} = this.state.configs;
        this.setState({
            configs: {config_delay,command_delay,constants_delay,template_delay,sync_delay,sync_nrec,event_delay} 
        });
    }
    onchange_sync_delay(sync_delay) {
        let {event_delay,config_delay,command_delay,constants_delay,template_delay,sync_nrec} = this.state.configs;
        this.setState({
            configs: {config_delay,command_delay,constants_delay,sync_delay,sync_delay,sync_nrec,event_delay} 
        });
    }
    onchange_event_delay(event_delay) {
        let {config_delay,command_delay,constants_delay,template_delay,sync_delay,sync_nrec} = this.state.configs;
        this.setState({
            configs: {event_delay,config_delay,command_delay,constants_delay,sync_delay,sync_delay,sync_nrec,template_delay} 
        });
    }
    onchange_sync_nrec(sync_nrec) {
        let {config_delay,command_delay,constants_delay,template_delay,sync_delay,event_delay} = this.state.configs;
        this.setState({
            configs: {sync_nrec,  config_delay,command_delay,constants_delay,template_delay,sync_delay,event_delay} 
        });
    }

    componentWillMount() {
        this.onLoad();
    }
    onLoad(){
        let buffe_config = KnexSqlites.Connect().select("*").from(TableNames.buffe_config()).where({ token: Token.get_access_token("") })
            .map(config => {
                if(config.event_delay || config.event_delay==undefined){
                    config.event_delay = 1;
                }
                this.setState({
                    configs: {
                        config_delay: parseInt(config.config_delay),
                        command_delay: parseInt(config.command_delay),
                        constants_delay: parseInt(config.constants_delay),
                        template_delay: parseInt(config.template_delay),
                        sync_delay: parseInt(config.template_delay),
                        sync_nrec: parseInt(config.sync_nrec),
                        event_delay:parseInt(config.event_delay),
                    }
                });
            });
    }
    onSave(){
        let {configs} = this.state;
        KnexSqlites.Update(TableNames.buffe_config(), configs, {token:Token.get_access_token("")}).then(res=>{
            this.setState({
                disabled:true
            })
            notification.success({
                message: "Success",
                description:res.message,
              });
        }).catch(err=>console.error(err));
    }
    onEnabled(){
        this.onLoad();
        this.setState({
            disabled:false
        })
    }
    render() {
        let { configs } = this.state;
        return (
            <div>
                <Row>
                    <Col span={4}><div style={{ marginTop: "8px", textAlign: "center" }}>Config Delay :</div></Col>
                    <Col span={16}>
                        <Slider disabled={this.state.disabled} min={1} max={120} name="config_delay" onChange={this.onchange_config_delay.bind(this)} value={configs.config_delay} />
                    </Col>
                    <Col span={4} style={{ marginTop: "8px", textAlign: "center" }}>
                        {configs.config_delay}{' '} Second
                            </Col>
                </Row>
                <Row>
                    <Col span={4}><div style={{ marginTop: "8px", textAlign: "center" }}>Command Delay :</div></Col>
                    <Col span={16}>
                        <Slider disabled={this.state.disabled} min={1} max={120} onChange={this.onchange_command_delay.bind(this)} value={configs.command_delay} />
                    </Col>
                    <Col span={4} style={{ marginTop: "8px", textAlign: "center" }}>
                        {configs.command_delay}{' '} Second
                            </Col>
                </Row>
                <Row>
                    <Col span={4}><div style={{ marginTop: "8px", textAlign: "center" }}>Constants Delay :</div></Col>
                    <Col span={16}>
                        <Slider disabled={this.state.disabled} min={1} max={120} onChange={this.onchange_constants_delay.bind(this)} value={configs.constants_delay} />
                    </Col>
                    <Col span={4} style={{ marginTop: "8px", textAlign: "center" }}>
                        {configs.constants_delay}{' '} Second
                            </Col>
                </Row>
                <Row>
                    <Col span={4}><div style={{ marginTop: "8px", textAlign: "center" }}>Template Delay :</div></Col>
                    <Col span={16}>
                        <Slider disabled={this.state.disabled} min={1} max={120} onChange={this.onchange_template_delay.bind(this)} value={configs.template_delay} />
                    </Col>
                    <Col span={4} style={{ marginTop: "8px", textAlign: "center" }}>
                        {configs.template_delay}{' '} Second
                            </Col>
                </Row>
                <Row>
                    <Col span={4}><div style={{ marginTop: "8px", textAlign: "center" }}>Sync Delay :</div></Col>
                    <Col span={16}>
                        <Slider disabled={this.state.disabled} min={1} max={120} onChange={this.onchange_sync_delay.bind(this)} value={configs.sync_delay} />
                    </Col>
                    <Col span={4} style={{ marginTop: "8px", textAlign: "center" }}>
                        {configs.sync_delay}{' '} Second
                            </Col>
                </Row>
                <Row>
                    <Col span={4}><div style={{ marginTop: "8px", textAlign: "center" }}>Event Delay :</div></Col>
                    <Col span={16}>
                        <Slider disabled={this.state.disabled} min={500} max={3000} onChange={this.onchange_event_delay.bind(this)} value={configs.event_delay} />
                    </Col>
                    <Col span={4} style={{ marginTop: "8px", textAlign: "center" }}>
                        {configs.event_delay}{' '} Second
                            </Col>
                </Row>

                <Row>
                    <Col span={4}><div style={{ marginTop: "8px", textAlign: "center" }}>Sync Nrec :</div></Col>
                    <Col span={16}>
                        <Slider disabled={this.state.disabled} min={500} max={3000} onChange={this.onchange_sync_nrec.bind(this)} value={configs.sync_nrec} />
                    </Col>
                    <Col span={4} style={{ marginTop: "8px", textAlign: "center" }}>
                        {configs.sync_nrec}{' '} Record
                            </Col>
                </Row>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <Button disabled={this.state.disabled} onClick={this.onSave.bind(this)} size='large' type="primary"><Icon name='save' />Save</Button> {' '}
                    <Button onClick={this.onEnabled.bind(this)} size='large'>Reset</Button>
                </div>
            </div>
        );
    }
}