let express = require('express');

let app = express();

app.use(express.static('./public'));

app.get('/example1', (req, res, next) => {
    res.send("Hello World");
});

//Sample request to Webhook
// curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' YOUR_WEBHOOK_URL_HERE

app.listen(3002);