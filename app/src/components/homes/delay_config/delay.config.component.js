import React, { Component } from 'react';
import { Button,Card } from 'antd'; 
import { Grid, Icon, mage, List } from 'semantic-ui-react';
import Slide from './slide';
class DelayConfigComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            input1:0, input2:0,input3:0,
            input4:0,input5:0,input6:0,
            input7:0,
        }
        this.onChangeInput1 = this.onChangeInput1.bind(this);
    }
    onChangeInput1(data){
        this.setState({input1:data});
        console.log(this.state);
    }
    onChangeInput2(data){
        this.setState({input2:data});
    }  
    onChangeInput3(data){
        this.setState({input3:data});
    }  
    onChangeInput4(data){
        this.setState({input4:data});
    }  
    onChangeInput5(data){
        this.setState({input5:data});
    }  
    onChangeInput6(data){
        this.setState({input6:data});
    }
    onChangeInput7(data){
        this.setState({input7:data});
    }     
    render() {
        return (
            <div>
                <Card title="Config time delay : Min:1 Max:120">
                    <h2></h2>
                    <Slide unit="Second" name="Config Delay :"  onChange={this.onChangeInput1}/>
                    <Slide unit="Second" name="Command Delay :"  onChange={this.onChangeInput2}/>
                    <Slide unit="Second" name="Constants Delay :"  onChange={this.onChangeInput3}/>
                    <Slide unit="Second" name="Template Delay :"  onChange={this.onChangeInput4}/>
                    <Slide unit="Second" name="Sync Delay :"  onChange={this.onChangeInput5}/>
                    <Slide unit="Second" name="Event Delay :"  onChange={this.onChangeInput6}/>
                    <Slide unit="Record" name="Sync Nrec :"  onChange={this.onChangeInput7}/>
                    <div style={{textAlign:"center",marginTop:"10px"}}>
                        <Button size='large' type="primary"><Icon name='save'/>Save</Button> {' '}
                        <Button size='large'>Reset</Button>
                    </div>
                </Card>
            </div>
        );
    }
}
export default DelayConfigComponent;