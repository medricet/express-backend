const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.send({});
});

app.get("/greet/:name", (req, res) => {
  res.send({
    greeting: "Hello, " + req.params.name + "!"
  });
});

app.get('/course/:course', async (req, res) => {
  let course = req.params.course;
  
  if (course.match(/^[a-zA-Z0-9]+$/)) {
    let api_response = await fetch("https://one.ufl.edu/apix/soc/schedule/?category=CWSP&term=2225&course-code=" + course);
    let json = await api_response.json();
  
    res.send(json);
  } else {
    res.send({ request_error: true })
  }
});

app.listen(port, () => {
  console.log('Example app listening on ' + port);
});