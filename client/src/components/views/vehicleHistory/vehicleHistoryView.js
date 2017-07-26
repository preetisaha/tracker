import React from 'react';
import { Table } from 'reactstrap';
import UserInput from './userInputComponent';
import { Container, Row, Col } from 'reactstrap';
import Graph from './graphComponent';
import ErrorMessage from './errorMessageComponent';
import axios from 'axios';

export default class VehicleHistory extends React.Component {

  constructor(){
    super();
    this.state = {
      error: false,
      graph: false,
      errorMessage: null,
      vehiclePastDetail: null
    };
  }

  render() {

    var showResult = null;
    if(this.state.error){
      showResult = <ErrorMessage errorMessage = {this.state.errorMessage}/>
    }else if(this.state.graph){
      showResult = <Graph graphData = {this.state.vehiclePastDetail}/>
    }

    return(
      <Container>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
           <Col xs="2"></Col>
           <Col xs="8"><UserInput submitRequestFunction = {
             (vin, time, type) => this.submitRequest(vin, time, type)
           }/></Col>
           <Col xs="2"></Col>
         </Row>
         <Row>
           <Col>&nbsp;</Col>
         </Row>
         <Row>
          <Col xs="2"></Col>
          <Col xs="8">
            {showResult}
          </Col>
          <Col xs="2"></Col>
         </Row>
      </Container>
    );
  }

  submitRequest(vin, time, type){
    if (!vin || (!time || isNaN(time)) || !type){
        this.setState({
          error: true,
          graph: false,
          errorMessage: "Enter Correct Value",
          vehiclePastDetail: null
        });
    } else {
      
		let self = this;
		const signalHistoryURL = "http://localhost:8080/car-tracker/api/vehicles/" + vin + "/reading/" + type + "?minutes=" + time;

		axios.get(signalHistoryURL)
		.then(function (response){
		  if(response.status == 200){
			let data = [];
			response.data.forEach((value, index) => data.push({name: index, data: value}));
			self.setState({
			  error: false,
			  graph: true,
			  errorMessage: null,
			  vehiclePastDetail: data
			});
		  } else {
			self.setState({
			  error: true,
			  graph: false,
			  errorMessage: response.statusText,
			  vehiclePastDetail: null
			});  
		  }
		})
		.catch(function (error){
		  self.setState({
			error: true,
			graph: false,
			errorMessage: error.message,
			vehiclePastDetail: null
		  });
		});
	  
		let apiData = [{name:0,data:34}, {name:1,data:40}, {name:2,data:20}, {name:3,data:60}, {name:4,data:2}];

		this.setState({
		error: false,
		graph: true,
		errorMessage: null,
		vehiclePastDetail: apiData
		});
    }
  }
}
