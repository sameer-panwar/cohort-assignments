

const express = require('express')
const app = express()
const port = 1000


app.post('/', (req, res) => {
    console.log(req.body);
  res.send('<b>Hello bhai log!!!!</b>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 