import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default class UserInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      vin: null,
      time: null,
      selectType: null
    };

    this.handleVinChange = this.handleVinChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleVinChange(event) {
    this.setState({
      modal: this.state.modal,
      backdrop: this.state.backdrop,
      vin: event.target.value,
      time: this.state.time,
      selectType: this.state.selectType
    });
  }

  handleTimeChange(event){
    this.setState({
      modal: this.state.modal,
      backdrop: this.state.backdrop,
      vin: this.state.vin,
      time: event.target.value,
      selectType: this.state.selectType
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    this.setState({
      modal: this.state.modal,
      backdrop: value,
      vin: this.state.vin,
      time: this.state.time,
      selectType: e.target.value
    });
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="vin" sm={1}>Vin</Label>
          <Col sm={10}>
            <Input type="text" name="vin" id="vin" placeholder="Enter Vin number" onChange={this.handleVinChange}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="time" sm={1}>Time</Label>
          <Col sm={10}>
            <Input type="text" name="time" id="time" placeholder="Enter Time in minutes" onChange={this.handleTimeChange}/>
          </Col>
        </FormGroup>

        <Form>
          <FormGroup row>
            <Label for="type" sm={1}>Type</Label>
              <Col sm={10}>
                <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
                  <option></option>
                  <option value="fuelVolume">Fuel Volume</option>
                  <option value="engineHP">Engine Hp</option>
                  <option value="engineRPM">Engine Rpm</option>
				  <option value="speed">Speed</option>
                </Input>
              </Col>
          </FormGroup>
        </Form>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 1 }}>
            <Button className="UserInput" onClick= {
              () => {
                this.props.submitRequestFunction(this.state.vin, this.state.time, this.state.selectType);
              }
            }>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
