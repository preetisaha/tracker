import React from 'react';
import { Table } from 'reactstrap';
import { Alert } from 'reactstrap';

export default class ErrorMessage extends React.Component {

  render(){
    return (
      <div>
        <Alert color="danger">
          <strong>{this.props.errorMessage}</strong>
        </Alert>
      </div>
    );
  }
}
