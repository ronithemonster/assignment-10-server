const express = require('express')
const app = express()
const port = 5000
const chefData = require('./Datas/chefData.json')
const cors = require('cors')


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefData', (req, res) => {
  res.send(chefData)
})


app.get('/chefData/:id', (req, res) => {

  const id = req.params.id;
  console.log(id);
  // res.send(chefData)
  const selected = chefData.find(n => n.id == id)
  res.send(selected);

})
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})