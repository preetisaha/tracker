import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserInput from './userInput';
import AlertList from './alertList';
import ErrorMessage from '../vehicleHistory/errorMessageComponent';
import axios from 'axios';

export default class HistoricalAlert extends React.Component {

  constructor(){
    super();
    this.state = {
      error: false,
      errorMessage: null,
      showList: false,
      vehicleAlertDetail: null
    };
  }

  render(){

    var result = null;
    if(this.state.error){
      result = <ErrorMessage errorMessage = {this.state.errorMessage}/>
    }else if(this.state.showList){
      result = <AlertList alertData = {this.state.vehicleAlertDetail}/>
    }

    return(
      <Container>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
          <Col xs="2"></Col>
          <Col xs="8"><UserInput sendRequest = {
            (vin) => this.submitRequest(vin)
          }/></Col>
          <Col xs="2"></Col>
        </Row>
        <Row>
         <Col xs="2"></Col>
         <Col xs="8">
           {result}
         </Col>
         <Col xs="2"></Col>
        </Row>
      </Container>
    );
  }

  submitRequest(vin){
    if (!vin){
      this.setState({
        error: true,
        errorMessage: "Enter Correct Vin",
        showList: false,
        vehicleAlertDetail: null
      });
    }else{
		let self = this;
		const vehicleAlertsURL = "http://localhost:8080/car-tracker/api/vehicles/" + vin + "/alerts";

		axios.get(vehicleAlertsURL)
		.then(function (response){
		  if(response.status == 200){
			self.setState({
			  error: false,
			  errorMessage: null,
			  showList: true,
			  vehicleAlertDetail: response.data
			});
		  } else {
			self.setState({
			  error: true,
			  errorMessage: response.statusText,
			  showList: false,
			  vehicleDetailsArray: null
			});
		  }
		})
		.catch(function (error){
		  self.setState({
			error: true,
			errorMessage: error.message,
			showList: false,
			vehicleDetailsArray: null
		  });
		});
    }
  }
}
