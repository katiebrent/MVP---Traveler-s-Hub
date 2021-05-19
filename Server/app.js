const express = require ('express');
const app = express();
const db = require ('../database/queries.js')
const port = 3000;

app.use( express.json() );
app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
  res.send()
})

app.post('/user', (req, res) => {
  console.log('this is the user data', req.body);
  var name = req.body.name;
  var email = req.body.email
  db.addUser(name, email, (err, resp) => {
    if(err) {
      console.log('error posting user', err)
    } else {
      res.send('successfully added user')
    }
  })

})


app.listen(port, () => {
  console.log(`Listening at port ${port}`)
});

