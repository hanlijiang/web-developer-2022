const mailer = require('./mailer') 
const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.post('/send-email', async (req, res) =>{
  const data = req.body;
  console.log(data);
  const response = await mailer.sendEmail(data);
  console.log(response);
  res.send('hello man');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})