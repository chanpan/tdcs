import React, { Component } from "react";
import { Card } from 'antd';
import Processqueue from "./Processqueue";

class Welcome extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="welcome">
                <Processqueue />
                <Card title="Card title">
                    <p
                        style={{
                            fontSize: 14,
                            color: 'rgba(0, 0, 0, 0.85)',
                            marginBottom: 16,
                            fontWeight: 500,
                        }}
                    >
                        Group title
                </p>
                </Card>
            </div>
        );
    }
}
export default Welcome;