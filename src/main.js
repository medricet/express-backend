const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/user/:name', (req, res) => {
  res.send({
    name: req.params.name,
    age: 18,
  });
});

app.listen(port, () => {
  console.log('Example app listening on ' + port);
});
