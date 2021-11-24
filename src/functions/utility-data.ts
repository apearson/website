/* Libraries */
import { APIGatewayProxyEvent, Context, APIGatewayProxyCallback} from 'aws-lambda';
import fetch from 'node-fetch';

/* Env Settings */
const { dataURL } = process.env;

/* Handler function */
exports.handler = async function(event: APIGatewayProxyEvent, context: Context, callback: APIGatewayProxyCallback){

	// Try to grab data from dataservice and proxy it
	try{
		// Grabbing data from data service
		const res = await fetch(dataURL);
		const body = await res.text();

		// Returning data
		return {
			statusCode: 200,
			body,
		};
	}
	catch(e){
		console.error('A data error has happened:', e);
		return {
			statusCode: 500,
			body: "An error has occured while getting data"
		}
	}
}
