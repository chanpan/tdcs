import React, { Component } from 'react';
import { Grid, Icon, mage, List } from 'semantic-ui-react';
import { Button,Card } from 'antd';

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: {
                aqua: '#00c0ef',
                red: '#dd4b39',
                green: '#00a65a',
                yellow: "#f39c12",
                white: "#ffffff",
                blue: "#2185d0"
            },
            pcs: { cpu_app: "100", cpu_total: "45", ram_app: "50", ram_total: "20" }
        };
    }

    render() {
        let { colors, pcs } = this.state;
        return (
            <div>

                <Card title="Monitor" style={{width:'100%'}}>
                    <Grid reversed='tablet' columns='equal' style={{ padding: "20px" }}>
                        <Grid.Column style={{ backgroundColor: colors.red, width: "20%", marginRight: "5%", borderRadius: "10px" }}>
                            <h2 className="h2">{pcs.cpu_app}%</h2>
                            <p className="p">Cpu app</p>
                            <Icon name='setting' size='huge' style={{ fontSize: '5em', color: colors.white, float: 'right', marginTop: '40px', position: 'absolute', right: '10px', bottom: '15px' }} />
                        </Grid.Column>

                        <Grid.Column style={{ backgroundColor: colors.blue, width: "20%", marginRight: "5%", borderRadius: "10px" }}>
                            <h2 className="h2">{pcs.cpu_total}%</h2>
                            <p className="p">Cpu total</p>
                            <Icon name='setting' size='huge' style={{ fontSize: '5em', color: colors.white, float: 'right', marginTop: '40px', position: 'absolute', right: '10px', bottom: '15px' }} />
                        </Grid.Column>

                        <Grid.Column style={{ backgroundColor: colors.yellow, width: "20%", marginRight: "5%", borderRadius: "10px" }}>
                            <h2 className="h2">{pcs.ram_app}%</h2>
                            <p className="p">Ram app</p>
                            <Icon name='setting' size='huge' style={{ fontSize: '5em', color: colors.white, float: 'right', marginTop: '40px', position: 'absolute', right: '10px', bottom: '15px' }} />
                        </Grid.Column>

                        <Grid.Column style={{ backgroundColor: colors.blue, width: "20%", marginRight: "5%", borderRadius: "10px" }}>
                            <h2 className="h2">{pcs.ram_total}%</h2>
                            <p className="p">Ram total</p>
                            <Icon name='setting' size='huge' style={{ fontSize: '5em', color: colors.white, float: 'right', marginTop: '40px', position: 'absolute', right: '10px', bottom: '15px' }} />
                        </Grid.Column>
                    </Grid>
                    <hr style={{ background: "#fff", borderTop: "2px dashed #8c8b8b", margin: "50px 0 50px 0" }} />
                    <List animated verticalAlign='middle'>
                        <List.Item>

                            <List.Content>
                                <div style={{ background: colors.blue, width: "20px", height: "20px", float: "left", marginRight: "15px", marginTop: "-3px" }}></div>
                                <List.Header>Blue</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>

                            <List.Content>
                                <div style={{ background: colors.read, width: "20px", height: "20px", float: "left", marginRight: "15px", marginTop: "-3px" }}></div>
                                <List.Header>Read</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>

                            <List.Content>
                                <div style={{ background: colors.yellow, width: "20px", height: "20px", float: "left", marginRight: "15px", marginTop: "-3px" }}></div>
                                <List.Header>Yellow</List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                </Card>
            </div>
        );
    }
}
export default DashboardComponent;