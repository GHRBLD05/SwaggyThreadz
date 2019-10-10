const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static(`${__dirname}../client/dist`));
app.use(express.static(`${__dirname}../client/index`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(3000, function() {
  console.log('listening on port 3000');
});

app.get('/test', (req, res) => {
  res.send('success');
});
