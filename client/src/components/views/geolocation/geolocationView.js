import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import EnterVin from './getUserInput';
import ErrorMessage from '../vehicleHistory/errorMessageComponent';
import VehicleLocationMap from './geoLocationMap';
import axios from 'axios';

export default class Geolocation extends React.Component {

  constructor(){
    super();
    this.state = {
      error: false,
      errorMessage: null,
      showMap: false,
      mapData: null
    };
  }

  render(){
    var result = null;
    if(this.state.error){
      result = <ErrorMessage errorMessage = {this.state.errorMessage}/>
    }else if(this.state.showMap){
      result = <VehicleLocationMap mapData = {this.state.mapData}/>
    }

    return(
      <div>
      <Container>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
          <Col xs="2"></Col>
          <Col xs="8"><EnterVin sendRequestData = {
            (vin) => this.submitRequest(vin)
          }/></Col>
          <Col xs="2"></Col>
        </Row>
        <Row>
          <Col xs="2"></Col>
          <Col xs="8">&nbsp;</Col>
          <Col xs="2"></Col>
        </Row>
      </Container>
      {result}
      </div>
    );
  }

  submitRequest(vin){
    if (!vin){
      this.setState({
        error: true,
        errorMessage: "Enter Correct Vin",
        showMap: false,
        mapData: null
      });
    }else{
		
		let self = this;
		const vehicleAlertsURL = "http://localhost:8080/car-tracker/api/vehicles/" + vin + "/geolocation";

		axios.get(vehicleAlertsURL)
		.then(function (response){
		  if(response.status == 200){
			self.setState({
			  error: false,
			  errorMessage: null,
			  showMap: true,
			  mapData: response.data
			});
		  } else {
			self.setState({
			  error: true,
			  errorMessage: response.statusText,
			  showMap: false,
			  mapData: null
			});
		  }
		})
		.catch(function (error){
		  self.setState({
			error: true,
			errorMessage: error.message,
			showMap: false,
			mapData: null
		  });
		}); 
    }
  }
}
