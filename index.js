const express = require('express')

const app = express();
const port = 3005

app.get('/', (req, res) => {
  res.send('Home pages!');
});

app.get('/register', (req, res) => {
    res.send('Register pages');
  });


app.get('/login', (req, res) => {
    res.send('login pages');
  });


app.listen(port, () =>
console.log(`Example app listening on port ${port}`),
);