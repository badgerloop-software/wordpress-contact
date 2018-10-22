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
                let slackResponse = "";

                response.on('data', (chunk) => {
                    slackResponse += chunk;
                });

                response.on('end', () => {
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(slackResponse);
                });

            });

            request.on('error', (e) => {
                res.writeHead(e.statusCode);
                res.end(e.message);
            });
                
            // write data to request body
            request.write(JSON.stringify(message));
            request.end();
        });
    }

}).listen(8000, '127.0.0.1');

