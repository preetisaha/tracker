import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VehicleDetailsView from './components/views/vehicleDetails/vehicleDetailsView';
import HighVehicleAlert from './components/views/alerts/highVehicleAlert';
import VehicleHistory from './components/views/vehicleHistory/vehicleHistoryView';
import Geolocation from './components/views/geolocation/geolocationView';
import HistoricalAlert from './components/views/historicalAlerts/historicalAlertsView';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Vehicles Details
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              HIGH alerts
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Vehicle History
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Vehicle Geolocation
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Vehicle all historical alerts
            </NavLink>
          </NavItem>

        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <VehicleDetailsView/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <HighVehicleAlert/>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <VehicleHistory/>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <Geolocation/>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <HistoricalAlert/>
              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}

export default App;
