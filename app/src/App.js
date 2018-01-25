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
class App extends Component{
    constructor(props){
        super(props);
        TestSqlite.Test();
        TestOracle.Test();
    }
    render(){
        return(
            <div className="app">
               <HomesComponent />
            </div>
        );
    }
}

export default App;