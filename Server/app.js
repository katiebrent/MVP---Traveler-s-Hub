const express = require ('express');
const app = express();
const db = require ('../database/queries.js')
const port = 3000;

app.use( express.json() );
app.use(express.static(__dirname + '/../client/dist'));


app.get('/user', (req, res) => {
  db.fetchUser(req.query, (err, resp) => {
    if(err) {
      console.log('error fetching User in server')
    } else {
      res.send(resp)
    }
  })
})

app.get('/friend', (req, res) => {
  console.log('this is req.query', req.query)
  db.findFriends(req.query, (err, resp) => {
    if(err) {
      console.log('error fetching Friends in server')
    } else {
      res.send(resp)
    }
  })
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

app.put('/user', (req, res) => {
  console.log('this is the put data', req.body);
  db.addCountry(req.body, (err, resp) => {
    if(err) {
      console.log('error adding country', err)
    } else {
      res.send('successfully added country')
    }
  })

})


app.listen(port, () => {
  console.log(`Listening at port ${port}`)
});

