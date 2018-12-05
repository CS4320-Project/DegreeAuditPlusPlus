import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries}
from'@syncfusion/ej2-react-charts';
import * as React from 'react';
import "../styles/Chart.css";

export default class Chart extends React.Component {  
	
   data1: any[]= [
    { x: 'Completed Hours', y: this.props.hoursTaken, text: 'Completed', fill: '#fadd49' },
    { x: 'Current Hours', y: this.props.currentHours, text: 'Current', fill: '#4c4c4c' },
    { x: 'Remaining Hours', y: this.props.hoursRemaining, text: 'Outstanding', fill: '#a6a6a6' },
  
];
 


  render() {

	
	  
    return (
	<div>

	<h2> Current Degree Progress </h2>
<ul className="legend">
    <li><span className="completed"></span> Completed Hours</li>
    <li><span className="current"></span> Currently Enrolled Hours</li>
    <li><span className="remaining"></span> Remaining Hours</li>
</ul>
		
		
		
	<AccumulationChartComponent id='charts' height='200' >

    <Inject services={[PieSeries]} />
    <AccumulationSeriesCollectionDirective >
      <AccumulationSeriesDirective dataSource={this.data1} xName='x' yName='y' type='Pie' innerRadius='40%' pointColorMapping= 'fill' />
    </AccumulationSeriesCollectionDirective>
	
  </AccumulationChartComponent>
		</div>
    );
  }
}
