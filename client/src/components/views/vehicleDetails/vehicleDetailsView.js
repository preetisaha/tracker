import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import VehicleDetailsRow from './vehicleDetailsRow';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

export default class VehicleDetailsView extends React.Component {

  constructor(){
    super();
    this.state = {
      error: false,
      errorMessage: null,
      vehicleDetailsArray: []
    };
  }

  getTableView () {
    var vehicleArray = [];
    for(let count = 0; count<this.state.vehicleDetailsArray.length; count++){
      vehicleArray.push(
        <VehicleDetailsRow row = {this.state.vehicleDetailsArray[count]} />
      );
    }

    return (
      <Row>
        <Col xs="12">
          <Table hover>
            <thead>
              <tr>
                <th>Vin</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>RedlineRpm</th>
                <th>MaxFuelVolume</th>
                <th>LastServiceDate</th>
              </tr>
            </thead>
            <tbody>
              {vehicleArray}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
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

  render() {
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
    );
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    let self = this;
    const vehicleDetailsURL = "http://localhost:8080/car-tracker/api/vehicles";

    axios.get(vehicleDetailsURL)
    .then(function (response){
      if(response.status == 200){
        self.setState({
          error: false,
          errorMessage: null,
          vehicleDetailsArray: response.data
        });
      } else {
        self.setState({
          error: true,
          errorMessage: response.statusText,
          vehicleDetailsArray: response.data
        });
      }
    })
    .catch(function (error){
      self.setState({
        error: true,
        errorMessage: error.message,
        vehicleDetailsArray: []
      });
    });
  }
}
