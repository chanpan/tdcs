import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import DashboardComponent from './dashboard.component';
import DelayConfigComponent from './delay.config.component';
import DataTransferComponent from './data.transfer.component';
import EventScheduleComponent from './event.schedule.component';
import CheckCommandComponent from './check.command.component';
 


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
                <Tab panes={panes} />
            </div>
        );
    }
}
export default HomesComponent;