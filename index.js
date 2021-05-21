const express = require('express')
const fs = require('fs');
const app = express();
const port = 3000;
const path = require('path');

app.get('./image',(req, res)=>{
  fs.readFile('trailblazer.png', (error,data)=>{
    res.writeHead(200, { 'content-type' :'text/html' });
    res.end(data);
  });
});

app.get('/', (req, res) => {
  // res.send('Hello World!1')
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
