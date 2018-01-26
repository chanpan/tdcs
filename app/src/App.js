import React,{Component} from 'react';

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
import { Tabs, Button } from 'antd';
import { Icon } from 'semantic-ui-react'
class App extends Component{
    constructor(props){
        super(props);
        TestSqlite.Test();
        TestOracle.Test();
    }
    render(){
        const TabPane = Tabs.TabPane;
        return(
            <div style={{margin:'10px'}}>
                <Tabs>
                    <TabPane tab={<Icon name='home' size='big'></Icon>} key="1"><HomesComponent /></TabPane>
                    <TabPane tab="Setting" key="2"><SettingComponent /></TabPane>
                    
                </Tabs>
            </div> 
        );
    }
}

export default App;