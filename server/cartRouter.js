const express = require('express');
const handler = require('./handler');
const fs = require('fs');
const router = express.Router();

const cartUrl = 'server/db/userCart.json';

router.delete('/all-remove', (req, res) => {
    let newFile = JSON.stringify({"contents": []}, null, '\t');
  fs.writeFile(cartUrl, newFile, (err) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: 'Can`t write file' }));
    } else {
      res.send(JSON.stringify({ result: 1, text: 'Success!' }));
    }
  });
});

router.get('/', (req, res) => {
    fs.readFile(cartUrl, 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});

router.post('/', (req, res) => {
    handler(req, res, 'add', cartUrl);
});

router.put('/:id', (req, res) => {
    handler(req, res, 'change', cartUrl);
});

router.delete('/:id', (req, res) => {
   handler(req, res, 'remove', cartUrl);
});


module.exports = router;
