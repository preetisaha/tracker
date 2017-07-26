import React from 'react';
import { Table } from 'reactstrap';

export default class AlertList extends React.Component {



  render(){

    var alertArray = [];
    for(let count = 0; count<this.props.alertData.length; count++){
      alertArray.push(
        <tr>
          <td>{this.props.alertData[count].reason}</td>
          <td>{this.props.alertData[count].status}</td>
          <td>{this.props.alertData[count].timestamp}</td>
        </tr>
      );
    }

    return (
      <Table hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>Reason</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {alertArray}
        </tbody>
      </Table>
    );
  }
}
