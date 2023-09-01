/* Libraries */
import { Chart, TimeScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
import 'chartjs-adapter-date-fns';

Chart.register(TimeScale);

/* Interfaces */
interface MonthlyData {
	bill: number;
	cost: number;
	date: string;
	kWh: number;
}

/* Main app class */
class App {
	constructor() {
		/* Initializing chart */
		this.initChart();
	}

	async grabMonthlyData(): Promise<MonthlyData[]> {
		const res = await fetch('https://gist.githubusercontent.com/apearson/bdb841a654e9a0715e4180b208611a0f/raw/7a04697dc288f3d5307fb5a71045362105bdc2f2/home-utility.json', {
			method: 'GET'

		});
		const data: MonthlyData[] = await res.json();

		return data;
	}

	async initChart() {
		const data = await this.grabMonthlyData();

		const chartData = data.map((month) => ({ x: new Date(month.date), y: month.kWh }));

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
				scales: {
					xAxes:
					{
						type: 'time',
						time: {
							displayFormats: {
								month: 'MMM yyyy'
							}
						}
					}

				}
			}
		});

	}
}

/* Creating new app */
new App();
