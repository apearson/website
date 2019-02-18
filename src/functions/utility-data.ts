/* Libraries */
import { APIGatewayProxyEvent, Handler } from "aws-lambda";

/* Handler function */
const handler: Handler<APIGatewayProxyEvent, 'Hello'> = function(event, context, callback){
	callback(null, "Hello");
};

/* Exporting handler */
export { handler };