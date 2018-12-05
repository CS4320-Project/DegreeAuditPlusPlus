import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries}
from'@syncfusion/ej2-react-charts';
import * as React from 'react';
import "../styles/Chart.css";

export default class Chart extends React.Component {

   data1: any[]= [
    { x: 'Completed Hours', y: this.props.hoursTaken, text: 'Completed', fill: '#fadd45' },
    { x: 'Current Hours', y: this.props.currentHours, text: 'Current', fill: '#4c4c4c' },
    { x: 'Remaining Hours', y: this.props.hoursRemaining, text: 'Outstanding', fill: '#a6a6a6' },

];



  render() {



    return (

	<div className="wrapperDiv">

	<div className="legendDiv">
		<h3 className="DegreeProgress">CURRENT DEGREE PROGRESS</h3>
			<ul className="legend">
				<li><span className="completed"></span> <span className="thing">Completed Hours</span></li>
				<li><span className="current"></span> <span className="thing">Currently Enrolled Hours</span></li>
				<li><span className="remaining"></span><span className="thing"> Remaining Hours</span></li>
			</ul>
			<h5><span className="semsleft">{this.props.semesterLeft}</span> SEMESTERS REMAINING</h5>
	</div>

	<div className="chartDiv">
		<AccumulationChartComponent id='charts' height='190' width='200'>
    	<Inject services={[PieSeries]} />
    	<AccumulationSeriesCollectionDirective >
		<AccumulationSeriesDirective dataSource={this.data1} xName='x' yName='y' type='Pie' innerRadius='40%' pointColorMapping= 'fill' />
		</AccumulationSeriesCollectionDirective>
		</AccumulationChartComponent>
	</div>
	</div>


    );
  }
}
