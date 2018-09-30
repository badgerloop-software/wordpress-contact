let express = require('express');

let app = express();

app.use(express.static('./public'));

app.get('/example1', (req, res, next) => {
    res.send("Hello World");
});

app.listen(3002);