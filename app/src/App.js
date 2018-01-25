import React,{Component} from 'react';
import './assets/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';

import TestOracle from './providers/test/TestOracle';
import TestSqlite from './providers/test/TestSqlite';

/**Component */
import SettingComponent from './components/settings/setting.component';
class App extends Component{
    constructor(props){
        super(props);
        TestSqlite.Test();
        TestOracle.Test();
    }
    render(){
        return(
            <div className="app">
               <SettingComponent />
            </div>
        );
    }
}

export default App;