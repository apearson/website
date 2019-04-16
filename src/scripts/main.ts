/* Libraries */
import {Chart, ChartPoint} from 'chart.js';

/* Interfaces */
interface MonthlyData{
	bill: number;
	cost: number;
	date: string;
	kWh: number;
}

/* Main app class */
class App{
	constructor(){
		/* Initializing chart */
		this.initChart();
	}

	async grabMonthlyData(): Promise<MonthlyData[]>{
		const res = await fetch('/api/utility', {
			method: 'GET'

		});
		const data: MonthlyData[] = await res.json();

		return data;
	}

	async initChart(){
		const data = await this.grabMonthlyData();

		const chartData: ChartPoint[] = data.map((month)=> ({x: new Date(month.date), y: month.kWh}));

		const chartCanvas = document.getElementsByTagName('canvas')[0];
		const context = chartCanvas.getContext('2d');

		const chart = new Chart(context, {
			type: 'line',
			data: {
				datasets: [
					{
						fill: false,
						label: 'kWh',
						backgroundColor: '#4885ed',
						data: chartData,
						pointRadius: 7,
						pointHitRadius: 15,
						pointHoverRadius: 5,
					}
				]
			},
			options: {
				scales:{
					xAxes:[
						{
							type: 'time',
							time:{
								displayFormats: {
									month: 'MMM YYYY'
								}
							}
						}
					]
				}
			}
		});

	}
}

/* Creating new app */
new App();