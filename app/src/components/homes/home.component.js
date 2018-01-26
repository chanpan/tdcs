import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import DashboardComponent from './dashboard/dashboard.component';
import DelayConfigComponent from './delay_config/delay.config.component';
import DataTransferComponent from './data_transfer/data.transfer.component';
import EventScheduleComponent from './event_schedule/event.schedule.component';
import CheckCommandComponent from './check_command/check.command.component';
 
import Welcome from '../top_head/Welcome';

class HomesComponent extends Component {
    constructor(props) {
        super(props);
    }     
    render() {
        const panes = [
            { menuItem: 'Dashboard', render: () => <Tab.Pane><DashboardComponent /></Tab.Pane> },
            { menuItem: 'Delay Config', render: () => <Tab.Pane><DelayConfigComponent /></Tab.Pane> },
            { menuItem: 'Check Command', render: () => <Tab.Pane><CheckCommandComponent /></Tab.Pane> },
            { menuItem: 'Data Transfer', render: () => <Tab.Pane><DataTransferComponent /> </Tab.Pane> },
            { menuItem: 'Event Schedule', render: () => <Tab.Pane><EventScheduleComponent /></Tab.Pane> },
          ]
        return (
            <div className="home">
                <Welcome />
                <Tab panes={panes} />
            </div>
        );
    }
}
export default HomesComponent;