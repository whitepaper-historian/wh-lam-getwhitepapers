const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback){

    var params = {
        TableName: "whitepapers-dev",
        Select: "SPECIFIC_ATTRIBUTES",
        ProjectionExpression: "title, updated, pdf_link, kindle_link"
    };
    return ddb.scan(params, function(err, data) {
        if(err) {
            errorResponse(err, context.awsRequestId, callback);
            return;
        }

        callback(null, {
            statusCode: 201,
            body: JSON.stringify(data),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
    });

};

function errorResponse(errorMessage, awsRequestId, callback) {
  callback(null, {
    statusCode: 500,
    body: JSON.stringify({
      Error: errorMessage,
      Reference: awsRequestId,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
