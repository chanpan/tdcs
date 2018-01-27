import React, { Component } from 'react';

/** css */
import './assets/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';

/**sql test */
import TestOracle from './providers/test/TestOracle';
import TestSqlite from './providers/test/TestSqlite';

/**Component */
import SettingComponent from './components/settings/setting.component';
import HomesComponent from './components/homes/home.component';

/** semantic ui*/
import { Tabs,Badge , Button } from 'antd';
import { Icon } from 'semantic-ui-react';

const TabPane = Tabs.TabPane;
const panes = [
    { title: <Icon name='home' size='big' text="Home"></Icon>, content: <HomesComponent />, key: '1' },
    { title: "Setting", content: <SettingComponent/>, key: '2' },
];
class App extends Component {
    constructor(props) {
        super(props);
        TestSqlite.Test();
        TestOracle.Test();
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }
    onChange(activeKey) {
        console.log(activeKey);
        this.setState({ activeKey });
    }
    handleClick(e){
        this.setState({ activeKey:e.target.name });
    }
    render() {

        return (
            <div style={{ margin: '10px' }}>
            {/* <button name="2" onClick={this.handleClick.bind(this)}>Setting</button> */}
                   <Tabs
                    onChange={this.onChange.bind(this)}
                    activeKey={this.state.activeKey}
                    animated
                >
                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                </Tabs>
                {/* <Tabs ActiveKey="2" onChange={this.callback}>
                    <TabPane tab={<Icon name='home' size='big'></Icon>} key="1"><HomesComponent /></TabPane>
                    <TabPane tab="Setting" key="2"><SettingComponent /></TabPane>
                </Tabs> */}
            </div>
        );
    }
}

export default App;