import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 1,
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(value) {
        this.setState({
            inputValue: value,
        });
        this.props.onChange(this.state.inputValue);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}><div style={{ marginTop: "8px", textAlign: "center" }}>{this.props.name}</div></Col>
                    <Col span={16}>
                        <Slider  min={1} max={120} onChange={this.onChange} value={this.state.inputValue} />
                    </Col>
                    <Col span={4} style={{ marginTop: "8px", textAlign: "center" }}>
                        {this.state.inputValue}{' '}{this.props.unit}
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Slide;