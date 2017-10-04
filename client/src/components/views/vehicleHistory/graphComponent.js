import React from 'react';
import { Table } from 'reactstrap';
//import { Plot, Axis, Line } from 'react-plot';
//import {Line} from 'react-chartjs';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

//var LineChart = require("react-chartjs").Line;

export default class Graph extends React.Component {

  /*render(){
    return (
      <div>
      <Plot width={700} height={200} xStep={2} yStep={20} data={this.props.graphData} >
          <Line color="#6fc1ff" />

          <Axis orientation="left" />
          <Axis orientation="bottom" />
      </Plot>
      </div>
    );
  }*/

  // render(){
  //   let chartData = {
  //     datasets:[
  //       {
  //         data:this.props.graphData
  //       }
  //     ]
  //   }
  //
  //   let chartOptions = {
  //     scales: {
  //         yAxes: [{
  //             stacked: true
  //         }]
  //     }
  //   }
  //
  //   return(
  //     <div>
  //       <LineChart data={chartData} options={chartOptions} width="700" height="300" />
  //     </div>
  //   );
  // }

  render () {
    // const data = [
    //   {name: 0, data: 2400},
    //   {name: 1, data: 1398},
    //   {name: 2, data: 9800},
    //   {name: 3, data: 3908},
    //   {name: 4, data: 4800},
    //   {name: 5, data: 3800},
    //   {name: 6, data: 4300},
    // ];

    return (
    	<LineChart width={700} height={300} data={this.props.graphData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="data" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
  }


}
