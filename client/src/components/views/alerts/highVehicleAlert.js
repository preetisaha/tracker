import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';

export default class HighVehicleAlert extends React.Component {

  constructor(){
    super();
    this.state = {
      error: false,
      errorMessage: null,
      vehicleAlertArray: []
    };
  }

  getErrorView() {
    return (
      <Row>
        <Col xs="3"></Col>
        <Col xs="6">
          <Alert color="danger">
            <strong>{this.state.errorMessage}</strong>
          </Alert>
        </Col>
        <Col xs="3"></Col>
      </Row>
    );
  }

  getTableView () {
    return (
      <Row>
        <Col xs="12">
          <BootstrapTable data={this.state.vehicleAlertArray} striped hover>
            <TableHeaderColumn isKey dataField='vin' dataSort={true}>VIN</TableHeaderColumn>
            <TableHeaderColumn dataField='reason' dataSort={true}>Reason</TableHeaderColumn>
            <TableHeaderColumn dataField='status' dataSort={true}>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='timeStamp' dataSort={true}>Timestamp</TableHeaderColumn>
          </BootstrapTable>
        </Col>
      </Row>
    );
  }

  render(){
    let view;
    if (this.state.error) {
      view = this.getErrorView();
    } else {
      view = this.getTableView();
    }

    return (
      <div>
        <Container>
          <Row>
            <Col>&nbsp;</Col>
          </Row>
          <Row>
            <Col xs="5"></Col>
            <Col xs="2">
              <Button onClick= {
                () => {
                  this.getData();
                }
              }>Refresh Page</Button>
            </Col>
            <Col xs="5"></Col>
          </Row>
          <Row>
            <Col>&nbsp;</Col>
          </Row>
          {view}
        </Container>
      </div>
    )
  }

  componentDidMount(){

    this.getData();
  }

  getData() {
    let self = this;
    const highAlertURL = "http://localhost:8080/car-tracker/api/alerts/status/HIGH";

    axios.get(highAlertURL)
    .then(function (response){
      if(response.status == 200){
        self.setState({
          error: false,
          errorMessage: null,
          vehicleAlertArray: response.data
        });
      } else {
        self.setState({
          error: true,
          errorMessage: response.statusText,
          vehicleAlertArray: []
        });
      }
    })
    .catch(function (error){
      self.setState({
        error: true,
        errorMessage: error.message,
        vehicleAlertArray: []
      });
    });
  }
}
