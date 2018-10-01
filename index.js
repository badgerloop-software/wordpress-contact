let express = require('express');
let https = require('https');

let app = express();

app.use(express.static('./public'));

app.get('/example1', (req, res, next) => {
    res.send("Hello World");
});

app.post('/contact', (req, res, next) => {
    var postData = '';

    req.on('data', function (data) {
        postData += data;
    });

    req.on('end', function() {
        console.log(`Request from client has ended : ${postData}`);
        
        let message = {
            "text": postData
        };

        let options = {
            hostname: 'hooks.slack.com',
            path: '/services/T09PPL10S/BD544U7CP/7AiaDsJ7Fp0Nv1dgpTZPQNol',
            method: 'POST'
          };
              
        let request = https.request(options, (response) => {
            console.log(`Status: ${response.statusCode}`);
            let slackResponse = "";

            response.on('data', (chunk) => {
                console.log("chunk of slack response received");
                slackResponse += chunk;
            });

            response.on('end', () => {
                console.log(slackResponse);
                res.end(slackResponse);
            });

        });

        request.on('error', (e) => {
            console.log(`error: ${e.message}`);
            res.end(e.message);
        });
            
        // write data to request body
        request.write(JSON.stringify(message));
        request.end();
    });

});

//Sample request to Webhook
// curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' YOUR_WEBHOOK_URL_HERE

app.listen(3002);

function createSlackMessage(obj) {

}