const express = require ('express');
const app = express();
const port = 3000;

app.use( express.json() );
app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
  res.send()
})



app.listen(port, () => {
  console.log(`Listening at port ${port}`)
});

