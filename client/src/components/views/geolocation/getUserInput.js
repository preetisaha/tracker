import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class EnterVin extends React.Component {

  constructor(){
    super();
    this.state = {
      vin: null
    }
    this.onVinChange = this.onVinChange.bind(this);
  }

  render(){
    return(
      <Form>
        <FormGroup row>
          <Label for="vin" sm={1}>Vin</Label>
          <Col sm={10}>
            <Input type="text" name="vin" id="vin" placeholder="Enter Vin number" onChange={this.onVinChange}/>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 1 }}>
            <Button className="EnterVin" onClick= {
              () => {
                this.props.sendRequestData(this.state.vin);
              }
            }>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }

  onVinChange(e){
    this.setState({
      vin: e.target.value
    });
  }
}
