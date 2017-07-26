import React from 'react';
import { Table } from 'reactstrap';

export default class VehicleDetailsRow extends React.Component {

  render(){
    return (
      <tr>
        <td>{this.props.row.vin}</td>
        <td>{this.props.row.make}</td>
        <td>{this.props.row.model}</td>
        <td>{this.props.row.year}</td>
        <td>{this.props.row.redlineRpm}</td>
        <td>{this.props.row.maxFuelVolume}</td>
        <td>{this.props.row.lastServiceDate}</td>
      </tr>
    );
  }
}
