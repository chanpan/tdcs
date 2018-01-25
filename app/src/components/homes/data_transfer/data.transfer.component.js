import React,{Component} from 'react';
import { Progress,Card,Col } from 'antd';

class DataTransferComponent extends Component{
    render(){
        return(
            <div>
                <Card title="ข้อมูล Transfer">
                    <Col span={6}>
                        <div style={{ marginTop: "8px", textAlign: "center" }}> 
                            <div>จำนวนที่ส่งขึ้น Server 0 Record</div>
                            <div>จำนวนที่เหลือ 0 Record</div>
                        </div>
                    </Col>
                    <Col span={16}>
                         <div>Transfer Progress : 10 %</div>
                         <Progress percent={10} />
                    </Col>
                    
                </Card>
            </div>
        );
    }
}
export default DataTransferComponent;