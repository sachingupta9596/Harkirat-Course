const express = require('express');
const app = express();


app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.get('/hello',(req,res)=>{
  console.log(req);
  res.send('Hello 2')
})

app.listen(3000);