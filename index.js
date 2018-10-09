let https = require('https');
let http = require('http');

http.createServer((req, res) => {
    console.log(req.url + " " + req.method);

    if (req.url === '/contact' && req.method === 'POST') {
        var postData = '';

        req.on('data', function (data) {
            postData += data;
        });

        req.on('end', function() {
            console.log(`Request from client has ended : ${JSON.parse(postData)}`);
            
            let message = {
                "text": JSON.parse(postData)
            };

            let options = {
                hostname: 'hooks.slack.com',
                path: '/services/T09PPL10S/BD948FF24/9HsUZ9zw7TtifqC4TPLT8eRB',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
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
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(slackResponse);
                });

            });

            request.on('error', (e) => {
                console.log(`error: ${e.message}`);
                res.writeHead(e.statusCode);
                res.end(e.message);
            });
                
            // write data to request body
            request.write(JSON.stringify(message));
            request.end();
        });
    }

}).listen(8000, '127.0.0.1');

