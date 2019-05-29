const express = require('express');
const fs = require('fs');
const cart = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cart);
app.use('/js/vue.js', express.static('node_modules/vue/dist/vue.js'));
app.use('/js', express.static('src/components'));
app.use('/js/main.js', express.static('src/main.js'));


app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});

app.get('/api/menu', (req, res) => {
  fs.readFile('server/db/menu.json', 'utf8', (err, data) => {
    if(err){
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  })
});

app.listen(3000, () => console.log('Express start...'));
