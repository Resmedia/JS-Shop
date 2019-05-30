const cart = require("./cart");
const fs = require("fs");

const actions = {
  add: cart.add,
  change: cart.change,
  remove: cart.remove
};

let handler = (req, res, action, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      res.sendStatus(
        404,
        JSON.stringify({ result: 0, text: "Can`t read file" })
      );
    } else {
      let newCart = actions[action](JSON.parse(data), req);
      fs.writeFile(file, newCart, err => {
        if (err) {
          res.send(JSON.stringify({ result: 0, text: "Can`t write file" }));
        } else {
          res.send(JSON.stringify({ result: 1, text: "Success!" }));
        }
      });
    }
  });
};

module.exports = handler;
