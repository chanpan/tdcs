import React,{Component} from 'react';
import { Table,Card } from 'antd';
const columns = [
    { 
        title: 'ID', dataIndex: 'id', key: 'id',
        filters: [ 
            {text: 'John Brown',value: 'John Brown'},
            {text: 'Jim Green',value: 'Jim Green'},
            {text: 'Joe Black',value: 'Joe Black'}
        ],
        onFilter: (value, record) => record.id.indexOf(value) === 0,
        sorter: (a, b) => a.id.length - b.id.length,
    },
    { title: 'SQL', dataIndex: 'sql', key: 'sql' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'ErrorMessage', dataIndex: 'message', key: 'x', render: () => <a href="#">Delete</a> },
  ];
  
  const data = [
    { key: 1, id: 'John Brown', sql: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
    { key: 2, id: 'Jim Green', sql: 42, status: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
    { key: 3, id: 'Joe Black', sql: 32, status: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
  ];
 
class CheckCommandComponent extends Component{
    render(){
        return(
            <div>
                <Card title="Sql command">
                    <Table
                        columns={columns}
                        expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                        dataSource={data}
                        pagination={{ pageSize: 50 }}
                       
                    />
                </Card>
            </div>
        );
    }
}
export default CheckCommandComponent;