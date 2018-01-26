import React, { Component } from "react";
import { Alert  } from 'antd';

class Processqueue extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="processqueue">
                <Alert
                    message="Process Queue"
                    description="ใส่ข้อมูลที่นี่"
                    type="success"
                    
                /><br />
            </div>
        );
    }
}
export default Processqueue;