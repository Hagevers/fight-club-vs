const routes = require("express").Router();
const reg = require("./reg");
routes.get("/", async function (req, res) { 
      res.send(`Reached home!`); 
});
routes.use("/", reg);
console.log('pass router');
module.exports = routes;