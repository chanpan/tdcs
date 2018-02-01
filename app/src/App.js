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
import Api from './providers/Api';
import KnexSqlites from './providers/KnexSqlites';
import Token from './providers/Token';
import TableNames from './providers/TableNames';
import Config from './providers/Config';
import ElectronIpc from './components/homes/electron_ipc/ElectronIpc';


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
   async componentWillMount(){
    ElectronIpc.Start();
        // let count_his = await KnexSqlites.getCount(TableNames.hists(), {token:Token.get_access_token('')});
        // Config.save_his_type(count_his);
        // Config.save_config_sql();
        // // let count_command = await KnexSqlites.getCount(TableNames.buffe_command(), {token:Token.get_access_token('')});
        // // Config.save_buffe_command(count_command);

        // let count_config = await KnexSqlites.getCount(TableNames.buffe_config(), {token:Token.get_access_token('')});
        // Config.save_buffe_config(count_config);

        // let count_constant = await KnexSqlites.getCount(TableNames.buffe_constant(), {token:Token.get_access_token('')});
        // Config.save_constant(count_constant);
        
    }

    onChange(activeKey) {
        this.setState({ activeKey });
    }
    handleClick(e){
        this.setState({ activeKey:e.target.name });
    }
    render() {

        return (
            <div style={{ margin: '10px' }}>
            
                   <Tabs
                    onChange={this.onChange.bind(this)}
                    activeKey={this.state.activeKey}
                    animated
                >
                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                </Tabs>
                 
            </div>
        );
    }
}

export default App;