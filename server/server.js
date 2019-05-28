const express = require('express');
const fs = require('fs');
const cart = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cart);
app.use('/js/vue.js', express.static('node_modules/vue/dist/vue.js'));

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});


// app.get()
// app.post()
// app.put()
// app.delete()




// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
// app.get('/api/users/:id', (req, res) => {
//     // res.send(req.params.id);
//     res.send(req.query);
// });

app.listen(3000, () => console.log('Express start...'));
