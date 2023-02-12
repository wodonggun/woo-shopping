const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const api = require('./routes/index');

app.get('/',(req,res) => {
  res.send('Server Response Success');
})

app.listen(PORT, () => {
  console.log('Server run : http://localhost:${PORT}/');
})


